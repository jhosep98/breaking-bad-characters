(this["webpackJsonpmy-brb-app"]=this["webpackJsonpmy-brb-app"]||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n(5),s=n.n(r),i=(n(12),n(13),n(4)),o=n.n(i),u=n(6),l=n(2),j=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=Object(a.useState)(e),n=Object(l.a)(t,2),c=n[0],r=n[1];return{counter:c,increment:function(){r(c+1)}}}(1),t=e.counter,n=e.increment,r=function(e){var t=Object(a.useRef)(!0),n=Object(a.useState)({data:null,loading:!0,error:null}),c=Object(l.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){return function(){t.current=!1}}),[]),Object(a.useEffect)((function(){s({data:null,loading:!0,error:null}),fetch(e).then((function(e){return e.json()})).then((function(e){setTimeout((function(){t.current?s({loading:!1,error:null,data:e}):console.log("setState no se llamo")}),1e3)}))}),[e]),r}("https://www.breakingbadapi.com/api/quotes/".concat(t)),s=r.loading,i=r.data,o=!!i&&i[0],u=o.author,j=o.quote;return Object(c.jsxs)("div",{className:"container mt-5",children:[Object(c.jsx)("h2",{children:"Breaking Bad Quotes"}),Object(c.jsx)("hr",{}),s?Object(c.jsx)("div",{className:"alert alert-info text-center",children:"Loading...."}):Object(c.jsxs)("blockquote",{className:"blockquote text-right",children:[Object(c.jsx)("p",{className:"mb-0",children:j}),Object(c.jsx)("footer",{className:"blockquote-footer",children:u})]}),Object(c.jsx)("button",{className:"btn btn-primary",onClick:n,children:"Next quote"})]})},b=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(""),i=Object(l.a)(s,2),b=i[0],m=i[1];Object(a.useEffect)((function(){d()}),[]);var d=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,c,a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://www.breakingbadapi.com/api/characters?name=".concat(encodeURI(t)),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:a=e.sent,s=a.map((function(e){return{id:e.char_id,name:e.name,nickname:e.nickname,img:e.img}})),r(s);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"container mt-5 ",children:[Object(c.jsx)(j,{}),Object(c.jsxs)("div",{className:"container mt-5",children:[Object(c.jsx)("h2",{children:"Breaking Bad Characters"}),Object(c.jsx)("hr",{}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d(b)},children:[Object(c.jsx)("input",{type:"text",placeholder:"Search...",name:"name",className:"form-control",onChange:function(e){m(e.target.value)},value:b,autoComplete:"off"}),Object(c.jsx)("button",{className:"btn btn-primary mt-3",type:"submit",children:"Search!"})]})})]}),Object(c.jsx)("h2",{children:"Characters:"}),Object(c.jsx)("div",{className:"container mt-5 d-flex flex-wrap justify-content-around",children:n.map((function(e){var t=e.id,n=e.name,a=e.nickname,r=e.img;return Object(c.jsxs)("div",{className:"card m-3",style:{width:"18rem"},children:[Object(c.jsx)("img",{src:r,alt:n,className:"card-img-top"}),Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("h5",{className:"card-title",children:n}),Object(c.jsx)("h6",{className:"card-subtitle mb-2 text-muted",children:a})]})]},t)}))})]})};s.a.render(Object(c.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.6328ed0f.chunk.js.map