import User from "../../models/User";

const validateUserData = async ( req, res) => {
  const {name, email, password} = req.body

  const nameError = validateName(name);
  const passwordError = validatePassword(password);
  const emailError = validateEmail(email);

  if (nameError) {
    return res.status(400).json({ error: nameError });
  }

  if (passwordError) {
    return res.status(400).json({ error: passwordError });
  }

  if (emailError) {
    return res.status(400).json({ error: emailError });
  }

  const existUser = await User.findOne({
      email
  })

  if(existUser) {
      const error = new Error("Usuario ya registrado")
      return res.status(400).json({ msg: error.message})
  }

   next();
}