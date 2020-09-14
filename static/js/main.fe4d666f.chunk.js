(this["webpackJsonpcovid19-tracker"]=this["webpackJsonpcovid19-tracker"]||[]).push([[0],{100:function(e,t,a){},105:function(e,t,a){},203:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),s=(a(100),a(24)),l=a.n(s),i=a(35),u=a(15),m=a(235),d=a(236),f=a(237),p=a(229),v=a(233),h=a(54),b=a(234);var E=function(e){var t=e.title,a=e.cases,n=e.isRed,c=e.active,o=e.total,s=Object(h.a)(e,["title","cases","isRed","active","total"]);return r.a.createElement(p.a,{onClick:s.onClick,className:"infoBox ".concat(c&&"infoBox--selected"," ").concat(n&&"infoBox--red")},r.a.createElement(v.a,null,r.a.createElement(b.a,{className:"infoBox__title",color:"textSecondary"},t),r.a.createElement("h2",{className:"infoBox__cases ".concat(!n&&"infoBox__cases--green")},a),r.a.createElement(b.a,{className:"infoBox__total",color:"textSecondary"},o," Total")))},g=a(17),y=a.n(g);var j=function(e){var t=e.countries;return console.log("Sss>",t),r.a.createElement("div",{className:"table"},t.map((function(e){var t=e.country,a=e.cases;return r.a.createElement("tr",null,r.a.createElement("td",null,t),r.a.createElement("td",null,y()(a).format("0,0")))})))},O=a(240),_=a(239),w=a(88),x=a(238),N=a(241),C={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:800},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:1200},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:2e3}},k=function(e){return Object(w.a)(e).sort((function(e,t){return e.cases>t.cases?-1:1}))},S=function(e){return e?"+".concat(y()(e).format("0.0a")):"+0"};var I=function(e){var t=e.countries,a=e.casesType,n=e.center,c=e.zoom;return console.log("sss>>s",t),r.a.createElement("div",{className:"map"},r.a.createElement(O.a,{center:n,zoom:c},r.a.createElement(_.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return r.a.createElement(x.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:C[t].hex,fillColor:C[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*C[t].multiplier},r.a.createElement(N.a,null,r.a.createElement("div",{className:"info-container"},r.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),r.a.createElement("div",{className:"info-name"},e.country),r.a.createElement("div",{className:"info-confirmed"},"Cases: ",y()(e.cases).format("0,0")),r.a.createElement("div",{className:"info-recovered"},"Recovered: ",y()(e.recovered).format("0,0")),r.a.createElement("div",{className:"info-deaths"},"Deaths: ",y()(e.deaths).format("0,0")))))}))}(t,a)))},R=(a(105),a(86)),B=a(87);var T=function(e){var t=e.casesType,a=void 0===t?"cases":t,c=Object(h.a)(e,["casesType"]);console.log("linegraph>>",a);var o=Object(n.useState)({}),s=Object(u.a)(o,2),m=s[0],d=s[1],f={legend:{display:!1},elements:{points:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{lable:function(e,t){return y()(e.format("+0,0"))}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return y()(e).format("0a")}}}]}},p=function(e,t){var a,n=[];for(var r in e.cases){if(a){var c={x:r,y:e[t][r]-a};n.push(c)}a=e[t][r]}return n};return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var t=p(e,a);console.log("graph",e),d(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),r.a.createElement("div",{className:c.className},(null===m||void 0===m?void 0:m.length)>0&&r.a.createElement(B.Line,{data:{datasets:[Object(R.a)({data:m,borderColor:"#CC1034",backgroundColor:"rgba(204,16,52,0.5"},"data",m)]},options:f}))};a(202);var D=function(){return r.a.createElement("div",{className:"footer"},"< Made with \u2764\ufe0f  by",r.a.createElement("a",{href:"https://aniruddhparwal.github.io",target:"_blank"}," ","Aniruddh Parwal ")," ","/>")};var M=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)("worldwide"),s=Object(u.a)(o,2),h=s[0],b=s[1],g=Object(n.useState)({}),y=Object(u.a)(g,2),O=y[0],_=y[1],w=Object(n.useState)([]),x=Object(u.a)(w,2),N=x[0],C=x[1],R=Object(n.useState)({lat:34.80746,lng:-40.4796}),B=Object(u.a)(R,2),M=B[0],A=B[1],z=Object(n.useState)(3),W=Object(u.a)(z,2),L=W[0],J=W[1],Y=Object(n.useState)([]),q=Object(u.a)(Y,2),F=q[0],K=q[1],P=Object(n.useState)("cases"),V=Object(u.a)(P,2),$=V[0],G=V[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=k(e);C(a),K(e),c(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){_(e)}))}),[]);var H=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,n="worldwide"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(a),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){b(a),_(e),"worldwide"===a?(A([34.80746,-40.4796]),J(3)):(A([e.countryInfo.lat,e.countryInfo.long]),J(4))}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log("Country Info >>",O),r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app__container"},r.a.createElement("div",{className:"app__left"},r.a.createElement("div",{className:"app__header"},r.a.createElement("h1",null,"COVID19-TRACKER"),r.a.createElement(m.a,{className:"app__dropdown"},r.a.createElement(d.a,{variant:"outlined",value:h,onChange:H},r.a.createElement(f.a,{value:"worldwide"},"Worldwide"),a.map((function(e){return r.a.createElement(f.a,{value:e.value},e.name)}))))),r.a.createElement("div",{className:"app__stats"},r.a.createElement(E,{isRed:!0,active:"cases"===$,onClick:function(e){return G("cases")},title:"Coronavirus Cases",cases:S(O.todayCases),total:S(O.cases)}),r.a.createElement(E,{active:"recovered"===$,onClick:function(e){return G("recovered")},title:"Recoverd",cases:S(O.todayRecovered),total:S(O.recovered)}),r.a.createElement(E,{isRed:!0,active:"deaths"===$,onClick:function(e){return G("deaths")},title:"Deaths",cases:S(O.todayDeaths),total:S(O.deaths)})),r.a.createElement(I,{casesType:$,countries:F,center:M,zoom:L})),r.a.createElement(p.a,{className:"app__right"},r.a.createElement(v.a,null,r.a.createElement("h3",null,"Live Cases by Country"),r.a.createElement(j,{countries:N}),r.a.createElement("h3",{className:"app__graphTitle"},"Worldwide New ",$),r.a.createElement(T,{className:"app__graph",casesType:$})))),r.a.createElement("div",{className:"app__footer"},r.a.createElement(D,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},95:function(e,t,a){e.exports=a(203)}},[[95,1,2]]]);
//# sourceMappingURL=main.fe4d666f.chunk.js.map