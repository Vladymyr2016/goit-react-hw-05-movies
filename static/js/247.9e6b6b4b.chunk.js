"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{247:function(e,t,n){n.r(t);var r=n(439),a=n(791),c=n(689),u=n(847),o=n(184);t.default=function(){var e=(0,c.UO)().movieId,t=(0,a.useState)(),n=(0,r.Z)(t,2),s=n[0],i=n[1];return(0,a.useEffect)((function(){(0,u.Ke)(e).then((function(e){return console.log(e),i(e)})).catch((function(e){return console.log(e)}))}),[e]),console.log(s),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(o.Fragment,{children:s?(0,o.jsxs)("div",{children:[(0,o.jsxs)("h3",{children:["Cast: ",s.title]}),(0,o.jsx)("ul",{children:s.map((function(e){return(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.profile_path),alt:"actor"}),(0,o.jsx)("p",{children:e.name})]},e.id)}))})]}):(0,o.jsx)("p",{children:"Loading ... "})})})}},847:function(e,t,n){n.d(t,{$T:function(){return f},Ke:function(){return p},e:function(){return i},m5:function(){return s}});var r=n(861),a=n(757),c=n.n(a),u=n(340);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="cab39ac6588bb4b72e7fd8c3a37c0650",s=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day",{params:{page:1,api_key:o}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t),{params:{movie_id:t,page:1,api_key:o}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/credits"),{params:{api_key:o,movie_id:t}});case 2:return n=e.sent,r=n.data,console.log(r),e.abrupt("return",r.cast);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/reviews"),{params:{page:1,api_key:o}});case 2:return n=e.sent,r=n.data,console.log(r),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=247.9e6b6b4b.chunk.js.map