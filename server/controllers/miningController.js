const PostRegisterMining = async (req, res, next) => {
    const { nomEntreprise, description, logoEntreprise} = req.body;
  
    try {

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
        // StatusCompt: 1,
        StatusCompt: process.env.STATUS_ATTENTE_VALIDATION,
  
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
      console.log(error);
      res.status(500).json({ error: "Échec de la création de l'utilisateur!!." });
    }
  };