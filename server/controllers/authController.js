const db = require("../models/");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const PostLogin = async (req, res, next) => {
  let token;
  let roleUser;
  const { email, password } = req.body;
  try {
    const user = await db.User.findOne({ where: { email } });

    if (!user) {
      throw new Error("Erreur, pas possible de se connecter!");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Erreur, pas possible de se connecter");
    }

    try {
      token = jwt.sign(
        { userId: user.id, email: user.email },
        "secretkeyappearshere",
        { expiresIn: "1h" }
      );
    } catch (err) {
      throw new Error("Erreur, pas possible de se connecter");
    }
    roleUser = user.role;
  } catch (e) {
    console.log("Erreur lors de la connexion");
    return res.status(400).send();
  }
  res.status(200).json({
    success: true,
    data: {
      roles: roleUser,
      accessToken: token,
    },
  });
};

const PostLogout = async (req, res, next) => {
  async (req, res, next) => {
    try {
      re;
    } catch (e) {}
  };
};

const PostRegister = async (req, res, next) => {
  const { email, password, prenom, nom, telephone } = req.body;

  try {
    // Check if the email already exists
    const userExists = await db.User.findOne({ where: { email: email } });
    if (userExists) {
      return res
        .status(400)
        .json({
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
    });

    console.log("Admin user created successfully.");
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

    console.error("Failed to create admin user:", error);
    res.status(500).json({ error: "Échec de la création de l'utilisateur." });
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
