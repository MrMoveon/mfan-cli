const { program } = require("commander");

const { version, tplMap } = require("./utils/contants.js");
const { log, assert, checkTplName } = require("./utils/util");
const chalk = require("chalk");
// 指定cli版本号
program.version(version, "-v, --version", "获取mfan-cli版本号");
// 配置命令
program
  .command("create <template-name> [project-name]")
  .alias("cr")
  .description("拉取github模版创建项目")
  .action((templateName, projectName) => {
    if (!checkTplName(templateName)) {
      return false;
    }
    if (!assert(projectName, `您还没有输入projectName`)) {
      return false;
    }

    require("./utils/create")(templateName, projectName);
  });
program
  .command("list")
  .alias("ls")
  .description("模版列表")
  .action(() => {
    for (let key in tplMap) {
      if (key == "default") return false;
      console.log(
        "  " +
          chalk.yellow("★") +
          "  " +
          chalk.green(key) +
          " - " +
          chalk.green(tplMap[key].desc)
      );
    }
  });
// 解析process.argv命令行传入的参数
program.parse(process.argv);
