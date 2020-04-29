(function(t){function e(e){for(var n,r,s=e[0],o=e[1],c=e[2],d=0,p=[];d<s.length;d++)r=s[d],i[r]&&p.push(i[r][0]),i[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(p.length)p.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],n=!0,s=1;s<a.length;s++){var o=a[s];0!==i[o]&&(n=!1)}n&&(l.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},l=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=o;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar"},[a("div",{staticClass:"container"},[a("ul",{staticClass:"navbar-list"},[t._m(0),a("li",{staticClass:"navbar-item logo-filler2"},[t._v(".")]),a("li",{staticClass:"navbar-item"},[a("router-link",{staticClass:"navbar-link",attrs:{to:"/"}},[t._v("Kodu")])],1),a("li",{staticClass:"navbar-item"},[a("router-link",{staticClass:"navbar-link",attrs:{to:"/screenshots"}},[t._v("Ekraanipildid")])],1),a("li",{staticClass:"navbar-item"},[a("router-link",{staticClass:"navbar-link",attrs:{to:"/download"}},[t._v("Loo marsruut")])],1),a("li",{staticClass:"navbar-item navbar-right"},[a("router-link",{staticClass:"navbar-link",attrs:{to:"/about"}},[t._v("Meielt")])],1)])])]),a("div",{staticClass:"content"},[a("router-view")],1),a("div",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("hr",{staticClass:"phone-br"}),a("img",{staticClass:"footer-logo",attrs:{src:"assets/goodday2.png"}}),a("br",{staticClass:"phone-br"}),a("span",[t._v("© GoodDay Team – "+t._s(t.year))])])]),a("div",{staticClass:"tabbar"},[a("tabbar-item",{ref:"home",attrs:{icon:"&#xe902;",href:"/"}},[t._v("Kodu")]),a("tabbar-item",{ref:"screenshots",attrs:{icon:"&#xf009;",href:"/screenshots"}},[t._v("Ekraanipildid")]),a("tabbar-item",{ref:"download",attrs:{icon:"&#xe9c7;",href:"/download"}},[t._v("Loo marsruut")]),a("tabbar-item",{ref:"about",attrs:{icon:"&#xf05a;",href:"/about"}},[t._v("Meielt")])],1)])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"navbar-item"},[a("div",{staticClass:"logo-filler"})])}],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tabbar__item"},[a("button",{staticClass:"tabbar__button",class:{selected:t.selected},on:{click:function(e){return t.click()}}},[a("div",{staticClass:"tabbar__icon",domProps:{innerHTML:t._s(t.icon)}}),a("div",{staticClass:"tabbar__label"},[t._t("default")],2)])])},s=[],o={name:"tabbar-item",props:{icon:String,href:String},data:function(){return{selected:!1}},methods:{click:function(){this.$router.push(this.href)}}},c=o,u=a("2877"),d=Object(u["a"])(c,r,s,!1,null,null,null),p=d.exports,m={components:{TabbarItem:p},data:function(){return{date:null,year:null}},created:function(){this.date=new Date,this.year=this.date.getFullYear()},mounted:function(){this.$route.name in this.$refs&&(this.$refs[this.$route.name].selected=!0)}},v=m,h=Object(u["a"])(v,i,l,!1,null,null,null),f=h.exports,b=a("8c4f"),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("hero",{attrs:{title:"Tee oma päeva paremaks",image:"phone.png"}},[t._v("\n    Tõmba uus GoodDay rakendus ja kavanda ise oma hea päeva!"),a("br"),t._v('Proovi ka "Lihtne režiimi" ja naudi täielikult funktsionaalset rakendust koos kaardi, kalendri ja automaatse marsruudi planeerimisega.\n    '),a("div",{staticClass:"hero__button"},[a("router-link",{staticClass:"button button-primary",attrs:{to:"/download"}},[t._v("Loo marsruut!")])],1)])],1)},g=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row hero container"},[a("div",{staticClass:"one-half column hero__left"},[a("div",{style:'content: url("assets/'+t.image+'");max-width: 80%;margin-top: -200px;'})]),null!=t.image?a("div",{staticClass:"one-half column hero__right"},[a("h3",[a("strong",[t._v(t._s(t.title))])]),a("p",[t._t("default")],2)]):t._e()])},k=[],S={name:"hero",props:{title:String,image:{type:String,default:null}}},C=S,x=Object(u["a"])(C,y,k,!1,null,null,null),w=x.exports,j={name:"home-page",components:{Hero:w}},$=j,O=Object(u["a"])($,_,g,!1,null,null,null),E=O.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container deskcont"},[a("hero-full-width",{attrs:{title:"Loo uus marsruut"}},[a("div",{staticStyle:{"padding-top":"25px"}},[a("strong",[t._v("Töö alustamiseks palun tehke oma allalaadimise valik:")]),a("br")])]),a("div",{staticClass:"buttons"},[a("download-button",{attrs:{title1:"Google Play",title2:"(Android)"}},[t._v("")]),a("download-button",{attrs:{title1:"App Store",title2:"(iOS)"}},[t._v("")])],1),t._m(0)],1)},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"padding-top":"30px","padding-bottom":"40px"}},[a("p",[t._v("Veebilehe versioon on varsti saadaval!")])])}],P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hero hero2"},[t.empty?a("div",{staticClass:"columns hero__left",staticStyle:{"margin-top":"50px"}},[a("h4",[t._v(t._s(t.title))])]):a("div",{staticClass:"columns hero__left",staticStyle:{"margin-top":"50px"}},[a("h4",[t._v(t._s(t.title))]),a("p",[t._t("default")],2)])])},L=[],H={name:"hero-full-width",props:{title:String,empty:{type:Boolean,default:!1}}},A=H,D=Object(u["a"])(A,P,L,!1,null,null,null),G=D.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{display:"inline-block",margin:"20px"}},[a("button",{staticClass:"button-primary button__download",staticStyle:{display:"block",margin:"0 auto"},on:{click:t.buttonClick}},[a("span",{staticStyle:{"font-family":"icomoon","font-size":"60px","font-weight":"400"}},[t._t("default")],2),a("br"),a("br"),a("span",[t._v(t._s(t.title1))]),a("br"),null===t.title2?a("span",{staticStyle:{visibility:"hidden"}},[t._v(".")]):a("span",[t._v(t._s(t.title2))])])])},I=[],z={name:"download-button",props:{title1:String,title2:{type:String,default:null},link:{type:String,default:null},ioslink:{type:String,default:null},redirect:{type:String,default:null},icontype:{type:String,default:""}},methods:{buttonClick:function(){null!=this.redirect&&this.$router.push(this.redirect),null===this.ioslink?null!==this.link&&(location.href=this.link):navigator.userAgent.includes("like Mac OS X")&&navigator.userAgent.includes("Mobile")?location.href="itms-services://?action=download-manifest&url="+this.ioslink:location.href=this.link}}},F=z,J=Object(u["a"])(F,B,I,!1,null,null,null),K=J.exports,R={name:"download-page",components:{HeroFullWidth:G,DownloadButton:K}},V=R,W=Object(u["a"])(V,M,T,!1,null,null,null),X=W.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("hero-social-media",{attrs:{title:"Meielt"}},[a("the-team",{attrs:{title:"Meeskonna liikmed",items:t.members}})],1)},Z=[],q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row hero container deskcont"},[a("div",{staticClass:"seven columns hero__left",staticStyle:{"margin-top":"50px"}},[a("h4",[t._v(t._s(t.title))]),a("p",[t._t("default")],2)])])},N=[],Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"rawlink",attrs:{href:t.to,target:"_blank"}},[t._v(t._s(t.to))])},U=[],tt={name:"rawlink",props:{to:String}},et=tt,at=Object(u["a"])(et,Q,U,!1,null,null,null),nt=at.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"padding-top":"25px"}},[a("strong",[t._v(t._s(t.title)+":")]),a("br"),a("div",{staticStyle:{"padding-left":"10px"}},t._l(t.items,function(e){return a("span",[t._v("– "),a("span",{domProps:{innerHTML:t._s(e.message)}}),a("br")])}),0)])},lt=[],rt={name:"the-team",props:{title:String,items:Array}},st=rt,ot=Object(u["a"])(st,it,lt,!1,null,null,null),ct=ot.exports,ut={name:"hero-social-media",components:{Rawlink:nt,TheTeam:ct},props:{title:String}},dt=ut,pt=Object(u["a"])(dt,q,N,!1,null,null,null),mt=pt.exports,vt={name:"about-page",components:{HeroSocialMedia:mt,TheTeam:ct},data:function(){return{members:[{message:"Sergei Zarembo"},{message:"Dmitri Golovatš"},{message:"Igor Podgainõi"}]}}},ht=vt,ft=Object(u["a"])(ht,Y,Z,!1,null,null,null),bt=ft.exports,_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("hero-social-media",{attrs:{title:"Ekraanipiltide galerii"}},[a("div",{staticStyle:{visibility:"hidden"}},[t._v(" ")]),a("inline-pic",{attrs:{image:"1.jpg"}}),a("div",{staticStyle:{visibility:"hidden"}},[t._v(" ")]),a("inline-pic",{attrs:{image:"2.jpg"}}),a("div",{staticStyle:{visibility:"hidden"}},[t._v(" ")]),a("inline-pic",{attrs:{image:"3.jpg"}}),a("div",{staticStyle:{visibility:"hidden"}},[t._v(" ")]),a("inline-pic",{attrs:{image:"4.jpg"}}),a("div",{staticStyle:{visibility:"hidden"}},[t._v(" ")]),a("inline-pic",{attrs:{image:"5.jpg"}}),a("div",{staticStyle:{visibility:"hidden"}},[t._v(" ")]),a("inline-pic",{attrs:{image:"6.jpg"}})],1)},gt=[],yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-item-size thepicture",style:'content: url("assets/'+t.image+'");max-width:100%;margin-top: 20px;margin-bottom: 55px;'+t.style2})},kt=[],St={name:"inline-pic",props:{image:{type:String,default:null},style2:{type:String,default:""}}},Ct=St,xt=Object(u["a"])(Ct,yt,kt,!1,null,null,null),wt=xt.exports,jt={name:"screenshots-page",components:{HeroSocialMedia:mt,InlinePic:wt}},$t=jt,Ot=Object(u["a"])($t,_t,gt,!1,null,null,null),Et=Ot.exports;n["a"].use(b["a"]);const Mt=new b["a"]({scrollBehavior(){return{x:0,y:0}},routes:[{path:"/",name:"home",component:E},{path:"/download",name:"download",component:X},{path:"/about",name:"about",component:bt},{path:"/screenshots",name:"screenshots",component:Et}]});Mt.afterEach((t,e)=>{0!==Mt.app.$children.length&&(Mt.app.$children[0].$children.forEach(t=>{"tabbar-item"===t.$options.name&&(t.selected=!1)}),t.name in Mt.app.$children[0].$refs&&(Mt.app.$children[0].$refs[t.name].selected=!0))});var Tt=Mt;n["a"].config.productionTip=!1,new n["a"]({router:Tt,render:function(t){return t(f)}}).$mount("#app")}});