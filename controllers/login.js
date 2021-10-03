const utils = require("./utils");
const upload = utils.upload();
const uploadFields = upload.fields();

const login = async (req, res) => {
    try {
        console.log(req.body);
        res.json({message: "Server recieved data from client!!!"})
    } catch(error) {
        res.json({message: error.message})
    }
}

module.exports = {login, uploadFields}