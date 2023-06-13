import jsonwebtoken from "jsonwebtoken"
//process.env.JWT_ SECRET
const generateJWT = (id) => {
    return jsonwebtoken.sign({
        id
    }, process.env.JWT_SECRET,{
        expiresIn: "30d"
    })
}

export default generateJWT