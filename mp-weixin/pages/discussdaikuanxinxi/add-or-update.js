(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/discussdaikuanxinxi/add-or-update"],{"1d72":function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t,r,n,i,a,s){try{var u=e[a](s),o=u.value}catch(c){return void r(c)}u.done?t(o):Promise.resolve(o).then(n,i)}function s(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var s=e.apply(t,r);function u(e){a(s,n,i,u,o,"next",e)}function o(e){a(s,n,i,u,o,"throw",e)}u(void 0)}))}}var u=function(){return Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(r.bind(null,"e2b1"))},o=function(){return r.e("components/xia-editor/xia-editor").then(r.bind(null,"064f"))},c={data:function(){return{cross:"",ruleForm:{refid:"",userid:"",avatarurl:"",nickname:"",content:"",reply:""},user:{},ro:{refid:!1,userid:!1,avatarurl:!1,nickname:!1,content:!1,reply:!1}}},components:{wPicker:u,xiaEditor:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=s(n.default.mark((function t(r){var i,a,s,u;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.getStorageSync("nowTable"),t.next=3,this.$api.session(i);case 3:if(a=t.sent,this.user=a.data,this.ruleForm.userid=e.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!r.id){t.next=13;break}return this.ruleForm.id=r.id,t.next=11,this.$api.info("discussdaikuanxinxi",this.ruleForm.id);case 11:a=t.sent,this.ruleForm=a.data;case 13:if(this.cross=r.cross,!r.cross){t.next=45;break}s=e.getStorageSync("crossObj"),t.t0=n.default.keys(s);case 17:if((t.t1=t.t0()).done){t.next=45;break}if(u=t.t1.value,"refid"!=u){t.next=23;break}return this.ruleForm.refid=s[u],this.ro.refid=!0,t.abrupt("continue",17);case 23:if("userid"!=u){t.next=27;break}return this.ruleForm.userid=s[u],this.ro.userid=!0,t.abrupt("continue",17);case 27:if("avatarurl"!=u){t.next=31;break}return this.ruleForm.avatarurl=s[u].split(",")[0],this.ro.avatarurl=!0,t.abrupt("continue",17);case 31:if("nickname"!=u){t.next=35;break}return this.ruleForm.nickname=s[u],this.ro.nickname=!0,t.abrupt("continue",17);case 35:if("content"!=u){t.next=39;break}return this.ruleForm.content=s[u],this.ro.content=!0,t.abrupt("continue",17);case 39:if("reply"!=u){t.next=43;break}return this.ruleForm.reply=s[u],this.ro.reply=!0,t.abrupt("continue",17);case 43:t.next=17;break;case 45:this.styleChange();case 46:case"end":return t.stop()}}),t,this)})));function r(e){return t.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},avatarurlTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.avatarurl="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=s(n.default.mark((function t(){var r,i,a,s,u,o,c,l,d,f,h,p,m,x;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(this.ruleForm.avatarurl=e.getStorageSync("headportrait")?e.getStorageSync("headportrait"):"",r="",i=[],r&&(i=r.split(",")),a=0;a<i.length;a++)s=new RegExp(i[a],"g"),this.ruleForm.content.indexOf(i[a])>-1&&(this.ruleForm.content=this.ruleForm.content.replace(s,"**"));if(this.ruleForm.refid){t.next=8;break}return this.$utils.msg("关联表id不能为空"),t.abrupt("return");case 8:if(this.ruleForm.userid){t.next=11;break}return this.$utils.msg("用户id不能为空"),t.abrupt("return");case 11:if(this.ruleForm.content){t.next=14;break}return this.$utils.msg("评论内容不能为空"),t.abrupt("return");case 14:if(!this.cross){t.next=30;break}if(d=e.getStorageSync("statusColumnName"),f=e.getStorageSync("statusColumnValue"),""==d){t.next=30;break}if(u||(u=e.getStorageSync("crossObj")),d.startsWith("[")){t.next=26;break}for(h in u)h==d&&(u[h]=f);return p=e.getStorageSync("crossTable"),t.next=24,this.$api.update("".concat(p),u);case 24:t.next=30;break;case 26:o=Number(e.getStorageSync("userid")),c=u["id"],l=e.getStorageSync("statusColumnName"),l=l.replace(/\[/,"").replace(/\]/,"");case 30:if(!c||!o){t.next=53;break}return this.ruleForm.crossuserid=o,this.ruleForm.crossrefid=c,m={page:1,limit:10,crossuserid:o,crossrefid:c},t.next=36,this.$api.list("discussdaikuanxinxi",m);case 36:if(x=t.sent,!(x.data.total>=l)){t.next=42;break}return this.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 42:if(!this.ruleForm.id){t.next=47;break}return t.next=45,this.$api.update("discussdaikuanxinxi",this.ruleForm);case 45:t.next=49;break;case 47:return t.next=49,this.$api.add("discussdaikuanxinxi",this.ruleForm);case 49:e.setStorageSync("discussdaikuanxinxiCleanType",!0),this.$utils.msgBack("提交成功");case 51:t.next=62;break;case 53:if(!this.ruleForm.id){t.next=58;break}return t.next=56,this.$api.update("discussdaikuanxinxi",this.ruleForm);case 56:t.next=60;break;case 58:return t.next=60,this.$api.add("discussdaikuanxinxi",this.ruleForm);case 60:e.setStorageSync("discussdaikuanxinxiCleanType",!0),this.$utils.msgBack("提交成功");case 62:case"end":return t.stop()}}),t,this)})));function r(){return t.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,r=t.getFullYear(),n=t.getMonth()+1,i=t.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),n=n>9?n:"0"+n,i=i>9?i:"0"+i,"".concat(r,"-").concat(n,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};t.default=c}).call(this,r("543d")["default"])},"3d19":function(e,t,r){"use strict";var n=r("d90e"),i=r.n(n);i.a},"4e84":function(e,t,r){"use strict";var n,i=function(){var e=this,t=e.$createElement;e._self._c},a=[];r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return n}))},"4ec2":function(e,t,r){"use strict";(function(e){r("6cdc"),r("921b");n(r("66fd"));var t=n(r("f8e0"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("543d")["createPage"])},"6a88":function(e,t,r){"use strict";r.r(t);var n=r("1d72"),i=r.n(n);for(var a in n)"default"!==a&&function(e){r.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a},d90e:function(e,t,r){},f8e0:function(e,t,r){"use strict";r.r(t);var n=r("4e84"),i=r("6a88");for(var a in i)"default"!==a&&function(e){r.d(t,e,(function(){return i[e]}))}(a);r("3d19");var s,u=r("f0c5"),o=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"aeb0e304",null,!1,n["a"],s);t["default"]=o.exports}},[["4ec2","common/runtime","common/vendor"]]]);