const chalk = require("chalk");
const { tplMap } = require("./contants");
/**
 * 输出不同颜色文字
 * @param {*} text
 * @param {*} color
 */
const log = (text, color = "green") => {
  console.log(chalk[color](text));
};
/**
 * 断言是否存在
 * @param {*} exp
 * @param {*} msg
 */
const assert = (exp, msg) => {
  if (!exp) {
    console.log(chalk.red(msg || "不能为空"));
    return false;
  }
  return true;
};
/**
 * 检查模版
 * @param {*} templateName
 * @param {*} msg
 */
const checkTplName = (templateName, msg) => {
  let keys = Object.keys(tplMap);
  let includes = keys.includes(templateName);
  assert(includes, msg || "模版不存在,请输入mfan-cli list查看模版列表");
  return includes;
};
module.exports = {
  log,
  assert,
  checkTplName
};
