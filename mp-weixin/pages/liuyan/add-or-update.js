(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/liuyan/add-or-update"],{4361:function(e,n,t){"use strict";var i,r=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return i}))},"4d5a":function(e,n,t){"use strict";t.r(n);var i=t("4361"),r=t("8a5b");for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);t("eac3");var u,o=t("f0c5"),c=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"8f661638",null,!1,i["a"],u);n["default"]=c.exports},"8a5b":function(e,n,t){"use strict";t.r(n);var i=t("bb4f"),r=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);n["default"]=r.a},a3cc:function(e,n,t){},bb4f:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,i,r,a,u){try{var o=e[a](u),c=o.value}catch(s){return void t(s)}o.done?n(c):Promise.resolve(c).then(i,r)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(i,r){var u=e.apply(n,t);function o(e){a(u,i,r,o,c,"next",e)}function c(e){a(u,i,r,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("b146"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{ruleForm:{mingcheng:"",fenlei:"",tupian:"",neirong:"",zhanghao:"",xingming:"",maijiazhanghao:"",maijiaxingming:"",userid:""},user:{},ro:{mingcheng:!1,fenlei:!1,tupian:!1,neirong:!1,zhanghao:!1,xingming:!1,maijiazhanghao:!1,maijiaxingming:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var n=u(i.default.mark((function n(t){var r,a,u,o;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.getStorageSync("nowTable"),n.next=3,this.$api.session(r);case 3:if(a=n.sent,this.user=a.data,this.ruleForm.zhanghao=this.user.zhanghao,this.ruleForm.xingming=this.user.xingming,this.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!t.id){n.next=15;break}return this.ruleForm.id=t.id,n.next=13,this.$api.info("liuyan",this.ruleForm.id);case 13:a=n.sent,this.ruleForm=a.data;case 15:if(!t.cross){n.next=58;break}u=e.getStorageSync("crossObj"),n.t0=i.default.keys(u);case 18:if((n.t1=n.t0()).done){n.next=58;break}if(o=n.t1.value,"mingcheng"!=o){n.next=24;break}return this.ruleForm.mingcheng=u[o],this.ro.mingcheng=!0,n.abrupt("continue",18);case 24:if("fenlei"!=o){n.next=28;break}return this.ruleForm.fenlei=u[o],this.ro.fenlei=!0,n.abrupt("continue",18);case 28:if("tupian"!=o){n.next=32;break}return this.ruleForm.tupian=u[o],this.ro.tupian=!0,n.abrupt("continue",18);case 32:if("neirong"!=o){n.next=36;break}return this.ruleForm.neirong=u[o],this.ro.neirong=!0,n.abrupt("continue",18);case 36:if("zhanghao"!=o){n.next=40;break}return this.ruleForm.zhanghao=u[o],this.ro.zhanghao=!0,n.abrupt("continue",18);case 40:if("xingming"!=o){n.next=44;break}return this.ruleForm.xingming=u[o],this.ro.xingming=!0,n.abrupt("continue",18);case 44:if("maijiazhanghao"!=o){n.next=48;break}return this.ruleForm.maijiazhanghao=u[o],this.ro.maijiazhanghao=!0,n.abrupt("continue",18);case 48:if("maijiaxingming"!=o){n.next=52;break}return this.ruleForm.maijiaxingming=u[o],this.ro.maijiaxingming=!0,n.abrupt("continue",18);case 52:if("userid"!=o){n.next=56;break}return this.ruleForm.userid=u[o],this.ro.userid=!0,n.abrupt("continue",18);case 56:n.next=18;break;case 58:this.styleChange();case 59:case"end":return n.stop()}}),n,this)})));function t(e){return n.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=u(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.id){e.next=5;break}return e.next=3,this.$api.update("liuyan",this.ruleForm);case 3:e.next=7;break;case 5:return e.next=7,this.$api.add("liuyan",this.ruleForm);case 7:this.$utils.msgBack("提交成功");case 8:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),i=n.getMonth()+1,r=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(t,"-").concat(i,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])},be3e:function(e,n,t){"use strict";(function(e){t("ba58"),t("921b");i(t("66fd"));var n=i(t("4d5a"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},eac3:function(e,n,t){"use strict";var i=t("a3cc"),r=t.n(i);r.a}},[["be3e","common/runtime","common/vendor"]]]);