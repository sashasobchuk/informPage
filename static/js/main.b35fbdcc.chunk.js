(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n(10),c=n.n(i),r=(n(30),n(31),n(8)),a=(n(32),n(5)),d=n(2),l=n.n(d),o=n(4),u=n(6),j=n(9),p=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.get("https://extreme-ip-lookup.com/json/",{});case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),alert("proplemin extreme_ip_lookupAPI ",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(o.a)(l.a.mark((function e(t,n){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"695d0b21b9d6f597262ea032901e29ba",s=(s=(s=Date.now()).toString()).substring(0,s.length-3),e.prev=4,e.next=7,j.get("http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=".concat(t,"&lon=").concat(n,"&dt=").concat(s,"&appid=").concat("695d0b21b9d6f597262ea032901e29ba"),{});case 7:return e.abrupt("return",e.sent);case 10:e.prev=10,e.t0=e.catch(4),console.error("proplemin getWetherAPI ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var e=Object(o.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5",{});case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.error("proplemin getWetherAPI ",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}(),m="SET_MONEY",O={moneyPrivat:[{ccy:"USD",base_ccy:"UAH",buy:"27.70000",sale:"28.10000"},{ccy:"EUR",base_ccy:"UAH",buy:"32.55000",sale:"33.15000"},{ccy:"RUR",base_ccy:"UAH",buy:"0.36000",sale:"0.39000"},{ccy:"BTC",base_ccy:"USD",buy:"55268.7927",sale:"61086.5603"}]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(u.a)(Object(u.a)({},e),{},{moneyPrivat:t.money});default:return e}},x="EXTREME_IP_LOOKUP",w="SET_WETHER",g={type:"EXTREME_IP_LOOKUP",extreme_ip_lookup:{city:"Ternopil",continent:"Europe",country:"Ukraine",countryCode:"UA",ipType:"Residential",lat:"99.57312",lon:"99.68118",query:"91.86.242.34",region:"Ternopil",status:"success"},weather:{lat:49.5534,lon:25.5892,timezone:"Europe/Kiev",timezone_offset:7200,current:{dt:1616837818,sunrise:1616817919,sunset:1616863229,temp:283.04,feels_like:278.25,pressure:1024,humidity:58,dew_point:275.17,uvi:3.31,clouds:5,wind_speed:4.46,wind_deg:172,wind_gust:4.64,weather:[{id:800,main:"Clear",description:"clear sky",icon:"01d"}]},hourly:[{dt:1616803200,temp:275.93,feels_like:272.21,pressure:987,humidity:64,dew_point:270.19,clouds:100,wind_speed:1.85,wind_deg:162,wind_gust:2.12,weather:[{id:804,main:"Clouds",description:"overcast clouds",icon:"04n"}]},{dt:1616806800,temp:274.82,feels_like:270.89,pressure:987,humidity:67,dew_point:269.79,clouds:100,wind_speed:2.07,wind_deg:156,wind_gust:2.61,weather:[{id:804,main:"Clouds",description:"overcast clouds",icon:"04n"}]},{dt:1616810400,temp:274.82,feels_like:270.65,pressure:987,humidity:67,dew_point:269.79,clouds:100,wind_speed:2.42,wind_deg:145,wind_gust:3.51,weather:[{id:804,main:"Clouds",description:"overcast clouds",icon:"04n"}]},{dt:1616814e3,temp:274.82,feels_like:270.62,pressure:988,humidity:69,dew_point:270.14,clouds:100,wind_speed:2.53,wind_deg:147,wind_gust:4.16,weather:[{id:804,main:"Clouds",description:"overcast clouds",icon:"04n"}]},{dt:1616817600,temp:274.82,feels_like:270.72,pressure:988,humidity:68,dew_point:269.97,clouds:86,wind_speed:2.35,wind_deg:162,wind_gust:2.86,weather:[{id:804,main:"Clouds",description:"overcast clouds",icon:"04n"}]},{dt:1616821200,temp:277.04,feels_like:273.04,pressure:988,humidity:68,dew_point:271.85,clouds:71,wind_speed:2.58,wind_deg:168,wind_gust:4.13,weather:[{id:803,main:"Clouds",description:"broken clouds",icon:"04d"}]},{dt:1616824800,temp:277.7,feels_like:273.56,pressure:1025,humidity:77,dew_point:274.02,clouds:60,wind_speed:3.26,wind_deg:165,wind_gust:5.56,weather:[{id:803,main:"Clouds",description:"broken clouds",icon:"04d"}]},{dt:1616828400,temp:279.3,feels_like:274.62,pressure:1025,humidity:70,dew_point:274.24,clouds:6,wind_speed:4.08,wind_deg:165,wind_gust:5.64,weather:[{id:800,main:"Clear",description:"clear sky",icon:"01d"}]},{dt:1616832e3,temp:280.76,feels_like:275.79,pressure:1024,humidity:64,dew_point:274.39,clouds:6,wind_speed:4.53,wind_deg:167,wind_gust:5.51,weather:[{id:800,main:"Clear",description:"clear sky",icon:"01d"}]},{dt:1616835600,temp:281.98,feels_like:277.03,pressure:1024,humidity:61,dew_point:274.88,clouds:5,wind_speed:4.62,wind_deg:168,wind_gust:5.1,weather:[{id:800,main:"Clear",description:"clear sky",icon:"01d"}]}]}},_=function(e,t){return function(){var n=Object(o.a)(l.a.mark((function n(s){var i;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,h(e,t);case 3:i=n.sent,s((c=i.data,{type:w,weather:c})),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}var c}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(u.a)(Object(u.a)({},e),{},{extreme_ip_lookup:t.extreme_ip_lookup});case w:return Object(u.a)(Object(u.a)({},e),{},{weather:t.weather});default:return e}},y=(n(58),n(0)),N=function(e){var t=e.item,n=e.timeConverter,s=e.temperature;return Object(y.jsxs)("div",{className:"oneDay",children:[Object(y.jsxs)("div",{className:"time",children:[" ",n(t.dt).substr(11)]}),Object(y.jsxs)("div",{className:"temp",children:[Object(y.jsx)("div",{className:"description",children:" "})," ",Math.round(s(t.temp))," \u2103 "]}),Object(y.jsxs)("div",{className:"pressure",title:"\u0442\u0438\u0441\u043a",children:[Object(y.jsx)("span",{className:"description",children:"T :  "})," ",Math.round(s(t.pressure)),Object(y.jsx)("span",{className:"oE",children:"  \u043c\u043c \u0440\u0442. \u0441\u0442."}),"  "]}),Object(y.jsxs)("div",{className:"humidity",title:"\u0432\u043e\u043b\u043e\u0433\u0456\u0441\u0442\u044c",children:[Object(y.jsx)("span",{className:"description",children:"V : "})," ",t.humidity,"  "]}),Object(y.jsxs)("div",{className:"dew_point",title:"\u043f\u043e\u0440\u0438\u0432\u0438 \u0432\u0456\u0442\u0440\u0443",children:[Object(y.jsx)("span",{className:"description",children:"D.P : "})," ",t.dew_point,"  "]}),Object(y.jsxs)("div",{className:"clouds",title:"\u0425\u043c\u0430\u0440\u043d\u0456\u0441\u0442\u044c",children:[Object(y.jsx)("span",{className:"description",children:"\u0425m :  "})," ",t.clouds,"  "]}),Object(y.jsxs)("div",{className:"wind_speed",title:"\u0448\u0432\u0438\u0434\u043a\u0456\u0441\u0442\u044c \u0432\u0456\u0442\u0440\u0443:",children:[Object(y.jsx)("span",{className:"description",children:"VS:  "})," ",t.wind_speed,"  "]}),Object(y.jsxs)("div",{className:"wind_deg",title:"\u043d\u0430\u043f\u0440\u044f\u043c \u0432\u0456\u0442\u0440\u0443:",children:[" ",Object(y.jsx)("span",{className:"description",children:"VD : "})," ",t.wind_deg,"  "]}),Object(y.jsxs)("div",{className:"wind_gust",title:"\u043f\u043e\u0440\u0438\u0432\u0438 \u0432\u0456\u0442\u0440\u0443:",children:[Object(y.jsx)("span",{className:"description",children:"VG : "})," ",t.wind_gust,"  "]}),Object(y.jsx)("div",{className:"weather",children:t.weather.map((function(e){return Object(y.jsxs)("div",{children:["  ",e.main,Object(y.jsxs)("div",{children:["   ",e.description]})]})}))})]})},k=(n(60),function(e){var t=e.item,n=e.temperature;return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:"CurrentWeatherPage",children:[Object(y.jsx)("div",{className:"titleWeather",children:Object(y.jsx)("h2",{children:"\u043f\u043e\u0433\u043e\u0434\u0430 "})}),Object(y.jsxs)("div",{children:["\u0447\u0430\u0441\u043e\u0432\u0430 \u0437\u043e\u043d\u0430: ",Object(y.jsxs)("b",{children:[t.timezone," "]}),"  "]}),Object(y.jsxs)("div",{className:"time",children:["time: ",t.dt]}),Object(y.jsxs)("div",{className:"timeCicle",children:[Object(y.jsxs)("div",{className:"sunrise",children:["sunrise : ",t.sunrise]}),Object(y.jsxs)("div",{className:"sunset",children:["sunset : ",t.sunset]})]}),Object(y.jsxs)("div",{className:"MainWeatherProp",children:[Object(y.jsxs)("div",{className:"tempMain",children:[Object(y.jsx)("span",{className:"description",children:"\u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430 : "})," ",t.temp," \u2103 "]}),Object(y.jsxs)("div",{className:"pressure",title:"\u0442\u0438\u0441\u043a",children:[Object(y.jsx)("span",{className:"description",children:"\u0442\u0438\u0441\u043a :  "})," ",Math.round(n(t.pressure)),Object(y.jsx)("span",{children:"  \u043c\u043c. \u0440\u0442. \u0441\u0442."}),"  "]}),Object(y.jsxs)("div",{className:"humidity",title:"\u0432\u043e\u043b\u043e\u0433\u0456\u0441\u0442\u044c",children:[Object(y.jsx)("span",{className:"description",children:"\u0432\u043e\u043b\u043e\u0433\u0456\u0441\u0442\u044c : "})," ",t.humidity," % "]}),Object(y.jsxs)("div",{className:"clouds",title:"\u0425\u043c\u0430\u0440\u043d\u0456\u0441\u0442\u044c",children:[Object(y.jsx)("span",{className:"description",children:"\u0425\u043c\u0430\u0440\u043d\u0456\u0441\u0442\u044c :  "})," ",t.clouds,"  %"]})]}),Object(y.jsxs)("div",{className:"windWeatherNow",children:[Object(y.jsx)("span",{children:" \u0432\u0456\u0442\u0440\u0438"}),Object(y.jsxs)("div",{className:"wind_speed",title:"\u0448\u0432\u0438\u0434\u043a\u0456\u0441\u0442\u044c \u0432\u0456\u0442\u0440\u0443:",children:[Object(y.jsx)("span",{className:"description",children:"\u0448\u0432\u0438\u0434\u043a\u0456\u0441\u0442\u044c \u0432\u0456\u0442\u0440\u0443:  "})," ",t.wind_speed,"  "]}),Object(y.jsxs)("div",{className:"wind_deg",title:"\u043d\u0430\u043f\u0440\u044f\u043c \u0432\u0456\u0442\u0440\u0443:",children:[" ",Object(y.jsx)("span",{className:"description",children:"\u043d\u0430\u043f\u0440\u044f\u043c \u0432\u0456\u0442\u0440\u0443 : "})," ",t.wind_deg,"  "]}),Object(y.jsxs)("div",{className:"wind_gust",title:"\u043f\u043e\u0440\u0438\u0432\u0438 \u0432\u0456\u0442\u0440\u0443:",children:[Object(y.jsx)("span",{className:"description",children:"\u043f\u043e\u0440\u0438\u0432\u0438 \u0432\u0456\u0442\u0440\u0443 : "})," ",t.wind_gust,"  "]})]}),Object(y.jsx)("div",{children:t.weather.map((function(e){return Object(y.jsxs)("div",{className:"weatherDesc",children:[Object(y.jsxs)("div",{children:[" ",e.main]}),Object(y.jsxs)("div",{children:["   ",e.description]})]})}))})]})})}),C=(n(61),n.p+"static/media/privat.22e16fdc.png"),P=function(){var e=Object(a.c)((function(e){return e.moneyPage.moneyPrivat})),t=Object(s.useState)(0),n=Object(r.a)(t,2),i=n[0],c=n[1],d=Object(s.useRef)();d.current=0;var l=Object(s.useState)(window.innerWidth),o=Object(r.a)(l,2),u=o[0],j=o[1];console.log(u),Object(s.useEffect)((function(){i<3?setTimeout((function(){c(i+1),j(window.innerWidth),d.current++,u<800&1===d.current&&m("small"),console.log("renderCount",d)}),2e3):c(0)}),[i]);var p=Object(s.useState)("big"),h=Object(r.a)(p,2),b=h[0],m=h[1];return Object(y.jsx)("div",{className:"moneyPage",children:"big"===b?Object(y.jsxs)("div",{className:"big",onClick:function(){m("small")},children:[Object(y.jsxs)("div",{children:[Object(y.jsxs)("b",{children:["  ",e[i].base_ccy]})," --- ",Object(y.jsxs)("b",{children:["  ",e[i].ccy]})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("b",{children:" \u043a\u0443\u043f\u0438\u0442\u0438 : "}),Object(y.jsxs)("b",{children:["  ",e[i].buy]})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("b",{children:"\u043f\u0440\u043e\u0434\u0430\u0442\u0438 : "}),Object(y.jsxs)("b",{children:["  ",e[i].sale]})]})]}):Object(y.jsx)("div",{className:"small",onClick:function(){m("big")},style:{right:"0",position:"absolute"},children:Object(y.jsx)("img",{src:C,alt:""})})})},E=function(){var e=Object(a.b)(),t=Object(a.c)((function(e){return e.mainPage.extreme_ip_lookup}));Object(s.useEffect)((function(){e(function(){var e=Object(o.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p();case 3:return n=e.sent,t((s=n.data,{type:x,extreme_ip_lookup:s})),console.log(n.data),e.next=8,t(_(n.data.lat,n.data.lon));case 8:return e.next=10,t(function(){var e=Object(o.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b();case 3:n=e.sent,t((s=n.data,{type:m,money:s})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}var s}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}());case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}var s}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);var n=Object(s.useState)("unKnowingPosition"),i=Object(r.a)(n,2),c=i[0],d=i[1];navigator.geolocation.getCurrentPosition((function(e){d(e),console.log("position")}),(function(e){console.log(e)}),{maximumAge:6e6});var u=navigator.language,j=navigator.languages,h=window.navigator.onLine,O=window.navigator.oscpu,v=navigator.cookieEnabled,w=Object(a.c)((function(e){return e.mainPage.weather}));function g(e){var t=new Date(1e3*e),n=t.getFullYear(),s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()];return t.getDate()+" "+s+" "+n+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()}function f(e){return e-273.15}var C={timezone:w.timezone,dt:g(w.current.dt),sunrise:g(w.current.sunrise),sunset:g(w.current.sunset),temp:Math.round(f(w.current.temp)),tempFiling:Math.round(f(w.current.feels_like)),pressure:w.current.pressure,humidity:w.current.humidity,uvi:w.current.uvi,clouds:w.current.clouds,wind_speed:w.current.wind_speed,wind_deg:w.current.wind_deg,wind_gust:w.current.wind_gust,weather:w.current.weather,hourly:w.hourly};return Object(y.jsxs)("div",{className:"FullPage",children:[Object(y.jsx)("div",{children:Object(y.jsx)(P,{})}),c.coords?Object(y.jsxs)("div",{className:"info",children:[Object(y.jsx)("div",{className:"tittleMain",children:" \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f\u044f \u043f\u0440\u043e \u043f\u0440\u0438\u0441\u0442\u0440\u0456\u0439"}),Object(y.jsxs)("div",{className:"myPosition",children:[Object(y.jsx)("span",{children:" \u043c\u0456\u0441\u0446\u044f\u0437\u043d\u0430\u0445\u043e\u0434\u0436\u0435\u043d\u043d\u044f"}),Object(y.jsxs)("div",{children:[" \u0448\u0438\u0440\u043e\u0442\u0430 : ",c.coords.latitude.toFixed(4)]}),Object(y.jsxs)("div",{children:[" \u0434\u043e\u0432\u0433\u043e\u0442\u0430: ",c.coords.longitude.toFixed(4)]}),Object(y.jsxs)("div",{children:[" \u0442\u043e\u0447\u043d\u0456\u0441\u0442\u044c  : ",c.coords.accuracy]})]}),Object(y.jsxs)("div",{className:"languageDIv",children:[Object(y.jsxs)("div",{children:[" lang : ",u]}),Object(y.jsxs)("div",{children:[" preferredLanguages : ",j.map((function(e,t){return Object(y.jsxs)("span",{children:[" ",e,","]},t)}))]})]}),Object(y.jsxs)("div",{className:"otherDiviseInfo",children:[Object(y.jsxs)("div",{children:[" is dewise online : ",h?Object(y.jsx)("span",{children:"yes "}):Object(y.jsx)("span",{children:" not "})]}),Object(y.jsxs)("div",{children:[" oscpuInfo : ",O]}),Object(y.jsxs)("div",{children:[" cookieEnabled : ",v?Object(y.jsx)("span",{children:"yes"}):Object(y.jsx)("span",{children:"no"})]})]}),Object(y.jsxs)("div",{className:"extreme_ip_lookup",children:[Object(y.jsx)("div",{children:Object(y.jsx)("strong",{children:"\u043b\u043e\u043a. \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f "})}),Object(y.jsxs)("div",{children:["\u043a\u043e\u043d\u0442\u0438\u043d\u0435\u043d\u0442 : ",Object(y.jsx)("span",{children:t.continent})]}),Object(y.jsxs)("div",{children:["\u043a\u0440\u0430\u0457\u043d\u0430 : ",Object(y.jsx)("span",{children:t.country})]}),Object(y.jsxs)("div",{children:["\u043a\u043e\u0434 \u043a\u0440\u0430\u0457\u043d\u0438 :",Object(y.jsx)("span",{children:t.countryCode})]}),Object(y.jsxs)("div",{children:["\u0442\u0438\u043f IP :",Object(y.jsx)("span",{children:t.ipType})]}),Object(y.jsxs)("div",{children:["\u0440\u043e\u0437\u0442\u0430\u0448\u0443\u0432\u0430\u043d\u043d\u044f : ",Object(y.jsxs)("span",{children:[t.lat," \u0448\u0438\u0440\u043e\u0442\u0438"]})]}),Object(y.jsxs)("div",{children:["\u0440\u043e\u0437\u0442\u0430\u0448\u0443\u0432\u0430\u043d\u043d\u044f :",Object(y.jsxs)("span",{children:[t.lon," \u0434\u043e\u0432\u0433\u043e\u0442\u0438"]})]}),Object(y.jsxs)("div",{children:["ip \u0430\u0434\u0440\u0435\u0441\u0430:",Object(y.jsx)("span",{children:t.query})]}),Object(y.jsxs)("div",{children:["\u0440\u0435\u0433\u0456\u043e\u043d/\u043c\u0456\u0441\u0442\u043e :",Object(y.jsx)("span",{children:t.region})]})]})]}):Object(y.jsx)("div",{className:"info",children:c}),Object(y.jsxs)("div",{className:"weatherMain",children:[Object(y.jsx)("div",{className:"currentWeather",children:Object(y.jsx)(k,{item:C,temperature:f.bind(),timeConverter:g.bind()})}),Object(y.jsx)("div",{className:"HourDays",children:C.hourly.map((function(e){return Object(y.jsx)("div",{className:"HourDay",children:Object(y.jsx)(N,{item:e,temperature:f.bind(),timeConverter:g.bind()})})}))})]})]})};var M=function(){return Object(y.jsx)("div",{children:Object(y.jsx)(E,{})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),i(e),c(e),r(e)}))},T=n(7),S=n(24),F=n(25),I=Object(T.combineReducers)({mainPage:f,moneyPage:v}),U=Object(T.createStore)(I,Object(S.composeWithDevTools)(Object(T.applyMiddleware)(F.a)));c.a.render(Object(y.jsx)(a.a,{store:U,children:Object(y.jsx)(M,{})}),document.getElementById("root")),D()}},[[62,1,2]]]);
//# sourceMappingURL=main.b35fbdcc.chunk.js.map