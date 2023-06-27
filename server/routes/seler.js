const express = require("express");
const multer = require('multer');
const upload = multer({ dest: "./uploads" });

/** middleware */
const { verifySessionToken } = require("../middleware/authentication");

/**express */
const route = express.Router();

/**Routes  profil utilisateur*/
app.get("/todos/:token", async (req, res) => {
  // try {
  //   const { id } = req.params;
  //   const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
  //     id,
  //   ]);
  //   res.json(todo.rows[0]);
  // } catch (err) {
  //   console.error(err.message);
  // }
});

route.get("/profil", verifySessionToken, () => {
  const { user } = req;
  res.json({ user });
});
/**Routes demande de cotations */

route.get("/cotations");
route.post("/offre_cotation");

/** Routes Articles */
route.get("/article", (req, res, next) => {});
route.get("/articles", (req, res, next) => {});

/**Upload image */

route.post("/upload_image", upload.single('image'), (req, res)=>{
  const imageFile = req.file;
  res.json({message: 'Image uploaded successfully'})
});

module.exports = route;
