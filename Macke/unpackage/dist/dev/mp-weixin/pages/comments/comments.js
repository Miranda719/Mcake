"use strict";
var common_vendor = require("../../common/vendor.js");
var common_js_requestHttp = require("../../common/js/requestHttp.js");
const _sfc_main = {
  data() {
    return {
      comments: [],
      twoId: "",
      type: 0,
      page: 1
    };
  },
  methods: {
    async getComments(twoId, type, page) {
      let result = await common_js_requestHttp.GetRequest("/api/comment/load?twoId=" + twoId + "&type=" + type + "&page=" + page + "&count=10");
      result.code === 0 ? this.comments = [...this.comments, ...result.data.data] : "";
      console.log(this.comments);
    },
    goType(data) {
      this.type = data;
      this.comments = [];
      this.getComments(this.twoId, this.type, this.page);
    }
  },
  onLoad(options) {
    this.twoId = options.twoId;
    this.getComments(this.twoId, this.type, this.page);
  },
  onReachBottom() {
    this.page++;
    this.getComments(this.twoId, this.type, this.page);
  },
  onPullDownRefresh() {
    this.comments = [];
    this.type = 0;
    this.page = 1;
    this.getComments(this.twoId, this.type, this.page).then(() => {
      common_vendor.index.stopPullDownRefresh();
    });
  }
};
if (!Array) {
  const _easycom_comments2 = common_vendor.resolveComponent("comments");
  _easycom_comments2();
}
const _easycom_comments = () => "../../components/comments/comments.js";
if (!Math) {
  _easycom_comments();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.goType),
    b: common_vendor.p({
      twoId: $data.twoId,
      comments: $data.comments
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/98443/\u5170\u654F\u5B66\u4E60/MCAKE/Macke/pages/comments/comments.vue"]]);
wx.createPage(MiniProgramPage);
