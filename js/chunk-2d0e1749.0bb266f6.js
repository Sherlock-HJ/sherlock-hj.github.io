(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e1749"],{"7b08":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[e._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4 "},[a("p",{domProps:{innerHTML:e._s(e.periodTime)}},[e._v("显示"),a("br"),e._v("结果")])]),a("div",{staticClass:"col-sm-4 "},[e._v(" 选择日期:"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.day,expression:"day"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:e.day},on:{input:function(t){t.target.composing||(e.day=t.target.value)}}})]),a("div",{staticClass:"col-sm-4 "},[e._v(" 选择时间:"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.time,expression:"time"}],staticClass:"form-control",attrs:{type:"time"},domProps:{value:e.time},on:{input:function(t){t.target.composing||(e.time=t.target.value)}}})])])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-header"},[a("h1",[e._v("时间查询 "),a("small",[e._v("过去和未来")])])])}],i=(a("ac1f"),a("5319"),{name:"HowLong",data:function(){return{day:"",time:""}},computed:{periodTime:function(){var e=this.day,t=this.time,a=e+" "+t,o=new Date(a.replace(/-/g,"/")),s=o.getTime(),i=new Date,r=i.getTime(),n=Math.abs(r-s),l=Math.floor(n/1e3/60/60)%24,c=Math.floor(n/1e3/60)%60,m=Math.floor(n/1e3)%60,d=Math.floor(n/1e3/60/60/24),u=Math.floor(n/1e3/60/60),v=Math.floor(n/1e3/60),p=Math.floor(n/1e3),f="<br>"+d+"天"+l+"小时"+c+"分钟"+m+"秒",h="<br>或者"+u+"小时"+c+"分钟"+m+"秒",w="<br>或者"+v+"分钟"+m+"秒",_="<br>或者"+p+"秒",g=null;return s<r?g="距离"+a+"已过去:":s===r||(g="在未来"),isNaN(d)?"请选择":g+f+h+w+_}},methods:{}}),r=i,n=a("2877"),l=Object(n["a"])(r,o,s,!1,null,"fa86115e",null);t["default"]=l.exports}}]);