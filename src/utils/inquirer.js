const inquirer = require("inquirer");
const { tplMap } = require("./contants.js");
const chooseTpl = async () => {
  const choices = Object.keys(tplMap);
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "tpl",
      message: "请选择您需要的模版?",
      choices: choices
    }
  ]);
  return answers;
};
module.exports = {
  chooseTpl
};
