
// 构造函数
export default function(options) {
    this.options = options;
    let _this = this;
    this.create = function () {
        let twinLayout = localStorage.getItem("twinLayout");
        if (twinLayout == "classic" || !twinLayout && options.defaultMode == "classic") {
            require(["./classic.js"], function (res) {
                _this.destroy = res.destroy;
                _this.setUserInfo = res.setUserInfo;
                _this.$router = res.$router;
                res.default.bind(_this)();
            });
        } else {
            require(["./desktop.js"], function (res) {
                _this.destroy = res.destroy;
                _this.setUserInfo = res.setUserInfo;
                _this.$router = res.$router;
                res.default.bind(_this)(process.env.VUE_APP_BASE_API + "/common/v1/wallpaper");
            });
        }
    }
}