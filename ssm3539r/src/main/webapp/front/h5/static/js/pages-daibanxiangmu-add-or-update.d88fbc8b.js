(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-daibanxiangmu-add-or-update"],{"0a3e":function(e,i,n){"use strict";var r={"xia-editor":n("064f").default,"w-picker":n("e2b1").default},t=function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{style:{minHeight:"100vh",width:"100%",padding:"0 0 240rpx",position:"relative",background:"url(http://codegen.caihongy.cn/20221220/59a732694b3248ee8e6b685b4b45dc29.png) fixed,#f6f6f6",height:"auto"}},[n("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"60rpx 40rpx",background:"none",display:"block",height:"auto"}},[n("v-uni-view",{style:{padding:"12rpx 0",boxShadow:"inset 0px 0px 64rpx 0px #f9edd9",margin:"0 0 20rpx 0",borderColor:"#e9be70",alignItems:"baseline",borderRadius:"20%",borderWidth:"8rpx 4rpx 2rpx",background:"rgba(255,255,255,1)",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("项目编号")]),n("v-uni-view",{staticClass:"right-input",style:{padding:"0px 24rpx",margin:"0px",lineHeight:"80rpx",fontSize:"28rpx",color:"#666",flex:"1"}},[e._v(e._s(e.ruleForm.xiangmubianhao))])],1),n("v-uni-view",{style:{padding:"12rpx 0",boxShadow:"inset 0px 0px 64rpx 0px #f9edd9",margin:"0 0 20rpx 0",borderColor:"#e9be70",alignItems:"baseline",borderRadius:"20%",borderWidth:"8rpx 4rpx 2rpx",background:"rgba(255,255,255,1)",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("项目名称")]),n("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.xiangmumingcheng,placeholder:"项目名称"},model:{value:e.ruleForm.xiangmumingcheng,callback:function(i){e.$set(e.ruleForm,"xiangmumingcheng",i)},expression:"ruleForm.xiangmumingcheng"}})],1),n("v-uni-view",{staticClass:" select",style:{padding:"12rpx 0",boxShadow:"inset 0px 0px 64rpx 0px #f9edd9",margin:"0 0 20rpx 0",borderColor:"#e9be70",alignItems:"baseline",borderRadius:"20%",borderWidth:"8rpx 4rpx 2rpx",background:"rgba(255,255,255,1)",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("项目分类")]),n("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{value:e.xiangmufenleiIndex,range:e.xiangmufenleiOptions},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.xiangmufenleiChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-input",style:{width:"100%",lineHeight:"80rpx",fontSize:"28rpx",color:"#666"}},[e._v(e._s(e.ruleForm.xiangmufenlei?e.ruleForm.xiangmufenlei:"请选择项目分类"))])],1)],1),n("v-uni-view",{style:{padding:"12rpx 0",boxShadow:"inset 0px 0px 64rpx 0px #f9edd9",margin:"0 0 20rpx 0",borderColor:"#e9be70",alignItems:"baseline",borderRadius:"20%",borderWidth:"8rpx 4rpx 2rpx",background:"rgba(255,255,255,1)",display:"flex",width:"100%",borderStyle:"solid",height:"auto"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.fengmiantupianTap.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("封面图片")]),e.ruleForm.fengmiantupian?n("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:e.baseUrl+e.ruleForm.fengmiantupian.split(",")[0],mode:"aspectFill"}}):n("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1),n("v-uni-view",{style:{padding:"12rpx 0",boxShadow:"inset 0px 0px 64rpx 0px #f9edd9",margin:"0 0 20rpx 0",borderColor:"#e9be70",alignItems:"baseline",borderRadius:"20%",borderWidth:"8rpx 4rpx 2rpx",background:"rgba(255,255,255,1)",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("代办金额")]),n("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.daibanjine,placeholder:"代办金额"},model:{value:e.ruleForm.daibanjine,callback:function(i){e.$set(e.ruleForm,"daibanjine",i)},expression:"ruleForm.daibanjine"}})],1),n("v-uni-view",{style:{padding:"12rpx 0",boxShadow:"inset 0px 0px 64rpx 0px #f9edd9",margin:"0 0 20rpx 0",borderColor:"#e9be70",alignItems:"baseline",borderRadius:"20%",borderWidth:"8rpx 4rpx 2rpx",background:"rgba(255,255,255,1)",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("联系人")]),n("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.lianxiren,placeholder:"联系人"},model:{value:e.ruleForm.lianxiren,callback:function(i){e.$set(e.ruleForm,"lianxiren",i)},expression:"ruleForm.lianxiren"}})],1),n("v-uni-view",{style:{padding:"12rpx 0",boxShadow:"inset 0px 0px 64rpx 0px #f9edd9",margin:"0 0 20rpx 0",borderColor:"#e9be70",alignItems:"baseline",borderRadius:"20%",borderWidth:"8rpx 4rpx 2rpx",background:"rgba(255,255,255,1)",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("联系方式")]),n("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.lianxifangshi,placeholder:"联系方式"},model:{value:e.ruleForm.lianxifangshi,callback:function(i){e.$set(e.ruleForm,"lianxifangshi",i)},expression:"ruleForm.lianxifangshi"}})],1),n("v-uni-view",{style:{padding:"12rpx 0",boxShadow:"inset 0px 0px 64rpx 0px #f9edd9",margin:"0 0 20rpx 0",borderColor:"#e9be70",alignItems:"baseline",borderRadius:"20%",borderWidth:"8rpx 4rpx 2rpx",background:"rgba(255,255,255,1)",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("发布时间")]),n("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{placeholder:"发布时间"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.toggleTab("fabushijian")}},model:{value:e.ruleForm.fabushijian,callback:function(i){e.$set(e.ruleForm,"fabushijian",i)},expression:"ruleForm.fabushijian"}})],1),n("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",borderWidth:"0 0 0px 0",width:"100%",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"100%",lineHeight:"80rpx",fontSize:"28rpx",color:"#111",fontWeight:"500"}},[e._v("项目内容")]),n("xia-editor",{ref:"editor",style:{minHeight:"300rpx",padding:"24rpx 40rpx",boxShadow:"inset 0px 0px 64rpx 0px #f9edd9",borderColor:"#e9be70",borderRadius:"10%",background:"rgba(255,255,255,1)",borderWidth:"8rpx 4rpx 2rpx",width:"100%",borderStyle:"solid",height:"auto"},attrs:{placeholder:"项目内容"},on:{editorChange:function(i){arguments[0]=i=e.$handleEvent(i),e.xiangmuneirongChange.apply(void 0,arguments)}},model:{value:e.ruleForm.xiangmuneirong,callback:function(i){e.$set(e.ruleForm,"xiangmuneirong",i)},expression:"ruleForm.xiangmuneirong"}})],1),n("v-uni-view",{staticClass:"btn",style:{width:"100%",margin:"40rpx 0 0 0",justifyContent:"center",display:"flex",height:"auto"}},[n("v-uni-button",{staticClass:"bg-red",style:{border:"0",padding:"0 40rpx",boxShadow:"2rpx 4rpx 8rpx #ccc",margin:"0 40rpx 0 0",color:"#333",borderRadius:"16rpx",background:"linear-gradient(80deg, rgba(233,190,112,1) 0%, rgba(254,236,200,1) 21%, rgba(249,224,176,1) 50%, rgba(252,235,199,1) 84%, rgba(233,190,112,1) 100%),#e9be70",display:"inline",width:"auto",lineHeight:"80rpx",fontSize:"28rpx",height:"80rpx"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),n("w-picker",{ref:"fabushijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(i){arguments[0]=i=e.$handleEvent(i),e.fabushijianConfirm.apply(void 0,arguments)}}})],1)],1)},a=[];n.d(i,"b",(function(){return t})),n.d(i,"c",(function(){return a})),n.d(i,"a",(function(){return r}))},"1dd5":function(e,i,n){"use strict";n.r(i);var r=n("0a3e"),t=n("e279");for(var a in t)"default"!==a&&function(e){n.d(i,e,(function(){return t[e]}))}(a);n("3602");var o,s=n("f0c5"),u=Object(s["a"])(t["default"],r["b"],r["c"],!1,null,"3efa116d",null,!1,r["a"],o);i["default"]=u.exports},3602:function(e,i,n){"use strict";var r=n("6323"),t=n.n(r);t.a},"41ff":function(e,i,n){"use strict";var r=n("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,n("a481"),n("c5f6"),n("f559"),n("ac6a"),n("28a5"),n("96cf");var t=r(n("3b8d")),a=r(n("e2b1")),o=r(n("064f")),s={data:function(){return{cross:"",ruleForm:{xiangmubianhao:this.getUUID(),xiangmumingcheng:"",xiangmufenlei:"",xiangmuneirong:"",fengmiantupian:"",daibanjine:"",lianxiren:"",lianxifangshi:"",fabushijian:""},xiangmufenleiOptions:[],xiangmufenleiIndex:0,user:{},ro:{xiangmubianhao:!1,xiangmumingcheng:!1,xiangmufenlei:!1,xiangmuneirong:!1,fengmiantupian:!1,daibanjine:!1,lianxiren:!1,lianxifangshi:!1,fabushijian:!1}}},components:{wPicker:a.default,xiaEditor:o.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,t.default)(regeneratorRuntime.mark((function e(i){var n,r,t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.fabushijian=this.$utils.getCurDateTime(),n=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(n);case 4:return r=e.sent,this.user=r.data,e.next=8,this.$api.option("xiangmufenlei","xiangmufenlei",{});case 8:if(r=e.sent,this.xiangmufenleiOptions=r.data,this.xiangmufenleiOptions.unshift("请选择项目分类"),this.ruleForm.userid=uni.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!i.id){e.next=19;break}return this.ruleForm.id=i.id,e.next=17,this.$api.info("daibanxiangmu",this.ruleForm.id);case 17:r=e.sent,this.ruleForm=r.data;case 19:if(this.cross=i.cross,!i.cross){e.next=63;break}t=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(t);case 23:if((e.t1=e.t0()).done){e.next=63;break}if(a=e.t1.value,"xiangmubianhao"!=a){e.next=29;break}return this.ruleForm.xiangmubianhao=t[a],this.ro.xiangmubianhao=!0,e.abrupt("continue",23);case 29:if("xiangmumingcheng"!=a){e.next=33;break}return this.ruleForm.xiangmumingcheng=t[a],this.ro.xiangmumingcheng=!0,e.abrupt("continue",23);case 33:if("xiangmufenlei"!=a){e.next=37;break}return this.ruleForm.xiangmufenlei=t[a],this.ro.xiangmufenlei=!0,e.abrupt("continue",23);case 37:if("xiangmuneirong"!=a){e.next=41;break}return this.ruleForm.xiangmuneirong=t[a],this.ro.xiangmuneirong=!0,e.abrupt("continue",23);case 41:if("fengmiantupian"!=a){e.next=45;break}return this.ruleForm.fengmiantupian=t[a].split(",")[0],this.ro.fengmiantupian=!0,e.abrupt("continue",23);case 45:if("daibanjine"!=a){e.next=49;break}return this.ruleForm.daibanjine=t[a],this.ro.daibanjine=!0,e.abrupt("continue",23);case 49:if("lianxiren"!=a){e.next=53;break}return this.ruleForm.lianxiren=t[a],this.ro.lianxiren=!0,e.abrupt("continue",23);case 53:if("lianxifangshi"!=a){e.next=57;break}return this.ruleForm.lianxifangshi=t[a],this.ro.lianxifangshi=!0,e.abrupt("continue",23);case 57:if("fabushijian"!=a){e.next=61;break}return this.ruleForm.fabushijian=t[a],this.ro.fabushijian=!0,e.abrupt("continue",23);case 61:e.next=23;break;case 63:this.styleChange();case 64:case"end":return e.stop()}}),e,this)})));function i(i){return e.apply(this,arguments)}return i}(),methods:{xiangmuneirongChange:function(e){this.ruleForm.xiangmuneirong=e},styleChange:function(){this.$nextTick((function(){}))},fabushijianConfirm:function(e){console.log(e),this.ruleForm.fabushijian=e.result,this.$forceUpdate()},xiangmufenleiChange:function(e){this.xiangmufenleiIndex=e.target.value,this.ruleForm.xiangmufenlei=this.xiangmufenleiOptions[this.xiangmufenleiIndex]},fengmiantupianTap:function(){var e=this;this.$api.upload((function(i){e.ruleForm.fengmiantupian="upload/"+i.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,t.default)(regeneratorRuntime.mark((function e(){var i,n,r,t,a,o,s,u,l,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.xiangmumingcheng){e.next=3;break}return this.$utils.msg("项目名称不能为空"),e.abrupt("return");case 3:if(this.ruleForm.daibanjine){e.next=6;break}return this.$utils.msg("代办金额不能为空"),e.abrupt("return");case 6:if(!this.ruleForm.daibanjine||this.$validate.isNumber(this.ruleForm.daibanjine)){e.next=9;break}return this.$utils.msg("代办金额应输入数字"),e.abrupt("return");case 9:if(!this.cross){e.next=25;break}if(a=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==a){e.next=25;break}if(i||(i=uni.getStorageSync("crossObj")),a.startsWith("[")){e.next=21;break}for(s in i)s==a&&(i[s]=o);return u=uni.getStorageSync("crossTable"),e.next=19,this.$api.update("".concat(u),i);case 19:e.next=25;break;case 21:n=Number(uni.getStorageSync("userid")),r=i["id"],t=uni.getStorageSync("statusColumnName"),t=t.replace(/\[/,"").replace(/\]/,"");case 25:if(!r||!n){e.next=47;break}return this.ruleForm.crossuserid=n,this.ruleForm.crossrefid=r,l={page:1,limit:10,crossuserid:n,crossrefid:r},e.next=31,this.$api.list("daibanxiangmu",l);case 31:if(d=e.sent,!(d.data.total>=t)){e.next=37;break}return this.$utils.msg(uni.getStorageSync("tips")),e.abrupt("return",!1);case 37:if(!this.ruleForm.id){e.next=42;break}return e.next=40,this.$api.update("daibanxiangmu",this.ruleForm);case 40:e.next=44;break;case 42:return e.next=44,this.$api.add("daibanxiangmu",this.ruleForm);case 44:this.$utils.msgBack("提交成功");case 45:e.next=55;break;case 47:if(!this.ruleForm.id){e.next=52;break}return e.next=50,this.$api.update("daibanxiangmu",this.ruleForm);case 50:e.next=54;break;case 52:return e.next=54,this.$api.add("daibanxiangmu",this.ruleForm);case 54:this.$utils.msgBack("提交成功");case 55:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var i=new Date,n=i.getFullYear(),r=i.getMonth()+1,t=i.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),r=r>9?r:"0"+r,t=t>9?t:"0"+t,"".concat(n,"-").concat(r,"-").concat(t)},toggleTab:function(e){this.$refs[e].show()}}};i.default=s},6323:function(e,i,n){var r=n("d554");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var t=n("4f06").default;t("45bd6d30",r,!0,{sourceMap:!1,shadowMode:!1})},d554:function(e,i,n){var r=n("24fb");i=r(!1),i.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-3efa116d]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=i},e279:function(e,i,n){"use strict";n.r(i);var r=n("41ff"),t=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(i,e,(function(){return r[e]}))}(a);i["default"]=t.a}}]);