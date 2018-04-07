webpackJsonp([1],{GK12:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("h1",{staticClass:"title is-centered"},[this._v("Immobili Project")]),this._v(" "),t("h3",{staticClass:"subtitle is-centered"},[this._v("Lista degli immobili di nostro interesse con commenti")]),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var n=s("VU/8")({name:"App"},a,!1,function(e){s("UhUm")},null,null).exports,r=s("/ocq"),o=s("Xxa5"),l=s.n(o),c=s("exGp"),u=s.n(c),v=s("mtWM"),d=s.n(v),m=function(){return d.a.create({baseURL:"http://149.202.157.231:7001/"})},p=function(){return m().get("houses")},f=function(e){return m().get("houses/"+e.id)},_=function(e){return m().post("houses",e)},C=function(e){return m().put("houses/"+e.id,e)},h=function(e){return m().delete("houses/"+e.id)},g={name:"HouseItem",props:["house"],computed:{showIcon:function(){return this.house.visited?'<i class="fas fa-eye" style="color:green;"></i>':'<i class="fa fa-question-circle" style="color:red;"></i>'}},methods:{deleteHouse:function(e){var t=this;return u()(l.a.mark(function s(){return l.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,h(e);case 2:t.$router.push({name:"HousesList"});case 3:case"end":return s.stop()}},s,t)}))()}}},b={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("article",{staticClass:"media"},[s("figure",{staticClass:"media-left"},[s("p",{staticClass:"image is-128x128"},[s("img",{attrs:{src:e.house.image}})])]),e._v(" "),s("div",{staticClass:"media-content"},[s("div",{staticClass:"content"},[s("p",[s("strong",[s("a",{attrs:{href:e.house.url,target:"_blank"}},[e._v(e._s(e.house.name))])]),e._v(" "),s("i",{staticClass:"fa fa-home sm"}),s("strong",[e._v(e._s(e.house.size))]),e._v(" "),s("small",[e._v(e._s(e.house.location))]),e._v(" "),s("i",{staticClass:"fa fa-euro-sign fa-sm"}),e._v(" "),s("small",[s("strong",[e._v(e._s(e.house.price))])]),e._v(" "),s("span",{domProps:{innerHTML:e._s(e.showIcon)}}),e._v(" "),s("br"),e._v(" "),s("small",[e._v(e._s(e.house.description))]),e._v(" "),s("br"),e._v(" "),s("small",[s("b",[s("i",{staticClass:"fa fa-comments blueIcon"}),e._v(" "+e._s(e.house.review))])])])])]),e._v(" "),s("div",{staticClass:"media-right"},[s("router-link",{attrs:{to:{name:"EditHouse",params:{id:e.house.id}}}},[s("button",{staticClass:"button"},[s("i",{staticClass:"fa fa-edit"})])])],1)]),e._v(" "),s("hr")])},staticRenderFns:[]};var w={name:"HousesList",data:function(){return{houses:[],priceOrder:"",sizeOrder:"",filterHousesByVisit:"all"}},computed:{filteredHouses:function(){return"all"==this.filterHousesByVisit?this.houses:"visited"==this.filterHousesByVisit?this.houses.filter(function(e){return 1==e.visited}):"toBeVisited"==this.filterHousesByVisit?this.houses.filter(function(e){return 0==e.visited}):void 0}},mounted:function(){this.getHouses()},methods:{getHouses:function(){var e=this;return u()(l.a.mark(function t(){var s;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p();case 2:s=t.sent,e.houses=s.data;case 4:case"end":return t.stop()}},t,e)}))()},sortByPrice:function(){this.priceOrder&&"ascending"!=this.priceOrder?(this.filteredHouses.sort(function(e,t){return e.price-t.price}),this.priceOrder="ascending",this.$forceUpdate()):(this.filteredHouses.sort(function(e,t){return t.price-e.price}),this.priceOrder="descending",this.$forceUpdate())},sortBySize:function(){this.sizeOrder&&"ascending"!=this.sizeOrder?(this.filteredHouses.sort(function(e,t){return e.size-t.size}),this.sizeOrder="ascending",this.$forceUpdate()):(this.filteredHouses.sort(function(e,t){return t.size-e.size}),this.sizeOrder="descending",this.$forceUpdate())}},components:{HouseItem:s("VU/8")(g,b,!1,function(e){s("bG26")},"data-v-1eafd6cf",null).exports}},x={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("nav",{staticClass:"level"},[s("div",{staticClass:"level-left"}),e._v(" "),s("div",{staticClass:"level-right"},[s("div",{staticClass:"select level-item"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.filterHousesByVisit,expression:"filterHousesByVisit"}],attrs:{selected:"all"},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.filterHousesByVisit=t.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"visited"}},[e._v("Solo Visitati")]),e._v(" "),s("option",{attrs:{value:"toBeVisited"}},[e._v("Solo da visitare")]),e._v(" "),s("option",{attrs:{value:"all"}},[e._v("Tutti")])])]),e._v(" "),s("p",{staticClass:"level-item",on:{click:e.sortBySize}},[e._v("Grandezza")]),e._v(" "),s("p",{staticClass:"level-item",on:{click:e.sortByPrice}},[e._v("Prezzo")]),e._v(" "),s("p",{staticClass:"level-item"},[s("a",{staticClass:"button is-primary"},[s("router-link",{attrs:{to:{name:"NewHouse"}}},[e._v("Nuovo Immobile")])],1)])])]),e._v(" "),s("div",{staticClass:"content"},e._l(e.filteredHouses,function(e,t){return s("HouseItem",{key:t,attrs:{house:e}})}))])},staticRenderFns:[]};var z=s("VU/8")(w,x,!1,function(e){s("OUyA")},"data-v-4b4dc251",null).exports,H={name:"HouseForm",data:function(){return{name:"",location:"",description:"",size:"",image:"",url:"",price:"",review:""}},methods:{addHouse:function(){var e=this;return u()(l.a.mark(function t(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_({name:e.name,location:e.location,description:e.description,size:e.size,image:e.image,url:e.url,price:e.price,review:e.review});case 2:e.$router.push({name:"HousesList"});case 3:case"end":return t.stop()}},t,e)}))()}}},y={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("nav",{staticClass:"level"},[s("div",{staticClass:"level-left"}),e._v(" "),s("div",{staticClass:"level-right"},[s("p",{staticClass:"level-item"},[s("a",{staticClass:"button is-success"},[s("router-link",{attrs:{to:{name:"HousesList"}}},[e._v("Immobili")])],1)])])]),e._v(" "),s("div",{staticClass:"content"},[s("h1",{staticClass:"title is-centered"},[e._v("Aggiungi nuovo Immobile")]),e._v(" "),s("div",{staticClass:"form"},[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[e._v("Titolo")]),e._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"input",attrs:{type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),e._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[e._v("Indirizzo")]),e._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.location,expression:"location"}],staticClass:"input",attrs:{type:"text"},domProps:{value:e.location},on:{input:function(t){t.target.composing||(e.location=t.target.value)}}})])]),e._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[e._v("Descrizione")]),e._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],staticClass:"input",attrs:{type:"text"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}})])]),e._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[e._v("Dimensioni")]),e._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.size,expression:"size"}],staticClass:"input",attrs:{type:"number"},domProps:{value:e.size},on:{input:function(t){t.target.composing||(e.size=t.target.value)}}})])]),e._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[e._v("Immagine")]),e._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.image,expression:"image"}],staticClass:"input",attrs:{type:"text"},domProps:{value:e.image},on:{input:function(t){t.target.composing||(e.image=t.target.value)}}})])]),e._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[e._v("Url")]),e._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],staticClass:"input",attrs:{type:"text"},domProps:{value:e.url},on:{input:function(t){t.target.composing||(e.url=t.target.value)}}})])]),e._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[e._v("Prezzo")]),e._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.price,expression:"price"}],staticClass:"input",attrs:{type:"number"},domProps:{value:e.price},on:{input:function(t){t.target.composing||(e.price=t.target.value)}}})])]),e._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[e._v("Commenti")]),e._v(" "),s("div",{staticClass:"control"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.review,expression:"review"}],staticClass:"textarea",domProps:{value:e.review},on:{input:function(t){t.target.composing||(e.review=t.target.value)}}})])]),e._v(" "),s("div",{staticClass:"field"},[s("button",{staticClass:"button",on:{click:e.addHouse}},[e._v("Aggiungi")])])])])])},staticRenderFns:[]},P=s("VU/8")(H,y,!1,null,null,null).exports,k={name:"EditHouse",data:function(){return{name:"",location:"",description:"",size:"",image:"",url:"",price:"",review:"",visited:""}},mounted:function(){this.getHouse()},methods:{getHouse:function(){var e=this;return u()(l.a.mark(function t(){var s,i;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f({id:e.$route.params.id});case 2:s=t.sent,i=s.data[0],e.name=i.name,e.location=i.location,e.description=i.description,e.size=i.size,e.image=i.image,e.url=i.url,e.price=i.price,e.review=i.review,e.visited=i.visited;case 13:case"end":return t.stop()}},t,e)}))()},updateHouse:function(){var e=this;return u()(l.a.mark(function t(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C({id:e.$route.params.id,name:e.name,location:e.location,description:e.description,size:e.size,image:e.image,url:e.url,price:e.price,review:e.review,visited:e.visited});case 2:e.$router.push({name:"HousesList"});case 3:case"end":return t.stop()}},t,e)}))()},handleVisited:function(){return document.querySelector("#visitedCheckbox").checked?this.visited=!0:this.visited=!1}}},N={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("nav",{staticClass:"level"},[s("div",{staticClass:"level-left"}),e._v(" "),s("div",{staticClass:"level-right"},[s("p",{staticClass:"level-item"},[s("a",{staticClass:"button is-success"},[s("router-link",{attrs:{to:{name:"HousesList"}}},[e._v("Immobili")])],1)])])]),e._v(" "),s("div",{staticClass:"content"},[s("h1",{staticClass:"title is-centered"},[e._v("Modifica Immobile")]),e._v(" "),s("div",{staticClass:"form"},[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[e._v("Titolo")]),e._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"input",attrs:{type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),e._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[e._v("Indirizzo")]),e._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.location,expression:"location"}],staticClass:"input",attrs:{type:"text"},domProps:{value:e.location},on:{input:function(t){t.target.composing||(e.location=t.target.value)}}})])]),e._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[e._v("Descrizione")]),e._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],staticClass:"input",attrs:{type:"text"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}})])]),e._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[e._v("Dimensioni")]),e._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.size,expression:"size"}],staticClass:"input",attrs:{type:"number"},domProps:{value:e.size},on:{input:function(t){t.target.composing||(e.size=t.target.value)}}})])]),e._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[e._v("Immagine")]),e._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.image,expression:"image"}],staticClass:"input",attrs:{type:"text"},domProps:{value:e.image},on:{input:function(t){t.target.composing||(e.image=t.target.value)}}})])]),e._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[e._v("Url")]),e._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],staticClass:"input",attrs:{type:"text"},domProps:{value:e.url},on:{input:function(t){t.target.composing||(e.url=t.target.value)}}})])]),e._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[e._v("Prezzo")]),e._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.price,expression:"price"}],staticClass:"input",attrs:{type:"number"},domProps:{value:e.price},on:{input:function(t){t.target.composing||(e.price=t.target.value)}}})])]),e._v(" "),s("label",{staticClass:"checkbox"},[s("input",{attrs:{type:"checkbox",id:"visitedCheckbox"},domProps:{checked:e.visited},on:{change:e.handleVisited}}),e._v("\n                Visitato?\n            ")]),e._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[e._v("Commenti")]),e._v(" "),s("div",{staticClass:"control"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.review,expression:"review"}],staticClass:"textarea",domProps:{value:e.review},on:{input:function(t){t.target.composing||(e.review=t.target.value)}}})])]),e._v(" "),s("div",{staticClass:"field"},[s("button",{staticClass:"button",on:{click:e.updateHouse}},[e._v("Aggiorna")])])])])])},staticRenderFns:[]},U=s("VU/8")(k,N,!1,null,null,null).exports;i.a.use(r.a);var V=new r.a({routes:[{path:"/houses",name:"HousesList",component:z},{path:"/houses/new",name:"NewHouse",component:P},{path:"/houses/:id",name:"EditHouse",component:U}]});s("GK12");i.a.config.productionTip=!1,new i.a({el:"#app",router:V,components:{App:n},template:"<App/>"})},OUyA:function(e,t){},UhUm:function(e,t){},bG26:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.cd67b033e16c9f4f0183.js.map