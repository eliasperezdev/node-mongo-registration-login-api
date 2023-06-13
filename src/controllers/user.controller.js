import { registerEmail } from "../helpers/emails";
import generateId from "../helpers/generateId";
import generateJWT from "../helpers/generateJWT";
import User from "../models/User";

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
    const { email, password} = req.body
    const user = await User.findOne({email})

    if(!user) {
        const error = new Error("El usuario no existe")
        return res.status(404).json({msg: error.message})
    }
    if(!user.confirm) {
        const error = new Error("La cuenta no fue confirmada")
        return res.status(403).json({msg: error.message})
    }
    if(await user.checkPassword(password)){
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateJWT(user._id)
        })
    } else {
        const error = new Error("El password es incorrecto")
        return res.status(403).json({msg: error.message})
         
    }
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







