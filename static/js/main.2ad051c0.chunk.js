(this.webpackJsonpnewsapp=this.webpackJsonpnewsapp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(8),r=a.n(s),i=(a(14),a(2)),l=a(3),o=a(5),d=a(4),b=(a(15),a(0)),j=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("a",{className:"navbar-brand",href:"#",children:"NewsMonkey"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link",href:"#",children:"About"})})]}),Object(b.jsxs)("form",{className:"d-flex",children:[Object(b.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(b.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})})}}]),a}(n.Component),u=j,h=a(7),p=a.n(h),m=a(9),O=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.description,n=e.imgUrl,c=e.newsUrl;return Object(b.jsx)("div",{className:"my-2",children:Object(b.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(b.jsx)("img",{src:n||"https://s.yimg.com/ny/api/res/1.2/AOToTq8nPyqmzQ.8PEQKpA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03OTU-/https://s.yimg.com/os/creatr-uploaded-images/2021-10/684a5510-23fe-11ec-9efe-818194d8ddcc",className:"card-img-top",alt:"..."}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title",children:t}),Object(b.jsxs)("p",{className:"card-text",children:[a,"..."]}),Object(b.jsx)("a",{href:c,className:"btn btn-sm btn-primary",children:"Go somewhere"})]})]})})}}]),a}(n.Component),v=O,f=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).articles=[],console.log("hello this is a js developer"),e.state={article:e.articles,loading:!1},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("inside com did mount"),"https://newsapi.org/v2/top-headlines?country=us&apiKey=aba3e6fa104a4c78a0f132467cdfd8bd",e.next=4,fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=aba3e6fa104a4c78a0f132467cdfd8bd");case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,console.log(a),this.setState({article:a.articles});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log("inside render"),Object(b.jsxs)("div",{className:"container my-3",children:[Object(b.jsx)("h2",{children:"NewsMonkey - Top Headlines"}),Object(b.jsx)("div",{className:"row",children:this.state.article.map((function(e){return Object(b.jsx)("div",{className:"col-md-4",children:Object(b.jsx)(v,{title:e.title?e.title:"",description:e.description?e.description.slice(0,80):"",imgUrl:e.urlToImage,newsUrl:e.url})},e.url)}))})]})}}]),a}(n.Component),x=f,g=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(u,{}),Object(b.jsx)(x,{})]})}}]),a}(n.Component),y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),y()}},[[18,1,2]]]);
//# sourceMappingURL=main.2ad051c0.chunk.js.map