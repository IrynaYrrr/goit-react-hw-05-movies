"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[278],{376:function(e,t,n){n.d(t,{IQ:function(){return s},Jh:function(){return o},aM:function(){return u},xL:function(){return h}});var r=n(861),a=n(757),c=n.n(a),i=n(243),u=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)({method:"get",url:"https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWRmOTEyZTExNzZhMTg1M2MxMzU2ZGI3MmFjMmFkYSIsInN1YiI6IjY1MmMwYWJjNzJjMTNlMDEzZDE1YzUzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hzf05Uu31G7_NhpUWVecKABBc5ROUSkbQVOs-Yw6zYQ",Accept:"application/json"}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)({method:"get",url:"https://api.themoviedb.org/3/movie/".concat(t,"}/credits?language=en-US"),headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWRmOTEyZTExNzZhMTg1M2MxMzU2ZGI3MmFjMmFkYSIsInN1YiI6IjY1MmMwYWJjNzJjMTNlMDEzZDE1YzUzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hzf05Uu31G7_NhpUWVecKABBc5ROUSkbQVOs-Yw6zYQ",Accept:"application/json"}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)({method:"get",url:"https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US&page=1"),headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWRmOTEyZTExNzZhMTg1M2MxMzU2ZGI3MmFjMmFkYSIsInN1YiI6IjY1MmMwYWJjNzJjMTNlMDEzZDE1YzUzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hzf05Uu31G7_NhpUWVecKABBc5ROUSkbQVOs-Yw6zYQ",Accept:"application/json"}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)({method:"get",url:"https://api.themoviedb.org/3/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"),headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWRmOTEyZTExNzZhMTg1M2MxMzU2ZGI3MmFjMmFkYSIsInN1YiI6IjY1MmMwYWJjNzJjMTNlMDEzZDE1YzUzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hzf05Uu31G7_NhpUWVecKABBc5ROUSkbQVOs-Yw6zYQ",Accept:"application/json"}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},368:function(e,t,n){var r=n(87),a=n(184);t.Z=function(e){var t=e.films;return(0,a.jsx)("ul",{children:t&&t.map((function(e){return(0,a.jsx)("li",{style:{listStyleType:"none"},children:(0,a.jsx)(r.rU,{to:"/movies/".concat(e.id),state:e,children:e.original_title})},e.id)}))})}},278:function(e,t,n){n.r(t);var r=n(861),a=n(439),c=n(757),i=n.n(c),u=n(376),s=n(368),o=n(791),h=n(87),p=n(184);t.default=function(){var e,t=(0,o.useState)(""),n=(0,a.Z)(t,2),c=n[0],l=n[1],f=(0,h.lr)(),m=(0,a.Z)(f,2),I=m[0],d=m[1],z=(0,o.useState)(""),Z=(0,a.Z)(z,2),J=Z[0],M=Z[1],v=(0,o.useState)(!1),j=(0,a.Z)(v,2),x=j[0],Y=j[1],y=(0,o.useState)(null),g=(0,a.Z)(y,2),N=g[0],U=g[1],b=null!==(e=I.get("search"))&&void 0!==e?e:"";return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Y(!0),U(null),e.next=5,(0,u.xL)(t);case 5:n=e.sent,U(n.results),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),M(e.t0.response.data);case 12:return e.prev=12,Y(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(t){return e.apply(this,arguments)}}();e(b)}),[b]),(0,p.jsxs)(p.Fragment,{children:[J&&(0,p.jsx)("h1",{children:J}),x?(0,p.jsx)("h1",{children:"Loading"}):(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d({search:c})},children:[(0,p.jsx)("input",{name:"title",type:"text",className:"form-control",id:"exampleInputTodo",value:c,onChange:function(e){var t=e.target.value;l(t)}}),(0,p.jsx)("button",{children:"Search"}),c&&(0,p.jsx)(s.Z,{films:N})]})]})}}}]);
//# sourceMappingURL=278.08afa944.chunk.js.map