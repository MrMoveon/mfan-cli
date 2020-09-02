const chalk = require("chalk");
/**
 * 输出不同颜色文字
 * @param {*} text
 * @param {*} color
 */
const log = (text, color = "green") => {
  console.log(chalk[color](text));
};

module.exports = {
  log
};
