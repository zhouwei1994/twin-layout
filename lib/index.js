
// 构造函数
export default function(options) {
    this.options = options;
    let _this = this;
    let twinLayout = localStorage.getItem("twinLayout");
    let twinObj = void 0;
    if (twinLayout == "classic" || !twinLayout && options.defaultMode == "classic") {
        twinObj = require("./classic.js");
    } else {
        twinObj = require("./desktop.js");
    }
    twinObj.$init.bind(_this)();
    _this.$router = twinObj.$router;
    _this.setUserInfo = twinObj.setUserInfo;
    this.create = function (callback) {
        twinObj.default.bind(_this)("https://twin-ui.com/api/common/v1/wallpaper");
        setTimeout(function () { 
            callback && callback();
        }, 100);
    }
}