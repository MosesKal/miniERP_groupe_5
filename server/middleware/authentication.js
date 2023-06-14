const jwt = require('jsonwebtoken');

const authentication =(req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      res
        .status(200)
        .json({ success: false, message: "Error! Token was not provided." });
    }
    const decodedToken = jwt.verify(token, "secretkeyappearshere");
    // res.status(200).json({
    //   success: true,
    //   data: { userId: decodedToken.userId, email: decodedToken.email },
    // });
    next();
  } catch (e) {
    res.send("Merci de vous authentifier");
  }
};
module.exports = authentication;
