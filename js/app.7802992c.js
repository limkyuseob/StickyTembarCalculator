(function(t){function e(e){for(var a,c,l=e[0],s=e[1],i=e[2],u=0,v=[];u<l.length;u++)c=l[u],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&v.push(n[c][0]),n[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);g&&g(e);while(v.length)v.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,l=1;l<r.length;l++){var s=r[l];0!==n[s]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=r[0]))}return t}var a={},n={app:0},o=[];function c(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=a,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(r,a,function(e){return t[e]}.bind(null,a));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/StickyTembarCalculator/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var i=0;i<l.length;i++)e(l[i]);var g=s;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"219f":function(t,e,r){t.exports=r.p+"img/nothing-logo-sqare.03374889.png"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"brown lighten-4"}},[a("div",{staticClass:"d-flex align-center grey--text text--darken-4"},[a("a",{attrs:{href:"https://smartstore.naver.com/sscm"}},[a("v-img",{attrs:{src:r("219f"),width:"40",height:"40"}})],1),t._v("    "),a("a",{attrs:{href:"https://smartstore.naver.com/sscm"}},[a("v-img",{attrs:{src:r("5e12"),width:"90",height:"40"}})],1)])]),a("v-main",[a("Calculator")],1)],1)},o=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-img",{staticClass:"white--text align-end text-center",attrs:{src:r("7454"),height:t.height,gradient:"to bottom, rgba(0,0,0,.53), rgba(0,0,0,.7)"}},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"1",md:"2"}}),a("v-col",[a("h2",[t._v("노씽공방 붙이는 템바보드 계산기")]),a("v-divider",{attrs:{color:"white"}}),a("h3",{staticClass:"grey--text text--lighten-1"},[t._v("Tembar Board Calculator")])],1),a("v-col",{attrs:{cols:"1",md:"2"}})],1)],1)],1),a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"1",md:"2"}}),a("v-col",[a("h5",[t._v(" 제품은 "),a("span",{staticClass:"red--text text--accent-2"},[t._v("cm")]),t._v("가 아닌 "),a("span",{staticClass:"red--text text--accent-2"},[t._v("mm")]),t._v("기준입니다. "),a("span",{staticClass:"red--text text--accent-2"},[t._v("(10cm = 100mm)")])])]),a("v-col",{attrs:{cols:"1",md:"2"}})],1),a("v-row",{staticClass:"mt-1"},[a("v-col",{attrs:{cols:"1",md:"2"}}),a("v-col",t._l(t.places,(function(e,r){return a("v-card",{key:r,staticClass:"pa-3 pb-1",attrs:{color:"grey lighten-4",tile:""}},[a("v-row",[a("v-col",[a("v-icon",{staticClass:"mb-2",attrs:{size:"25",color:"brown"}},[t._v("mdi-calculator")]),a("span",{staticClass:"font-weight-black text-h6"},[t._v("붙이는 템바보드 계산기")])],1)],1),a("v-divider",{staticClass:"mt-1 mb-2"}),a("v-icon",{attrs:{color:"black",size:"20"}},[t._v("mdi-ruler-square")]),a("span",{staticClass:"font-weight-bold"},[t._v(" - 치수 입력")]),a("span",{staticClass:"font-weight-black text-body-2"},[t._v(" (mm)")]),a("v-row",{staticClass:"pt-3"},[a("v-col",[a("v-text-field",{attrs:{label:"가로",outlined:"",type:"number",color:"brown lighten-1"},model:{value:e.width,callback:function(r){t.$set(e,"width",r)},expression:"pl.width"}})],1),a("v-col",[a("v-text-field",{attrs:{label:"세로",outlined:"",type:"number",color:"brown lighten-1"},model:{value:e.height,callback:function(r){t.$set(e,"height",r)},expression:"pl.height"}})],1)],1),a("v-btn",{staticClass:"mb-4 font-weight-bold",attrs:{width:"100%",color:"teal lighten-3"},on:{click:function(r){return t.getCalculatedResult(e)}}},[t._v("계산하기")]),a("br"),a("v-icon",{attrs:{color:"black",size:"20"}},[t._v("mdi-lightbulb-variant")]),a("span",{staticClass:"font-weight-bold"},[t._v(" - 계산 결과")]),a("v-sheet",{staticClass:"mt-2 mb-2 pt-3 text-center",attrs:{color:"rgba(140, 158, 255, .3)",height:"45",rounded:""}},[a("h4",[t._v(t._s(e.result))])])],1)})),1),a("v-col",{attrs:{cols:"1",md:"2"}})],1),a("v-row",[a("v-col",{attrs:{cols:"1",md:"2"}}),a("v-col",[a("h5",[t._v("아래 이미지를 클릭해서 주문하실 사이트로 이동해주세요!")])]),a("v-col",{attrs:{cols:"1",md:"2"}})],1),a("v-row",[a("v-col",{attrs:{cols:"1",md:"2"}}),a("v-col",[a("a",{attrs:{href:"https://smartstore.naver.com/sscm/products/6328773563"}},[a("v-img",{attrs:{src:r("9407"),width:"50",height:"50"}})],1)]),a("v-col"),a("v-col",{attrs:{cols:"1",md:"2"}})],1)],1)],1)},l=[],s=(r("b0c0"),2400);function i(t,e){if(0==(t&&e))return"가로 세로를 입력해주세요";var r=0,a=0,n=parseInt(s/e);return 0==n&&(n=1),r=t>300*n?Math.ceil(t*Math.ceil(e/2400)/(300*n)):Math.ceil(Math.ceil(Math.ceil(e/2400)/parseInt(300*n/t))),r>1&&(a=parseInt(r/2),r%=2),"300: "+r+"개, 600: "+a+"개"}var g={data:function(){return{places:[{id:1,name:"기본",type:"",molding:"",width:"",height:"",result:"결과"}],place:{id:-1,name:"",type:"",molding:"",width:"",height:"",result:""}}},methods:{deletePlace:function(t){confirm(t.name+"을 목록에서 삭제 하시겠습니까?")&&console.log("remove")},getCalculatedResult:function(t){console.log(t),t.result=i(t.width,t.height)}},computed:{height:function(){switch(this.$vuetify.breakpoint.name){case"xs":return 120;case"sm":return 120;case"md":return 150;case"lg":return 150;case"xl":return 180}return 200}}},u=g,v=r("2877"),d=r("6544"),h=r.n(d),p=r("8336"),f=r("b0af"),m=r("62ad"),R=r("a523"),S=r("ce7e"),B=r("132d"),A=r("adda"),U=r("0fd9"),I=r("8dd9"),E=r("8654"),F=Object(v["a"])(u,c,l,!1,null,null,null),x=F.exports;h()(F,{VBtn:p["a"],VCard:f["a"],VCol:m["a"],VContainer:R["a"],VDivider:S["a"],VIcon:B["a"],VImg:A["a"],VRow:U["a"],VSheet:I["a"],VTextField:E["a"]});var w={name:"App",components:{Calculator:x},data:function(){return{}},beforeCreate:function(){document.title="노씽공방 템바보드 계산기"}},b=w,y=r("7496"),C=r("40dc"),V=r("f6c4"),z=Object(v["a"])(b,n,o,!1,null,null,null),k=z.exports;h()(z,{VApp:y["a"],VAppBar:C["a"],VImg:A["a"],VMain:V["a"]});var j=r("f309");a["a"].use(j["a"]);var O=new j["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:O,render:function(t){return t(k)}}).$mount("#app")},"5e12":function(t,e,r){t.exports=r.p+"img/nothinglogo.dcea4254.png"},7454:function(t,e,r){t.exports=r.p+"img/tree-background.1f1da531.jpg"},9407:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARQAAAEUCAMAAADdrjlLAAACB1BMVEX////+//79//78///4/vz2/vv2/vr0/ffz/fjx/ffv/PPs/PPs+/Dr+/Ln+u/k+uvi+eri+eng+eje+Obd+Ofb9+Ta9+TV9uDU9t/T9t7R9dzP9dvP9NrN9NnG89TE8tLA8c+/8c++8c298c268cu68Mq478i178ey7sSx7sOv7sGr7L6l67ij6rec6LGZ6K6W6K+V56qU56mQ5qiP5qqL5KOK5KKJ5aWI5aSG5KCB45uA45t74pp64JN54pl14Zd14JJ04JJz4JRy4JJw349w345v341s3Ylr3Ylm3oxl3IRj24Je3IRe24Rd2Xxa24FZ2XlT2XxT13RS13VR13RO2HhO2HdN2HVL1m9K1W1G1WxB1GhB1Gc+0mQ80mE50V830V8yz1kwz1grzlQqzlIn0FomzU8lzE4kz1gizE0hzlYdykgaykcZzU8VyUMVyUETy0sSyEARy0gNyD4NxzsKyUQJxjgIxjgHyEIHxTYExTQAyD4AyD0Axz4Axz0AxzwAxzsAxzoAxjkAxjgAxjcAxTcAxTYAxTUAxTQAxTMAxDMAxDIAxDEAxDAAxC8AxC4AwzAAwy8Awy4AwywAwysAwi0AwiwAwioAwigAwSgAwScAwSYAwSUAwCUAwCQAwCMAwCIAwCEAvyIAvyEAvyAAvx8Avx4Avh0AvhwAvRkAvRgAvRcAvRbpvh5xAAAEo0lEQVR4nO3c53NUVRiA8SNYsYvYO8aIvaBiQ6XYe++VKBYUK8rFm4ZJDIkKC4muIVlM2aD8kX5wHJ2zz5YPd8jOnuf5uPPunJzf3HdmZzJzQ6/VFJb6D2jHRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBikDJBiuHKm3RocpgVsCFikAZ2b5u7R1t0dp120cKuFARKBM9oW3qmSjgQkWglLYuW2qLf1u2tVTAhUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBjhbKipVnQmedfgxOn4LTK1d0GMr6A19D347ehNNP4fSB9R2GsunwHmj04Dfn0vRzf9L04U0dhrJhGr+azb1G08/g9PSGNFB6+6q3iRKX/7LzIlHistm3RKmtercocfnYvktEictm3lkuSly+eL8ocfno5OWixGVTW44TJS5ffEiUuHy43C1KXFb+8CRR4nZVHxMlLv9h+lpR4rJfPzlVlLis+rQoNQ1WrhclLpv8/AxR4rLq86LUNDB3oyhxeemrc0SJy+ZfFaWm/oVbRYnL9353vihx2ewbotTUt3Bn4ijZ0O48+igfH78wbZSBL3YMxCpZ5c3wxAxNJ4JSfuTeuV01n87ffF/KT8r04+H9cvwSsnzks4+GcDoNlIMvhK7ycM0CDY/g29pSQXkxhIerMUq9EkI5fstUi2/xSwglXDH5Y2vPSkoo4YFFUf7XPyjL351paYGSQgmX7t3TyrOSFkq4q9rKOYmhhLf/aGGBUkO5eOd48wVKDSXcXu1rek5yKOH1uaYLlB7KeTv2NVug9FDCLfP9Tc5JECW8Mt9kgVJEOfvL0vcNz0kRJdwwO9jwnCRRwrMLDRcoTZTTPp1spJImSriusrvBOYmihCerDR6VVFFO/vi3+iqpooRrpobq/rBNFiU8ulj3x0q6KCd+8Hu9BUoXJVxVHqmzQAmjhAfr/XcsZZRj35vmBeo4lI3zg9DcSzR7WemnAZqe39hhKJuPjEN/vYzD9yz+TNNHNncYyqru1VD3BTh8wuorcXpVh6EcpUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSB2gdlomepLf6rZ6KACxWBMrZtTdfVbVHXmm1jBVyoCJS8v7S/1BbtL/W3+i6jRhWB0ts70DYVcp1iUDosUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRIFEgUSBRoL8BCGb6n8DmL7gAAAAASUVORK5CYII="}});
//# sourceMappingURL=app.7802992c.js.map