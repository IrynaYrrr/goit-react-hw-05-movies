"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{376:function(e,t,n){n.d(t,{IQ:function(){return o},Jh:function(){return p},TP:function(){return i},aM:function(){return s},xL:function(){return f}});var r=n(861),a=n(757),u=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWRmOTEyZTExNzZhMTg1M2MxMzU2ZGI3MmFjMmFkYSIsInN1YiI6IjY1MmMwYWJjNzJjMTNlMDEzZDE1YzUzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hzf05Uu31G7_NhpUWVecKABBc5ROUSkbQVOs-Yw6zYQ";var s=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)({method:"get",url:"/movie/popular?language=en-US&page=1"});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)({method:"get",url:"/movie/".concat(t,"?language=en-US")});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)({method:"get",url:"/movie/".concat(t,"}/credits?language=en-US")});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)({method:"get",url:"/movie/".concat(t,"/reviews?language=en-US&page=1")});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)({method:"get",url:"/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1")});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},186:function(e,t,n){n.r(t);var r=n(861),a=n(439),u=n(757),c=n.n(u),s=n(791),i=n(689),o=n(376),p=n(485),f=n(184);t.default=function(){var e=(0,s.useState)(""),t=(0,a.Z)(e,2),n=t[0],u=t[1],l=(0,s.useState)(!1),h=(0,a.Z)(l,2),d=h[0],v=h[1],m=(0,s.useState)(null),x=(0,a.Z)(m,2),Z=x[0],g=x[1],w=(0,i.TH)().state.id;return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),g(null),e.next=5,(0,o.Jh)(w);case 5:t=e.sent,g(t.results),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),u(e.t0.response.data);case 12:return e.prev=12,v(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[w]),n?(0,f.jsx)("h1",{children:n}):d?(0,f.jsx)("h1",{children:"Loading..."}):(0,f.jsx)("div",{children:Z&&Z[0]?(0,f.jsx)("ul",{children:Z.map((function(e){var t=e.author,n=e.content,r=e.id;return(0,f.jsxs)("li",{style:{listStyleType:"none"},children:[(0,f.jsxs)("b",{children:[" ",t]}),(0,f.jsx)("br",{}),n]},r)}))}):(0,f.jsx)(p.Z,{})})}}}]);
//# sourceMappingURL=186.765adf15.chunk.js.map