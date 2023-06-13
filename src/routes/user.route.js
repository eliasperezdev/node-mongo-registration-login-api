import express from "express"
import checkAuth from "../middleware/checkAuth.js";
import { auth, checkToken, confirmAccount, newPassword, recoverPassword, register } from "../controllers/user.controller.js";
const router = express.Router()

//Creacion, registro y confirmacion de usuarios
router.post("/", register)
router.post("/login", auth)
router.get("/check/:token", confirmAccount)
router.post("/recover-password", recoverPassword)
router.get("/recover-password/:token", checkToken)
router.post("/recover-password/:token", newPassword)


export default router