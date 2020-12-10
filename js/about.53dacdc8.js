(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"121e":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",{staticClass:"title"},[e._v(e._s(e.isUpdate?"Actualizar usuario":"Agregar usuario"))]),a("h2",{staticClass:"subtitle"},[e._v(e._s(e.isUpdate?"Formulario de actualizacion ":"Formulario de creación")+" ")]),a("form",{staticClass:"box",on:{submit:function(t){return t.preventDefault(),e.save(t)}}},[a("div",{staticClass:"field"},[a("label",{attrs:{for:"name"}},[e._v("Nombres")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.employee_name,expression:"user.employee_name"}],staticClass:"input",attrs:{id:"name",type:"text",name:"firstname",requiered:"",placeholder:"Ingrese un nombre"},domProps:{value:e.user.employee_name},on:{input:function(t){t.target.composing||e.$set(e.user,"employee_name",t.target.value)}}})]),a("div",{staticClass:"field"},[a("label",{attrs:{for:"age"}},[e._v("Edad")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.employee_age,expression:"user.employee_age"}],staticClass:"input",attrs:{id:"age",type:"text",name:"apellido",placeholder:"Ingrese su edad",required:""},domProps:{value:e.user.employee_age},on:{input:function(t){t.target.composing||e.$set(e.user,"employee_age",t.target.value)}}})]),a("div",{staticClass:"field"},[a("label",{attrs:{for:"salary"}},[e._v("Salario")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.employee_salary,expression:"user.employee_salary"}],staticClass:"input",attrs:{id:"salary",type:"text",name:"correo",placeholder:"Ingrese el salario",required:""},domProps:{value:e.user.employee_salary},on:{input:function(t){t.target.composing||e.$set(e.user,"employee_salary",t.target.value)}}})]),e._m(0)])])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"field"},[a("button",{staticClass:"button is-primary is-rounded",attrs:{type:"submit"}},[e._v("Guardar")])])}],n=a("3bec"),i={name:"CreateOrUpdate",data:function(){return{user:{employee_name:"",employee_age:null,employee_salary:null}}},computed:{isUpdate:function(){return void 0!=this.$route.params.id}},methods:{save:function(){var e=this;this.loading=!0,this.isUpdate?this.$service.userService.update(this.$route.params.id,this.user).then((function(){e.$router.push("/")})).catch((function(){console.log("Algo salió mal ..")})):this.$service.userService.create(this.user).then((function(){e.$router.push("/")})).catch((function(){console.log("Algo salió mal ..")}))}},mixins:[n["a"]],mounted:function(){this.isUpdate&&this.getUser(this.$route.params.id)}},l=i,o=a("2877"),u=Object(o["a"])(l,s,r,!1,null,null,null);t["default"]=u.exports},1511:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",{staticClass:"title"},[e._v("Usuario")]),a("div",{staticClass:"field"},[a("router-link",{staticClass:"button is-link",attrs:{to:"/"}},[a("span",{staticClass:"icon"},[a("i",{staticClass:"fa fa-arrow-left"})]),a("span",[e._v("Regresar")])])],1),a("tableUser",{attrs:{id:e.user.id,name:e.user.employee_name,age:e.user.employee_age,salary:e.user.employee_salary}})],1)},r=[],n=a("3bec"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table__wrapper"},[a("table",{staticClass:"table is-fullwidth"},[e._m(0),a("tbody",[a("tr",[a("td",{staticClass:"has-text-centered"},[e._v(e._s(e._f("toUppercase")(e.name)))]),a("td",{staticClass:"has-text-centered"},[e._v(e._s(e.age))]),a("td",{staticClass:"has-text-centered"},[e._v(e._s(e._f("currency")(e.salary)))]),a("td",{staticClass:"has-text-centered"},[a("router-link",{attrs:{to:"/Update/"+e.id}},[a("span",{staticClass:"icon"},[a("i",{staticClass:"far fa-edit"})])])],1),a("td",{staticClass:"has-text-centered"},[a("a",{on:{click:function(t){return e.eliminate(e.id)}}},[e._m(1)])])])])])])},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("td",{staticClass:"has-text-centered"},[e._v("Nombre")]),a("td",{staticClass:"has-text-centered"},[e._v("Años")]),a("td",{staticClass:"has-text-centered"},[e._v("Salario")]),a("td",{staticClass:"has-text-centered"},[e._v("Editar")]),a("td",{staticClass:"has-text-centered"},[e._v("Eliminar")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-trash-alt"})])}],o=(a("a9e3"),{name:"TableUser",props:{id:null,name:null,age:null,salary:{type:Number,default:null}},methods:{eliminate:function(e){var t=this;this.$service.userService.eliminate(e).then((function(){t.$router.push("/")}))}},mixins:[n["a"]]}),u=o,c=(a("ba5a"),a("2877")),d=Object(c["a"])(u,i,l,!1,null,null,null),m=d.exports,p={name:"UserId",data:function(){return{user:{}}},components:{tableUser:m},methods:{},mounted:function(){this.getUser()},mixins:[n["a"]]},f=p,v=Object(c["a"])(f,s,r,!1,null,null,null);t["default"]=v.exports},"3bec":function(e,t,a){"use strict";t["a"]={methods:{getUser:function(){var e=this;this.$service.userService.get(this.$route.params.id).then((function(t){console.log(t.data.data),e.user=t.data.data}))}},filters:{toUppercase:function(e){return"string"!==typeof e&&(e=toString(e)),e.toUpperCase()},currency:function(e){return"number"!==typeof e&&(e=parseFloat(e)),e.toLocaleString("es-PE",{style:"currency",currency:"PEN"})}}}},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,a){var s=a("1d80"),r=a("5899"),n="["+r+"]",i=RegExp("^"+n+n+"*"),l=RegExp(n+n+"*$"),o=function(e){return function(t){var a=String(s(t));return 1&e&&(a=a.replace(i,"")),2&e&&(a=a.replace(l,"")),a}};e.exports={start:o(1),end:o(2),trim:o(3)}},7156:function(e,t,a){var s=a("861d"),r=a("d2bb");e.exports=function(e,t,a){var n,i;return r&&"function"==typeof(n=t.constructor)&&n!==a&&s(i=n.prototype)&&i!==a.prototype&&r(e,i),e}},a55b:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",{staticClass:"title"},[e._v("Acceso al sistema")]),a("div",[a("div",{staticClass:"columns is-centered"},[a("div",{staticClass:"column is-4"},[a("form",{staticClass:"box",on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[a("div",{staticClass:"field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.nickname,expression:"nickname"},{name:"focus",rawName:"v-focus"}],staticClass:"input",attrs:{type:"text",name:"nickname",requiered:"",placeholder:"Ingrese su nombre, gracias"},domProps:{value:e.nickname},on:{input:function(t){t.target.composing||(e.nickname=t.target.value)}}})]),e._m(0)])])])])])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"field"},[a("button",{staticClass:"button is-primary is-rounded is-normal",attrs:{type:"submit"}},[e._v("Ingresar")])])}],n={name:"Login",data:function(){return{nickname:null,error:null}},methods:{login:function(){this.nickname?(this.$store.state.isAuthenticated=!0,this.$store.state.nickname=this.nickname,this.$router.push("/")):alert("No podra ingresar sin ingresar su nick jejeje")}},directives:{focus:{inserted:function(e){e.focus()}}}},i=n,l=a("2877"),o=Object(l["a"])(i,s,r,!1,null,null,null);t["default"]=o.exports},a9e3:function(e,t,a){"use strict";var s=a("83ab"),r=a("da84"),n=a("94ca"),i=a("6eeb"),l=a("5135"),o=a("c6b6"),u=a("7156"),c=a("c04e"),d=a("d039"),m=a("7c73"),p=a("241c").f,f=a("06cf").f,v=a("9bf2").f,h=a("58a8").trim,_="Number",g=r[_],b=g.prototype,y=o(m(b))==_,C=function(e){var t,a,s,r,n,i,l,o,u=c(e,!1);if("string"==typeof u&&u.length>2)if(u=h(u),t=u.charCodeAt(0),43===t||45===t){if(a=u.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:s=2,r=49;break;case 79:case 111:s=8,r=55;break;default:return+u}for(n=u.slice(2),i=n.length,l=0;l<i;l++)if(o=n.charCodeAt(l),o<48||o>r)return NaN;return parseInt(n,s)}return+u};if(n(_,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var x,N=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof N&&(y?d((function(){b.valueOf.call(a)})):o(a)!=_)?u(new g(C(t)),a,N):C(t)},E=s?p(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),$=0;E.length>$;$++)l(g,x=E[$])&&!l(N,x)&&v(N,x,f(g,x));N.prototype=b,b.constructor=N,i(r,_,N)}},ba5a:function(e,t,a){"use strict";a("f2b1")},f2b1:function(e,t,a){},f820:function(e,t,a){"use strict";a.r(t);var s,r,n=a("2877"),i={},l=Object(n["a"])(i,s,r,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=about.53dacdc8.js.map