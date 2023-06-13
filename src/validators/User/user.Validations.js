
const validateName = (name) => {
    if (!name || name.trim().length === 0) {
      return 'El nombre es obligatorio';
    }
  
    return null;
  };
  
  const validatePassword = (password) => {
    if (!password || password.length < 8) {
      return 'La contraseña debe tener al menos 8 caracteres';
    }
  
    return null;
  };
  
  const validateEmail = (email) => {
    if (!email || !validator.isEmail(email)) {
      return 'El correo electrónico no es válido';
    }
  
    return null;
  };

export {
    validateEmail,
    validateName, 
    validatePassword
}