(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/forum-add-or-update/forum-add-or-update"],{"0323":function(t,e,n){"use strict";(function(t){n("4885"),n("921b");r(n("66fd"));var e=r(n("ec0b"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"09e8":function(t,e,n){"use strict";n.r(e);var r=n("8d16"),u=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=u.a},"8b52":function(t,e,n){"use strict";var r=n("eac2"),u=n.n(r);u.a},"8d16":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,r,u,i,a){try{var s=t[i](a),o=s.value}catch(c){return void n(c)}s.done?e(o):Promise.resolve(o).then(r,u)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(r,u){var a=t.apply(e,n);function s(t){i(a,r,u,s,o,"next",t)}function o(t){i(a,r,u,s,o,"throw",t)}s(void 0)}))}}var s={data:function(){return{forum:{content:"",id:"",title:"",isdone:"开放",parentid:0},index:0,options:["开放","关闭"],username:"",user:{}}},onLoad:function(){var e=a(r.default.mark((function e(n){var u,i,a;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return u=t.getStorageSync("nowTable"),e.next=3,this.$api.session(u);case 3:if(i=e.sent,this.user=i.data,"xuesheng"==u&&(this.username=this.user.xuehao),"jiaoshi"==u&&(this.username=this.user.jiaoshigonghao),!n.id){e.next=13;break}return this.id=n.id,e.next=11,this.$api.info("forum",this.id);case 11:a=e.sent,this.forum=a.data;case 13:this.styleChange();case 14:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},onSubmitTap:function(){var t=a(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.forum.username=this.username,!this.id){t.next=6;break}return t.next=4,this.$api.update("forum",this.forum);case 4:t.next=8;break;case 6:return t.next=8,this.$api.save("forum",this.forum);case 8:this.$utils.msgBack("操作成功");case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),setIsDoneTap:function(t){this.index=t.target.value,this.forum.isdone=this.options[this.index]}}};e.default=s}).call(this,n("543d")["default"])},cf1c:function(t,e,n){"use strict";var r,u=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}))},eac2:function(t,e,n){},ec0b:function(t,e,n){"use strict";n.r(e);var r=n("cf1c"),u=n("09e8");for(var i in u)"default"!==i&&function(t){n.d(e,t,(function(){return u[t]}))}(i);n("8b52");var a,s=n("f0c5"),o=Object(s["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=o.exports}},[["0323","common/runtime","common/vendor"]]]);