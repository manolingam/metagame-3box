(this["webpackJsonpmetagame-3box"]=this["webpackJsonpmetagame-3box"]||[]).push([[0],{1002:function(e,t){},1004:function(e,t){},1089:function(e,t){},1091:function(e,t){},1240:function(e,t){},1242:function(e,t){},1249:function(e,t){},1251:function(e,t){},1259:function(e,t){},1263:function(e,t){},1265:function(e,t){},1272:function(e,t){},1274:function(e,t){},1347:function(e,t){},1383:function(e,t){},1389:function(e,t){},1391:function(e,t){},1569:function(e,t){},1592:function(e,t){},1594:function(e,t){},1617:function(e,t){},1619:function(e,t){},1649:function(e,t){},1651:function(e,t){},1695:function(e,t){},1713:function(e,t){},1718:function(e,t){},1720:function(e,t){},1726:function(e,t){},1728:function(e,t){},1756:function(e,t){},1842:function(e,t){},1843:function(e,t){},1907:function(e,t){},1913:function(e,t){},1922:function(e,t){},1972:function(e,t,a){},1973:function(e,t,a){},1977:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(75),i=a.n(o),c=a(0),l=a.n(c),s=a(52),u=a(10),m=a(12),d=a(15),f=a(16),p=a(271),h=a.n(p),E=a(347),b=a(158),g=a(2023),y=a(2029),v=a(2025),x=a(2026),w=a(2024),k=a(2027),C=a(2028),M=a(2013),O=a(2015),j=a(2017),S=a(2019),W=a(2031),A=a(126),N=a(2030),B=a(346),T=a(2018),q=Object(M.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},avatar:{backgroundColor:B.a[500]}}})),D=function(e){var t=e.users,a=q();return r.a.createElement("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center"}},t.map((function(e){return r.a.createElement(O.a,{key:e.id,className:a.root,style:{margin:"1em"}},r.a.createElement(j.a,{avatar:r.a.createElement(T.a,{color:"primary",badgeContent:Math.floor(Math.random()*Math.floor(100))},r.a.createElement(W.a,{style:{backgroundColor:"white"}},r.a.createElement("img",{src:"https://robohash.org/".concat(e.id,"?size=50x50"),alt:"avatar"}))),title:e.name,subheader:e.email}),r.a.createElement(S.a,null,r.a.createElement(N.a,{name:"read-only",value:Math.floor(Math.random()*Math.floor(6)),readOnly:!0}),r.a.createElement("hr",null),r.a.createElement(A.a,{variant:"body2",color:"textSecondary",component:"p"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at nunc nibh. Maecenas accumsan semper hendrerit. Quisque facilisis congue semper. Quisque nec tellus id lectus efficitur facilisis eu et nunc.")))})))},P=a(2020),I=a(2032),J=a(2021),L=a(2022),Q=(a(1972),function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this)).state={profile:""},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.getProfile(this.props.account);case 2:t=e.sent,this.setState({profile:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.profile,t=e.description,a=e.image,n=e.job,o=e.employer,i=e.website,c=e.location,l=e.name,s=e.memberSince;return r.a.createElement("div",{className:"profile-container"},this.state.profile?r.a.createElement("div",{className:"box-profile"},r.a.createElement(T.a,{color:"primary",badgeContent:Math.floor(Math.random()*Math.floor(100))},r.a.createElement("img",{id:"3box-avatar",src:"https://ipfs.io/ipfs/".concat(a[0].contentUrl["/"]),alt:"avatar"})),r.a.createElement("br",null),r.a.createElement(N.a,{name:"read-only",value:Math.floor(Math.random()*Math.floor(6)),readOnly:!0}),r.a.createElement("br",null),r.a.createElement("a",{href:"https://3box.io/".concat(this.props.account),target:"_blank",rel:"noopener noreferrer"},"Edit on 3Box"),r.a.createElement(P.a,null,r.a.createElement(I.a,null,r.a.createElement(J.a,{primary:"Name",secondary:l})),r.a.createElement(L.a,{variant:"inset",component:"li"}),r.a.createElement(I.a,null,r.a.createElement(J.a,{primary:"Job",secondary:n})),r.a.createElement(L.a,{variant:"inset",component:"li"}),r.a.createElement(I.a,null,r.a.createElement(J.a,{primary:"Employer",secondary:o})),r.a.createElement(L.a,{variant:"inset",component:"li"}),r.a.createElement(I.a,null,r.a.createElement(J.a,{primary:"Website",secondary:i})),r.a.createElement(L.a,{variant:"inset",component:"li"}),r.a.createElement(I.a,null,r.a.createElement(J.a,{primary:"Location",secondary:c})),r.a.createElement(L.a,{variant:"inset",component:"li"}),r.a.createElement(I.a,null,r.a.createElement(J.a,{primary:"Description",secondary:t})),r.a.createElement(L.a,{variant:"inset",component:"li"}),r.a.createElement(I.a,null,r.a.createElement(J.a,{primary:"Member since",secondary:s})))):r.a.createElement(g.a,null))}}]),a}(r.a.Component)),R=a(852),z=a.n(R),U=(a(1973),function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).handleClickOpen=Object(s.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.state.needToAWeb3Browser){t.next=4;break}e.setState({open:!0}),t.next=12;break;case 4:return e.setState({open:!0}),t.next=7,h.a.get3idConnectProvider();case 7:return a=t.sent,t.next=10,h.a.openBox(e.state.accounts[0],a);case 10:n=t.sent,e.setState({box:n,open:!1,signedin:!0});case 12:case"end":return t.stop()}}),t)}))),e.handleClose=function(){e.setState({open:!1})},e.state={needToAWeb3Browser:!1,accounts:"",open:!1,signedin:!1},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:if(a=e.sent,this.setState({userlist:a}),"undefined"!=typeof window.ethereum){e.next=11;break}this.setState({needToAWeb3Browser:!0}),e.next=15;break;case 11:return e.next=13,window.ethereum.enable();case 13:n=e.sent,this.setState({accounts:n});case 15:console.log(this.props.location);case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement(E.a,null,r.a.createElement("nav",null,r.a.createElement("img",{src:z.a,alt:"logo",height:"50px",width:"auto"}),r.a.createElement("div",{className:"nav-div"},this.state.signedin?r.a.createElement("div",null,r.a.createElement(E.b,{to:"/profile"},"View profile"),r.a.createElement(E.b,{to:"/",style:{marginLeft:"1em"},onClick:function(){e.setState({signedin:!1,space:"",box:""})}},"logout")):r.a.createElement("button",{id:"nav-button",onClick:this.handleClickOpen},"Sign in with 3Box"))),r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/"},r.a.createElement("div",{className:"container"},r.a.createElement("p",{id:"players-title"},"\ud83d\udc19 Our Players \ud83d\udc19"),this.state.accounts?r.a.createElement(D,{users:this.state.userlist}):r.a.createElement(g.a,null),this.state.needToAWeb3Browser?r.a.createElement(y.a,{className:"dialog",open:this.state.open,onClose:this.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(w.a,{id:"alert-dialog-title",style:{textAlign:"center"}},"Web3 Wallet Required"),r.a.createElement(v.a,{style:{textAlign:"center"}},r.a.createElement(x.a,{id:"alert-dialog-description"},"Non Web3 browswer! Install Metamask!")),r.a.createElement(k.a,null,r.a.createElement(C.a,{onClick:this.handleClose,color:"primary"},"Close"))):r.a.createElement(y.a,{className:"dialog",open:this.state.open,onClose:this.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(w.a,{id:"alert-dialog-title",style:{textAlign:"center"}},r.a.createElement("img",{src:"https://3box.io/static/media/MolliePsychedelic.b2f0bd4f.png",width:"40%",height:"auto",alt:"3box"})),r.a.createElement(v.a,{style:{textAlign:"center"}},r.a.createElement(x.a,{id:"alert-dialog-description"},"Requesting signature..."),r.a.createElement("br",null),r.a.createElement(g.a,null),r.a.createElement("br",null))))),r.a.createElement(b.a,{exact:!0,path:"/profile"},r.a.createElement(Q,{users:this.state.userlist,account:this.state.accounts[0]}))))}}]),a}(r.a.Component));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root"))},359:function(e,t){},393:function(e,t){},852:function(e,t,a){e.exports=a.p+"static/media/metagame.f3f97018.png"},866:function(e,t,a){e.exports=a(1977)},976:function(e,t){},991:function(e,t){}},[[866,1,2]]]);
//# sourceMappingURL=main.b4accc56.chunk.js.map