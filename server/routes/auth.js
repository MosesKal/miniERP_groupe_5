const express = require("express");
const db = require("../models/");
const jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const user = require("../models/user");

const route = express.Router();

route.post("/register", async (req, res, next) => {
  const { email, password, prenom, nom, telephone } = req.body;
  console.log(email);

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
});

route.get("/users", async (req, res, next) => {
  try {
    const users = await db.User.findAll({});
    res.send(users);
  } catch (e) {
    res.status(500).send(e);
  }
});

route.post("/users/login", async (req, res, next) => {
  let token;
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
  } catch (e) {
    res.status(400).send();
    console.log("Erreur lors de la connexion");
  }

  res.status(200).json({
    success: true,
    data: {
      userId: user.id,
      email: user.email,
      token: token,
    },
  });
});

route.get("/users/:id", async (req, res, next) => {
  const userId = req.params.id;

  const user = await db.User.findByPk(userId);

  if (user === null) {
    res.status(500);
  } else {
    res.send(user);
  }
});

route.patch("/users/:id", async (req, res, next) => {
  const userId = req.params.id;

  await db.User.update(req.body, {
    where: {
      id: userId,
    },
  });
  res.send("Updated!");
});

route.delete("/users/:id", async (req, res, next) => {
  const userId = req.params.id;

  await db.User.destroy({
    where: {
      id: userId,
    },
  });
  res.send("Deleted!");
});

route.post("/Login", async (req, res, next) => {
  console.log("vous arrivez a contacter le back__________");
  res.send(req.body);
});

route.get("/accessRessource", (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    res
      .status(200)
      .json({ success: false, message: "Error! Token was not provided." });
  }
  const decodedToken = jwt.verify(token, "secretkeyappearshere");
  res.status(200).json({
    success: true,
    data: { userId: decodedToken.userId, email: decodedToken.email },
  });
});

module.exports = route;
