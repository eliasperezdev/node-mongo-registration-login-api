import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  resetToken: { type: String },
  confirm: {type: Boolean}
});

userSchema.pre('save', async function(next) {

  if(!this.isModified('password')){
      next()
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
}) 

userSchema.methods.checkPassword = async function(FormPassword) {
  return await bcrypt.compare(FormPassword, this.password)
}

const User = mongoose.model('User', userSchema);

export default User