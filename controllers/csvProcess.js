const utils = require("./utils");
const spawn = require("child_process").spawn;

const upload = utils.upload();
const uploadFields = upload.fields([{ name: "csvFile", maxCount: 3 }]);
const csvProcess = async (req, res) => {
  try {
    const pathToCsv = "../files/" + req.files.csvFile[0].filename;
    const pyProgram = spawn("python3", ["./python/main.py", pathToCsv]);
    pyProgram.stdout.on("data", (data) => {
      console.log(data.toString());
    });
    pyProgram.stderr.on("data", (data) => {
      console.log(data.toString());
    });
    res.json([
      {
        url: "http://localhost:3001/static/1633269705593-544194901-annual-enterprise-survey-2020-financial-year-provisional-csv.csv",
        filename: "annual-enterprise-survey-2022-financial-year-provisional-csv.csv"
      },
      {
        url: "http://localhost:3001/static/1633270044930-429008938-annual-enterprise-survey-2020-financial-year-provisional-csv.csv",
        filename: "annual-enterprise-survey-2021-financial-year-provisional-csv.csv"
      },
      {
        url: "http://localhost:3001/static/1633270066740-286091807-annual-enterprise-survey-2020-financial-year-provisional-csv.csv",
        filename: "annual-enterprise-survey-2020-financial-year-provisional-csv.csv"
      },
    ]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = { csvProcess, uploadFields };
