const { promisify } = require("util");

const { welcome, tplMap } = require("./contants.js");
const { log } = require("./util");
const { clone } = require("./download");
const figlet = promisify(require("figlet"));
const clear = require("clear");
const chalk = require("chalk");
const ora = require("ora");
// 使用指定的命令行参数创建新进程
const spawn = async (...args) => {
  // 跨平台的子进程，可以统一命令的调用
  const spawn = require("cross-spawn");
  return new Promise(resolve => {
    const workerProcess = spawn(...args);
    // 将子进程的输出流和错误流添加到主进程中进行显示
    workerProcess.stdout.pipe(process.stdout);
    workerProcess.stderr.pipe(process.stderr);
    // 结束
    workerProcess.on("close", () => {
      resolve();
    });
  });
};
module.exports = async (templateName, projectName) => {
  // 清屏
  clear();
  // 获取欢迎文字code
  const text = await figlet(welcome);
  // 输出欢迎文字code
  log(text);
  log(`创建项目 ${projectName}`);
  // 拉取模版
  const tpl = tplMap[templateName] || tplMap["default"];
  await clone(tpl.repository, projectName);
  // 安装依赖
  console.log(" ");
  const spiner = ora(`install...`);
  spiner.start();
  await spawn("npm", ["install"], { cwd: `./${projectName}` });
  // 安装完成，清屏显示说明
  clear();
  spiner.succeed("install complete");
  console.log(
    chalk.green(`

To get Start:
===========================
cd ${projectName}
npm run serve
===========================
  `)
  );
};
