import { registerEmail } from "../helpers/emails";
import generateId from "../helpers/generateId";
import User from "../models/User";
import { validateEmail, validateName, validatePassword } from "../validators/User/user.Validator";


const register =async (req,res) => {
    const {name, email, password} = req.body

    try {
        const user = new User({
            name,
            email,
            password
        })
        user.token = generateId()

        const newUser = await user.save()
        
        registerEmail({
            email: user.email,
            name: user.name,
            token: user.token
        })   
        
         res.status(200).json({ msg: "Usuario creado correctamente, Revisa tu email para confirmar"})

    } catch (error) {
        console.log(error);
    }

}

const auth =async ( ) => {

}

const authMe =async ( ) => {

}

const confirmAccount =async ( ) => {

}

const recoverPassword =async ( ) => {

}

const checkToken =async ( ) => {

}

const newPassword =async ( ) => {

}

export {
    register,
    auth,
    authMe,
    confirmAccount,
    recoverPassword,
    checkToken,
    newPassword
}







