(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/new/new"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Documents\\HBuilderProjects\\kantu\\pages\\new\\new.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Documents/HBuilderProjects/kantu/pages/new/new.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =


















{
  data: function data() {
    return {
      refreshing: false,
      providerList: [],
      list: [],
      fetchPageNum: 1 };

  },
  onLoad: function onLoad() {var _this = this;
    this.getData();
    uni.getProvider({
      service: "share",
      success: function success(e) {
        var data = [];
        for (var i = 0; i < e.provider.length; i++) {
          switch (e.provider[i]) {
            case 'weixin':
              data.push({
                name: '分享到微信好友',
                id: 'weixin' });

              data.push({
                name: '分享到微信朋友圈',
                id: 'weixin',
                type: 'WXSenceTimeline' });

              break;
            case 'qq':
              data.push({
                name: '分享到QQ',
                id: 'qq' });

              break;
            default:
              break;}

        }
        _this.providerList = data;
      },
      fail: function fail(e) {
        console.log("获取登录通道失败", e);
      } });

  },
  onReachBottom: function onReachBottom() {
    console.log("滑动到页面底部");
    this.getData();
  },
  onPullDownRefresh: function onPullDownRefresh() {
    console.log("下拉刷新");
    this.refreshing = true;
    this.getData();
  },
  methods: {
    getData: function getData() {var _this2 = this;
      uni.request({
        url: this.$serverUrl + '/public/listBaseAlbum',

        data: {
          currentPage: this.refreshing ? 1 : this.fetchPageNum,
          pageSizes: 5 },

        header: { 'content-type': 'application/json' },
        success: function success(ret) {
          console.log("data", ret);
          if (ret.statusCode !== 200) {
            console.log("失败!");
          } else {
            if (_this2.refreshing && ret.data[0].id === _this2.list[0].id) {
              uni.showToast({
                title: "已经最新",
                icon: "none" });

              _this2.refreshing = false;
              uni.stopPullDownRefresh();
              return;
            }
            if (_this2.refreshing) {
              _this2.refreshing = false;
              uni.stopPullDownRefresh();
              _this2.list = ret.data;
              _this2.fetchPageNum = 2;
            } else {
              _this2.list = _this2.list.concat(ret.data);
              _this2.fetchPageNum += 1;
            }
          }
        } });

    },
    goDetail: function goDetail(e) {
      uni.navigateTo({
        url: "../detail/detail?data=" + encodeURIComponent(JSON.stringify(e)) });

    },
    share: function share(e) {var _this3 = this;
      if (this.providerList.length === 0) {
        uni.showModal({
          title: "当前环境无分享渠道!",
          showCancel: false });

        return;
      }
      var itemList = this.providerList.map(function (value) {
        return value.name;
      });
      uni.showActionSheet({
        itemList: itemList,
        success: function success(res) {
          uni.share({
            provider: _this3.providerList[res.tapIndex].id,
            scene: _this3.providerList[res.tapIndex].type && _this3.providerList[res.tapIndex].type === 'WXSenceTimeline' ? 'WXSenceTimeline' : "WXSceneSession",
            type: 0,
            title: "uni-app模版",
            summary: e.title,
            imageUrl: e.img_src,
            href: "https://uniapp.dcloud.io",
            success: function success(res) {
              console.log("success:" + JSON.stringify(res));
            },
            fail: function fail(e) {
              uni.showModal({
                content: e.errMsg,
                showCancel: false });

            } });

        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Documents\\HBuilderProjects\\kantu\\pages\\new\\new.vue?vue&type=template&id=f55cc0f0&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Documents/HBuilderProjects/kantu/pages/new/new.vue?vue&type=template&id=f55cc0f0& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: "index" },
    [
      _vm._l(_vm.list, function(item, index) {
        return _c("block", { key: index }, [
          _c(
            "view",
            {
              staticClass: "card",
              attrs: { eventid: "6d79be6f-1-" + index },
              on: {
                click: function($event) {
                  _vm.goDetail(item)
                }
              }
            },
            [
              _c("image", {
                staticClass: "card-img",
                attrs: { src: item.img_src, mode: "aspectFill" }
              }),
              _c("text", { staticClass: "card-num-view" }, [
                _vm._v(_vm._s(item.img_num) + "P")
              ]),
              _c("view", { staticClass: "card-bottm row" }, [
                _c("view", { staticClass: "car-title-view row" }, [
                  _c("text", { staticClass: "card-title" }, [
                    _vm._v(_vm._s(item.title))
                  ])
                ]),
                _c("view", {
                  staticClass: "card-share-view",
                  attrs: { eventid: "6d79be6f-0-" + index },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      _vm.share(item)
                    }
                  }
                })
              ])
            ]
          )
        ])
      }),
      _c("text", { staticClass: "loadMore" }, [_vm._v("加载中...")])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "C:\\Users\\Administrator\\Documents\\HBuilderProjects\\kantu\\main.js?{\"page\":\"pages%2Fnew%2Fnew\"}":
/*!****************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/kantu/main.js?{"page":"pages%2Fnew%2Fnew"} ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "C:\\Users\\Administrator\\Documents\\HBuilderProjects\\kantu\\pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _new = _interopRequireDefault(__webpack_require__(/*! ./pages/new/new.vue */ "C:\\Users\\Administrator\\Documents\\HBuilderProjects\\kantu\\pages\\new\\new.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_new.default));

/***/ }),

/***/ "C:\\Users\\Administrator\\Documents\\HBuilderProjects\\kantu\\pages\\new\\new.vue":
/*!*********************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/kantu/pages/new/new.vue ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _new_vue_vue_type_template_id_f55cc0f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new.vue?vue&type=template&id=f55cc0f0& */ "C:\\Users\\Administrator\\Documents\\HBuilderProjects\\kantu\\pages\\new\\new.vue?vue&type=template&id=f55cc0f0&");
/* harmony import */ var _new_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new.vue?vue&type=script&lang=js& */ "C:\\Users\\Administrator\\Documents\\HBuilderProjects\\kantu\\pages\\new\\new.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _new_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _new_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _new_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _new_vue_vue_type_template_id_f55cc0f0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _new_vue_vue_type_template_id_f55cc0f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/Administrator/Documents/HBuilderProjects/kantu/pages/new/new.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "C:\\Users\\Administrator\\Documents\\HBuilderProjects\\kantu\\pages\\new\\new.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/kantu/pages/new/new.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./new.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Documents\\HBuilderProjects\\kantu\\pages\\new\\new.vue?vue&type=script&lang=js&");
/* harmony import */ var _D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\Administrator\\Documents\\HBuilderProjects\\kantu\\pages\\new\\new.vue?vue&type=template&id=f55cc0f0&":
/*!****************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/kantu/pages/new/new.vue?vue&type=template&id=f55cc0f0& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_template_id_f55cc0f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./new.vue?vue&type=template&id=f55cc0f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Documents\\HBuilderProjects\\kantu\\pages\\new\\new.vue?vue&type=template&id=f55cc0f0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_template_id_f55cc0f0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_1_9_1_20190415_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_template_id_f55cc0f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["C:\\Users\\Administrator\\Documents\\HBuilderProjects\\kantu\\main.js?{\"page\":\"pages%2Fnew%2Fnew\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/new/new.js.map