(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1363c928"],{"159b":function(e,t,o){var r=o("da84"),n=o("fdbc"),u=o("17c2"),s=o("9112");for(var i in n){var a=r[i],c=a&&a.prototype;if(c&&c.forEach!==u)try{s(c,"forEach",u)}catch(l){c.forEach=u}}},"17c2":function(e,t,o){"use strict";var r=o("b727").forEach,n=o("a640"),u=o("ae40"),s=n("forEach"),i=u("forEach");e.exports=s&&i?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},4160:function(e,t,o){"use strict";var r=o("23e7"),n=o("17c2");r({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"87b5":function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",[e._v(" 输入: "),o("input",{attrs:{placeholder:"输入"},on:{input:e.iInput}}),o("select",{directives:[{name:"model",rawName:"v-model",value:e.source,expression:"source"}],on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.source=t.target.multiple?o:o[0]}}},e._l(e.sourceArr,(function(t){return o("option",{key:t.value,domProps:{value:t.value}},[e._v(e._s(t.label))])})),0),o("input",{directives:[{name:"model",rawName:"v-model",value:e.inType,expression:"inType"}],attrs:{type:"number",min:"2",max:e.source.length},domProps:{value:e.inType},on:{input:function(t){t.target.composing||(e.inType=t.target.value)}}}),e._v(" 进制 "),o("span",{staticClass:"error"},[e._v(e._s(e.inputError))])]),o("div",[o("div",[e._v(" 输出: "),e._l(e.types,(function(t){return o("label",{key:t},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.outTypes,expression:"outTypes"}],attrs:{type:"checkbox"},domProps:{value:t,checked:Array.isArray(e.outTypes)?e._i(e.outTypes,t)>-1:e.outTypes},on:{change:function(o){var r=e.outTypes,n=o.target,u=!!n.checked;if(Array.isArray(r)){var s=t,i=e._i(r,s);n.checked?i<0&&(e.outTypes=r.concat([s])):i>-1&&(e.outTypes=r.slice(0,i).concat(r.slice(i+1)))}else e.outTypes=u}}}),e._v(" "+e._s(t)+" ")])})),o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.outTypeCustomCheckbox,expression:"outTypeCustomCheckbox"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.outTypeCustomCheckbox)?e._i(e.outTypeCustomCheckbox,null)>-1:e.outTypeCustomCheckbox},on:{change:function(t){var o=e.outTypeCustomCheckbox,r=t.target,n=!!r.checked;if(Array.isArray(o)){var u=null,s=e._i(o,u);r.checked?s<0&&(e.outTypeCustomCheckbox=o.concat([u])):s>-1&&(e.outTypeCustomCheckbox=o.slice(0,s).concat(o.slice(s+1)))}else e.outTypeCustomCheckbox=n}}}),e._v(" 自定义 "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.outTypeCustomInput,expression:"outTypeCustomInput"}],attrs:{type:"number",min:"2",max:e.source.length},domProps:{value:e.outTypeCustomInput},on:{input:function(t){t.target.composing||(e.outTypeCustomInput=t.target.value)}}})])],2),e._l(e.results,(function(t){return o("p",{key:t.num},[e._v(e._s(t.num)+"进制: "+e._s(t.label))])}))],2)])},n=[],u=(o("4160"),o("c975"),o("ac1f"),o("5319"),o("159b"),o("901e")),s=o.n(u),i="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",a={name:"Binary",data:function(){return{results:[],inType:"10",sourceInputStr:"",source:i,inputError:"",outTypes:[2,4,8,10,16,32],types:[2,4,8,10,16,32],outTypeCustomCheckbox:!1,outTypeCustomInput:""}},computed:{sourceArr:function(){return[{label:"通用源",value:i}]}},methods:{iInput:function(e){var t=this,o=e.target.value;try{this.otherToTen(o,this.source.substring(0,this.inType)),this.inputError="";var r=[],n=function(e){var n=t.source.substring(0,e),u=t.otherToTen(o,t.source.substring(0,t.inType));r.push({num:e,label:t.tenToOther(u,n)})};this.outTypeCustomCheckbox&&n(this.outTypeCustomInput),this.outTypes.forEach(n),this.results=r}catch(e){this.inputError=e}},sourceInput:function(e){this.sourceInputStr=e.target.value},otherToTen:function(e,t){for(var o=new s.a(0),r=e.length,n=0;n<r;n++){var u=e.charAt(n);if(t.indexOf(u)<0)throw"输入有误";var i=new s.a(t.indexOf(u)),a=new s.a(t.length),c=i.times(a.exponentiatedBy(r-n-1));o=o.plus(c)}return o.toFormat().replace(/,/g,"")},tenToOther:function(e,t){var o=new s.a(e),r=o,n="";while(r>=t.length)n=t.charAt(r.mod(t.length))+n,r=r.idiv(t.length);return n=t.charAt(r)+n,n}},created:function(){console.log("字符："+this.tenToOther("10",this.source)),console.log("字符："+this.otherToTen("405",this.source))}},c=a,l=o("2877"),p=Object(l["a"])(c,r,n,!1,null,"2ef2ff98",null);t["default"]=p.exports},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);