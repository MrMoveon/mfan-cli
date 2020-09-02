const { promisify } = require("util");
const ora = require("ora");
const download = promisify(require("download-git-repo"));
module.exports.clone = async (repo, projectName) => {
  // 创建loading
  console.log(" ");
  const process = ora(`🚀  fetching  ${repo}...`);

  try {
    // 开启旋转
    process.start();
    // 下载模版
    await download(repo, projectName);
    // 结束
    process.succeed();
    console.log(" ");
  } catch (error) {
    // 失败
    process.fail(`😭  fetch fail`);
    console.log(" ");
  }
};
