(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cb1f47e4"],{"0ef1":function(t,e,a){"use strict";a("d506")},5652:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("AdminNav"),a("form",{staticClass:"my-4"},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-auto"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newCategoryName,expression:"newCategoryName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"新增餐廳類別..."},domProps:{value:t.newCategoryName},on:{input:function(e){e.target.composing||(t.newCategoryName=e.target.value)}}})]),a("div",{staticClass:"col-auto"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.createCategory(e)}}},[t._v(" 新增 ")])])])]),t.isLoading?a("Spinner"):[a("table",{staticClass:"table"},[a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{attrs:{scope:"col",width:"60"}},[t._v("#")]),a("th",{attrs:{scope:"col"}},[t._v("Category Name")]),a("th",{attrs:{scope:"col",width:"210"}},[t._v("Action")])])]),a("tbody",t._l(t.categories,(function(e){return a("tr",{key:e.id},[a("th",{attrs:{scope:"row"}},[t._v(" "+t._s(e.id)+" ")]),a("td",{staticClass:"position-relative"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.isEditing,expression:"!category.isEditing"}],staticClass:"category-name"},[t._v(" "+t._s(e.name)+" ")]),a("input",{directives:[{name:"show",rawName:"v-show",value:e.isEditing,expression:"category.isEditing"},{name:"model",rawName:"v-model",value:e.name,expression:"category.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.name},on:{input:function(a){a.target.composing||t.$set(e,"name",a.target.value)}}}),a("span",{directives:[{name:"show",rawName:"v-show",value:e.isEditing,expression:"category.isEditing"}],staticClass:"cancel",on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.handleCancel(e.id)}}},[t._v(" ✕ ")])]),a("td",{staticClass:"d-flex justify-content-between"},[a("button",{directives:[{name:"show",rawName:"v-show",value:!e.isEditing,expression:"!category.isEditing"}],staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.toggleIsEditing(e.id)}}},[t._v(" Edit ")]),a("button",{directives:[{name:"show",rawName:"v-show",value:e.isEditing,expression:"category.isEditing"}],staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.updateCategory({categoryId:e.id,name:e.name})}}},[t._v(" Save ")]),a("button",{staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.deleteCategory(e.id)}}},[t._v(" Delete ")])])])})),0)])]],2)},n=[],s=(a("4de4"),a("d81d"),a("b0c0"),a("5530")),i=(a("96cf"),a("1da1")),o=a("e04c"),c=a("be6c"),u=a("dfd8"),d=a("2375"),l={name:"AdminCategories",components:{AdminNav:o["a"],Spinner:d["a"]},data:function(){return{categories:[],newCategoryName:"",isLoading:!0}},created:function(){this.fetchCategories()},methods:{fetchCategories:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,c["a"].categories.get();case 4:if(a=e.sent,console.log(a),r=a.data,"OK"===a.statusText){e.next=9;break}throw new Error(a.statusText);case 9:t.categories=r.categories,t.categories=t.categories.map((function(t){return Object(s["a"])(Object(s["a"])({},t),{},{isEditing:!1,nameCached:""})})),t.isLoading=!1,e.next=19;break;case 14:e.prev=14,e.t0=e["catch"](0),t.isLoading=!1,console.log("error",e.t0),u["a"].fire({icon:"error",title:"無法取得餐廳類別，請稍後再試"});case 19:case"end":return e.stop()}}),e,null,[[0,14]])})))()},createCategory:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c["a"].categories.create({name:t.newCategoryName});case 3:if(a=e.sent,r=a.data,"success"===r.status){e.next=7;break}throw new Error(r.status);case 7:n={id:r.categoryId,name:t.newCategoryName},t.categories.push(n),t.newCategoryName="",e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](0),console.log("error",e.t0),u["a"].fire({icon:"error",title:"無法新增餐廳類別，請稍後再試"});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))()},deleteCategory:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,c["a"].categories.delete({categoryId:t});case 3:if(r=a.sent,console.log(r),n=r.data,"success"===n.status){a.next=8;break}throw new Error(n.status);case 8:e.categories=e.categories.filter((function(e){return e.id!==t})),a.next=15;break;case 11:a.prev=11,a.t0=a["catch"](0),console.log("error",a.t0),u["a"].fire({icon:"error",title:"無法刪除餐廳類別，請稍後再試"});case 15:case"end":return a.stop()}}),a,null,[[0,11]])})))()},toggleIsEditing:function(t){this.categories=this.categories.map((function(e){return e.id===t?Object(s["a"])(Object(s["a"])({},e),{},{isEditing:!e.isEditing,nameCached:e.name}):e}))},updateCategory:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t.categoryId,n=t.name,a.prev=1,a.next=4,c["a"].categories.update({categoryId:r,name:n});case 4:if(s=a.sent,console.log(s),i=s.data,"success"===i.status){a.next=9;break}throw new Error(i.status);case 9:e.toggleIsEditing(r),a.next=16;break;case 12:a.prev=12,a.t0=a["catch"](1),console.log("error",a.t0),u["a"].fire({icon:"error",title:"無法編輯餐廳類別，請稍後再試"});case 16:case"end":return a.stop()}}),a,null,[[1,12]])})))()},handleCancel:function(t){this.categories=this.categories.map((function(e){return e.id===t?Object(s["a"])(Object(s["a"])({},e),{},{name:e.nameCached}):e})),this.toggleIsEditing(t)}}},g=l,m=(a("0ef1"),a("2877")),p=Object(m["a"])(g,r,n,!1,null,"61425e1d",null);e["default"]=p.exports},be6c:function(t,e,a){"use strict";a("b0c0");var r=a("dfd8");e["a"]={categories:{get:function(){return r["b"].get("/admin/categories")},create:function(t){var e=t.name;return r["b"].post("/admin/categories",{name:e})},delete:function(t){var e=t.categoryId;return r["b"].delete("/admin/categories/".concat(e))},update:function(t){var e=t.categoryId,a=t.name;return r["b"].put("/admin/categories/".concat(e),{name:a})}},restaurants:{create:function(t){var e=t.formData;return r["b"].post("/admin/restaurants",e)},get:function(){return r["b"].get("/admin/restaurants")},delete:function(t){var e=t.restaurantId;return r["b"].delete("/admin/restaurants/".concat(e))},getDetail:function(t){var e=t.restaurantId;return r["b"].get("/admin/restaurants/".concat(e))},update:function(t){var e=t.restaurantId,a=t.formData;return r["b"].put("/admin/restaurants/".concat(e),a)}},users:{get:function(){return r["b"].get("/admin/users")},update:function(t){var e=t.userId,a=t.isAdmin;return r["b"].put("/admin/users/".concat(e),{isAdmin:a})}}}},d506:function(t,e,a){},d81d:function(t,e,a){"use strict";var r=a("23e7"),n=a("b727").map,s=a("1dde"),i=a("ae40"),o=s("map"),c=i("map");r({target:"Array",proto:!0,forced:!o||!c},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},e04c:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-3"},[a("h1",[t._v("餐廳後台")]),a("router-link",{attrs:{to:{name:"admin-restaurants"}}},[t._v("Restaurants")]),t._v(" | "),a("router-link",{attrs:{to:"/admin/categories"}},[t._v("Categories")]),t._v(" | "),a("router-link",{attrs:{to:"/admin/users"}},[t._v("Users")])],1)},n=[],s=a("2877"),i={},o=Object(s["a"])(i,r,n,!1,null,null,null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-cb1f47e4.6b24a1bb.js.map