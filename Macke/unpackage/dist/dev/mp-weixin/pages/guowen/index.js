"use strict";
var common_js_requestHttp = require("../../common/js/requestHttp.js");
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  created() {
    this.GetData();
  },
  methods: {
    async GetData() {
      let result = await common_js_requestHttp.GetRequest("/api/goods/load?cityId=110&bid=11&tid=0&fid=0&page=1&count=10");
      console.log(result, "111111111");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/98443/\u5170\u654F\u5B66\u4E60/MCAKE/Macke/pages/guowen/index.vue"]]);
wx.createPage(MiniProgramPage);
