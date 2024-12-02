(function(){"use strict";var t={5733:function(t,e,r){var a=r(5471),o=r(5668),s=r(3449),i=r(5322),n=function(){var t=this,e=t._self._c;return e(o.A,[e("Header"),e(i.A,[e(s.A,{attrs:{fluid:""}},[e("router-view")],1)],1)],1)},l=[],d=r(7814),c=r(7314),u=r(6930),m=r(8983),p=r(7296),h=r(2809),g=r(833),k=r(1034),f=r(2367),A=function(){var t=this,e=t._self._c;return e(d.A,{attrs:{app:"",color:"primary",dark:""}},[e(f.sw,{staticClass:"header-title"},[t._v(t._s(t.$t("header.title")))]),e(k.A),t.$vuetify.breakpoint.mdAndUp?[e(c.A,{attrs:{text:"",to:"/about"}},[t._v(t._s(t.$t("header.about")))]),e(c.A,{attrs:{text:"",to:"/map"}},[t._v(t._s(t.$t("header.map")))])]:[e(g.A,{staticClass:"header-menu",attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:r,attrs:a}){return[e(c.A,t._g(t._b({attrs:{icon:""}},"v-btn",a,!1),r),[e(u.A,[t._v("mdi-menu")])],1)]}}])},[e(m.A,[e(p.A,{attrs:{to:"/about"}},[e(h.UZ,[t._v(t._s(t.$t("header.about")))])],1),e(p.A,{attrs:{to:"/map"}},[e(h.UZ,[t._v(t._s(t.$t("header.map")))])],1)],1)],1)],e(g.A,{staticClass:"header-languages",attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:r,attrs:a}){return[e(c.A,t._g(t._b({attrs:{icon:""}},"v-btn",a,!1),r),[e(u.A,[t._v("mdi-earth")])],1)]}}])},[e(m.A,[e(p.A,{on:{click:function(e){return t.setLanguage("en")}}},[e(h.UZ,[t._v("English")])],1),e(p.A,{on:{click:function(e){return t.setLanguage("ru")}}},[e(h.UZ,[t._v("Русский")])],1)],1)],1)],2)},v=[],_={name:"Header",methods:{setLanguage(t){this.$i18n.locale=t}}},b=_,y=r(1656),M=(0,y.A)(b,A,v,!1,null,"dbb60fa8",null),$=M.exports,w={components:{Header:$}},S=w,C=(0,y.A)(S,n,l,!1,null,null,null),E=C.exports,I=r(173),T=r(687),x=r(2938),O=r(5420),P=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(s.A,[e(T.A,{staticClass:"pa-5"},[e(x.ri,[e("h1",{staticClass:"about-title"},[t._v(t._s(t.$t("about.title")))])]),e(x.OQ,[e("div",[e("p",[t._v(t._s(t.$t("about.intro")))]),e("h2",{staticClass:"about-section-title"},[t._v(t._s(t.$t("about.sectionTitleAbout")))]),e("p",[t._v(t._s(t.$t("about.sectionContentAbout")))]),e("h2",{staticClass:"about-section-title"},[t._v(t._s(t.$t("about.sectionTitleMap")))]),e("p",[t._v(t._s(t.$t("about.sectionContentMap")))]),e("ol",[e("li",[t._v(" "+t._s(t.$t("about.list.item1"))+" "),e("ul",[e("li",[t._v(" "+t._s(t.$t("about.list.item1Details.a"))+" "),e("a",{attrs:{href:"https://geocode.maps.co/"}},[t._v("https://geocode.maps.co/")]),t._v(". ")]),e("li",[t._v(t._s(t.$t("about.list.item1Details.b")))])])]),e("li",[t._v(t._s(t.$t("about.list.item2")))]),e("li",[t._v(t._s(t.$t("about.list.item3")))]),e("li",[t._v(t._s(t.$t("about.list.item4")))]),e("li",[t._v(t._s(t.$t("about.list.item5")))])]),e("p",[t._v(t._s(t.$t("about.storageNote")))]),e("h2",{staticClass:"about-section-title"},[t._v(t._s(t.$t("about.exampleTitle")))]),e(O.A,{staticClass:"mt-2 about-image",attrs:{src:r(3465)}})],1)])],1)],1)},L=[],N=(0,a.pM)({__name:"About",setup(t){return{__sfc:!0}}}),j=N,D=(0,y.A)(j,P,L,!1,null,"0a26ba1f",null),U=D.exports,V=r(4414),F=r(9136),J=r(2756),z=function(){var t=this,e=t._self._c;return e(s.A,{attrs:{fluid:""}},[e(J.A,[e(V.A,{attrs:{cols:t.$vuetify.breakpoint.smAndDown?12:4,order:"2","order-md":"1"}},[e(m.A,t._l(t.markers,(function(r,a){return e(p.A,{key:a,on:{mouseenter:function(e){t.hoveredMarker=r.id},mouseleave:function(e){t.hoveredMarker=null},click:function(e){return t.onListItemClick(r)}}},[e(h.pr,[e(h.UZ,[t.isSelected(r.id)?e(u.A,[t._v("mdi-arrow-right")]):t._e(),t._v(" "+t._s(t.$t("map.marker"))+" "+t._s(a+1)+" ")],1),e(h.w,[t._v(" "+t._s(r.latlng.lat.toFixed(4))+", "+t._s(r.latlng.lng.toFixed(4))+" ")]),e(h.w,[t._v(" "+t._s(r.address)+" ")])],1),e(F.A,[e(c.A,{directives:[{name:"show",rawName:"v-show",value:t.hoveredMarker===r.id,expression:"hoveredMarker === marker.id"}],attrs:{icon:"",color:"red"},on:{click:function(e){return e.stopPropagation(),t.deleteMarker(r.id)}}},[e(u.A,[t._v("mdi-delete")])],1)],1)],1)})),1)],1),e(V.A,{attrs:{cols:t.$vuetify.breakpoint.smAndDown?12:8,order:"1","order-md":"2"}},[e("div",{staticClass:"map-wrapper"},[e("l-map",{staticStyle:{height:"500px"},attrs:{zoom:t.zoom,center:t.center},on:{click:t.onMapClick}},[e("l-tile-layer",{attrs:{url:t.tileUrl}}),t._l(t.markers,(function(r){return e("l-marker",{key:r.id,attrs:{"lat-lng":r.latlng},on:{click:function(e){return t.onMarkerClick(r)}}})}))],2),e(c.A,{staticClass:"map-add",attrs:{fab:"",dark:"",color:"indigo",disabled:t.isAdding},on:{click:t.enableAdding}},[e(u.A,{attrs:{dark:""}},[t._v("mdi-plus")])],1)],1),e(c.A,{staticClass:"mt-5 ml-5",attrs:{color:"blue"},on:{click:t.getCurrentLocation}},[t._v(" "+t._s(t.$t("map.location"))+" ")]),e(c.A,{staticClass:"mt-5 ml-5",attrs:{color:"red",disabled:!t.isMarkers},on:{click:t.deleteAllMarkers}},[t._v(" "+t._s(t.$t("map.delete"))+" ")])],1)],1)],1)},B=[],Z=(r(4114),r(8992),r(2577),r(715)),q=r(3544),H=r(5551),R=r(5353);const G="6749e422efd01245801126znv9fbcce";async function Y(t){console.log("API KEY",G);const e=await fetch(`https://geocode.maps.co/reverse?lat=${t.lat}&lon=${t.lng}&api_key=${G}`),r=await e.json();if(r&&r.display_name)return r.display_name;throw new Error("Address not found")}async function K(){try{const t=await Q(),e=await fetch(`https://ipapi.co/${t}/json/`),r=await e.json();if(r&&r.latitude&&r.longitude)return[r.latitude,r.longitude];throw new Error("Не удалось определить геопозицию по IP")}catch(t){console.error(t)}}async function Q(){try{const t=await fetch("https://api.ipify.org?format=json"),e=await t.json();return e.ip}catch(t){throw console.error("Не удалось получить IP-адрес:",t),t}}var W=r(3481),X=r.n(W);delete X().Icon.Default.prototype._getIconUrl,X().Icon.Default.mergeOptions({iconRetinaUrl:r(8249),iconUrl:r(7024),shadowUrl:r(1071)});var tt={components:{LMap:Z.A,LTileLayer:q.A,LMarker:H.A},data(){return{zoom:13,center:[44.81624,20.46044],tileUrl:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",isAdding:!1,isAddngToastId:null,mapElement:null,hoveredMarker:null}},computed:{...(0,R.aH)(["markers"]),isMarkers:function(){return this.markers.length>0}},mounted(){this.$nextTick((()=>{this.mapElement=this.$el.querySelector(".leaflet-container")}))},methods:{...(0,R.i0)(["loadMarkers","addMarker"]),isSelected(t){return this.markers.find((e=>e.id===t))?.isSelected},enableAdding(){this.isAdding=!this.isAdding,this.mapElement?.classList.add("map-pointer"),this.isAddngToastId=this.$toast.success(this.$t("map.addMode"),{timeout:!1})},async deleteMarker(t){try{await this.$store.dispatch("deleteMarker",t)}catch(e){console.error(this.$t("map.deleteError"),e)}},async deleteAllMarkers(){try{await this.$store.dispatch("deleteAllMarkers")}catch(t){console.error(this.$t("map.deleteAllError"),t)}},async onMapClick(t){if(this.isAdding){this.$toast.dismiss(this.isAddngToastId);const e=this.$toast.success(this.$t("map.adding")),r=t.latlng;try{const t=await Y(r),a={latlng:r,address:t};await this.addMarker(a),this.isAdding=!1,this.$toast.dismiss(e),this.mapElement?.classList.remove("map-pointer")}catch{this.$toast.error(this.$t("map.addressNotFound"),{timeout:2e3})}}},onMarkerClick(t){t.isSelected||(this.$store.commit("setSelectedMarkerId",t.id),this.$router.push(`/map/${t.id}`))},onListItemClick(t){t.isSelected||(this.center=t.latlng,this.$store.commit("setSelectedMarkerId",t.id),this.$router.push(`/map/${t.id}`))},getCurrentLocation(){const t=this.$toast.success(this.$t("map.detectingLocation"));navigator.geolocation?navigator.geolocation.getCurrentPosition((e=>{const r={lat:e.coords.latitude,lng:e.coords.longitude};this.center=[r.lat,r.lng],this.$toast.dismiss(t);const a={latlng:r,address:this.$t("map.location"),id:Date.now()};this.$store.dispatch("addMarker",a),this.$store.commit("setSelectedMarkerId",a.id)}),(t=>{this.$toast.error(this.$t("map.geoPositionError"),{timeout:2e3}),console.error(t)})):this.$toast.error(this.$t("map.BrowserError"),{timeout:2e3})}},async created(){await this.loadMarkers();const t=await K();t||this.$toast.warning(this.$t("map.geoIPError"),{timeout:2e3}),this.center=t||[44.81624,20.46044],this.$route.params.id&&this.$store.commit("setSelectedMarkerId",Number(this.$route.params.id))},watch:{"$route.params.id"(t){if(t){const e=this.markers.find((e=>e.id===Number(t)));e&&(this.center=e.latlng,this.$store.commit("setSelectedMarkerId",e.id))}}}},et=tt,rt=(0,y.A)(et,z,B,!1,null,null,null),at=rt.exports;a.Ay.use(I.Ay);var ot=new I.Ay({mode:"history",routes:[{path:"/about",component:U},{path:"/map/:id?",component:at},{path:"*",redirect:"/about"}]});r(4520);class st{static async getMarkers(){return JSON.parse(localStorage.getItem("markers"))||[]}static async addMarker(t){const e=await this.getMarkers(),r=e.find((e=>e.address===t.address));return r||(t.id=Date.now(),e.push(t),localStorage.setItem("markers",JSON.stringify(e)),t)}static async deleteMarker(t){const e=await this.getMarkers(),r=e.filter((e=>e.id!==t));localStorage.setItem("markers",JSON.stringify(r))}static async deleteAllMarkers(){localStorage.setItem("markers",JSON.stringify([]))}}var it=st;a.Ay.use(R.Ay);var nt=new R.Ay.Store({state:{markers:[]},mutations:{setMarkers(t,e){t.markers=e},addMarker(t,e){t.markers.find((t=>t.address===e.address))||t.markers.push(e)},setSelectedMarkerId(t,e){for(const r of t.markers)r.isSelected=r.id===e},deleteMarker(t,e){t.markers=t.markers.filter((t=>t.id!==e))},deleteAllMarkers(t){t.markers=[]}},actions:{async loadMarkers({commit:t}){const e=await it.getMarkers();t("setMarkers",e)},async addMarker({commit:t},e){const r=await it.addMarker(e);t("addMarker",r)},async deleteMarker({commit:t},e){await it.deleteMarker(e),t("deleteMarker",e)},async deleteAllMarkers({commit:t}){await it.deleteAllMarkers(),t("deleteAllMarkers")}}}),lt=r(3971);r(4301);a.Ay.use(lt.A);const dt=new lt.A({});var ct=dt,ut=r(2064),mt=r(4765),pt=r(9839),ht=JSON.parse('{"header":{"about":"About","title":"SquareGPS assessment","map":"Map"},"map":{"marker":"Marker #","location":"My location","delete":"Delete all","addMode":"Add marker Mode. Select the point on the map","deleteError":"Error deleting marker","deleteAllError":"Error deleting all markers","adding":"Adding new marker to the map","addressNotFound":"Address Not Found","detectingLocation":"Detecting location","geoPositionError":"Error getting geo position","geoBrowserError":"Your browser doesn\'t support Geolocation","geoIPError":"Error detecting geo position by ip address"},"about":{"title":"About the Task","intro":"Using Vue.js, Vuex, VueRouter, and Vuetify, create an application. The header must contain a menu with two items: About the Task and Map. The main content should display the respective sections.","sectionTitleAbout":"About the Task Section","sectionContentAbout":"This section should contain the task description, formatted similarly.","sectionTitleMap":"Map Section","sectionContentMap":"The screen should display a map and a list (see example):","list":{"item1":"When clicking the add button, the map should enter marker addition mode: a marker should appear at the click location, and the list should contain an entry with the point\'s address.","item1Details":{"a":"You can use any free geocoding API, for example: ","b":"If the address is not found, show an error and do not add the marker to the list."},"item2":"Clicking on a marker should highlight the corresponding list entry.","item3":"Clicking on a list entry should center the map on the marker.","item4":"Markers must be stored locally and not disappear after a page reload.","item5":"The selected marker\'s ID should be displayed in the address bar."},"storageNote":"Local data storage must be implemented as a service emulating a backend. (A Backend class is required, which pseudo-asynchronously saves data to localStorage.)","exampleTitle":"Example"}}'),gt=JSON.parse('{"header":{"about":"О задании","title":"Тестовое задание для SquareGPS","map":"Карта"},"map":{"marker":"Маркер №","location":"Мое местоположение","delete":"Удалить все метки","addMode":"Режим добавления метки, выберите точку на карте","deleteError":"Ошибка при удалении метки","deleteAllError":"Ошибка при удалении всех меток","adding":"Добавление новой метки на карту","addressNotFound":"Адрес не найден","detectingLocation":"Определение местоположения","geoPositionError":"Не удалось получить геопозицию","geoBrowserError":"Геолокация не поддерживается вашим браузером","geoIPError":"Не удалось определить геопизицию по IP адресу"},"about":{"title":"О задании","intro":"Необходимо с помощью Vuejs, Vuex, VueRouter, Vuetify написать приложение. Хэдер приложения должен содержать меню из 2-х пунктов: О задании и Карта. В основной части приложения должно отображаться содержимое разделов.","sectionTitleAbout":"Раздел “О задании”","sectionContentAbout":"В разделе должен быть текст этого задания, сверстанный аналогично.","sectionTitleMap":"Раздел “Карта”","sectionContentMap":"На экране должны быть карта и список (см. пример):","list":{"item1":"При клике на кнопку добавления, карта должна перейти в режим добавления маркера: в месте клика должен появится маркер, а в списке - запись с адресом точки.","item1Details":{"a":"Для поиска адреса можно использовать любое бесплатное API для геокодирования, например: ","b":"В случае, если адрес не найден, необходимо вывести ошибку и не добавлять маркер в список."},"item2":"При клике на маркер должна подсвечиваться запись в списке.","item3":"При клике на запись в списке карта должна центрироваться на маркере.","item4":"Маркеры должны храниться локально и не пропадать после перезагрузки страницы.","item5":"В адресной строке должен отображаться id выбранного маркера."},"storageNote":"Локальное хранение данных должно быть организовано в виде сервиса, эмулирующего бекенд. (Необходим класс Backend, который псевдо-асинхронно сохраняет данные в localStorage.)","exampleTitle":"Пример"}}');a.Ay.use(mt.A);const kt=(0,pt.h)({locale:"en",fallbackLocale:"en",messages:{en:ht,ru:gt}});a.Ay.config.productionTip=!1,a.Ay.use(ut.Ay,{position:ut.II.TOP_CENTER}),new a.Ay({router:ot,store:nt,vuetify:ct,render:t=>t(E),i18n:kt}).$mount("#app")},3465:function(t,e,r){t.exports=r.p+"img/example.06dbb3d8.png"}},e={};function r(a){var o=e[a];if(void 0!==o)return o.exports;var s=e[a]={exports:{}};return t[a].call(s.exports,s,s.exports,r),s.exports}r.m=t,function(){var t=[];r.O=function(e,a,o,s){if(!a){var i=1/0;for(c=0;c<t.length;c++){a=t[c][0],o=t[c][1],s=t[c][2];for(var n=!0,l=0;l<a.length;l++)(!1&s||i>=s)&&Object.keys(r.O).every((function(t){return r.O[t](a[l])}))?a.splice(l--,1):(n=!1,s<i&&(i=s));if(n){t.splice(c--,1);var d=o();void 0!==d&&(e=d)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[a,o,s]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/map/"}(),function(){var t={524:0};r.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,s,i=a[0],n=a[1],l=a[2],d=0;if(i.some((function(e){return 0!==t[e]}))){for(o in n)r.o(n,o)&&(r.m[o]=n[o]);if(l)var c=l(r)}for(e&&e(a);d<i.length;d++)s=i[d],r.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return r.O(c)},a=self["webpackChunkmap"]=self["webpackChunkmap"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[504],(function(){return r(5733)}));a=r.O(a)})();
//# sourceMappingURL=app.70801aff.js.map