(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-daikuanshenqing-add-or-update"],{"088f":function(e,r,i){"use strict";var n=i("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,i("a481"),i("c5f6"),i("f559"),i("ac6a"),i("28a5"),i("96cf");var t=n(i("3b8d")),a=n(i("e2b1")),o=n(i("064f")),s={data:function(){return{cross:"",ruleForm:{daikuanmingcheng:"",daikuanzhonglei:"",fengmian:"",yonghuzhanghao:"",yonghuxingming:"",yonghushouji:"",shenfenzheng:"",daikuanjine:"",daikuanshijian:"",daikuanshuoming:"",shhf:""},user:{},ro:{daikuanmingcheng:!1,daikuanzhonglei:!1,fengmian:!1,yonghuzhanghao:!1,yonghuxingming:!1,yonghushouji:!1,shenfenzheng:!1,daikuanjine:!1,daikuanshijian:!1,daikuanshuoming:!1,sfsh:!1,shhf:!1}}},components:{wPicker:a.default,xiaEditor:o.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,t.default)(regeneratorRuntime.mark((function e(r){var i,n,t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.daikuanshijian=this.$utils.getCurDateTime(),i=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(i);case 4:if(n=e.sent,this.user=n.data,this.ruleForm.yonghuzhanghao=this.user.yonghuzhanghao,this.ro.yonghuzhanghao=!0,this.ruleForm.yonghuxingming=this.user.yonghuxingming,this.ro.yonghuxingming=!0,this.ruleForm.yonghushouji=this.user.yonghushouji,this.ro.yonghushouji=!0,this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){e.next=20;break}return this.ruleForm.id=r.id,e.next=18,this.$api.info("daikuanshenqing",this.ruleForm.id);case 18:n=e.sent,this.ruleForm=n.data;case 20:if(this.cross=r.cross,!r.cross){e.next=68;break}t=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(t);case 24:if((e.t1=e.t0()).done){e.next=68;break}if(a=e.t1.value,"daikuanmingcheng"!=a){e.next=30;break}return this.ruleForm.daikuanmingcheng=t[a],this.ro.daikuanmingcheng=!0,e.abrupt("continue",24);case 30:if("daikuanzhonglei"!=a){e.next=34;break}return this.ruleForm.daikuanzhonglei=t[a],this.ro.daikuanzhonglei=!0,e.abrupt("continue",24);case 34:if("fengmian"!=a){e.next=38;break}return this.ruleForm.fengmian=t[a].split(",")[0],this.ro.fengmian=!0,e.abrupt("continue",24);case 38:if("yonghuzhanghao"!=a){e.next=42;break}return this.ruleForm.yonghuzhanghao=t[a],this.ro.yonghuzhanghao=!0,e.abrupt("continue",24);case 42:if("yonghuxingming"!=a){e.next=46;break}return this.ruleForm.yonghuxingming=t[a],this.ro.yonghuxingming=!0,e.abrupt("continue",24);case 46:if("yonghushouji"!=a){e.next=50;break}return this.ruleForm.yonghushouji=t[a],this.ro.yonghushouji=!0,e.abrupt("continue",24);case 50:if("shenfenzheng"!=a){e.next=54;break}return this.ruleForm.shenfenzheng=t[a],this.ro.shenfenzheng=!0,e.abrupt("continue",24);case 54:if("daikuanjine"!=a){e.next=58;break}return this.ruleForm.daikuanjine=t[a],this.ro.daikuanjine=!0,e.abrupt("continue",24);case 58:if("daikuanshijian"!=a){e.next=62;break}return this.ruleForm.daikuanshijian=t[a],this.ro.daikuanshijian=!0,e.abrupt("continue",24);case 62:if("daikuanshuoming"!=a){e.next=66;break}return this.ruleForm.daikuanshuoming=t[a],this.ro.daikuanshuoming=!0,e.abrupt("continue",24);case 66:e.next=24;break;case 68:this.styleChange();case 69:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},daikuanshijianConfirm:function(e){console.log(e),this.ruleForm.daikuanshijian=e.result,this.$forceUpdate()},fengmianTap:function(){var e=this;this.$api.upload((function(r){e.ruleForm.fengmian="upload/"+r.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,t.default)(regeneratorRuntime.mark((function e(){var r,i,n,t,a,o,s,u,d,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.shenfenzheng||this.$validate.checkIdCard(this.ruleForm.shenfenzheng)){e.next=3;break}return this.$utils.msg("身份证应输入身份证格式"),e.abrupt("return");case 3:if(!this.ruleForm.daikuanjine||this.$validate.isNumber(this.ruleForm.daikuanjine)){e.next=6;break}return this.$utils.msg("贷款金额应输入数字"),e.abrupt("return");case 6:if(!this.cross){e.next=22;break}if(a=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==a){e.next=22;break}if(r||(r=uni.getStorageSync("crossObj")),a.startsWith("[")){e.next=18;break}for(s in r)s==a&&(r[s]=o);return u=uni.getStorageSync("crossTable"),e.next=16,this.$api.update("".concat(u),r);case 16:e.next=22;break;case 18:i=Number(uni.getStorageSync("userid")),n=r["id"],t=uni.getStorageSync("statusColumnName"),t=t.replace(/\[/,"").replace(/\]/,"");case 22:if(!n||!i){e.next=44;break}return this.ruleForm.crossuserid=i,this.ruleForm.crossrefid=n,d={page:1,limit:10,crossuserid:i,crossrefid:n},e.next=28,this.$api.list("daikuanshenqing",d);case 28:if(l=e.sent,!(l.data.total>=t)){e.next=34;break}return this.$utils.msg(uni.getStorageSync("tips")),e.abrupt("return",!1);case 34:if(!this.ruleForm.id){e.next=39;break}return e.next=37,this.$api.update("daikuanshenqing",this.ruleForm);case 37:e.next=41;break;case 39:return e.next=41,this.$api.add("daikuanshenqing",this.ruleForm);case 41:this.$utils.msgBack("提交成功");case 42:e.next=52;break;case 44:if(!this.ruleForm.id){e.next=49;break}return e.next=47,this.$api.update("daikuanshenqing",this.ruleForm);case 47:e.next=51;break;case 49:return e.next=51,this.$api.add("daikuanshenqing",this.ruleForm);case 51:this.$utils.msgBack("提交成功");case 52:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,i=r.getFullYear(),n=r.getMonth()+1,t=r.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),n=n>9?n:"0"+n,t=t>9?t:"0"+t,"".concat(i,"-").concat(n,"-").concat(t)},toggleTab:function(e){this.$refs[e].show()}}};r.default=s},3654:function(e,r,i){"use strict";i.r(r);var n=i("e83f"),t=i("fb06");for(var a in t)"default"!==a&&function(e){i.d(r,e,(function(){return t[e]}))}(a);i("793c");var o,s=i("f0c5"),u=Object(s["a"])(t["default"],n["b"],n["c"],!1,null,"557746ec",null,!1,n["a"],o);r["default"]=u.exports},4577:function(e,r,i){var n=i("80fb");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var t=i("4f06").default;t("4561b9ce",n,!0,{sourceMap:!1,shadowMode:!1})},"793c":function(e,r,i){"use strict";var n=i("4577"),t=i.n(n);t.a},"80fb":function(e,r,i){var n=i("24fb");r=n(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-557746ec]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=r},e83f:function(e,r,i){"use strict";var n={"w-picker":i("e2b1").default},t=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{style:{minHeight:"100vh",width:"100%",padding:"0 0 240rpx",position:"relative",background:"url(http://codegen.caihongy.cn/20221220/59a732694b3248ee8e6b685b4b45dc29.png) fixed,#f6f6f6",height:"auto"}},[i("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"60rpx 40rpx",background:"none",display:"block",height:"auto"}},[i("v-uni-view",{style:{padding:"12rpx 0",boxShadow:"inset 0px 0px 64rpx 0px #f9edd9",margin:"0 0 20rpx 0",borderColor:"#e9be70",alignItems:"baseline",borderRadius:"20%",borderWidth:"8rpx 4rpx 2rpx",background:"rgba(255,255,255,1)",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("贷款名称")]),i("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.daikuanmingcheng,placeholder:"贷款名称"},model:{value:e.ruleForm.daikuanmingcheng,callback:function(r){e.$set(e.ruleForm,"daikuanmingcheng",r)},expression:"ruleForm.daikuanmingcheng"}})],1),i("v-uni-view",{style:{padding:"12rpx 0",boxShadow:"inset 0px 0px 64rpx 0px #f9edd9",margin:"0 0 20rpx 0",borderColor:"#e9be70",alignItems:"baseline",borderRadius:"20%",borderWidth:"8rpx 4rpx 2rpx",background:"rgba(255,255,255,1)",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("贷款种类")]),i("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.daikuanzhonglei,placeholder:"贷款种类"},model:{value:e.ruleForm.daikuanzhonglei,callback:function(r){e.$set(e.ruleForm,"daikuanzhonglei",r)},expression:"ruleForm.daikuanzhonglei"}})],1),i("v-uni-view",{style:{padding:"12rpx 0",boxShadow:"inset 0px 0px 64rpx 0px #f9edd9",margin:"0 0 20rpx 0",borderColor:"#e9be70",alignItems:"baseline",borderRadius:"20%",borderWidth:"8rpx 4rpx 2rpx",background:"rgba(255,255,255,1)",display:"flex",width:"100%",borderStyle:"solid",height:"auto"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.fengmianTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("封面")]),e.ruleForm.fengmian?i("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:e.baseUrl+e.ruleForm.fengmian.split(",")[0],mode:"aspectFill"}}):i("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1),i("v-uni-view",{style:{padding:"12rpx 0",boxShadow:"inset 0px 0px 64rpx 0px #f9edd9",margin:"0 0 20rpx 0",borderColor:"#e9be70",alignItems:"baseline",borderRadius:"20%",borderWidth:"8rpx 4rpx 2rpx",background:"rgba(255,255,255,1)",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("用户账号")]),i("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.yonghuzhanghao,placeholder:"用户账号"},model:{value:e.ruleForm.yonghuzhanghao,callback:function(r){e.$set(e.ruleForm,"yonghuzhanghao",r)},expression:"ruleForm.yonghuzhanghao"}})],1),i("v-uni-view",{style:{padding:"12rpx 0",boxShadow:"inset 0px 0px 64rpx 0px #f9edd9",margin:"0 0 20rpx 0",borderColor:"#e9be70",alignItems:"baseline",borderRadius:"20%",borderWidth:"8rpx 4rpx 2rpx",background:"rgba(255,255,255,1)",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("用户姓名")]),i("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.yonghuxingming,placeholder:"用户姓名"},model:{value:e.ruleForm.yonghuxingming,callback:function(r){e.$set(e.ruleForm,"yonghuxingming",r)},expression:"ruleForm.yonghuxingming"}})],1),i("v-uni-view",{style:{padding:"12rpx 0",boxShadow:"inset 0px 0px 64rpx 0px #f9edd9",margin:"0 0 20rpx 0",borderColor:"#e9be70",alignItems:"baseline",borderRadius:"20%",borderWidth:"8rpx 4rpx 2rpx",background:"rgba(255,255,255,1)",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("用户手机")]),i("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.yonghushouji,placeholder:"用户手机"},model:{value:e.ruleForm.yonghushouji,callback:function(r){e.$set(e.ruleForm,"yonghushouji",r)},expression:"ruleForm.yonghushouji"}})],1),i("v-uni-view",{style:{padding:"12rpx 0",boxShadow:"inset 0px 0px 64rpx 0px #f9edd9",margin:"0 0 20rpx 0",borderColor:"#e9be70",alignItems:"baseline",borderRadius:"20%",borderWidth:"8rpx 4rpx 2rpx",background:"rgba(255,255,255,1)",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("身份证")]),i("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.shenfenzheng,placeholder:"身份证"},model:{value:e.ruleForm.shenfenzheng,callback:function(r){e.$set(e.ruleForm,"shenfenzheng",r)},expression:"ruleForm.shenfenzheng"}})],1),i("v-uni-view",{style:{padding:"12rpx 0",boxShadow:"inset 0px 0px 64rpx 0px #f9edd9",margin:"0 0 20rpx 0",borderColor:"#e9be70",alignItems:"baseline",borderRadius:"20%",borderWidth:"8rpx 4rpx 2rpx",background:"rgba(255,255,255,1)",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("贷款金额")]),i("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.daikuanjine,placeholder:"贷款金额"},model:{value:e.ruleForm.daikuanjine,callback:function(r){e.$set(e.ruleForm,"daikuanjine",r)},expression:"ruleForm.daikuanjine"}})],1),i("v-uni-view",{style:{padding:"12rpx 0",boxShadow:"inset 0px 0px 64rpx 0px #f9edd9",margin:"0 0 20rpx 0",borderColor:"#e9be70",alignItems:"baseline",borderRadius:"20%",borderWidth:"8rpx 4rpx 2rpx",background:"rgba(255,255,255,1)",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("贷款时间")]),i("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{placeholder:"贷款时间"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.toggleTab("daikuanshijian")}},model:{value:e.ruleForm.daikuanshijian,callback:function(r){e.$set(e.ruleForm,"daikuanshijian",r)},expression:"ruleForm.daikuanshijian"}})],1),i("v-uni-view",{style:{padding:"12rpx 0",boxShadow:"inset 0px 0px 64rpx 0px #f9edd9",margin:"0 0 20rpx 0",borderColor:"#e9be70",alignItems:"baseline",borderRadius:"20%",borderWidth:"8rpx 4rpx 2rpx",background:"rgba(255,255,255,1)",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("贷款说明")]),i("v-uni-textarea",{style:{border:"0",minHeight:"240rpx",padding:"24rpx 40rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{placeholder:"贷款说明"},model:{value:e.ruleForm.daikuanshuoming,callback:function(r){e.$set(e.ruleForm,"daikuanshuoming",r)},expression:"ruleForm.daikuanshuoming"}})],1),i("v-uni-view",{staticClass:"btn",style:{width:"100%",margin:"40rpx 0 0 0",justifyContent:"center",display:"flex",height:"auto"}},[i("v-uni-button",{staticClass:"bg-red",style:{border:"0",padding:"0 40rpx",boxShadow:"2rpx 4rpx 8rpx #ccc",margin:"0 40rpx 0 0",color:"#333",borderRadius:"16rpx",background:"linear-gradient(80deg, rgba(233,190,112,1) 0%, rgba(254,236,200,1) 21%, rgba(249,224,176,1) 50%, rgba(252,235,199,1) 84%, rgba(233,190,112,1) 100%),#e9be70",display:"inline",width:"auto",lineHeight:"80rpx",fontSize:"28rpx",height:"80rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),i("w-picker",{ref:"daikuanshijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(r){arguments[0]=r=e.$handleEvent(r),e.daikuanshijianConfirm.apply(void 0,arguments)}}})],1)],1)},a=[];i.d(r,"b",(function(){return t})),i.d(r,"c",(function(){return a})),i.d(r,"a",(function(){return n}))},fb06:function(e,r,i){"use strict";i.r(r);var n=i("088f"),t=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(r,e,(function(){return n[e]}))}(a);r["default"]=t.a}}]);