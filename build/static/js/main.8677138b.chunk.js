(this.webpackJsonpkyselysovellusfront=this.webpackJsonpkyselysovellusfront||[]).push([[0],{211:function(e,t,s){},338:function(e,t,s){"use strict";s.r(t);var n=s(3),a=s(1),c=s.n(a),i=s(38),r=s.n(i),o=(s(211),s(21)),l=s(129),j=s(381),y=s(365),b=s(339),u=Object(y.a)((function(e){return{form:{width:400}}}));var d=function(e){var t=e.kysymys,s=e.value,a=e.handleSubmit,c=e.handleVastausChange,i=e.handleCheckboxChange,r=e.handleRadionappulaChange,o=(e.handleSlider,u());return"teksti"===t.tyyppi?Object(n.jsx)("div",{children:Object(n.jsxs)("form",{onSubmit:a,children:[Object(n.jsx)("p",{}),t.teksti," ",Object(n.jsx)("br",{}),Object(n.jsx)("textarea",{id:"text",type:"text",value:s,onChange:c})," ",Object(n.jsx)("br",{}),Object(n.jsx)("button",{type:"submit",children:"JATKA"})]})}):"checkbox"===t.tyyppi?Object(n.jsx)("div",{name:"checkbox",children:Object(n.jsxs)("form",{onSubmit:a,children:[Object(n.jsx)("p",{}),t.teksti," ",Object(n.jsx)("br",{}),t.monivalinta.map((function(e,t){return Object(n.jsxs)("label",{children:[Object(n.jsx)("input",{type:"checkbox",id:t+100,name:"checkbox",value:e,onChange:i},e),e,Object(n.jsx)("br",{})]},t+100)})),Object(n.jsx)("button",{type:"submit",children:"JATKA"})]})}):"radionappula"===t.tyyppi?Object(n.jsx)("div",{name:"radio",children:Object(n.jsxs)("form",{onSubmit:a,className:o.form,children:[Object(n.jsx)("p",{}),t.teksti," ",Object(n.jsx)("br",{}),t.monivalinta.map((function(e,t){return Object(n.jsxs)("label",{children:[Object(n.jsx)("input",{type:"radio",id:e,name:"radionappula",value:e,onChange:r},e),e,Object(n.jsx)("br",{})]},t)})),Object(n.jsx)("button",{type:"submit",children:"JATKA"})]})}):"skaala"===t.tyyppi?Object(n.jsx)("div",{children:Object(n.jsx)(b.a,{style:{padding:"10px",margin:"30px",width:"600px"},children:Object(n.jsxs)("form",{onSubmit:a,children:[Object(n.jsx)("p",{}),t.teksti," ",Object(n.jsx)("br",{}),Object(n.jsx)(j.a,{defaultValue:1,"aria-labelledby":"discrete-skaala-slider",step:1,min:1,max:5,valueLabelDisplay:"auto",marks:[{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"}],onChange:c}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{type:"submit",children:"JATKA"})]})})}):void 0},h=s(64),m=s.n(h),O=s(367),x=Object(y.a)({div:{marginLeft:20},button:{padding:10,background:"white",margin:5,color:"black",boxShadow:"0 5px 10px 5px rgba(100, 1, 100, .3)","&:hover":{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 50%)",color:"#FFF"}}});var p=function(e){var t=x(),s=Object(a.useState)([]),c=Object(o.a)(s,2),i=c[0],r=c[1],j=Object(a.useState)(0),y=Object(o.a)(j,2),b=y[0],u=y[1],h=Object(a.useState)({syote:"",kysymys:{}}),p=Object(o.a)(h,2),k=p[0],g=p[1],f=Object(a.useState)({checkbox:[],kysymys:{}}),v=Object(o.a)(f,2),F=v[0],S=v[1],N=Object(a.useState)([]),C=Object(o.a)(N,2),A=C[0],w=C[1],T=Object(a.useState)(""),E=Object(o.a)(T,2),L=E[0],_=E[1],V=Object(a.useState)(""),B=Object(o.a)(V,2),I=B[0],J=B[1],K=e.kysely_id;Object(a.useEffect)((function(){D()}),[]);var P="https://kyselysovellus.herokuapp.com/kyselyt/".concat(K,"/kysymykset"),D=function(){fetch(P).then((function(e){return e.json()})).then((function(e){return r(e)}))},H=function(){u(b+1)},R=function(){var e={syote:k.syote,kysymys:k.kysymys};m.a.post("https://kyselysovellus.herokuapp.com/kyselyt/".concat(K,"/kysymykset/").concat(k.kysymys.kysymys_id,"/vastaus"),e).then((function(e){200===e.status?(g({syote:"",kysymys:""}),_("Lis\xe4ttiin")):_("Lis\xe4ys ei onnistunut"),console.log(L)}))},M=function(){var e={checkbox:F.checkbox,kysymys:F.kysymys};m.a.post("https://kyselysovellus.herokuapp.com/kyselyt/".concat(K,"/kysymykset/").concat(F.kysymys.kysymys_id,"/vastaus"),e).then((function(e){200===e.status?(S({checkbox:[],kysymys:""}),_("Lis\xe4ttiin")):_("Lis\xe4ys ei onnistunut"),console.log(L)}))};return console.log(b),console.log(i.length),b===i.length?Object(n.jsxs)("div",{className:t.div,children:[Object(n.jsx)("h1",{children:"Kiitos kyselyyn vastaamisesta!"}),Object(n.jsx)("h3",{children:"Vastauksesi"}),Object(n.jsxs)("div",{children:[A.map((function(e,t){return"teksti"===e.kysymys.tyyppi||"radionappula"===e.kysymys.tyyppi||"skaala"===e.kysymys.tyyppi?Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:e.kysymys.teksti}),Object(n.jsx)("p",{children:e.syote},t)]}):Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:e.kysymys.teksti}),e.checkbox.map((function(e){return Object(n.jsx)("p",{children:e})}))]})}))," ",Object(n.jsx)(O.a,{className:t.button,a:!0,href:"/",children:"Palaa etusivulle"})]})]}):Object(n.jsxs)("div",{className:t.div,children:[Object(n.jsx)("h1",{children:i[0].kysely.nimi}),Object(n.jsx)("h2",{children:i[0].kysely.kuvaus}),Object(n.jsxs)("p",{children:["T\xe4m\xe4 on ",b+1," / ",i.length," kysymys"]}),Object(n.jsx)(d,{kysymys:i[b],value:k.syote,handleSubmit:function(e){if(e.preventDefault(),"teksti"===i[b].tyyppi||"skaala"===i[b].tyyppi)if(0===k.syote.length)J("Vastaus ei voi olla tyhj\xe4!");else{var t=A.concat(k);w(t),R(k),J(""),g({syote:"",kysymys:{}}),H()}else if("checkbox"===i[b].tyyppi)if(0===F.checkbox.length)J("Vastaus ei voi olla tyhj\xe4!");else{var s=A.concat(F);w(s),M(F),J(""),S({checkbox:[],kysymys:{}}),H()}else if("radionappula"===i[b].tyyppi)if(0===k.syote.length)J("Vastaus ei voi olla tyhj\xe4!");else{var n=A.concat(k);w(n),R(k),J(""),g({syote:"",kysymys:{}}),H()}},handleRadionappulaChange:function(e){var t=e.target.checked;t?g({syote:e.target.value,kysymys:i[b]}):t||g({syote:"",kysymys:i[b]}),console.log(t),console.log(e.target.value),console.log("VASTAUS",JSON.stringify(k))},handleCheckboxChange:function(e){var t=e.target.checked;if(t){var s=Object(l.a)(F.checkbox);s.push(e.target.value),S({checkbox:s,kysymys:i[b]})}else if(!t){var n=Object(l.a)(F.checkbox).filter((function(t){return t!==e.target.value}));S({checkbox:n,kysymys:i[b]})}console.log(t),console.log(e.target.value),console.log("MONIVALINNAT",JSON.stringify(F))},handleVastausChange:function(e,t){"skaala"===i[b].tyyppi?g({syote:t,kysymys:i[b]}):g({syote:e.target.value,kysymys:i[b]}),console.log(k)}}),Object(n.jsx)("h2",{children:I})]})},k=s(19),g=s(11),f=s(368),v=s(369),F=s(370),S=s(372),N=s(106),C=s(378),A=s(371),w=s(83),T=s.n(w),E=s(376),L=s(382),_=s(374),V=s(379),B=s(377),I=Object(y.a)((function(e){return{Header:{},button:{padding:10,background:"white",margin:5,color:"black",boxShadow:"0 5px 10px 5px rgba(100, 1, 100, .3)","&:hover":{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 50%)",color:"#FFF"}},Chart:{Height:300,Width:300},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}}));var J=function(e){var t=I(),s=Object(a.useState)(e.kysely_id),i=Object(o.a)(s,2),r=i[0],l=(i[1],Object(a.useState)([])),j=Object(o.a)(l,2),y=j[0],b=j[1],u=c.a.useState(-1),d=Object(o.a)(u,2),h=d[0],x=d[1],p=0,w=0,J=Object(a.useState)([]),K=Object(o.a)(J,2),P=K[0],D=K[1],H="https://kyselysovellus.herokuapp.com/kyselyt/".concat(r,"/vastaukset"),R="https://kyselysovellus.herokuapp.com/kyselyt/".concat(r,"/kysymykset");Object(a.useEffect)((function(){M()}),[]);var M=function(){m.a.get(H).then((function(e){return b(e.data)})),m.a.get(R).then((function(e){return D(e.data)})),console.log("LISTA",JSON.stringify(P[0])),console.log("DATA",y)},U=function(e){x(h===e?-1:e)},W=function(e){if(null===e)return new Array;for(var t=0,s=0,n=0,a=0,c=!1,i={nimi:[],"m\xe4\xe4r\xe4":[]};n<y.length;){if(y[n].kysymys.kysymys_id===e){if(y[n].checkbox.length>0)for(;a<y[n].kysymys.monivalinta.length;)i.nimi.push(y[n].kysymys.monivalinta[a]),i.m\u00e4\u00e4r\u00e4.push(0),a+=1;for(;t<y[n].checkbox.length;){for(;s<i.nimi.length;)y[n].checkbox[t]===i.nimi[s]&&(c=!0,i.m\u00e4\u00e4r\u00e4[s]=i.m\u00e4\u00e4r\u00e4[s]+1),s+=1;c||(i.nimi.push(y[n].checkbox[t]),i.m\u00e4\u00e4r\u00e4.push(1)),c=!1,s=0,t+=1}t=0}n+=1}var r=new Array;for(n=0;n<i.nimi.length;n++){var o={nimi:i.nimi[n],"m\xe4\xe4r\xe4":i.m\u00e4\u00e4r\u00e4[n]};r.push(o)}return r},q=function(e){for(var t=0,s=0,n=!1,a={nimi:[],"m\xe4\xe4r\xe4":[]};s<y.length;){if(y[s].kysymys.kysymys_id===e&&"radionappula"===y[s].kysymys.tyyppi){for(;t<a.nimi.length;)y[s].syote===a.nimi[t]&&(n=!0,a.m\u00e4\u00e4r\u00e4[t]=a.m\u00e4\u00e4r\u00e4[t]+1),t+=1;n||(a.nimi.push(y[s].syote),a.m\u00e4\u00e4r\u00e4.push(1)),n=!1,t=0}s+=1}var c=new Array;for(s=0;s<a.nimi.length;s++){console.log("M\xc4\xc4R\xc4 ",a.m\u00e4\u00e4r\u00e4[s]);var i={x:a.m\u00e4\u00e4r\u00e4[s]>0?a.nimi[s]+" / "+a.m\u00e4\u00e4r\u00e4[s]+" kpl":a.nimi[s],y:a.m\u00e4\u00e4r\u00e4[s]};c.push(i)}return c},z=function(e){for(var t=0,s=0,n=!1,a={nimi:[],"m\xe4\xe4r\xe4":[]};s<y.length;){if(y[s].kysymys.kysymys_id===e&&"skaala"===y[s].kysymys.tyyppi){for(;t<a.nimi.length;)y[s].syote===a.nimi[t]&&(n=!0,a.m\u00e4\u00e4r\u00e4[t]=a.m\u00e4\u00e4r\u00e4[t]+1),t+=1;n||(a.nimi.push(y[s].syote),a.m\u00e4\u00e4r\u00e4.push(1)),n=!1,t=0}s+=1}var c=new Array;for(s=0;s<a.nimi.length;s++){console.log("M\xc4\xc4R\xc4 ",a.m\u00e4\u00e4r\u00e4[s]);var i={x:a.m\u00e4\u00e4r\u00e4[s]>0?a.nimi[s]+" / "+a.m\u00e4\u00e4r\u00e4[s]+" kpl":a.nimi[s],y:a.m\u00e4\u00e4r\u00e4[s]};c.push(i)}return c};return Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{}),Object(n.jsx)(f.a,{container:!0,direction:"column",spacing:1,className:t.grid,children:P.map((function(e,s){return Object(n.jsxs)(n.Fragment,{children:[0===p?Object(n.jsxs)(f.a,{item:!0,className:t.Kysely,children:[Object(n.jsx)("h1",{children:P[0].kysely.nimi}),Object(n.jsx)("h2",{children:P[0].kysely.kuvaus}),Object(n.jsx)("h2",{children:"Vastaukset:"}),Object(n.jsx)(O.a,{className:t.button,a:!0,href:"/",children:"Palaa etusivulle"}),Object(n.jsx)("span",{style:{display:"none"},children:p=1})]},s):Object(n.jsx)(n.Fragment,{}),Object(n.jsx)(f.a,{item:!0,className:t.gridItem,children:Object(n.jsxs)("div",{children:[Object(n.jsxs)(v.a,{children:[Object(n.jsx)(F.a,{className:t.Header,title:e.teksti}),y.map((function(a,c){if(a.kysymys.kysymys_id===e.kysymys_id){var i,r,o,l;if(w+=1,"teksti"===a.kysymys.tyyppi)return Object(n.jsxs)(n.Fragment,{children:[1===w?Object(n.jsx)(A.a,(i={className:t.Icon},Object(k.a)(i,"className",Object(g.a)(t.expand,Object(k.a)({},t.expandOpen,h===s))),Object(k.a)(i,"onClick",(function(){return U(s)})),Object(k.a)(i,"aria-expanded",h===s),Object(k.a)(i,"children",Object(n.jsx)(T.a,{})),i)):Object(n.jsx)(n.Fragment,{}),Object(n.jsx)(C.a,{in:h===s,children:Object(n.jsx)(S.a,{className:t.content,children:Object(n.jsxs)(N.a,{children:[w,": ",a.syote]},c)})})]});if("radionappula"===a.kysymys.tyyppi)return Object(n.jsxs)(n.Fragment,{children:[1===w?Object(n.jsx)(A.a,(r={className:t.Icon},Object(k.a)(r,"className",Object(g.a)(t.expand,Object(k.a)({},t.expandOpen,h===s))),Object(k.a)(r,"onClick",(function(){return U(s)})),Object(k.a)(r,"aria-expanded",h===s),Object(k.a)(r,"children",Object(n.jsx)(T.a,{})),r)):Object(n.jsx)(n.Fragment,{}),Object(n.jsx)(C.a,{in:h===s,children:1===w?Object(n.jsx)(S.a,{className:t.content,children:Object(n.jsx)("div",{className:t.pie,children:Object(n.jsx)(E.a,{data:q(e.kysymys_id),colorScale:"qualitative",domainPadding:20,height:400,width:1e3,containerComponent:Object(n.jsx)(L.a,{responsive:!1})})})}):Object(n.jsx)(n.Fragment,{})})]});if("checkbox"===e.tyyppi)return Object(n.jsxs)(n.Fragment,{children:[1===w?Object(n.jsx)(A.a,(o={className:t.Icon},Object(k.a)(o,"className",Object(g.a)(t.expand,Object(k.a)({},t.expandOpen,h===s))),Object(k.a)(o,"onClick",(function(){return U(s)})),Object(k.a)(o,"aria-expanded",h===s),Object(k.a)(o,"children",Object(n.jsx)(T.a,{})),o)):Object(n.jsx)(n.Fragment,{}),Object(n.jsx)(C.a,{in:h===s,children:1===w?Object(n.jsx)(S.a,{className:t.content,children:Object(n.jsx)("div",{children:Object(n.jsx)(_.a,{domainPadding:20,height:400,width:120*W(e.kysymys_id).length,containerComponent:Object(n.jsx)(L.a,{responsive:!1}),labelComponent:Object(n.jsx)(V.a,{angle:45}),children:Object(n.jsx)(B.a,{style:{data:{fill:"#c43a31"}},data:W(e.kysymys_id),x:"nimi",y:"m\xe4\xe4r\xe4"})})})}):Object(n.jsx)(n.Fragment,{})})]});if("skaala"===a.kysymys.tyyppi)return Object(n.jsxs)(n.Fragment,{children:[1===w?Object(n.jsx)(A.a,(l={className:t.Icon},Object(k.a)(l,"className",Object(g.a)(t.expand,Object(k.a)({},t.expandOpen,h===s))),Object(k.a)(l,"onClick",(function(){return U(s)})),Object(k.a)(l,"aria-expanded",h===s),Object(k.a)(l,"children",Object(n.jsx)(T.a,{})),l)):Object(n.jsx)(n.Fragment,{}),Object(n.jsx)(C.a,{in:h===s,children:1===w?Object(n.jsx)(S.a,{className:t.content,children:Object(n.jsx)("div",{className:t.pie,children:Object(n.jsx)(E.a,{data:z(e.kysymys_id),colorScale:"qualitative",domainPadding:20,height:400,width:1e3,containerComponent:Object(n.jsx)(L.a,{responsive:!1})})})}):Object(n.jsx)(n.Fragment,{})})]})}}))]}),Object(n.jsx)("span",{style:{display:"none"},children:w=0})]})},s)]})}))})]})},K=Object(y.a)({button:{padding:10,background:"white",margin:5,color:"blue",boxShadow:"0 5px 10px 5px rgba(100, 1, 100, .3)","&:hover":{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 50%)",color:"#FFF"}},button2:{padding:10,background:"white",color:"red",boxShadow:"0 5px 10px 5px rgba(100, 1, 100, .3)","&:hover":{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 50%)",color:"#FFF"}},card:{background:"linear-gradient(90deg, #FE6B8B 30%, #FF8E53 90%)",color:"white",marginLeft:20},content:{background:"white"},search:{textAlign:"center"},h1:{textAlign:"center"}});var P=function(e){var t=e.handleVastaa,s=e.handleTulokset,c=K(),i=Object(a.useState)([]),r=Object(o.a)(i,2),l=r[0],j=r[1],y=Object(a.useState)(""),b=Object(o.a)(y,2),u=b[0],d=b[1];return Object(a.useEffect)((function(){!function(){fetch("https://kyselysovellus.herokuapp.com/kyselyt").then((function(e){return e.json()})).then((function(e){return j(e)}));var e=l.filter((function(e){return!0!==e.piilotettu}));console.log("RESULT",JSON.stringify(e)),j(e)}()}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:c.h1,children:"Kaikki kyselyt"}),Object(n.jsxs)("p",{className:c.search,children:[" ",Object(n.jsx)("input",{placeholder:"Hae kysely",type:"text",onChange:function(e){d(e.target.value)}})]}),Object(n.jsx)(f.a,{container:!0,spacing:4,style:{marginTop:.1,justifyContent:"center"},children:l.filter((function(e){return""===u||e.nimi.toLowerCase().includes(u.toLowerCase())?l:void 0})).map((function(e){return e.piilotettu?Object(n.jsx)("div",{}):Object(n.jsx)(f.a,{item:!0,children:Object(n.jsxs)(v.a,{className:c.card,style:{marginTop:10,maxWidth:300,minWidth:200},children:[Object(n.jsx)(v.a,{title:"kysely",children:Object(n.jsx)(N.a,{align:"center",children:e.nimi})}),Object(n.jsxs)(S.a,{children:[Object(n.jsx)(O.a,{className:c.button,onClick:function(){return t(e.kysely_id)},children:"VASTAA"}),Object(n.jsx)(O.a,{className:c.button2,onClick:function(){return s(e.kysely_id)},children:"TULOKSET"})]})]})},e.kysely_id)}))})," "]})};var D=function(){var e=Object(a.useState)("etusivu"),t=Object(o.a)(e,2),s=t[0],c=t[1],i=Object(a.useState)(""),r=Object(o.a)(i,2),l=r[0],j=r[1];return"etusivu"===s?Object(n.jsx)(P,{handleVastaa:function(e){c("vastaussivu"),j(e),console.log("HANDLEVASTAA",s)},handleTulokset:function(e){c("tulossivu"),j(e),console.log("HANDLE TULOKSET",s)}}):"tulossivu"===s?Object(n.jsx)("div",{children:Object(n.jsx)(J,{kysely_id:l})}):"vastaussivu"===s?Object(n.jsx)("div",{children:Object(n.jsx)(p,{kysely_id:l})}):void 0},H=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,384)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),c(e),i(e)}))};r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(D,{})}),document.getElementById("root")),H()}},[[338,1,2]]]);
//# sourceMappingURL=main.8677138b.chunk.js.map