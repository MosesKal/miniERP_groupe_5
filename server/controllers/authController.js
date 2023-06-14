const db = require("../models/");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const user = require("../models/user");

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
    res.status(400).send();
    console.log("Erreur lors de la connexion");
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

  const exists = await db.User.findOne({ where: { email: `${email}` } });

  if (exists) {
    res.send("Exist");
    return;
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      console.error(err);
      res.send("Error");
      return;
    }
    bcrypt.hash(`${password}`, salt, (err, hash) => {
      if (err) {
        console.error(err);
        res.send("Error");
        return;
      }

      db.User.create({
        prenom: `${prenom}`,
        nom: `${nom}`,
        email: `${email}`,
        telephone: `${telephone}`,
        password: hash,
      })
        .then(() => {
          console.log("Admin user created successfully.");
          res.send("User created successfully");
        })
        .catch((err) => {
          console.error("Failed to create admin user:", err);
          res.send("Failed to create admin user");
        });
    });
  });
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
