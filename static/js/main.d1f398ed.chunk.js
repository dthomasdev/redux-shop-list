(this["webpackJsonpredux-shop-list"]=this["webpackJsonpredux-shop-list"]||[]).push([[0],{19:function(t,e,n){t.exports=n(29)},24:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=n(15),s=n.n(r),c=(n(24),n(6)),l=n(7),o=n(9),u=n(8),m=(n(25),n(16)),h=n(12),d=n(17),p=n(18),f=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).listId=0,a.state={id:0,item:""},a}return Object(l.a)(n,[{key:"changeHandler",value:function(t){var e={};e[t.target.name]=t.target.value,this.setState(e)}},{key:"submitHandler",value:function(t){t.preventDefault(),""!==this.state.item&&(this.props.additem(this.listId,this.state.item),this.setState({id:0,item:""}),this.listId++)}},{key:"render",value:function(){var t=this;return i.a.createElement(h.a,null,i.a.createElement(h.a.Body,null,i.a.createElement(d.a,{onSubmit:function(e){t.submitHandler(e)}},i.a.createElement("input",{value:this.state.item,type:"text",name:"item",placeholder:"Description",onChange:function(e){return t.changeHandler(e)}}),i.a.createElement(p.a,{variant:"warning",type:"submit"},"Add"))))}}]),n}(i.a.Component),v=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,this.props.item))}}]),n}(i.a.Component),b=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).state={listItems:[]},a}return Object(l.a)(n,[{key:"createList",value:function(){return this.state.listItems.map((function(t,e){return i.a.createElement(v,{key:e,id:t.id,item:t.item})}))}},{key:"updateList",value:function(t,e){var n={id:t,item:e};this.setState((function(t){return{listItems:t.listItems.concat(n)}}))}},{key:"render",value:function(){var t=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,null,i.a.createElement("pre",null,JSON.stringify(this.state)),i.a.createElement("h1",null,"Shopping List"),i.a.createElement(f,{additem:function(e,n){return t.updateList(e,n)}}),this.createList()))}}]),n}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.d1f398ed.chunk.js.map