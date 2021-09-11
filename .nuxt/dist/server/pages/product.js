exports.ids = [12];
exports.modules = {

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/product.vue?vue&type=template&id=1115e6c0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container",style:({ height: _vm.height + 'px' })},[_c('NavDom',{attrs:{"current":1,"white":"","mask":"","menu":_vm.menu}}),_vm._ssrNode(" "),_c('Logo',{attrs:{"dark":""}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"content\" data-v-1115e6c0>","</div>",[_vm._ssrNode("<div class=\"nav\" data-v-1115e6c0><div class=\"inside\" data-v-1115e6c0>"+(_vm._ssrList((_vm.list),function(item,index){return ("<p"+(_vm._ssrClass(null,[{ 'active': _vm.current === index }]))+" data-v-1115e6c0>"+_vm._ssrEscape("\n                    "+_vm._s(item.Name)+"\n                    ")+"<span data-v-1115e6c0></span> "+((item.Children.length > 0 && _vm.showChildren == index)?("<section class=\"_list\" data-v-1115e6c0>"+(_vm._ssrList((item.Children),function(c,i){return ("<section"+(_vm._ssrClass(null,['_list_box', { active: _vm.current2 == i }]))+" data-v-1115e6c0>"+_vm._ssrEscape("\n                            "+_vm._s(c.Name)+"\n                        ")+"</section>")}))+"</section>"):"<!---->")+"</p>")}))+"</div></div> "),_vm._ssrNode("<div class=\"table\" data-v-1115e6c0>","</div>",[_vm._ssrNode("<div class=\"inside\" data-v-1115e6c0>","</div>",_vm._l((_vm.productsList),function(item,index){return _c('Box',{key:index,attrs:{"info":item,"animate":_vm.getAnimate(index),"bg":_vm.getbgColor(index),"color":_vm.getColor(index)}})}),1)])],2),_vm._ssrNode(" "),_c('FooterDom',{attrs:{"item":_vm.result}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/product.vue?vue&type=template&id=1115e6c0&scoped=true&

// EXTERNAL MODULE: ./self-components/nav.vue + 4 modules
var nav = __webpack_require__(39);

// EXTERNAL MODULE: ./self-components/logo.vue + 4 modules
var logo = __webpack_require__(45);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./self-components/product-box.vue?vue&type=template&id=67cbc76e&scoped=true&
var product_boxvue_type_template_id_67cbc76e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['box', { 'big': _vm.enter }],on:{"mouseover":function($event){return _vm.handleChangeStyle(true)},"mouseleave":function($event){return _vm.handleChangeStyle(false)}}},[_c('nuxt-link',{attrs:{"to":("/productDetail/" + (_vm.info.ProductID))}},[_c('div',{staticClass:"arc-wrapper"},[_c('div',{ref:"box",staticClass:"arc",style:({ 'background-color': _vm.bg })})]),_vm._v(" "),_c('div',{staticClass:"content"},[_c('p',{class:['title', { 'white': _vm.bg }]},[_vm._v(_vm._s(_vm.info.Title))]),_vm._v(" "),_c('p',{class:['name', { 'white': _vm.bg }]},[_vm._v(_vm._s(_vm.info.SubTitle))]),_vm._v(" "),_c('p',{staticClass:"type",style:({ color: _vm.color })},[_vm._v(_vm._s(_vm.info.Model))]),_vm._v(" "),_c('img',{class:['img', { 'animate1': _vm.animate == 1, 'animate2': _vm.animate == 2 }],attrs:{"src":_vm.info.Cover}})])])],1)}
var product_boxvue_type_template_id_67cbc76e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./self-components/product-box.vue?vue&type=template&id=67cbc76e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./self-components/product-box.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var product_boxvue_type_script_lang_js_ = ({
  name: 'COMPONENT_PRODUCT_BOX',
  props: {
    bg: {
      type: String | null,
      default: null
    },
    animate: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    info: {
      type: Object,
      default: function () {
        return {};
      }
    }
  },

  data() {
    return {
      enter: false
    };
  },

  created() {
    console.log(this.info);
  },

  methods: {
    handleChangeStyle(type) {
      this.enter = type;
    },

    handleToDetail() {}

  }
});
// CONCATENATED MODULE: ./self-components/product-box.vue?vue&type=script&lang=js&
 /* harmony default export */ var self_components_product_boxvue_type_script_lang_js_ = (product_boxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./self-components/product-box.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(73)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  self_components_product_boxvue_type_script_lang_js_,
  product_boxvue_type_template_id_67cbc76e_scoped_true_render,
  product_boxvue_type_template_id_67cbc76e_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "67cbc76e",
  "0893d12a"
  
)

/* harmony default export */ var product_box = (component.exports);
// EXTERNAL MODULE: ./self-components/footer.vue + 4 modules
var footer = __webpack_require__(40);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/product.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var productvue_type_script_lang_js_ = ({
  name: 'PAGE_PRODUCT',
  components: {
    NavDom: nav["a" /* default */],
    Logo: logo["a" /* default */],
    Box: product_box,
    FooterDom: footer["a" /* default */]
  },

  data() {
    return {
      width: 0,
      height: 0,
      current: 0,
      current2: null,
      showChildren: false,
      productsList: []
    };
  },

  head() {
    return {
      title: '举视产品列表',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '举视产品列表'
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: '举视产品列表'
      }]
    };
  },

  async asyncData(app) {
    let result = await app.$axios.get('/init');
    let list = await app.$axios.get('/category');
    let menu = await app.$axios.get('/menus');
    menu = menu.data.data;
    result = result.data.data;
    list = list.data.data;
    return {
      result,
      list,
      menu
    };
  },

  watch: {
    'list': {
      handler: function (val) {
        val[0] && this.getProductInside(val[0].ID);
      },
      immediate: true
    }
  },

  mounted() {
    this.width = document.documentElement.clientWidth;
    this.height = document.documentElement.clientHeight;
  },

  methods: {
    /**
     * 获取背景颜色
     * @param { number } index
     */
    getbgColor(index) {
      switch (index) {
        case 1:
          return '#ABB2BF';

        case 3:
          return '#656E7D';

        case 4:
          return '#656E7D';

        case 7:
          return '#ABB2BF';

        case 10:
          return '#ABB2BF';

        case 12:
          return '#656E7D';

        case 13:
          return '#656E7D';

        case 16:
          return '#ABB2BF';

        default:
          return '';
      }
    },

    /**
     * 获取动画效果
     * @param { number } index
     */
    getAnimate(index) {
      switch (index) {
        case 0:
          return '1';

        case 4:
          return '2';

        case 9:
          return true;

        default:
          return '';
      }
    },

    /**
     * 获取字体颜色
     * @param { number } index
     */
    getColor(index) {
      switch (index) {
        case 1:
          return 'white';

        case 7:
          return 'white';

        case 10:
          return 'white';

        default:
          return '';
      }
    },

    /**
     * 改变当前类目
     * @param { number } index
     */
    handleChange(index) {
      const row = this.list[index];
      this.current = index;
      this.current2 = null;
      this.showChildren = null;

      if (row.Children.length > 0) {
        this.showChildren = index;
        return;
      }

      this.getProductInside(row.ID);
    },

    /**
     * 改变当前类目
     * @param { number } index
     */
    handleSelectChildren(index) {
      this.current2 = index;
      const row = this.list[this.current].Children[index];
      this.getProductInside(row.ID);
    },

    /**
     * 获取产品详情
     * @param { number } ID 产品ID
     */
    getProductInside(ID) {
      this.$axios.get(`/products?categoryID=${ID}`).then(res => {
        let result = res.data.data;
        result.forEach((item, index) => {
          item.Cover = '/api' + item.Cover;
        });
        this.productsList = result;
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/product.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_productvue_type_script_lang_js_ = (productvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/product.vue



function product_injectStyles (context) {
  
  var style0 = __webpack_require__(75)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var product_component = Object(componentNormalizer["a" /* default */])(
  pages_productvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  product_injectStyles,
  "1115e6c0",
  "708f0f8e"
  
)

/* harmony default export */ var product = __webpack_exports__["default"] = (product_component.exports);

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("b03089b4", content, true, context)
};

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("21bc8c28", content, true, context)
};

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("578a3530", content, true, context)
};

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cat-shop@2x.5fad46f.png";

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/jushi-shop@2x.02435f3.png";

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/close@2x.eb1c6e0.png";

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/menu@2x.6c2ecbf.png";

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_style_index_0_id_29ea9ef4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_style_index_0_id_29ea9ef4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_style_index_0_id_29ea9ef4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_style_index_0_id_29ea9ef4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_style_index_0_id_29ea9ef4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".menu[data-v-29ea9ef4]{height:calc(100% - .3rem);z-index:99999;box-sizing:border-box;transition:width .3s ease-in-out;border-left:1px solid hsla(0,0%,100%,.14);background-color:hsla(0,0%,100%,.08)}.menu[data-v-29ea9ef4],.menu .open-menu[data-v-29ea9ef4]{width:.8rem;position:fixed;right:0;top:0}.menu .open-menu[data-v-29ea9ef4]{height:.8rem;z-index:999;cursor:pointer}.menu .background[data-v-29ea9ef4]{width:100%;height:calc(100% - 3.2rem);position:absolute;top:.8rem;left:0}.menu .background .harf[data-v-29ea9ef4]{width:50%;height:100%;display:inline-block;vertical-align:top;box-sizing:border-box}.menu .background .harf .inside[data-v-29ea9ef4]{width:50%;position:absolute;top:50%;transform:translateY(-50%);padding-bottom:5px}.menu .background .aboutUs[data-v-29ea9ef4]{width:50%;height:100%;padding:1.3rem .73rem .3rem .47rem;overflow:auto}.menu .background .aboutUs .title[data-v-29ea9ef4]{font-size:.24rem;color:#656e7d;width:.57rem}.menu .background .aboutUs .sub-title[data-v-29ea9ef4]{font-size:.14rem;color:#656e7d;font-weight:700;margin-top:.1rem;margin-bottom:.2rem}.menu .background .aboutUs .normal[data-v-29ea9ef4]{font-size:.14rem;color:#9ba2ae;line-height:.2rem;margin-bottom:.2rem}.menu .background .aboutUs .indent[data-v-29ea9ef4]{text-indent:2em}.menu .background .aboutUs .call-us[data-v-29ea9ef4]{margin-top:.2rem}.menu .background .aboutUs .phoneNo[data-v-29ea9ef4]{font-size:.22rem;line-height:.22rem;color:#656e7d;margin-top:.2rem;font-weight:700}.menu .background .aboutUs .shop-group[data-v-29ea9ef4]{width:3.52rem;margin-top:.2rem;display:flex;justify-content:space-between}.menu .background .aboutUs .shop-group img[data-v-29ea9ef4]{width:1.6rem;height:.48rem;cursor:pointer}.menu .background .aboutUs .logo-group[data-v-29ea9ef4]{max-width:4.45rem;height:1.85rem;background-color:#ccc;margin-top:.35rem}.menu .background .aboutUs .inside-active-right[data-v-29ea9ef4]{-webkit-animation:right-data-v-29ea9ef4 .6s;animation:right-data-v-29ea9ef4 .6s}.menu .background .aboutUs .inside-active-left[data-v-29ea9ef4]{-webkit-animation:left-data-v-29ea9ef4 .8s;animation:left-data-v-29ea9ef4 .8s}@-webkit-keyframes right-data-v-29ea9ef4{0%{transform:translate(-6rem,-3rem) scale(2)}}@keyframes right-data-v-29ea9ef4{0%{transform:translate(-6rem,-3rem) scale(2)}}@-webkit-keyframes left-data-v-29ea9ef4{0%{transform:translate(6rem,-3rem) scale(2)}}@keyframes left-data-v-29ea9ef4{0%{transform:translate(6rem,-3rem) scale(2)}}.menu .background .menu-button[data-v-29ea9ef4]{width:calc(50% - 1rem);margin-left:.9rem;position:relative;overflow-x:hidden;-webkit-animation:showMenu-data-v-29ea9ef4 .4s;animation:showMenu-data-v-29ea9ef4 .4s}.menu .background .menu-button .block[data-v-29ea9ef4]{cursor:pointer;margin-bottom:.4rem;display:block;color:#656e7d;text-decoration:none}.menu .background .menu-button .block[data-v-29ea9ef4]:last-child{margin-bottom:0}.menu .background .menu-button .block .title[data-v-29ea9ef4]{display:inline-block;font-size:.28rem;color:#656e7d;line-height:.4rem;font-weight:600;position:relative;padding-left:.1rem}.menu .background .menu-button .block .title span[data-v-29ea9ef4]{width:110%;height:.12rem;display:block;position:absolute;left:-100%;bottom:.03rem;opacity:.4;transition:left .3s linear}.menu .background .menu-button .block .transform[data-v-29ea9ef4]{color:#9ba2ae;font-size:.16rem;margin-top:.11rem;line-height:.14rem}.menu .background .menu-button .block:hover .title span[data-v-29ea9ef4]{background-color:#dae0e9;opacity:.6;left:0}.menu .background .menu-button .active span[data-v-29ea9ef4]{background-color:#008ddc!important;left:0!important;opacity:.6!important}@-webkit-keyframes showMenu-data-v-29ea9ef4{0%{opacity:0}70%{opacity:0}to{opacity:1}}@keyframes showMenu-data-v-29ea9ef4{0%{opacity:0}70%{opacity:0}to{opacity:1}}.menu .tool[data-v-29ea9ef4]{position:fixed;bottom:.3rem;right:0}.menu .tool li[data-v-29ea9ef4]{list-style:none}.menu .tool li img[data-v-29ea9ef4]{width:.8rem;height:.8rem;cursor:pointer;transition:all .2s linear}.menu .tool li img[data-v-29ea9ef4]:hover{background-color:hsla(0,0%,100%,.1)}.menu-active[data-v-29ea9ef4]{width:57.29%}.menu-active .background[data-v-29ea9ef4]{height:100%;top:0;background-color:#fff}.mask[data-v-29ea9ef4]{width:100%;height:100%;position:fixed;left:0;top:0;z-index:99997}.white[data-v-29ea9ef4]{background-color:#fff;border-left:1px solid #e8e8e8}.dark[data-v-29ea9ef4]{background-color:rgba(11,11,11,.41)}.product-center[data-v-29ea9ef4]{width:1.19rem;height:1.82rem;position:fixed;right:0;top:50%;margin-top:-.91rem;background-color:rgba(35,52,77,.52);border-radius:1rem 0 0 1rem;cursor:pointer;z-index:100000}.product-center .product-center-name[data-v-29ea9ef4]{width:.22rem;display:inline-block;font-size:.22rem;word-wrap:break-word;color:#fff;position:absolute;top:50%;right:.26rem;transform:translateY(-50%);z-index:99999}.product-center .line[data-v-29ea9ef4]{display:block;width:.28rem;height:.04rem;background-color:#fff;position:absolute;top:50%;margin-top:-.02rem;right:.66rem}@media screen and (max-width:1000px){.aboutUs[data-v-29ea9ef4]{padding-bottom:.5rem}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_ff21159a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_ff21159a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_ff21159a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_ff21159a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_ff21159a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".footer-wrapper[data-v-ff21159a]{width:100%;height:.3rem;background-color:#0b0b0b;position:fixed;bottom:0;left:0;font-size:.14rem;color:#fff;text-align:center;z-index:999999}.footer-wrapper a[data-v-ff21159a]{display:inline-block;margin:0 auto;line-height:.3rem;cursor:pointer;color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./self-components/nav.vue?vue&type=template&id=29ea9ef4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div"+(_vm._ssrClass(null,['menu', { 'menu-active': _vm.active, 'white': _vm.white }]))+" data-v-29ea9ef4>","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass(null,['background']))+" data-v-29ea9ef4>","</div>",[_c('transition',{attrs:{"enter-active-class":"animated bounceIn","leave-active-class":"animated bounceOut"}},[(_vm.active)?_c('img',{staticClass:"open-menu",staticStyle:{"animation-duration":"200ms"},attrs:{"src":__webpack_require__(33)},on:{"click":_vm.handleTrigger}}):_vm._e()]),_vm._ssrNode(" "),_c('transition',{attrs:{"enter-active-class":"animated bounceIn","leave-active-class":"animated bounceOut"}},[(!_vm.active)?_c('img',{staticClass:"open-menu",staticStyle:{"animation-duration":"200ms"},attrs:{"src":__webpack_require__(34)},on:{"click":_vm.handleTrigger}}):_vm._e()]),_vm._ssrNode(" <div class=\"harf aboutUs\""+(_vm._ssrStyle(null,null, { display: (_vm.active) ? '' : 'none' }))+" data-v-29ea9ef4><p class=\"title\" data-v-29ea9ef4>关于我们</p> <p class=\"sub-title\" data-v-29ea9ef4>自 2011 年以来</p> <p class=\"normal\" data-v-29ea9ef4>\n                        举视（上海）新能源科技有限公司成立于新能源汽车发展元年，是一家集新能源汽车充电设备研发、生产、销售、安装服务为一体的综合性科技企业。\n                    </p> <p class=\"normal indent\" data-v-29ea9ef4>\n                        公司秉持“精益求精·敬天爱人”的企业宗旨，坚持在新能源汽车充电领域发展，为客户提供新能源汽车充电设备与充电整体解决方案，服务于充电运营商，为国家新能源新基建计划作服务。迎合党中央新基建号召的发展机遇，迅速成长为新能源汽车充电服务领域的一支生力军。\n                    </p> <p class=\"normal indent\" data-v-29ea9ef4>\n                        公司现有专利25项，其中外观专利18项，结构实用新型专利7项，获得CQC检验认证、CE认证，拥有一个控制软件著作权，一个平台服务软件著作权      \n                    </p> <p class=\"normal\" data-v-29ea9ef4>\n                        举视新能源，期待与您共同进步，共享美好！\n                    </p> <p class=\"normal call-us\" data-v-29ea9ef4>打电话给我们</p> <p class=\"phoneNo\" data-v-29ea9ef4>199-5172-3459</p> <div"+(_vm._ssrClass(null,[{ 'inside-active-left': _vm.active }]))+" data-v-29ea9ef4><div class=\"shop-group\" data-v-29ea9ef4><img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" data-v-29ea9ef4> <img"+(_vm._ssrAttr("src",__webpack_require__(32)))+" data-v-29ea9ef4></div></div> <div"+(_vm._ssrClass(null,[{ 'inside-active-right': _vm.active }]))+" data-v-29ea9ef4><div class=\"logo-group\" data-v-29ea9ef4></div></div></div> "),(_vm.active)?_vm._ssrNode("<div class=\"harf menu-button\" data-v-29ea9ef4>","</div>",[_vm._ssrNode("<div class=\"inside\" data-v-29ea9ef4>","</div>",_vm._l((_vm.menu),function(item,index){return _c('nuxt-link',{key:index,class:['block', { 'active': _vm.currentNum == index }],attrs:{"to":item.routeName,"onclick":"return false"}},[_c('div',{staticClass:"title",on:{"click":function($event){return _vm.handleClick(index, $event)}}},[_vm._v("\n                                "+_vm._s(item.Title)+"\n                                "),_c('span')]),_vm._v(" "),_c('div',{staticClass:"transform"},[_vm._v(_vm._s(item.TitleEn))])])}),1)]):_vm._e()],2)]),_vm._ssrNode(" <div class=\"mask\""+(_vm._ssrStyle(null,null, { display: (_vm.active) ? '' : 'none' }))+" data-v-29ea9ef4></div> <div"+(_vm._ssrStyle(null,null, { display: (_vm.mask) ? '' : 'none' }))+" data-v-29ea9ef4><div class=\"mask dark\""+(_vm._ssrStyle(null,null, { display: (_vm.showDarkMash) ? '' : 'none' }))+" data-v-29ea9ef4></div></div> "),(!_vm.active)?_vm._ssrNode("<div data-v-29ea9ef4>","</div>",[(_vm.product)?_c('nuxt-link',{staticClass:"product-center",attrs:{"to":"/product"}},[_c('span',{staticClass:"product-center-name"},[_vm._v("产品中心")]),_vm._v(" "),_c('span',{staticClass:"line"})]):_vm._e()],1):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./self-components/nav.vue?vue&type=template&id=29ea9ef4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./self-components/nav.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var navvue_type_script_lang_js_ = ({
  name: 'COMPONENT_NAV',
  props: {
    /* 当前选中的菜单下标 */
    current: {
      type: Number,
      default: 0
    },

    /* 是否开始白底模式 */
    white: {
      type: Boolean,
      default: false
    },

    /* 侧边栏是否开始手动触摸滑动(fullpage 插件影响下自带滑动失效时开启) */
    touch: {
      type: Boolean,
      default: false
    },

    /* 黑色的 mask 遮罩层 */
    mask: {
      type: Boolean,
      default: false
    },
    product: {
      type: Boolean,
      default: false
    },
    menu: {
      type: Array,
      default: function () {
        return [];
      }
    }
  },
  watch: {
    active(val) {
      this.$emit('change', val);
      this.showDarkMash = val;
    }

  },

  data() {
    return {
      active: false,
      // menu state
      showDarkMash: false,
      menus: [{
        title: '首页',
        transform: 'Home',
        routeName: '/'
      }, {
        title: '产品中心',
        transform: 'Product list',
        routeName: '/product'
      }, {
        title: '解决方案与应用',
        transform: 'Equipment customization',
        routeName: '/programme/1'
      }, {
        title: '举视合伙人',
        transform: 'Company profile',
        routeName: '/partner'
      }, {
        title: '云管理服务中心',
        transform: 'Company profile',
        routeName: '/cloudcenter'
      }, {
        title: '公司简介',
        transform: 'Company profile',
        routeName: '/company/introduction'
      }],
      touchStart: 0,
      currentNum: 0,
      worker: null
    };
  },

  created() {
    try {
      this.currentNum = Number(sessionStorage.getItem('Num')) || 0;
    } catch (err) {
      console.log(err);
      this.currentNum = 0;
    }

    this.menu.forEach(item => {
      if (item.ID == 1) item.routeName = '/';else if (item.ID == 2) item.routeName = '/product';else if (item.ID == 3) item.routeName = '/programme/1';else if (item.ID == 4) item.routeName = '/partner';else if (item.ID == 5) item.routeName = '/cloudcenter';else if (item.ID == 6) item.routeName = '/company/introduction';else item.routeName = '/custom?id=' + item.ID + '&title=' + item.Title;
    });
  },

  methods: {
    handleClick(index, event) {
      window.sessionStorage.setItem('Num', index);
    },

    /**
    * 展开 或 收起菜单
    */
    handleTrigger() {
      this.active = !this.active;
    },

    /**
     * 开始触摸
     * @param { object } $event 
     */
    handleTouchStart($event) {
      if (!this.touch) return;
      this.touchStart = $event.changedTouches[0].clientY;
    },

    /**
     * 触摸滑动
     * @param { object } $event 
     */
    handleTouchMove($event) {
      if (!this.touch) return;
      const l = (this.touchStart - $event.changedTouches[0].clientY) / 20;

      if (l > 10) {
        this.$refs.block.scrollTop = this.$refs.block.scrollTop + l;
      }
    }

  }
});
// CONCATENATED MODULE: ./self-components/nav.vue?vue&type=script&lang=js&
 /* harmony default export */ var self_components_navvue_type_script_lang_js_ = (navvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./self-components/nav.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(35)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  self_components_navvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "29ea9ef4",
  "2f7b9740"
  
)

/* harmony default export */ var nav = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./self-components/footer.vue?vue&type=template&id=ff21159a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"footer-wrapper"},[_vm._ssrNode("<a href=\"https://beian.miit.gov.cn/#/Integrated/index\" target=\"view_window\" data-v-ff21159a>"+_vm._ssrEscape(_vm._s(_vm.item.Footer)+" "+_vm._s(_vm.item.ICP))+"</a>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./self-components/footer.vue?vue&type=template&id=ff21159a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./self-components/footer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var footervue_type_script_lang_js_ = ({
  props: ['item']
});
// CONCATENATED MODULE: ./self-components/footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var self_components_footervue_type_script_lang_js_ = (footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./self-components/footer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(37)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  self_components_footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ff21159a",
  "2c47926e"
  
)

/* harmony default export */ var footer = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-grey@2x.5adfcd7.png";

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo@2x.97826b7.png";

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_vue_vue_type_style_index_0_id_e884270c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_vue_vue_type_style_index_0_id_e884270c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_vue_vue_type_style_index_0_id_e884270c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_vue_vue_type_style_index_0_id_e884270c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_vue_vue_type_style_index_0_id_e884270c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".logo[data-v-e884270c]{width:2.1rem;position:fixed;top:.2rem;left:.4rem;z-index:999;transition:transform .2s linear;cursor:pointer}.active[data-v-e884270c]{transform:translateX(-.2rem)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./self-components/logo.vue?vue&type=template&id=e884270c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{on:{"click":_vm.handleClick}},[_c('nuxt-link',{attrs:{"to":"/"}},[(_vm.dark)?_c('img',{class:['logo', { 'active': _vm.active }],attrs:{"src":__webpack_require__(41)}}):_c('img',{class:['logo', { 'active': _vm.active }],attrs:{"src":__webpack_require__(42)}})])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./self-components/logo.vue?vue&type=template&id=e884270c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./self-components/logo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var logovue_type_script_lang_js_ = ({
  name: 'COMPONENT_LOGO',
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick() {
      window.sessionStorage.setItem('Num', 0);
    }

  }
});
// CONCATENATED MODULE: ./self-components/logo.vue?vue&type=script&lang=js&
 /* harmony default export */ var self_components_logovue_type_script_lang_js_ = (logovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./self-components/logo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(43)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  self_components_logovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e884270c",
  "1eb3cd3e"
  
)

/* harmony default export */ var logo = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(74);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("ec4d6c18", content, true, context)
};

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(76);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("334295c6", content, true, context)
};

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_box_vue_vue_type_style_index_0_id_67cbc76e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_box_vue_vue_type_style_index_0_id_67cbc76e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_box_vue_vue_type_style_index_0_id_67cbc76e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_box_vue_vue_type_style_index_0_id_67cbc76e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_box_vue_vue_type_style_index_0_id_67cbc76e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".box[data-v-67cbc76e]{display:flex;width:33.333%;height:33.333%;justify-content:center;align-items:center;font-size:24px;border-bottom:1px solid rgba(171,178,191,.3);border-right:1px solid rgba(171,178,191,.3);box-sizing:border-box;cursor:pointer;border-left:1px solid rgba(171,178,191,.3);position:relative}.box[data-v-67cbc76e]:nth-of-type(7),.box[data-v-67cbc76e]:nth-of-type(8),.box[data-v-67cbc76e]:nth-of-type(9){border-bottom:none}.box .arc-wrapper[data-v-67cbc76e]{width:100%;height:100%;overflow:hidden;position:absolute;left:0;top:0;display:flex;justify-content:center}.box .arc[data-v-67cbc76e]{margin-top:.25rem;width:2.6rem;height:2.6rem;border-radius:50%;transition:all .3s linear;background-color:#e8ebf0}.box .content[data-v-67cbc76e]{width:100%;height:100%;position:absolute;left:0;top:0;box-sizing:border-box;padding-top:.45rem;text-align:center}.box .content .title[data-v-67cbc76e]{font-size:.14rem;line-height:.2rem;color:#656e7d;text-align:center}.box .content .name[data-v-67cbc76e]{font-size:.18rem;line-height:.25rem;margin-top:.16rem;color:#656e7d;text-align:center}.box .content .white[data-v-67cbc76e]{color:#fff}.box .content .type[data-v-67cbc76e]{font-size:.12rem;color:#abb2bf;position:absolute;left:50%;bottom:.15rem;transform:translateX(-50%)}.box .content .img[data-v-67cbc76e]{margin-top:.2rem;height:1.4rem;display:inline-block;position:relative;z-index:9999}.box .content .animate1[data-v-67cbc76e]{-webkit-animation:show1-data-v-67cbc76e .5s;animation:show1-data-v-67cbc76e .5s}.box .content .animate2[data-v-67cbc76e]{-webkit-animation:show2-data-v-67cbc76e .5s;animation:show2-data-v-67cbc76e .5s}@-webkit-keyframes show1-data-v-67cbc76e{0%{transform:translate(6rem,6rem) scale(2);opacity:0}}@keyframes show1-data-v-67cbc76e{0%{transform:translate(6rem,6rem) scale(2);opacity:0}}@-webkit-keyframes show2-data-v-67cbc76e{0%{transform:translate(-8rem) scale(2)}}@keyframes show2-data-v-67cbc76e{0%{transform:translate(-8rem) scale(2)}}.big .arc[data-v-67cbc76e]{transform:scale(2);border-radius:0}@media screen and (max-width:1000px){.arc[data-v-67cbc76e]{width:1.9rem!important;height:1.9rem!important}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_id_1115e6c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_id_1115e6c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_id_1115e6c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_id_1115e6c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_id_1115e6c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container[data-v-1115e6c0]{width:100%;height:100%;position:relative}.container .content[data-v-1115e6c0]{width:100%;height:100%;position:absolute;top:0;left:0;background-color:#fff;padding-left:6.2rem}.container .content .nav[data-v-1115e6c0]{width:6.2rem;height:100%;box-sizing:border-box;display:inline-block;vertical-align:top;position:fixed;top:0;left:0}.container .content .nav .inside[data-v-1115e6c0]{width:5.7rem;position:absolute;top:50%;transform:translateY(-50%);box-sizing:border-box;padding-left:.95rem}.container .content .nav .inside p[data-v-1115e6c0]{font-size:.18rem;color:#3e4045;line-height:.25rem;transition:all .2s linear;position:relative;margin-bottom:.36rem;box-sizing:border-box;padding-left:.2rem;font-weight:700;cursor:pointer}.container .content .nav .inside p span[data-v-1115e6c0]{display:inline-block;width:0;height:.15rem;opacity:.4;position:absolute;top:.15rem;left:0;transition:width .4s linear}.container .content .nav .inside p ._list[data-v-1115e6c0]{padding:.1rem;margin-top:.2rem;box-sizing:border-box;background-color:rgba(223,226,229,.4);border-radius:4px}.container .content .nav .inside p ._list ._list_box[data-v-1115e6c0]{font-size:.14rem;color:#3e4045;display:inline-block;vertical-align:top;margin-right:.1rem;padding:.02rem .1rem}.container .content .nav .inside p ._list ._list_box[data-v-1115e6c0]:hover{color:#399f62}.container .content .nav .inside p ._list .active[data-v-1115e6c0]{color:#fff!important;background-color:#399f62;border-radius:3px}.container .content .nav .inside p:hover span[data-v-1115e6c0]{width:1.2rem;background-color:#dae0e9;height:.15rem;opacity:.6;top:.15rem}@-webkit-keyframes show-data-v-1115e6c0{0%{opacity:0;transform:translateX(-30px)}}@keyframes show-data-v-1115e6c0{0%{opacity:0;transform:translateX(-30px)}}.container .content .nav .inside .active[data-v-1115e6c0]{font-size:.28rem}.container .content .nav .inside .active span[data-v-1115e6c0]{width:1.2rem;background-color:#008ddc}.container .content .table[data-v-1115e6c0]{width:calc(100% - .81rem);height:100%;vertical-align:top;display:inline-block}.container .content .table .inside[data-v-1115e6c0]{width:100%;height:100%;display:flex;flex-wrap:wrap}.container .list-enter[data-v-1115e6c0],.container list-leave-to[data-v-1115e6c0]{opacity:0;transform:translateX(-30px)}.container .list-enter-active[data-v-1115e6c0],.container my-leave-active[data-v-1115e6c0]{transition:all .8s ease}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=product.js.map