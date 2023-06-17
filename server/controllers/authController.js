const db = require("../models/");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const PostLogin = async (req, res, next) => {
  let token;
  let roleUser;
  let { email, password } = req.body;

  email = email.trim();

  try {
    const user = await db.User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Erreur, impossible de se connecter !",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Erreur, impossible de se connecter !",
      });
    }

    try {
      token = jwt.sign(
        { userId: user.id, email: user.email },
        "secretkeyappearshere",
        { expiresIn: "1h" }
      );

      // Sauvegarde du token dans la colonne "Tokens"
      user.Tokens = token;
      await user.save();
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "Erreur, impossible de se connecter !",
      });
    }

    roleUser = user.role;
  } catch (e) {
    console.log("Erreur lors de la connexion");
    return res
      .status(500)
      .json({ success: false, message: "Erreur lors de la connexion" });
  }

  res.status(200).json({
    success: true,
    data: {
      roles: roleUser,
      accessToken: token,
    },
  });
};

const PostLogout = async (req, res) => {
  const { user } = req;
  try {
    user.Tokens = null;
    await user.save();
    res.status(200).json({ message: "Déconnexion réussie" });
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur lors de la déconnexion" });
  }
};

const PostRegister = async (req, res, next) => {
  const { email, password, prenom, nom, telephone } = req.body;
  console.log("------------"+password)

  try {
    // Check if the email already exists
    const userExists = await db.User.findOne({ where: { email: email } });
    if (userExists) {
      return res.status(400).json({
        error: "Cet email est déjà utilisé par un autre utilisateur.",
      });
    }
    
    // Generate the password hash
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Create the user in the database
    const newUser = await db.User.create({
      prenom: prenom,
      nom: nom,
      email: email,
      telephone: telephone,
      password: hashedPassword,
      statusCompt : process.env.STATUS_ATTENTE_VALIDATION
    });

    res
      .status(201)
      .json({ message: "Utilisateur créé avec succès.", user: newUser });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      // Récupérer les erreurs de validation
      const validationErrors = error.errors.map((err) => ({
        field: err.path,
        message: err.message,
      }));

      return res.status(400).json({ errors: validationErrors });
    }
    console.log(error)
    res.status(500).json({ error: "Échec de la création de l'utilisateur!!." });
  }
};

const PostForgotPassword = async (req, res, next) => {};

const PostResetPassword = async (req, res, next) => {};

module.exports = {
  PostLogin,
  PostLogout,
  PostRegister,
  PostForgotPassword,
  PostResetPassword,
};
