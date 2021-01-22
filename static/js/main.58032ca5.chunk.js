(this.webpackJsonpspeechly=this.webpackJsonpspeechly||[]).push([[0],{333:function(e,t,a){},334:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(0),o=a.n(c),r=a(10),i=a.n(r),s=a(22),u=a(72),l=a(48),d=function(e,t){var a;switch(t.type){case"DELETE_TRANSACTION":return a=e.filter((function(e){return e.id!==t.payload})),localStorage.setItem("transactions",JSON.stringify(a)),a;case"ADD_TRANSACTION":return a=[t.payload].concat(Object(l.a)(e)),localStorage.setItem("transactions",JSON.stringify(a)),a;default:return e}},j=JSON.parse(localStorage.getItem("transactions"))||[{amount:500,category:"Salary",type:"Income",date:"2020-11-16",id:"44c68123-5b86-4cc8-b915-bb9e16cebe6a"},{amount:225,category:"Investments",type:"Income",date:"2020-11-16",id:"33b295b8-a8cb-49f0-8f0d-bb268686de1a"},{amount:50,category:"Salary",type:"Income",date:"2020-11-13",id:"270304a8-b11d-4e16-9341-33df641ede64"},{amount:123,category:"Car",type:"Expense",date:"2020-11-16",id:"0f72e66e-e144-4a72-bbc1-c3c92018635e"},{amount:50,category:"Pets",type:"Expense",date:"2020-11-13",id:"c5647dde-d857-463d-8b4e-1c866cc5f83e"},{amount:500,category:"Travel",type:"Expense",date:"2020-11-13",id:"365a4ebd-9892-4471-ad55-36077e4121a9"},{amount:50,category:"Investments",type:"Income",date:"2020-11-23",id:"80cf7e33-fc3e-4f9f-a2aa-ecf140711460"},{amount:500,category:"Savings",type:"Income",date:"2020-11-23",id:"ef090181-21d1-4568-85c4-5646232085b2"},{amount:5,category:"Savings",type:"Income",date:"2020-11-23",id:"037a35a3-40ec-4212-abe0-cc485a98aeee"}],b=Object(c.createContext)(j),m=function(e){var t=e.children,a=Object(c.useReducer)(d,j),o=Object(u.a)(a,2),r=o[0],i=o[1],s=r.reduce((function(e,t){return"Expense"===t.type?e-t.amount:e+t.amount}),0);return Object(n.jsx)(b.Provider,{value:{transactions:r,balance:s,deleteTransaction:function(e){i({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){i({type:"ADD_TRANSACTION",payload:e})}},children:t})},p=a(381),O=a(108),x=a(375),f=a(377),y=a(378),h=a(40),g=a(155),v=a(372),C=Object(v.a)((function(){return{income:{borderBottom:"10px solid rgba(0, 255, 0, 0.5)"},expense:{borderBottom:"10px solid rgba(255, 0, 0, 0.5)"}}})),I=["#123123","#154731","#165f40","#16784f","#14915f","#10ac6e","#0bc77e","#04e38d","#00ff9d"],T=["#b50d12","#bf2f1f","#c9452c","#d3583a","#dc6a48","#e57c58","#ee8d68","#f79d79","#ffae8a","#cc474b","#f55b5f"],E=[{type:"Business",amount:0,color:I[0]},{type:"Investments",amount:0,color:I[1]},{type:"Extra income",amount:0,color:I[2]},{type:"Deposits",amount:0,color:I[3]},{type:"Lottery",amount:0,color:I[4]},{type:"Gifts",amount:0,color:I[5]},{type:"Salary",amount:0,color:I[6]},{type:"Savings",amount:0,color:I[7]},{type:"Rental income",amount:0,color:I[8]}],N=[{type:"Bills",amount:0,color:T[0]},{type:"Car",amount:0,color:T[1]},{type:"Clothes",amount:0,color:T[2]},{type:"Travel",amount:0,color:T[3]},{type:"Food",amount:0,color:T[4]},{type:"Shopping",amount:0,color:T[5]},{type:"House",amount:0,color:T[6]},{type:"Entertainment",amount:0,color:T[7]},{type:"Phone",amount:0,color:T[8]},{type:"Pets",amount:0,color:T[9]},{type:"Other",amount:0,color:T[10]}],S=function(e){E.forEach((function(e){return e.amount=0})),N.forEach((function(e){return e.amount=0}));var t=Object(c.useContext)(b).transactions.filter((function(t){return t.type===e})),a=t.reduce((function(e,t){return e+t.amount}),0),n="Income"===e?E:N;t.forEach((function(e){var t=n.find((function(t){return t.type===e.category}));t&&(t.amount+=e.amount)}));var o=n.filter((function(e){return e.amount>0})),r={datasets:[{data:o.map((function(e){return e.amount})),backgroundColor:o.map((function(e){return e.color}))}],labels:o.map((function(e){return e.type}))};return{filteredCategories:o,total:a,chartData:r}},k=function(e){var t=e.title,a=e.subheader,c=S(t),o=c.total,r=c.chartData,i=C();return Object(n.jsxs)(x.a,{className:"Income"===t?i.income:i.expense,children:[Object(n.jsx)(f.a,{title:t,subheader:a}),Object(n.jsxs)(y.a,{children:[Object(n.jsxs)(h.a,{variant:"h5",children:["$",o]}),Object(n.jsx)(g.Doughnut,{data:r})]})]})},w=a(394),D=Object(v.a)((function(e){return{media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},cartContent:{paddingTop:0},divider:{margin:"20px 0"}}})),A=a(11),B=a(382),P=a(398),R=a(395),_=a(386),F=a(400),J=a(387),L=a(130),W=a(397),$=a(396),H=Object(v.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),M=function(e){var t=e.open,a=e.setOpen,c=H(),o=function(e,t){"clickaway"!==t&&a(!1)};return Object(n.jsx)("div",{className:c.root,children:Object(n.jsx)(W.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:t,autoHideDuration:6e3,onClose:o,children:Object(n.jsx)($.a,{onClose:o,severity:"success",elevation:6,variant:"filled",children:"Transaction successfully created."})})})},G=function(e){var t=new Date(e),a="".concat(t.getMonth()+1),n="".concat(t.getDate()),c=t.getFullYear();return a.length<2&&(a="0".concat(a)),n.length<2&&(n="0".concat(n)),[c,a,n].join("-")},z=Object(v.a)((function(){return{radioGroup:{display:"flex",justifyContent:"center",marginBottom:"-10px"},button:{marginTop:"20px"}}})),U={amount:"",category:"",type:"Income",date:G(new Date)},V=function(){var e=z(),t=Object(c.useContext)(b).addTransaction,a=Object(c.useState)(U),r=Object(u.a)(a,2),i=r[0],l=r[1],d=Object(s.useSpeechContext)().segment,j=o.a.useState(!1),m=Object(u.a)(j,2),O=m[0],x=m[1],f=function(){!Number.isNaN(Number(i.amount))&&i.date.includes("-")&&(E.map((function(e){return e.type})).includes(i.category)?l(Object(A.a)(Object(A.a)({},i),{},{type:"Income"})):N.map((function(e){return e.type})).includes(i.category)&&l(Object(A.a)(Object(A.a)({},i),{},{type:"Expense"})),x(!0),t(Object(A.a)(Object(A.a)({},i),{},{amount:Number(i.amount),id:Object(L.a)()})),l(U))};Object(c.useEffect)((function(){if(d){if("add_expense"===d.intent.intent)l(Object(A.a)(Object(A.a)({},i),{},{type:"Expense"}));else if("add_income"===d.intent.intent)l(Object(A.a)(Object(A.a)({},i),{},{type:"Income"}));else{if(d.isFinal&&"create_transaction"===d.intent.intent)return f();if(d.isFinal&&"cancel_transaction"===d.intent.intent)return l(U)}d.entities.forEach((function(e){var t="".concat(e.value.charAt(0)).concat(e.value.slice(1).toLowerCase());switch(e.type){case"amount":l(Object(A.a)(Object(A.a)({},i),{},{amount:e.value}));break;case"category":E.map((function(e){return e.type})).includes(t)?l(Object(A.a)(Object(A.a)({},i),{},{type:"Income",category:t})):N.map((function(e){return e.type})).includes(t)&&l(Object(A.a)(Object(A.a)({},i),{},{type:"Expense",category:t}));break;case"date":l(Object(A.a)(Object(A.a)({},i),{},{date:e.value}))}})),d.isFinal&&i.amount&&i.category&&i.type&&i.date&&f()}}),[d]);var y="Income"===i.type?E:N;return Object(n.jsxs)(p.a,{container:!0,spacing:2,children:[Object(n.jsx)(M,{open:O,setOpen:x}),Object(n.jsx)(p.a,{item:!0,xs:12,children:Object(n.jsx)(h.a,{align:"center",variant:"subtitle2",gutterBottom:!0,children:d?Object(n.jsx)("div",{className:"segment",children:d.words.map((function(e){return e.value})).join(" ")}):null})}),Object(n.jsx)(p.a,{item:!0,xs:6,children:Object(n.jsxs)(B.a,{fullWidth:!0,children:[Object(n.jsx)(P.a,{children:"Type"}),Object(n.jsxs)(R.a,{value:i.type,onChange:function(e){return l(Object(A.a)(Object(A.a)({},i),{},{type:e.target.value}))},children:[Object(n.jsx)(_.a,{value:"Income",children:"Income"}),Object(n.jsx)(_.a,{value:"Expense",children:"Expense"})]})]})}),Object(n.jsx)(p.a,{item:!0,xs:6,children:Object(n.jsxs)(B.a,{fullWidth:!0,children:[Object(n.jsx)(P.a,{children:"Category"}),Object(n.jsx)(R.a,{value:i.category,onChange:function(e){return l(Object(A.a)(Object(A.a)({},i),{},{category:e.target.value}))},children:y.map((function(e){return Object(n.jsx)(_.a,{value:e.type,children:e.type},e.type)}))})]})}),Object(n.jsx)(p.a,{item:!0,xs:6,children:Object(n.jsx)(F.a,{type:"number",label:"Amount",value:i.amount,onChange:function(e){return l(Object(A.a)(Object(A.a)({},i),{},{amount:e.target.value}))},fullWidth:!0})}),Object(n.jsx)(p.a,{item:!0,xs:6,children:Object(n.jsx)(F.a,{fullWidth:!0,label:"Date",type:"date",value:i.date,onChange:function(e){return l(Object(A.a)(Object(A.a)({},i),{},{date:G(e.target.value)}))}})}),Object(n.jsx)(J.a,{className:e.button,variant:"outlined",color:"primary",fullWidth:!0,onClick:f,children:"Create"})]})},Y=a(385),q=a(388),K=a(337),Q=a(389),X=a(401),Z=a(391),ee=a(392),te=a(380),ae=a(390),ne=a(393),ce=a(85),oe=a(84),re=Object(v.a)((function(e){return{avatarIncome:{color:"#fff",backgroundColor:ce.a[500]},avatarExpense:{color:e.palette.getContrastText(oe.a[500]),backgroundColor:oe.a[500]},list:{maxHeight:"150px",overflow:"auto"}}})),ie=function(){var e=re(),t=Object(c.useContext)(b),a=t.transactions,o=t.deleteTransaction;return Object(n.jsx)(Y.a,{dense:!1,className:e.list,children:a.map((function(t){return Object(n.jsx)(q.a,{direction:"down",in:!0,mountOnEnter:!0,unmountOnExit:!0,children:Object(n.jsxs)(K.a,{children:[Object(n.jsx)(Q.a,{children:Object(n.jsx)(X.a,{className:"Income"===t.type?e.avatarIncome:e.avatarExpense,children:Object(n.jsx)(ae.a,{})})}),Object(n.jsx)(Z.a,{primary:t.category,secondary:"$".concat(t.amount," - ").concat(t.date)}),Object(n.jsx)(ee.a,{children:Object(n.jsx)(te.a,{edge:"end","aria-label":"delete",onClick:function(){return o(t.id)},children:Object(n.jsx)(ne.a,{})})})]})},t.id)}))})},se=Math.round(Math.random()),ue=function(){return Object(n.jsxs)("div",{elevation:3,style:{textAlign:"center",padding:"0 10%"},children:["Try saying: ",Object(n.jsx)("br",{}),"Add ",se?"Income ":"Expense ","for ",se?"$100 ":"$50 ","in Category ",se?"Salary ":"Travel ","for ",se?"Monday ":"Thursday "]})},le=function(){var e=D(),t=Object(c.useContext)(b).balance;return Object(n.jsxs)(x.a,{className:e.root,children:[Object(n.jsx)(f.a,{title:"Expense Tracker",subheader:"Powered by Speechly"}),Object(n.jsxs)(y.a,{children:[Object(n.jsxs)(h.a,{align:"center",variant:"h5",children:["Total Balance $",t]}),Object(n.jsx)(h.a,{variant:"subtitle1",style:{lineHeight:"1.5em",marginTop:"20px"},children:Object(n.jsx)(ue,{})}),Object(n.jsx)(w.a,{className:e.divider}),Object(n.jsx)(V,{})]}),Object(n.jsx)(y.a,{className:e.cartContent,children:Object(n.jsx)(p.a,{container:!0,spacing:2,children:Object(n.jsx)(p.a,{item:!0,xs:12,children:Object(n.jsx)(ie,{})})})})]})},de=a(21),je=Object(v.a)((function(e){return{desktop:Object(de.a)({},e.breakpoints.up("sm"),{display:"none"}),mobile:Object(de.a)({},e.breakpoints.down("sm"),{display:"none"}),main:Object(de.a)({},e.breakpoints.up("sm"),{paddingBottom:"5%"}),last:Object(de.a)({},e.breakpoints.down("sm"),{marginBottom:e.spacing(3),paddingBottom:"200px"}),grid:{"& > *":{margin:e.spacing(2)}}}})),be=function(){var e=je(),t=Object(s.useSpeechContext)().speechState,a=Object(c.useRef)(null);return Object(c.useEffect)((function(){t===s.SpeechState.Recording&&a.current.scrollIntoView()}),[t]),Object(n.jsx)("div",{children:Object(n.jsxs)(p.a,{className:e.grid,container:!0,spacing:0,alignItems:"center",justify:"center",style:{height:"100vh"},children:[Object(n.jsx)(p.a,{item:!0,xs:12,sm:4,className:e.mobile,children:Object(n.jsx)(k,{title:"Income"})}),Object(n.jsx)(p.a,{ref:a,item:!0,xs:12,sm:3,className:e.main,children:Object(n.jsx)(le,{})}),Object(n.jsx)(p.a,{item:!0,xs:12,sm:4,className:e.desktop,children:Object(n.jsx)(k,{title:"Income"})}),Object(n.jsx)(p.a,{item:!0,xs:12,sm:4,className:e.last,children:Object(n.jsx)(k,{title:"Expense"})}),Object(n.jsx)(O.PushToTalkButtonContainer,{children:Object(n.jsx)(O.PushToTalkButton,{})})]})})};a(333);i.a.render(Object(n.jsx)(s.SpeechProvider,{appId:"7c4aee08-1073-4a32-b862-ebe1850e0732",language:"en-US",children:Object(n.jsx)(m,{children:Object(n.jsx)(be,{})})}),document.getElementById("root"))}},[[334,1,2]]]);
//# sourceMappingURL=main.58032ca5.chunk.js.map