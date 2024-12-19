(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news/add-or-update"],{"592f":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,r,i,a,u){try{var s=t[a](u),o=s.value}catch(c){return void n(c)}s.done?e(o):Promise.resolve(o).then(r,i)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var u=t.apply(e,n);function s(t){a(u,r,i,s,o,"next",t)}function o(t){a(u,r,i,s,o,"throw",t)}s(void 0)}))}}var s=function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"e2b1"))},o=function(){return n.e("components/xia-editor/xia-editor").then(n.bind(null,"064f"))},c={data:function(){return{cross:"",ruleForm:{title:"",introduction:"",picture:"",content:""},user:{},ro:{title:!1,introduction:!1,picture:!1,content:!1}}},components:{wPicker:s,xiaEditor:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=u(r.default.mark((function e(n){var i,a,u,s;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t.getStorageSync("nowTable"),e.next=3,this.$api.session(i);case 3:if(a=e.sent,this.user=a.data,this.ruleForm.userid=t.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=t.getStorageSync("nickname")),!n.id){e.next=13;break}return this.ruleForm.id=n.id,e.next=11,this.$api.info("news",this.ruleForm.id);case 11:a=e.sent,this.ruleForm=a.data;case 13:if(this.cross=n.cross,!n.cross){e.next=37;break}u=t.getStorageSync("crossObj"),e.t0=r.default.keys(u);case 17:if((e.t1=e.t0()).done){e.next=37;break}if(s=e.t1.value,"title"!=s){e.next=23;break}return this.ruleForm.title=u[s],this.ro.title=!0,e.abrupt("continue",17);case 23:if("introduction"!=s){e.next=27;break}return this.ruleForm.introduction=u[s],this.ro.introduction=!0,e.abrupt("continue",17);case 27:if("picture"!=s){e.next=31;break}return this.ruleForm.picture=u[s].split(",")[0],this.ro.picture=!0,e.abrupt("continue",17);case 31:if("content"!=s){e.next=35;break}return this.ruleForm.content=u[s],this.ro.content=!0,e.abrupt("continue",17);case 35:e.next=17;break;case 37:this.styleChange();case 38:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),methods:{contentChange:function(t){this.ruleForm.content=t},styleChange:function(){this.$nextTick((function(){}))},pictureTap:function(){var t=this;this.$api.upload((function(e){t.ruleForm.picture="upload/"+e.file,t.$forceUpdate(),t.$nextTick((function(){t.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=u(r.default.mark((function e(){var n,i,a,u,s,o,c,l,f,d;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.title){e.next=3;break}return this.$utils.msg("标题不能为空"),e.abrupt("return");case 3:if(this.ruleForm.picture){e.next=6;break}return this.$utils.msg("图片不能为空"),e.abrupt("return");case 6:if(this.ruleForm.content){e.next=9;break}return this.$utils.msg("内容不能为空"),e.abrupt("return");case 9:if(!this.cross){e.next=25;break}if(s=t.getStorageSync("statusColumnName"),o=t.getStorageSync("statusColumnValue"),""==s){e.next=25;break}if(n||(n=t.getStorageSync("crossObj")),s.startsWith("[")){e.next=21;break}for(c in n)c==s&&(n[c]=o);return l=t.getStorageSync("crossTable"),e.next=19,this.$api.update("".concat(l),n);case 19:e.next=25;break;case 21:i=Number(t.getStorageSync("userid")),a=n["id"],u=t.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 25:if(!a||!i){e.next=47;break}return this.ruleForm.crossuserid=i,this.ruleForm.crossrefid=a,f={page:1,limit:10,crossuserid:i,crossrefid:a},e.next=31,this.$api.list("news",f);case 31:if(d=e.sent,!(d.data.total>=u)){e.next=37;break}return this.$utils.msg(t.getStorageSync("tips")),e.abrupt("return",!1);case 37:if(!this.ruleForm.id){e.next=42;break}return e.next=40,this.$api.update("news",this.ruleForm);case 40:e.next=44;break;case 42:return e.next=44,this.$api.add("news",this.ruleForm);case 44:this.$utils.msgBack("提交成功");case 45:e.next=55;break;case 47:if(!this.ruleForm.id){e.next=52;break}return e.next=50,this.$api.update("news",this.ruleForm);case 50:e.next=54;break;case 52:return e.next=54,this.$api.add("news",this.ruleForm);case 54:this.$utils.msgBack("提交成功");case 55:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),optionsChange:function(t){this.index=t.target.value},bindDateChange:function(t){this.date=t.target.value},getDate:function(t){var e=new Date,n=e.getFullYear(),r=e.getMonth()+1,i=e.getDate();return"start"===t?n-=60:"end"===t&&(n+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(n,"-").concat(r,"-").concat(i)},toggleTab:function(t){this.$refs[t].show()}}};e.default=c}).call(this,n("543d")["default"])},"62a5":function(t,e,n){"use strict";var r={"xia-editor":()=>n.e("components/xia-editor/xia-editor").then(n.bind(null,"064f"))},i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.ruleForm.picture.split(","));t.$mp.data=Object.assign({},{$root:{g0:n}})},a=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}))},"9e70":function(t,e,n){"use strict";n.r(e);var r=n("62a5"),i=n("e23c");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("ce18");var u,s=n("f0c5"),o=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"462cc9a0",null,!1,r["a"],u);e["default"]=o.exports},a6fc:function(t,e,n){"use strict";(function(t){n("6cdc"),n("921b");r(n("66fd"));var e=r(n("9e70"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},ce18:function(t,e,n){"use strict";var r=n("faf9"),i=n.n(r);i.a},e23c:function(t,e,n){"use strict";n.r(e);var r=n("592f"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},faf9:function(t,e,n){}},[["a6fc","common/runtime","common/vendor"]]]);