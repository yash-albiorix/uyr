(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[102],{

/***/ "../coreui/node_modules/@what3words/javascript-components/dist/esm-es5/what3words-address.entry.js":
/*!*********************************************************************************************************!*\
  !*** ../coreui/node_modules/@what3words/javascript-components/dist/esm-es5/what3words-address.entry.js ***!
  \*********************************************************************************************************/
/*! exports provided: what3words_address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "what3words_address", function() { return What3wordsAddress; });
/* harmony import */ var _index_76aed8ad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-76aed8ad.js */ "../coreui/node_modules/@what3words/javascript-components/dist/esm-es5/index-76aed8ad.js");
/* harmony import */ var _index_1b25bd2d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-1b25bd2d.js */ "../coreui/node_modules/@what3words/javascript-components/dist/esm-es5/index-1b25bd2d.js");
var addressCss='what3words-address{display:inline-block;font-family:"Source Sans Pro", sans-serif}.what3words-address{color:#333;display:-ms-inline-flexbox;display:inline-flex;text-decoration:none;-ms-flex-direction:column;flex-direction:column}.what3words-address_container{display:-ms-flexbox;display:flex}.what3words-address_text{white-space:nowrap}.what3words-tooltip-container{height:0;width:0;position:relative;-ms-flex-item-align:center;align-self:center}.what3words-tooltip{position:absolute;display:none;width:160px;background-color:#333333;border-radius:3px;bottom:10px;left:-88px;font-size:12px;padding:8px;z-index:1;color:#ffffff;-webkit-box-shadow:0 0 16px rgba(0, 0, 0, 0.5);box-shadow:0 0 16px rgba(0, 0, 0, 0.5)}.what3words-address:hover .what3words-tooltip,.what3words-address_tooltip .what3words-tooltip{display:block}.what3words-tooltip:after{bottom:-13px;left:50%;content:"";height:0;width:0;position:absolute;border:7px solid transparent;margin-left:-7px;border-top-color:#333333;z-index:1}.what3words-tooltip:before{content:"";position:absolute;width:100%;height:10px;bottom:-10px;left:0}.what3words-tooltip a{color:#ffffff}';var What3wordsAddress=function(){function t(t){Object(_index_76aed8ad_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this,t);this.iconColor=_index_1b25bd2d_js__WEBPACK_IMPORTED_MODULE_1__["D"].iconColor;this.textColor=_index_1b25bd2d_js__WEBPACK_IMPORTED_MODULE_1__["D"].textColor;this.size=_index_1b25bd2d_js__WEBPACK_IMPORTED_MODULE_1__["D"].addressSize;this.target=_index_1b25bd2d_js__WEBPACK_IMPORTED_MODULE_1__["D"].target;this.link=_index_1b25bd2d_js__WEBPACK_IMPORTED_MODULE_1__["D"].true;this.tooltip=_index_1b25bd2d_js__WEBPACK_IMPORTED_MODULE_1__["D"].true;this.tooltipLocation=_index_1b25bd2d_js__WEBPACK_IMPORTED_MODULE_1__["D"].tooltipLocation;this.showTooltip=_index_1b25bd2d_js__WEBPACK_IMPORTED_MODULE_1__["D"].false}t.prototype.render=function(){var t="https://map.what3words.com/"+this.words;var o=this.link?{href:t,target:this.target}:{};return Object(_index_76aed8ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a",Object.assign({},o,{class:"what3words-address notranslate "+(this.showTooltip?"what3words-address_tooltip":""),style:{fontSize:this.size+"px"}}),this.tooltip&&Object(_index_76aed8ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"what3words-tooltip-container"},Object(_index_76aed8ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"what3words-tooltip"},"what3words gives every 3m x 3m in the world a unique 3 word address. This one describes the precise ",this.tooltipLocation,"."," ",Object(_index_76aed8ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a",{href:t,target:this.target},"View on map"))),Object(_index_76aed8ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"what3words-address_container"},Object(_index_76aed8ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("what3words-symbol",{size:this.size*1.25,color:this.iconColor}),Object(_index_76aed8ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span",{class:"what3words-address_text",style:{color:this.textColor}},this.words)))};return t}();What3wordsAddress.style=addressCss;

/***/ })

}]);