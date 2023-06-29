(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{37:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(26),a=c(10),s=(c(35),c(36),c(37),c(3)),r=c(14),j=c.n(r),i=c(2),o=function(e){var t=e.to,c=e.text;return Object(i.jsx)(a.c,{to:t,className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},children:c})},l=function(){return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(o,{to:"/",text:"Home"}),Object(i.jsx)(o,{to:"/people",text:"People"})]})})})},b=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},d=c(4),h=c(6),O=c(5),x=c(0),u=function(e){var t=e.person;return Object(i.jsx)(a.b,{to:"/people/".concat(t.slug),className:j()({"has-text-danger":"f"===t.sex}),children:t.name})},p=function(e){var t=e.people,c=e.isLoading,n=Object(s.q)().personSlug,a=void 0===n?"":n;return c?null:Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){var c=t.find((function(t){return t.name===e.motherName})),n=t.find((function(t){return t.name===e.fatherName}));return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":e.slug===a}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(u,{person:e})}),Object(i.jsx)("td",{children:e.sex}),Object(i.jsx)("td",{children:e.born}),Object(i.jsx)("td",{children:e.died}),Object(i.jsx)("td",{children:c?Object(i.jsx)(u,{person:c}):e.motherName||"-"}),Object(i.jsx)("td",{children:n?Object(i.jsx)(u,{person:n}):e.fatherName||"-"})]},e.slug)}))})]})};function m(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var f=function(e){return e.UPLOAD="upload",e.NOPEOPLE="no people",e}({}),v=(c(39),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})}),g=function(){var e=Object(x.useState)([]),t=Object(O.a)(e,2),c=t[0],n=t[1],a=Object(x.useState)(""),s=Object(O.a)(a,2),r=s[0],j=s[1],o=Object(x.useState)(!1),l=Object(O.a)(o,2),b=l[0],u=l[1],g=Object(x.useCallback)(Object(h.a)(Object(d.a)().mark((function e(){var t;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.prev=1,e.next=4,m();case 4:(t=e.sent).length||j(f.NOPEOPLE),n(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),j(f.UPLOAD);case 12:return e.prev=12,u(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])}))),[c]);return Object(x.useEffect)((function(){g()}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),b&&Object(i.jsx)(v,{}),c&&!r?Object(i.jsx)(p,{people:c,isLoading:b}):Object(i.jsx)("div",{className:"block",children:Object(i.jsx)("div",{className:"box table-container",children:r===f.UPLOAD?Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}):Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})})})]})},N=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},P=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(l,{}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)(s.d,{children:[Object(i.jsx)(s.b,{path:"/",element:Object(i.jsx)(b,{})}),Object(i.jsx)(s.b,{path:"home",element:Object(i.jsx)(s.a,{to:"/",replace:!0})}),Object(i.jsxs)(s.b,{path:"people",children:[Object(i.jsx)(s.b,{index:!0,element:Object(i.jsx)(g,{})}),Object(i.jsx)(s.b,{path:":personSlug",element:Object(i.jsx)(g,{})})]}),Object(i.jsx)(s.b,{path:"*",element:Object(i.jsx)(N,{})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(a.a,{children:Object(i.jsx)(P,{})}))}},[[40,1,2]]]);
//# sourceMappingURL=main.1647b204.chunk.js.map