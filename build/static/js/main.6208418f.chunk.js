(this.webpackJsonpbsport_api=this.webpackJsonpbsport_api||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(7),i=n.n(l),c=(n(13),n(1)),o=n(2),u=n(4),s=n(3),m=(n(14),n(15),n(6));m.locale("fr");var f=m().startOf("isoweek").format("YYYY-MM-DD"),d=m().endOf("isoweek").format("YYYY-MM-DD"),p=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("ul",{className:"list-group"},this.props.data.map((function(e){return r.a.createElement("li",{key:e.id,className:"list-group-item"},r.a.createElement("h6",null,"Date : ",m.parseZone(e.date_start).format("dddd \xe0  kk:mm").toString()),r.a.createElement("small",null,"Dur\xe9e en minute : ",e.duration_minute),r.a.createElement("br",null),r.a.createElement("small",null,"Coach : ",e.coach),r.a.createElement("small",null," | Activit\xe9 : ",e.activity),r.a.createElement("small",null," | \xc9tablissement : ",e.establishment))})))}}]),n}(r.a.Component),h=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return-1===this.props.day?r.a.createElement("button",{type:"button",className:"btn btn-outline-danger",onClick:function(){return e.props.onClick()}},this.props.value):r.a.createElement("button",{type:"button",className:"btn btn-outline-primary",onClick:function(){return e.props.onClick()}},this.props.value)}}]),n}(r.a.Component),v=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={data:[],isdataSet:!1,filter:-1},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://back.staging.bsport.io/api/v1/offer/?company=6&min_date="+f+"&max_date="+d).then((function(e){return e.json()})).then((function(t){var n=[];t.results.forEach((function(e){return n.push(e)})),e.setState({data:n,isdataSet:!0})}))}},{key:"filter",value:function(e){this.setState({filter:e})}},{key:"render",value:function(){var e=this;if(this.state.isdataSet){var t=[];return this.state.filter>=0?this.state.data.forEach((function(n){m(n.date_start).weekday()===e.state.filter&&t.push(n)})):t=this.state.data,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col-7"},r.a.createElement("h2",null,"S\xe9l\xe9ctionnez un jour pour voir les s\xe9ances correspondantes"),r.a.createElement("h6",null,"Le calendrier montre les s\xe9ances de la semaine actuelle"),r.a.createElement("br",null),r.a.createElement("div",{className:"text-center"},r.a.createElement(h,{onClick:function(){return e.filter(0)},value:"Lundi"}),r.a.createElement(h,{onClick:function(){return e.filter(1)},value:"Mardi"}),r.a.createElement(h,{onClick:function(){return e.filter(2)},value:"Mercredi"}),r.a.createElement(h,{onClick:function(){return e.filter(3)},value:"Jeudi"}),r.a.createElement(h,{onClick:function(){return e.filter(4)},value:"Venredi"}),r.a.createElement(h,{onClick:function(){return e.filter(5)},value:"Samedi",k:!0}),r.a.createElement(h,{onClick:function(){return e.filter(6)},value:"Dimanche"}),r.a.createElement("br",null),r.a.createElement(h,{onClick:function(){return e.filter(-1)},value:"D\xe9sactiver le filtre",day:-1}))),r.a.createElement("div",{className:"col-4"},r.a.createElement(p,{data:t}))))}return"Loading..."}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.6208418f.chunk.js.map