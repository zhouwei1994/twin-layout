
// 构造函数
export default function(options) {
    this.options = options;
    let _this = this;
    this.create = function () { 
        if (localStorage.getItem("twinLayout") == "classic") {
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
                res.default.bind(_this)("http://8.129.186.35/api/common/v1/wallpaper");
            });
        }
    }
}