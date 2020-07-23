// Models
const User = require("../models/User");

const userCtrl = {};

// Agrega un usuario
userCtrl.registrerUser = async (req, res) => {
  let errors = [];
  const { name, email, password } = req.body;

  // Look for email coincidence
  const emailUser = await User.findOne({ email: email });
  if (emailUser) {
    res.send("error");
  } else {
    // Saving a New User
    const newUser = new User({ name, email, password });
    newUser.password = await newUser.encryptPassword(password);
    await newUser.save();
    res.send("se creo el usuario")
    console.log("se creo el usuario");
  }
};

// Agrega un usuario
userCtrl.login = async (req, res) => {
  const { email, password } = req.body;
  // Match Email's User
  const user = await User.findOne({ email: email });
  if (!user) {
    res.send("Usuario no esncontrado");
  } else {
    // Match Password's User
    const match = await user.matchPassword(password);
    if (match) {
      res.send("login")
    } else {
      res.send("Contraseña Incorrecta");
    }
  }
};

module.exports = userCtrl;
