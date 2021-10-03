const utils = require("./utils");
const spawn = require("child_process").spawn;

const upload = utils.upload();
const uploadFields = upload.fields([
    {name: "csvFile", maxCount: 3}
])
const csvProcess = async (req, res) => {
    try {   
        const pathToCsv = "../files/" + req.files.csvFile[0].filename;
        const pyProgram = spawn('py', ['./python/main.py', pathToCsv])
        pyProgram.stdout.on('data', (data) => {
            console.log(data.toString());
        })
        pyProgram.stderr.on('data', (data) => {
            console.log(data.toString());
        })
        res.json({message: "Works!!!!!!!!!!!!!!"})
    } catch(error) {
        res.json({message: error.message})
    }
}

module.exports = {csvProcess, uploadFields}