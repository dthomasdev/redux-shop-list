(this["webpackJsonpredux-shop-list"]=this["webpackJsonpredux-shop-list"]||[]).push([[0],{32:function(e,t,n){e.exports=n(44)},37:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(15),c=n.n(i),l=(n(37),n(5)),o=n(6),u=n(8),s=n(7),m=(n(19),n(29)),p=n(25),d=n(30),f=n(17),E="SHOW_ALL",h="SHOW_COMPLETED",v="SHOW_ACTIVE",b=0;var O=n(10),j=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e,t=this;return a.a.createElement(p.a,{className:"mb-5"},a.a.createElement(p.a.Body,null,a.a.createElement(d.a,{onSubmit:function(n){var r;(n.preventDefault(),e.value.trim())&&(t.props.dispatch((r=e.value,{type:"ADD_ITEM",id:b++,text:r})),e.value="")}},a.a.createElement("input",{ref:function(t){e=t}}),a.a.createElement(f.a,{variant:"warning",type:"submit",className:"ml-2"},"Add"))))}}]),n}(a.a.Component),y=Object(O.b)()(j),I=n(13),k=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(I.a.Item,null,a.a.createElement(I.a.Link,{eventKey:this.props.children,onClick:this.props.onClick,disabled:this.props.active},this.props.children)))}}]),n}(a.a.Component);var g=Object(O.b)((function(e,t){return{active:t.filter===e.visbilityFilter}}),(function(e,t){return{onClick:function(){e({type:"SET_VISIBILITY_ITEM",filter:t.filter})}}}))(k),T=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return a.a.createElement(I.a,{variant:"tabs",defaultActiveKey:"All"},a.a.createElement(g,{filter:E},"All"),a.a.createElement(g,{filter:v},"Outstanding"),a.a.createElement(g,{filter:h},"Completed"))}}]),n}(a.a.Component),C=n(28),_=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return a.a.createElement("tr",null,a.a.createElement("td",null,this.props.id),a.a.createElement("td",null,a.a.createElement("span",{style:{textDecoration:this.props.completed?"line-through":"none",cursor:"pointer"},onClick:this.props.mark},this.props.item)),a.a.createElement("td",null,a.a.createElement(f.a,{variant:"outline-danger",onClick:this.props.remove},"Remove")))}}]),n}(a.a.Component),M=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement(C.a,{striped:!0},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"ID"),a.a.createElement("th",null,"Item"),a.a.createElement("th",null,"Action"))),a.a.createElement("tbody",null,this.props.listItems.map((function(t){return a.a.createElement(_,{key:t.id,id:t.id,item:t.item,completed:t.completed,remove:function(){return e.props.remove(t.id)},mark:function(){return e.props.mark(t.id)}})}))))}}]),n}(a.a.Component);function S(e,t){switch(t){case"SHOW_COMPLETED":return e.filter((function(e){return e.completed}));case"SHOW_ACTIVE":return e.filter((function(e){return!e.completed}));case"SHOW_ALL":default:return console.log(e),e}}var w=Object(O.b)((function(e){return{listItems:S(e.items,e.visibilityFilter)}}),(function(e){return{mark:function(t){e(function(e){return{type:"TOGGLE_ITEM",id:e}}(t))},remove:function(t){e(function(e){return{type:"REMOVE_ITEM",id:e}}(t))}}}))(M),L=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(m.a,null,a.a.createElement("h1",null,"Shopping List"),a.a.createElement(y,null),a.a.createElement(T,null),a.a.createElement(w,null)))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=n(11),D=n(31);var W=Object(A.b)({visibilityFilter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_ITEM":return t.VisibilityFilters;default:return e}},items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM":return[].concat(Object(D.a)(e),[{id:t.id,item:t.text,completed:!1}]);case"REMOVE_ITEM":return e.filter((function(e,n){return t.id!==n}));case"TOGGLE_ITEM":return e.map((function(e){return e.id===t.id?Object.assign({},e,{completed:!e.completed}):e}));default:return e}}}),V=Object(A.c)(W);c.a.render(a.a.createElement(O.a,{store:V},a.a.createElement(a.a.StrictMode,null,a.a.createElement(L,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.ce7664c9.chunk.js.map