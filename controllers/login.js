const utils = require("./utils");
const upload = utils.upload();
const uploadFields = upload.fields();

const User = require("../models/user");

const login = async (req, res) => {
    try {
        const user = await User.find({email: req.body.email});
        if(user.length > 0 && user.password === req.body.password) {

        } else {
            res.json({message: "Неверные учетные данные "})
        }
    } catch(error) {
        res.json({message: error.message})
    }
}

module.exports = {login, uploadFields}