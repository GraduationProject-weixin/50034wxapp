(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/center/center"],{"2e5e":function(t,e,n){"use strict";n.r(e);var r=n("2f46"),u=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=u.a},"2f46":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("a34a")),u=a(n("68ab"));function a(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,r,u,a,i){try{var o=t[a](i),c=o.value}catch(s){return void n(s)}o.done?e(c):Promise.resolve(c).then(r,u)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(r,u){var a=t.apply(e,n);function o(t){i(a,r,u,o,c,"next",t)}function c(t){i(a,r,u,o,c,"throw",t)}o(void 0)}))}}var c={data:function(){return{isH5Plus:!0,user:{},tableName:"",role:"",menuList:[]}},onLoad:function(){var e=o(r.default.mark((function e(){var n,a,i;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.role=t.getStorageSync("role"),n=t.getStorageSync("nowTable"),e.next=4,this.$api.session(n);case 4:a=e.sent,this.user=a.data,this.tableName=n,i=u.default.list(),this.menuList=i;case 9:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),onShow:function(){var e=o(r.default.mark((function e(){var n,a,i;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.role=t.getStorageSync("role"),n=t.getStorageSync("nowTable"),e.next=4,this.$api.session(n);case 4:a=e.sent,this.user=a.data,this.tableName=n,i=u.default.list(),this.menuList=i;case 9:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),methods:{onPageTap:function(e){t.navigateTo({url:e,fail:function(){t.switchTab({url:e})}})}}};e.default=c}).call(this,n("543d")["default"])},"56fb":function(t,e,n){"use strict";var r=n("7697"),u=n.n(r);u.a},7697:function(t,e,n){},"8ed7":function(t,e,n){"use strict";var r,u=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}))},c131:function(t,e,n){"use strict";n.r(e);var r=n("8ed7"),u=n("2e5e");for(var a in u)"default"!==a&&function(t){n.d(e,t,(function(){return u[t]}))}(a);n("56fb");var i,o=n("f0c5"),c=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);e["default"]=c.exports},c3d9:function(t,e,n){"use strict";(function(t){n("4885"),n("921b");r(n("66fd"));var e=r(n("c131"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["c3d9","common/runtime","common/vendor"]]]);