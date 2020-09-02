const { name, version } = require("../../package");
/**
 * mfan-cli 提供的模版地址
 */
const tplMap = {
  "gulp-tpl": {
    url: "",
    repository: "github:MrMoveon/mfan-gulp-pages",
    desc: "一个基于gulp的多页面模版，集成scss,swig,pxtorem,代码压缩,添加版本号"
  },
  "vue-admin": {
    url: "",
    repository: "github:MrMoveon/mfan-gulp-pages",
    desc: "一个基于vue+element的后台管理脚手架"
  },
  "vue-mobile": {
    url: "",
    repository: "github:MrMoveon/mfan-gulp-pages",
    desc: "一个基于vue+vant的单页面脚手架"
  },
  default: {
    url: "",
    repository: "github:MrMoveon/mfan-gulp-pages",
    desc: "一个基于gulp的多页面模版，集成scss,swig,pxtorem,代码压缩,添加版本号"
  }
};
module.exports = {
  name,
  version,
  welcome: "mfan welcome!",
  tplMap
};
