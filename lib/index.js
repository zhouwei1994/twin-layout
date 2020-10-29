
// 构造函数
export default function(options) {
    this.options = options;
    let _this = this;
    this.create = function (callback) {
        let twinLayout = localStorage.getItem("twinLayout");
        if (twinLayout == "classic" || !twinLayout && options.defaultMode == "classic") {
            require(["./classic.js"], function (res) {
                _this.destroy = res.destroy;
                _this.setUserInfo = res.setUserInfo;
                _this.$router = res.$router;
                res.default.bind(_this)();
                setTimeout(function () {
                    callback && callback();
                });
            });
        } else {
            require(["./desktop.js"], function (res) {
                _this.destroy = res.destroy;
                _this.setUserInfo = res.setUserInfo;
                _this.$router = res.$router;
                res.default.bind(_this)("https://twin-ui.com/api/common/v1/wallpaper");
                setTimeout(function () {
                    callback && callback();
                });
            });
        }
    }
}