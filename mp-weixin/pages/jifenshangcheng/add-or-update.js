(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jifenshangcheng/add-or-update"],{5267:function(e,n,t){},"921f":function(e,n,t){"use strict";t.r(n);var i=t("cdcb"),r=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);n["default"]=r.a},abd9:function(e,n,t){"use strict";t.r(n);var i=t("d31b"),r=t("921f");for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);t("c962");var u,s=t("f0c5"),o=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"561240c8",null,!1,i["a"],u);n["default"]=o.exports},c962:function(e,n,t){"use strict";var i=t("5267"),r=t.n(i);r.a},cdcb:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,i,r,a,u){try{var s=e[a](u),o=s.value}catch(c){return void t(c)}s.done?n(o):Promise.resolve(o).then(i,r)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(i,r){var u=e.apply(n,t);function s(e){a(u,i,r,s,o,"next",e)}function o(e){a(u,i,r,s,o,"throw",e)}s(void 0)}))}}var s=function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"e2b1"))},o=function(){return t.e("components/xia-editor/xia-editor").then(t.bind(null,"064f"))},c={data:function(){return{cross:"",ruleForm:{shangpinbianhao:this.getUUID(),shangpinmingcheng:"",shangpintupian:"",pinpai:"",duihuanjifen:"",guige:"",xiangqing:""},user:{},ro:{shangpinbianhao:!1,shangpinmingcheng:!1,shangpintupian:!1,pinpai:!1,duihuanjifen:!1,guige:!1,xiangqing:!1}}},components:{wPicker:s,xiaEditor:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var n=u(i.default.mark((function n(t){var r,a,u,s;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.getStorageSync("nowTable"),n.next=3,this.$api.session(r);case 3:if(a=n.sent,this.user=a.data,this.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!t.id){n.next=13;break}return this.ruleForm.id=t.id,n.next=11,this.$api.info("jifenshangcheng",this.ruleForm.id);case 11:a=n.sent,this.ruleForm=a.data;case 13:if(this.cross=t.cross,!t.cross){n.next=49;break}u=e.getStorageSync("crossObj"),n.t0=i.default.keys(u);case 17:if((n.t1=n.t0()).done){n.next=49;break}if(s=n.t1.value,"shangpinbianhao"!=s){n.next=23;break}return this.ruleForm.shangpinbianhao=u[s],this.ro.shangpinbianhao=!0,n.abrupt("continue",17);case 23:if("shangpinmingcheng"!=s){n.next=27;break}return this.ruleForm.shangpinmingcheng=u[s],this.ro.shangpinmingcheng=!0,n.abrupt("continue",17);case 27:if("shangpintupian"!=s){n.next=31;break}return this.ruleForm.shangpintupian=u[s].split(",")[0],this.ro.shangpintupian=!0,n.abrupt("continue",17);case 31:if("pinpai"!=s){n.next=35;break}return this.ruleForm.pinpai=u[s],this.ro.pinpai=!0,n.abrupt("continue",17);case 35:if("duihuanjifen"!=s){n.next=39;break}return this.ruleForm.duihuanjifen=u[s],this.ro.duihuanjifen=!0,n.abrupt("continue",17);case 39:if("guige"!=s){n.next=43;break}return this.ruleForm.guige=u[s],this.ro.guige=!0,n.abrupt("continue",17);case 43:if("xiangqing"!=s){n.next=47;break}return this.ruleForm.xiangqing=u[s],this.ro.xiangqing=!0,n.abrupt("continue",17);case 47:n.next=17;break;case 49:this.styleChange();case 50:case"end":return n.stop()}}),n,this)})));function t(e){return n.apply(this,arguments)}return t}(),methods:{xiangqingChange:function(e){this.ruleForm.xiangqing=e},styleChange:function(){this.$nextTick((function(){}))},shangpintupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.shangpintupian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=u(i.default.mark((function n(){var t,r,a,u,s,o,c,h,f,g;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(this.ruleForm.duihuanjifen){n.next=3;break}return this.$utils.msg("兑换积分不能为空"),n.abrupt("return");case 3:if(!this.ruleForm.duihuanjifen||this.$validate.isIntNumer(this.ruleForm.duihuanjifen)){n.next=6;break}return this.$utils.msg("兑换积分应输入整数"),n.abrupt("return");case 6:if(!this.cross){n.next=22;break}if(s=e.getStorageSync("statusColumnName"),o=e.getStorageSync("statusColumnValue"),""==s){n.next=22;break}if(t||(t=e.getStorageSync("crossObj")),s.startsWith("[")){n.next=18;break}for(c in t)c==s&&(t[c]=o);return h=e.getStorageSync("crossTable"),n.next=16,this.$api.update("".concat(h),t);case 16:n.next=22;break;case 18:r=Number(e.getStorageSync("userid")),a=t["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 22:if(!a||!r){n.next=44;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=a,f={page:1,limit:10,crossuserid:r,crossrefid:a},n.next=28,this.$api.list("jifenshangcheng",f);case 28:if(g=n.sent,!(g.data.total>=u)){n.next=34;break}return this.$utils.msg(e.getStorageSync("tips")),n.abrupt("return",!1);case 34:if(!this.ruleForm.id){n.next=39;break}return n.next=37,this.$api.update("jifenshangcheng",this.ruleForm);case 37:n.next=41;break;case 39:return n.next=41,this.$api.add("jifenshangcheng",this.ruleForm);case 41:this.$utils.msgBack("提交成功");case 42:n.next=52;break;case 44:if(!this.ruleForm.id){n.next=49;break}return n.next=47,this.$api.update("jifenshangcheng",this.ruleForm);case 47:n.next=51;break;case 49:return n.next=51,this.$api.add("jifenshangcheng",this.ruleForm);case 51:this.$utils.msgBack("提交成功");case 52:case"end":return n.stop()}}),n,this)})));function t(){return n.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),i=n.getMonth()+1,r=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(t,"-").concat(i,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])},d31b:function(e,n,t){"use strict";var i={"xia-editor":()=>t.e("components/xia-editor/xia-editor").then(t.bind(null,"064f"))},r=function(){var e=this,n=e.$createElement,t=(e._self._c,e.ruleForm.shangpintupian.split(","));e.$mp.data=Object.assign({},{$root:{g0:t}})},a=[];t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return i}))},e8c0:function(e,n,t){"use strict";(function(e){t("6cdc"),t("921b");i(t("66fd"));var n=i(t("abd9"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])}},[["e8c0","common/runtime","common/vendor"]]]);