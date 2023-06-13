import express from "express"
import checkAuth from "../middleware/checkAuth.js";
import { auth, checkToken, confirmAccount, newPassword, recoverPassword, register } from "../controllers/user.controller.js";
import { validateUserData } from "../validators/User/user.Validator.js";
const router = express.Router()

//Creacion, registro y confirmacion de usuarios
router.post("/",validateUserData,register)
router.post("/login", auth)
router.get("/check/:token", confirmAccount)
router.post("/recover-password", recoverPassword)
router.get("/recover-password/:token", checkToken)
router.post("/recover-password/:token", newPassword)


export default router