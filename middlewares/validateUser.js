import UserEnum from "../enums/dbSchemas/User.enum.js";
import validate from "../helpers/dataValidator.js";
import isValidEmail from "../helpers/emailValidator.js";
import checkStrongPassword from "../helpers/passwordValidator.js";
const userArr = Object.entries(UserEnum)

export default function (req, res, next) {
    const { errors, valid_data } = validate(req.body, userArr)

    if (!!errors.length) {
        return res.status(400).json({ 
            msg: 'User is not Data compatible', 
            errors 
        })
    } 
    
    if (!isValidEmail(valid_data.email)) {
        return res.status(400).json({ 
            msg: 'Email is not valid',
            email: valid_data.email
        })
    } 

    const pass = checkStrongPassword(valid_data.password)
    if (!pass.isStrong) {
        return res.status(400).json({ 
            msg: 'Password is not strong',
            missing: pass.missing
        })
    }

    req.body = valid_data
    next();
}