(function(e){function t(t){for(var r,n,i=t[0],o=t[1],u=t[2],d=0,l=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&l.push(s[n][0]),s[n]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);f&&f(t);while(l.length)l.shift()();return c.push.apply(c,u||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],r=!0,n=1;n<a.length;n++){var i=a[n];0!==s[i]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={app:0},s={app:0},c=[];function i(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-111c883a":"0a192b5d","chunk-2d0b2ec8":"8533e05c","chunk-2d0c8d68":"e14470d2","chunk-2d0d338e":"9967baf4","chunk-2d228901":"accfbdb0","chunk-3fdfc446":"e82d1e66","chunk-452696c7":"94a6cf4d","chunk-71c50812":"4b56a3d8","chunk-84cc821a":"6baa1cbd","chunk-8ddbd2d0":"82803e9a","chunk-91b65fae":"36d9f6e0","chunk-958bdcfa":"76483e45","chunk-cb1f47e4":"6b24a1bb","chunk-df1564ac":"878aff83"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a={"chunk-111c883a":1,"chunk-8ddbd2d0":1,"chunk-91b65fae":1,"chunk-cb1f47e4":1,"chunk-df1564ac":1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var r="css/"+({}[e]||e)+"."+{"chunk-111c883a":"2db6b68a","chunk-2d0b2ec8":"31d6cfe0","chunk-2d0c8d68":"31d6cfe0","chunk-2d0d338e":"31d6cfe0","chunk-2d228901":"31d6cfe0","chunk-3fdfc446":"31d6cfe0","chunk-452696c7":"31d6cfe0","chunk-71c50812":"31d6cfe0","chunk-84cc821a":"31d6cfe0","chunk-8ddbd2d0":"13385931","chunk-91b65fae":"c7da980e","chunk-958bdcfa":"31d6cfe0","chunk-cb1f47e4":"78271824","chunk-df1564ac":"ecef28f2"}[e]+".css",s=o.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===s))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],d=u.getAttribute("data-href");if(d===r||d===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||s,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete n[e],f.parentNode.removeChild(f),a(c)},f.href=s;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){n[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,a){r=s[e]=[t,a]}));t.push(r[2]=c);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=i(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(f);var a=s[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",l.name="ChunkLoadError",l.type=r,l.request=n,a[1](l)}s[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/forum-front-end-vue/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0220":function(e,t,a){"use strict";a("9899")},"0c32":function(e,t,a){"use strict";a("5267")},"12ab":function(e,t,a){},1602:function(e,t,a){"use strict";var r=a("dfd8"),n=function(){return localStorage.getItem("token")};t["a"]={getCurrentUser:function(){return r["b"].get("/get_current_user",{headers:{Authorization:"Bearer ".concat(n())}})},get:function(e){var t=e.userId;return r["b"].get("/users/".concat(t),{headers:{Authorization:"Bearer ".concat(n())}})},addFavorite:function(e){var t=e.restaurantId;return r["b"].post("/favorite/".concat(t),null,{headers:{Authorization:"Bearer ".concat(n())}})},deleteFavorite:function(e){var t=e.restaurantId;return r["b"].delete("/favorite/".concat(t),{headers:{Authorization:"Bearer ".concat(n())}})},deleteLike:function(e){var t=e.restaurantId;return r["b"].delete("/like/".concat(t),{headers:{Authorization:"Bearer ".concat(n())}})},addLike:function(e){var t=e.restaurantId;return r["b"].post("/like/".concat(t),null,{headers:{Authorization:"Bearer ".concat(n())}})},getTopUsers:function(){return r["b"].get("/users/top",{headers:{Authorization:"Bearer ".concat(n())}})},deleteFollowing:function(e){var t=e.userId;return r["b"].delete("/following/".concat(t),{headers:{Authorization:"Bearer ".concat(n())}})},addFollowing:function(e){var t=e.userId;return r["b"].post("/following/".concat(t),null,{headers:{Authorization:"Bearer ".concat(n())}})},update:function(e,t){var a=e.userId;return r["b"].put("/users/".concat(a),t,{headers:{Authorization:"Bearer ".concat(n())}})}}},2375:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"spinner"},[a("div",{staticClass:"bouncing-loader"},[a("div"),a("div"),a("div")])])}],s=(a("0220"),a("2877")),c={},i=Object(s["a"])(c,r,n,!1,null,"bd456636",null);t["a"]=i.exports},"2fe5":function(e,t,a){"use strict";a("4802")},"2ffb":function(e,t,a){"use strict";a("ee8f")},4678:function(e,t,a){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=s(e);return a(t)}function s(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=s,e.exports=n,n.id="4678"},4802:function(e,t,a){},"4e94":function(e,t,a){"use strict";a("9278")},5267:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"restaurant-forum"}},[a("Navbar"),a("main",{staticClass:"mt-5 bg-white"},[a("router-view")],1)],1)},s=[],c=(a("4989"),a("ab8b"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar navbar-expand-lg fixed-top navbar-dark bg-dark"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/restaurants"}},[e._v(" 餐廳評論網 ")]),e._m(0),a("div",{staticClass:"navbar-collapse collapse",attrs:{id:"navbarSupportedContent"}},[a("div",{staticClass:"ml-auto d-flex align-items-center"},[e.currentUser.isAdmin?a("router-link",{staticClass:"text-white mr-3",attrs:{to:"/admin/restaurants"}},[e._v(" 管理員後台 ")]):e._e(),e.isAuthenticated?[a("router-link",{staticClass:"text-white mr-3",attrs:{to:"#"}},[e._v(" "+e._s(e.currentUser.name)+" 您好 ")]),a("button",{staticClass:"btn btn-sm btn-outline-success my-2 my-sm-0",attrs:{type:"button"},on:{click:e.logout}},[e._v(" 登出 ")])]:e._e()],2)])],1)}),i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],o=a("5530"),u=a("2f62"),d={computed:Object(o["a"])({},Object(u["b"])(["currentUser","isAuthenticated"])),methods:{logout:function(){this.$store.commit("revokeAuthentication"),this.$router.push("/signin")}}},l=d,f=(a("9e7c"),a("2877")),b=Object(f["a"])(l,c,i,!1,null,"3ede8dbe",null),p=b.exports,m={components:{Navbar:p}},g=m,h=(a("4e94"),Object(f["a"])(g,n,s,!1,null,"da4e21c6",null)),v=h.exports,j=(a("caad"),a("b0c0"),a("d3b7"),a("2532"),a("96cf"),a("1da1")),k=a("8c4f"),y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},w=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("404 Page Not Found")])])}],x={},P=Object(f["a"])(x,y,w,!1,null,null,null),_=P.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container py-5"},[a("form",{staticClass:"w-100",on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[e._m(0),a("div",{staticClass:"form-label-group mb-2"},[a("label",{attrs:{for:"email"}},[e._v("email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",name:"email",type:"email",placeholder:"email",autocomplete:"username",required:"",autofocus:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{staticClass:"form-label-group mb-3"},[a("label",{attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"Password",autocomplete:"current-password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("button",{staticClass:"btn btn-lg btn-primary btn-block mb-3",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" "+e._s(e.isProcessing?"處理中":"送出")+" ")]),a("div",{staticClass:"text-center mb-3"},[a("p",[a("router-link",{attrs:{to:"/signup"}},[e._v(" Sign Up ")])],1)]),a("p",{staticClass:"mt-5 mb-3 text-muted text-center"},[e._v("© 2017-2018")])])])},O=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center mb-4"},[a("h1",{staticClass:"h3 mb-3 font-weight-normal"},[e._v("Sign In")])])}],I=a("dfd8"),E={signIn:function(e){var t=e.email,a=e.password;return I["b"].post("/signin",{email:t,password:a})}},R={data:function(){return{email:"",password:"",isProcessing:!1}},methods:{handleSubmit:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.email&&t.password){e.next=4;break}return I["a"].fire({icon:"warning",title:"請填入 email 和 password"}),e.abrupt("return");case 4:return t.isProcessing=!0,e.next=7,E.signIn({email:t.email,password:t.password});case 7:if(a=e.sent,console.log(a),r=a.data,"success"===r.status){e.next=12;break}throw new Error(r.message);case 12:localStorage.setItem("token",r.token),t.$store.commit("setCurrentUser",r.user),t.$router.push("/restaurants"),e.next=23;break;case 17:e.prev=17,e.t0=e["catch"](0),t.password="",t.isProcessing=!1,I["a"].fire({icon:"warning",title:"請確認您輸入了正確的帳號密碼"}),console.log("error",e.t0);case 23:case"end":return e.stop()}}),e,null,[[0,17]])})))()}}},z=R,A=Object(f["a"])(z,C,O,!1,null,null,null),S=A.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container py-5"},[a("NavTabs"),e.isLoading?a("Spinner"):[a("RestaurantsNavPills",{attrs:{categories:e.categories}}),a("div",{staticClass:"row"},e._l(e.restaurants,(function(e){return a("RestaurantCard",{key:e.id,attrs:{initialRestaurant:e}})})),1),e.totalPage.length>1?a("RestaurantsPagination",{attrs:{currentPage:e.currentPage,totalPage:e.totalPage,previousPage:e.previousPage,categoryId:e.categoryId,nextPage:e.nextPage}}):e._e(),e.restaurants.length<1?a("div",[e._v("此類別目前無餐廳資料")]):e._e()]],2)},q=[],L=a("8bb1"),U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-md-6 col-lg-4"},[a("div",{staticClass:"card mb-4"},[a("img",{staticClass:"card-img-top",attrs:{src:e._f("emptyImage")(e.restaurant.image),alt:"Card image cap",width:"286px",height:"180px"}}),a("div",{staticClass:"card-body"},[a("p",{staticClass:"card-text title-wrap"},[a("router-link",{attrs:{to:{name:"restaurant",params:{id:e.restaurant.id}}}},[e._v(" "+e._s(e.restaurant.name)+" ")])],1),a("span",{staticClass:"badge badge-secondary"},[e._v(e._s(e.restaurant.Category?e.restaurant.Category.name:"未分類"))]),a("p",{staticClass:"card-text text-truncate"},[e._v(" "+e._s(e.restaurant.description)+" ")])]),a("div",{staticClass:"card-footer"},[e.restaurant.isFavorited?a("button",{staticClass:"btn btn-danger btn-border favorite mr-2",attrs:{disabled:e.isProcessing,type:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.deleteFavorite(e.restaurant.id)}}},[e._v(" 移除最愛 ")]):a("button",{staticClass:"btn btn-primary btn-border favorite mr-2",attrs:{disabled:e.isProcessing,type:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.addFavorite(e.restaurant.id)}}},[e._v(" 加到最愛 ")]),e.restaurant.isLiked?a("button",{staticClass:"btn btn-danger like mr-2",attrs:{disabled:e.isProcessing,type:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.deleteLike(e.restaurant.id)}}},[e._v(" Unlike ")]):a("button",{staticClass:"btn btn-primary like mr-2",attrs:{disabled:e.isProcessing,type:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.addLike(e.restaurant.id)}}},[e._v(" Like ")])])])])},$=[],F=a("e47f"),T=a("1602"),B={mixins:[F["a"]],props:{initialRestaurant:{type:Object,required:!0}},data:function(){return{restaurant:this.initialRestaurant,isProcessing:!1}},methods:{deleteFavorite:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.isProcessing=!0,a.next=4,T["a"].deleteFavorite({restaurantId:e});case 4:if(r=a.sent,n=r.data,console.log(r),"success"===n.status){a.next=9;break}throw new Error(n.message);case 9:t.restaurant=Object(o["a"])(Object(o["a"])({},t.restaurant),{},{isFavorited:!1}),t.isProcessing=!1,a.next=18;break;case 13:a.prev=13,a.t0=a["catch"](0),t.isProcessing=!1,console.log("error",a.t0),I["a"].fire({icon:"error",title:"無法將餐廳移除最愛，請稍後再試"});case 18:case"end":return a.stop()}}),a,null,[[0,13]])})))()},addFavorite:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.isProcessing=!0,a.next=4,T["a"].addFavorite({restaurantId:e});case 4:if(r=a.sent,n=r.data,console.log(r),"success"===n.status){a.next=9;break}throw new Error(n.message);case 9:t.restaurant=Object(o["a"])(Object(o["a"])({},t.restaurant),{},{isFavorited:!0}),console.log(t.restaurant),t.isProcessing=!1,a.next=19;break;case 14:a.prev=14,a.t0=a["catch"](0),t.isProcessing=!1,console.log("error",a.t0),I["a"].fire({icon:"error",title:"無法將餐廳加入最愛，請稍後再試"});case 19:case"end":return a.stop()}}),a,null,[[0,14]])})))()},deleteLike:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.isProcessing=!0,a.next=4,T["a"].deleteLike({restaurantId:e});case 4:if(r=a.sent,n=r.data,console.log(r),"success"===n.status){a.next=9;break}throw new Error(n.message);case 9:t.restaurant=Object(o["a"])(Object(o["a"])({},t.restaurant),{},{isLiked:!1}),t.isProcessing=!1,a.next=18;break;case 13:a.prev=13,a.t0=a["catch"](0),t.isProcessing=!1,console.log("error",a.t0),I["a"].fire({icon:"error",title:"無法將餐廳取消按讚，請稍後再試"});case 18:case"end":return a.stop()}}),a,null,[[0,13]])})))()},addLike:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.isProcessing=!0,a.next=4,T["a"].addLike({restaurantId:e});case 4:if(r=a.sent,n=r.data,"success"===n.status){a.next=8;break}throw new Error(n.message);case 8:t.restaurant=Object(o["a"])(Object(o["a"])({},t.restaurant),{},{isLiked:!0}),t.isProcessing=!1,a.next=17;break;case 12:a.prev=12,a.t0=a["catch"](0),console.log("error",a.t0),t.isProcessing=!1,I["a"].fire({icon:"error",title:"無法將餐廳按讚，請稍後再試"});case 17:case"end":return a.stop()}}),a,null,[[0,12]])})))()}}},D=B,M=(a("83bd"),Object(f["a"])(D,U,$,!1,null,"624e3567",null)),J=M.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"nav nav-pills mb-4"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"restaurants"}}},[e._v(" 全部 ")])],1),e._l(e.categories,(function(t){return a("li",{key:t.id,staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"restaurants",query:{categoryId:t.id}}}},[e._v(" "+e._s(t.name)+" ")])],1)}))],2)},H=[],G={props:{categories:{type:Array,required:!0}}},Q=G,V=(a("2ffb"),Object(f["a"])(Q,K,H,!1,null,"75c8e660",null)),W=V.exports,X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{directives:[{name:"show",rawName:"v-show",value:e.previousPage,expression:"previousPage"}],class:["page-item",{disabled:1===e.currentPage}]},[a("router-link",{staticClass:"page-link",attrs:{"aria-label":"Previous",to:{name:"restaurants",query:{categoryId:e.categoryId,page:e.previousPage}}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("«")])])],1),e._l(e.totalPage,(function(t){return a("li",{key:t,class:["page-item",{active:e.currentPage===t}]},[a("router-link",{staticClass:"page-link",attrs:{to:{name:"restaurants",query:{categoryId:e.categoryId,page:t}}}},[e._v(" "+e._s(t)+" ")])],1)})),a("li",{directives:[{name:"show",rawName:"v-show",value:e.nextPage,expression:"nextPage"}],staticClass:"['page-item',{disabled:currentPage === totalPage.length}]"},[a("router-link",{staticClass:"page-link",attrs:{"aria-label":"Next",to:{name:"restaurants",query:{categoryId:e.categoryId,page:e.nextPage}}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("»")])])],1)],2)])},Y=[],Z=(a("a9e3"),{name:"RestaurantsPagination",props:{currentPage:{type:Number,default:1},totalPage:{type:Array,required:!0},previousPage:{type:Number,required:!0},categoryId:{type:[Number,String],default:""},nextPage:{type:Number,required:!0}}}),ee=Z,te=(a("0c32"),Object(f["a"])(ee,X,Y,!1,null,"19bd5f92",null)),ae=te.exports,re=a("c4c3"),ne=a("2375"),se={name:"Restaurants",components:{NavTabs:L["a"],RestaurantCard:J,RestaurantsNavPills:W,RestaurantsPagination:ae,Spinner:ne["a"]},data:function(){return{restaurants:[],categories:[],categoryId:-1,currentPage:1,totalPage:[],previousPage:-1,nextPage:-1,isLoading:!0}},created:function(){console.log(this.$route.query);var e=this.$route.query,t=e.categoryId,a=void 0===t?"":t,r=e.page,n=void 0===r?"":r;this.fetchRestaurants({queryPage:n,queryCategoryId:a})},beforeRouteUpdate:function(e,t,a){var r=e.query,n=r.categoryId,s=void 0===n?"":n,c=r.page,i=void 0===c?"":c;this.fetchRestaurants({queryPage:i,queryCategoryId:s}),a()},methods:{fetchRestaurants:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function a(){var r,n,s,c,i,o,u,d,l,f,b;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.queryPage,n=e.queryCategoryId,a.prev=1,t.isLoading=!0,a.next=5,re["a"].getRestaurants({page:r,categoryId:n});case 5:if(s=a.sent,"OK"===s.statusText){a.next=8;break}throw new Error(s.statusText);case 8:c=s.data,i=c.restaurants,o=c.categories,u=c.categoryId,d=c.page,l=c.totalPage,f=c.prev,b=c.next,t.restaurants=i,t.categories=o,t.categoryId=u,t.currentPage=d,t.totalPage=l,t.previousPage=f,t.nextPage=b,t.isLoading=!1,a.next=24;break;case 19:a.prev=19,a.t0=a["catch"](1),t.isLoading=!1,console.log("error",a.t0),I["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 24:case"end":return a.stop()}}),a,null,[[1,19]])})))()}}},ce=se,ie=Object(f["a"])(ce,N,q,!1,null,null,null),oe=ie.exports;r["a"].use(u["a"]);var ue=new u["a"].Store({state:{currentUser:{id:-1,name:"",email:"",image:"",isAdmin:!1},isAuthenticated:!1,token:""},mutations:{setCurrentUser:function(e,t){e.currentUser=Object(o["a"])(Object(o["a"])({},e.currentUser),t),e.isAuthenticated=!0,e.token=localStorage.getItem("token")},revokeAuthentication:function(e){e.currentUser={},localStorage.removeItem("token"),e.token="",e.isAuthenticated=!1}},actions:{fetchCurrentUser:function(e){return Object(j["a"])(regeneratorRuntime.mark((function t(){var a,r,n,s,c,i,o,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.prev=1,t.next=4,T["a"].getCurrentUser();case 4:return r=t.sent,n=r.data,console.log(n),s=n.id,c=n.name,i=n.email,o=n.image,u=n.isAdmin,a("setCurrentUser",{id:s,name:c,email:i,image:o,isAdmin:u}),t.abrupt("return",!0);case 12:return t.prev=12,t.t0=t["catch"](1),console.error(t.t0.message),a("revokeAuthentication"),t.abrupt("return",!1);case 17:case"end":return t.stop()}}),t,null,[[1,12]])})))()}},modules:{}});r["a"].use(k["a"]);var de=function(e,t,a){var r=ue.state.currentUser;!r||r.isAdmin?a():a("/*")},le=new k["a"]({linkExactActiveClass:"active",routes:[{path:"/signin",name:"sign-in",component:S},{path:"/signup",name:"sign-up",component:function(){return a.e("chunk-2d0d338e").then(a.bind(null,"5c9c"))}},{path:"/",name:"root",redirect:"/signin"},{path:"/restaurants",name:"restaurants",component:oe},{path:"/restaurants/feeds",name:"restaurants-feeds",component:function(){return a.e("chunk-df1564ac").then(a.bind(null,"9cab"))}},{path:"/restaurants/top",name:"restaurants-tops",component:function(){return a.e("chunk-2d0c8d68").then(a.bind(null,"571a"))}},{path:"/restaurants/:id",name:"restaurant",component:function(){return a.e("chunk-8ddbd2d0").then(a.bind(null,"ad68"))}},{path:"/restaurants/:id/dashboard",name:"restaurants-dashboard",component:function(){return a.e("chunk-2d0b2ec8").then(a.bind(null,"25d3"))}},{path:"/users/top",name:"users-tops",component:function(){return a.e("chunk-91b65fae").then(a.bind(null,"22ab"))}},{path:"/users/detail/:id",name:"users-detail",component:function(){return a.e("chunk-111c883a").then(a.bind(null,"1511"))}},{path:"/users/:id/edit",name:"users-edit",component:function(){return a.e("chunk-2d228901").then(a.bind(null,"da5c"))}},{path:"/admin/restaurants",name:"admin-restaurants",component:function(){return a.e("chunk-71c50812").then(a.bind(null,"73a3"))},beforeEnter:de},{path:"/admin",exact:!0,redirect:"/admin/restaurants"},{path:"/admin/restaurants/new",name:"admin-restaurant-new",component:function(){return a.e("chunk-84cc821a").then(a.bind(null,"2743"))},beforeEnter:de},{path:"/admin/restaurants/:id/edit",name:"admin-restaurantEdit",component:function(){return a.e("chunk-452696c7").then(a.bind(null,"6945"))},beforeEnter:de},{path:"/admin/restaurants/:id",name:"admin-restaurant",component:function(){return a.e("chunk-3fdfc446").then(a.bind(null,"f91c"))},beforeEnter:de},{path:"/admin/categories",name:"admin-categories",component:function(){return a.e("chunk-cb1f47e4").then(a.bind(null,"5652"))},beforeEnter:de},{path:"/admin/users",name:"admin-users",component:function(){return a.e("chunk-958bdcfa").then(a.bind(null,"6135"))},beforeEnter:de},{path:"/*",name:"not-found",component:_}]});le.beforeEach(function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(t,a,r){var n,s,c,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=localStorage.getItem("token"),s=ue.state.token,c=ue.state.isAuthenticated,!n||n===s){e.next=7;break}return e.next=6,ue.dispatch("fetchCurrentUser");case 6:c=e.sent;case 7:if(i=["sign-up","sign-in"],c||i.includes(t.name)){e.next=11;break}return r("/signin"),e.abrupt("return");case 11:if(!c||!i.includes(t.name)){e.next=14;break}return r("/restaurants"),e.abrupt("return");case 14:r();case 15:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}());var fe=le;a("12ab");r["a"].config.productionTip=!1,new r["a"]({router:fe,store:ue,render:function(e){return e(v)}}).$mount("#app")},"7fd8":function(e,t,a){},"83bd":function(e,t,a){"use strict";a("7fd8")},"88bd":function(e,t,a){},"8bb1":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"nav nav-tabs mb-4"},e._l(e.tabs,(function(t){return a("li",{key:t.id,staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:t.path}},[e._v(e._s(t.title)+" ")])],1)})),0)},n=[],s=a("ec26"),c={data:function(){return{tabs:[{id:Object(s["a"])(),title:"首頁",path:"/restaurants"},{id:Object(s["a"])(),title:"最新動態",path:"/restaurants/feeds"},{id:Object(s["a"])(),title:"TOP 10 人氣餐廳",path:"/restaurants/top"},{id:Object(s["a"])(),title:" 美食達人",path:"/users/top"}]}}},i=c,o=(a("2fe5"),a("2877")),u=Object(o["a"])(i,r,n,!1,null,"a579fed4",null);t["a"]=u.exports},9278:function(e,t,a){},9899:function(e,t,a){},"9e7c":function(e,t,a){"use strict";a("88bd")},c4c3:function(e,t,a){"use strict";a("d3b7"),a("25f0"),a("3ca3"),a("ddb0"),a("2b3d");var r=a("dfd8");t["a"]={getRestaurants:function(e){var t=e.page,a=e.categoryId,n=new URLSearchParams({page:t,categoryId:a});return r["b"].get("/restaurants?".concat(n.toString()))},getRestaurant:function(e){var t=e.restaurantId;return r["b"].get("/restaurants/".concat(t))}}},dfd8:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return d}));a("d3b7");var r=a("bc3a"),n=a.n(r),s=a("3d20"),c=a.n(s),i="https://forum-express-api.herokuapp.com/api",o=n.a.create({baseURL:i});o.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers["Authorization"]="Bearer ".concat(t)),e}),(function(e){return Promise.reject(e)}));var u=o,d=c.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3})},e47f:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return c}));var r=a("c1df"),n=a.n(r),s={filters:{fromNow:function(e){return e?n()(e).fromNow():"-"}}},c={filters:{emptyImage:function(e){return e||"https://via.placeholder.com/350x220/DFDFDF?text=No+Image"}}}},ee8f:function(e,t,a){}});
//# sourceMappingURL=app.79681c0e.js.map