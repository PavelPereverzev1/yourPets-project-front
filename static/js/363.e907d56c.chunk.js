"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[363],{9363:function(n,e,i){i.r(e),i.d(e,{default:function(){return ee}});var r,t,a,o,s,d,l,c,h,p,x,u,m=i(9439),f=i(5861),g=i(4687),v=i.n(g),w=i(168),j=i(6487),b=j.zo.div(r||(r=(0,w.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 280px;\n  padding: 16px 20px 40px 20px;\n  gap: 20px;\n  border-radius: 20px;\n  background: var(--white);\n  box-shadow: var(--boxShadowDefault);\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    width: 704px;\n    border-radius: 40px;\n    padding: 20px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 820px;\n    gap: 32px;\n  }\n"]))),y=j.zo.div(t||(t=(0,w.Z)(["\n  flex-shrink: 0;\n  width: 240px;\n  height: 240px;\n  border-radius: 20px;\n  overflow: hidden;\n\n  @media screen and (min-width: 768px) {\n    width: 128px;\n    height: 128px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 162px;\n    height: 162px;\n    border-radius: 40px;\n  }\n"]))),Z=j.zo.img(a||(a=(0,w.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),z=j.zo.div(o||(o=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n\n  @media screen and (min-width: 768px) and (max-width: 1279px) {\n    gap: 16px;\n  }\n"]))),k=j.zo.p(s||(s=(0,w.Z)(["\n  font-size: 14px;\n  letter-spacing: 0.56px;\n\n  @media screen and (min-width: 768px) and (max-width: 1279px) {\n    line-height: 18px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    font-size: 16px;\n    line-height: 22px;\n    letter-spacing: 0.64px;\n  }\n"]))),C=j.zo.span(d||(d=(0,w.Z)(["\n  font-weight: 700;\n\n  @media screen and (min-width: 768px) {\n    font-weight: 600;\n  }\n"]))),L=i(184),S=function(n){var e=n.pet,i=e.name,r=e.birthday,t=e.type,a=e.comments,o=e.photoURL;return(0,L.jsxs)(b,{children:[(0,L.jsx)(y,{children:(0,L.jsx)(Z,{src:o,alt:t,width:"10.0625rem",height:"10.0625rem",loading:"lazy"})}),(0,L.jsxs)(z,{children:[(0,L.jsxs)(k,{children:[(0,L.jsx)(C,{children:"Name: "}),i]}),(0,L.jsxs)(k,{children:[(0,L.jsx)(C,{children:"Date of birth: "}),r]}),(0,L.jsxs)(k,{children:[(0,L.jsx)(C,{children:"Type: "}),t]}),(0,L.jsxs)(k,{children:[(0,L.jsx)(C,{children:"Comments: "}),a]})]})]})},$=i(2791),B=i(5294),E=function(){var n=(0,f.Z)(v().mark((function n(e){var i;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,B.Z.get("/pets");case 3:return i=n.sent,n.abrupt("return",i.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),F=j.zo.ul(l||(l=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n"]))),_=j.zo.li(c||(c=(0,w.Z)([""]))),X=function(){var n=(0,$.useState)([]),e=(0,m.Z)(n,2),i=e[0],r=e[1],t=function(){var n=(0,f.Z)(v().mark((function n(){var e;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,E("/myPets");case 2:e=n.sent,r(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,$.useEffect)((function(){t()}),[]),(0,L.jsx)(F,{children:i.map((function(n){return(0,L.jsx)(_,{children:(0,L.jsx)(S,{pet:n})},n._id)}))})},q=i(7262),V=j.zo.section(h||(h=(0,w.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 31px;\n"]))),D=j.zo.div(p||(p=(0,w.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),P=j.zo.h2(x||(x=(0,w.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n\n  @media screen and (min-width: 768px) {\n    font-size: 28px;\n  }\n"]))),I=j.zo.svg(u||(u=(0,w.Z)(["\n  width: 24px;\n  height: 24px;\n  stroke: var(--white);\n"]))),N=i(1413),R=i(4432);function U(n){switch(n.$variant){case"filled":return(0,L.jsx)(R.IH,(0,N.Z)((0,N.Z)({},n),{},{children:n.children}));case"round":return(0,L.jsx)(R.h$,(0,N.Z)((0,N.Z)({},n),{},{children:n.children}));default:return(0,L.jsx)(R.zx,(0,N.Z)((0,N.Z)({},n),{},{children:n.children}))}}var M=i(7689);function Y(){var n=(0,$.useState)({width:window.innerWidth,height:window.innerHeight}),e=(0,m.Z)(n,2),i=e[0],r=e[1];return(0,$.useEffect)((function(){var n=function(){r({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[]),[i.width,i.height]}var A,H,T,W,O,G,J,K,Q,nn,en,rn,tn,an,on,sn,dn,ln,cn,hn,pn,xn,un,mn,fn,gn,vn=function(){var n=Y(),e=(0,m.Z)(n,1)[0],i=(0,M.s0)();return(0,L.jsxs)(V,{children:[(0,L.jsxs)(D,{children:[(0,L.jsx)(P,{children:"My pets:"}),(0,L.jsxs)(U,{$variant:e>=768?"filled":"round",onClick:function(){return i("/add-pet")},children:[(0,L.jsx)(I,{children:(0,L.jsx)("use",{href:"".concat(q.Z).concat(e>=768?"#icon-plus-small":"#icon-plus")})}),"Add Pet"]})]}),(0,L.jsx)(X,{})]})},wn=i(9434),jn=i(7102),bn=j.zo.button(A||(A=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-weight: 500;\n  letter-spacing: 0.64px;\n  height: 31px;\n  color: var(--gray);\n  background: none;\n  border: none;\n  margin-right: auto;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    svg {\n      stroke: var(--yellow);\n    }\n  }\n"]))),yn=j.zo.svg(H||(H=(0,w.Z)(["\n  width: 24px;\n  height: 24px;\n  stroke: var(--blueLink);\n  transition: stroke var(--transition);\n"]))),Zn=i(5719),zn=function(){var n=(0,$.useState)(!1),e=(0,m.Z)(n,2),i=e[0],r=e[1],t=(0,wn.I0)();return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(bn,{onClick:function(){return r(!0)},children:[(0,L.jsx)(yn,{children:(0,L.jsx)("use",{href:"".concat(q.Z,"#icon-logout")})}),"Log out"]}),(0,L.jsx)(Zn.Z,{active:i,setActive:r,yes:function(){t((0,jn.ni)())}})]})},kn=j.zo.p(T||(T=(0,w.Z)(["\n  position: absolute;\n  bottom: -12px;\n  left: 80px;\n  font-size: 10px;\n  line-height: normal;\n  letter-spacing: 0.48px;\n  color: #f43f5da6;\n\n  @media screen and (min-width: 768px) {\n    bottom: -11px;\n    left: 110px;\n  }\n"]))),Cn=function(n){var e=n.touched,i=n.error;return e&&i?(0,L.jsx)(kn,{children:i}):null},Ln=j.zo.form(W||(W=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  @media screen and (min-width: 768px) {\n    width: 355px;\n    align-items: end;\n  }\n"]))),Sn=j.zo.div(O||(O=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  width: 100%;\n  padding: 22px 0 21px 0;\n\n  @media screen and (min-width: 768px) {\n    gap: 10px;\n    padding: 0 0 16px 0;\n  }\n\n  @media screen and (min-width: 768px) {\n    padding: 24px 0 10px 0;\n  }\n"]))),$n=j.zo.div(G||(G=(0,w.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),Bn=j.zo.label(J||(J=(0,w.Z)(["\n  font-size: 14px;\n  font-weight: 600;\n  line-height: normal;\n  letter-spacing: 0.56px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 18px;\n    letter-spacing: 0.72px;\n  }\n"]))),En=j.zo.input(K||(K=(0,w.Z)(["\n  display: flex;\n  width: 190px;\n  padding: 4px 12px;\n  align-items: center;\n  gap: 191px;\n  border-radius: 20px;\n  border: 1px solid ",";\n  font-size: 12px;\n  line-height: normal;\n  letter-spacing: 0.48px;\n\n  @media screen and (min-width: 768px) {\n    width: 255px;\n    font-size: 16px;\n    letter-spacing: 0.64px;\n  }\n"])),(function(n){return n.$isValid?"var(--blueLink)":"red"})),Fn=i(3443),_n=function(n){var e=n.isEditFormInactive,i=n.formik,r=Y(),t=(0,m.Z)(r,1)[0],a=(0,wn.v9)(Fn.xU);return(0,L.jsxs)(Ln,{onSubmit:i.handleSubmit,children:[(0,L.jsxs)(Sn,{children:[(0,L.jsxs)($n,{children:[(0,L.jsx)(Bn,{htmlFor:"name",children:"Name:"}),(0,L.jsx)(En,{type:"text",id:"name",name:"name",onChange:i.handleChange,value:i.values.name,disabled:e,onBlur:i.handleBlur,$isValid:!i.errors.name}),(0,L.jsx)(Cn,{touched:i.touched.name,error:i.errors.name})]}),(0,L.jsxs)($n,{children:[(0,L.jsx)(Bn,{htmlFor:"email",children:"Email:"}),(0,L.jsx)(En,{type:"email",id:"email",name:"email",onChange:i.handleChange,value:i.values.email,disabled:e,onBlur:i.handleBlur,$isValid:!i.errors.email}),(0,L.jsx)(Cn,{touched:i.touched.email,error:i.errors.email})]}),(0,L.jsxs)($n,{children:[(0,L.jsx)(Bn,{htmlFor:"birthday",children:"Birthday:"}),(0,L.jsx)(En,{type:"date",id:"birthday",name:"birthday",onChange:i.handleChange,value:i.values.birthday,disabled:e,onBlur:i.handleBlur,$isValid:!i.errors.birthday}),(0,L.jsx)(Cn,{touched:i.touched.birthday,error:i.errors.birthday})]}),(0,L.jsxs)($n,{children:[(0,L.jsx)(Bn,{htmlFor:"phone",children:"Phone:"}),(0,L.jsx)(En,{type:"tel",id:"phone",name:"phone",onChange:i.handleChange,value:i.values.phone,disabled:e,onBlur:i.handleBlur,$isValid:!i.errors.phone}),(0,L.jsx)(Cn,{touched:i.touched.phone,error:i.errors.phone})]}),(0,L.jsxs)($n,{children:[(0,L.jsx)(Bn,{htmlFor:"city",children:"City:"}),(0,L.jsx)(En,{type:"text",id:"city",name:"city",onChange:i.handleChange,value:i.values.city,disabled:e,onBlur:i.handleBlur,$isValid:!i.errors.city}),(0,L.jsx)(Cn,{touched:i.touched.city,error:i.errors.city})]})]}),e?(0,L.jsx)(zn,{}):(0,L.jsx)(U,{type:"submit",height:"31px",width:t>=768?"255px":"248px",disabled:!i.isValid,$variant:"filled",children:a?(0,L.jsx)("span",{children:"Loading..."}):(0,L.jsx)("span",{children:"Save"})})]})},Xn=j.zo.section(Q||(Q=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n\n  @media screen and (min-width: 768px) {\n    gap: 24px;\n  }\n"]))),qn=j.zo.h2(nn||(nn=(0,w.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n  line-height: normal;\n\n  @media screen and (min-width: 768px) {\n    font-size: 28px;\n  }\n"]))),Vn=j.zo.div(en||(en=(0,w.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  width: 100%;\n  padding: 20px 8px 25px 8px;\n  border-radius: 20px;\n  background: var(--white);\n  box-shadow: var(--boxShadowDefault);\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n    gap: 71px;\n    padding: 20px 20px 16px 20px;\n    min-height: 270px;\n    border-radius: 40px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: 0;\n    width: 395px;\n  }\n"]))),Dn=j.zo.button(rn||(rn=(0,w.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  background: none;\n  border: none;\n  cursor: pointer;\n\n  @media screen and (min-width: 768px) {\n    top: 18px;\n    right: 18px;\n  }\n"]))),Pn=j.zo.svg(tn||(tn=(0,w.Z)(["\n  width: 24px;\n  height: 24px;\n  fill: var(--blueLink);\n  transition: fill var(--transition);\n\n  &:hover,\n  &:focus {\n    fill: var(--yellow);\n  }\n"]))),In=j.zo.svg(an||(an=(0,w.Z)(["\n  width: 24px;\n  height: 24px;\n  stroke: var(--blueLink);\n  transition: stroke var(--transition);\n\n  &:hover,\n  &:focus {\n    stroke: var(--yellow);\n  }\n"]))),Nn=j.zo.div(on||(on=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 14px;\n  height: 224px;\n"]))),Rn=j.zo.div(sn||(sn=(0,w.Z)(["\n  width: 182px;\n  height: 182px;\n  border-radius: 40px;\n  overflow: hidden;\n"]))),Un=j.zo.img(dn||(dn=(0,w.Z)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),Mn=j.zo.label(ln||(ln=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  line-height: 22px;\n  letter-spacing: 0.48px;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    svg {\n      stroke: var(--yellow);\n    }\n  }\n"]))),Yn=j.zo.input(cn||(cn=(0,w.Z)(["\n  display: none;\n"]))),An=j.zo.svg(hn||(hn=(0,w.Z)(["\n  width: 24px;\n  height: 24px;\n  stroke: var(--blueLink);\n  transition: stroke var(--transition);\n"]))),Hn=j.zo.div(pn||(pn=(0,w.Z)(["\n  display: flex;\n  gap: 8px;\n"]))),Tn=j.zo.button(xn||(xn=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  line-height: 22px;\n  letter-spacing: 0.48px;\n  background: none;\n  border: none;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    svg {\n      stroke: var(--yellow);\n    }\n  }\n"]))),Wn=(j.zo.svg(un||(un=(0,w.Z)(["\n  width: 24px;\n  height: 24px;\n  stroke: var(--blueLink);\n  transition: stroke var(--transition);\n"]))),j.zo.button(mn||(mn=(0,w.Z)(["\n  background: none;\n  border: none;\n  cursor: pointer;\n"])))),On=j.zo.svg(fn||(fn=(0,w.Z)(["\n  width: 24px;\n  height: 24px;\n  stroke: var(--red);\n"]))),Gn=i(5705),Jn=i(6727),Kn=Jn.Ry({name:Jn.Z_().required("Please enter your name.").min(2,"Name too short.").max(16,"Name too long."),email:Jn.Z_().matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,"Invalid email format.").required("Email is required"),birthday:Jn.Z_().matches(/^\d{4}-\d{2}-\d{2}$/,"Please use YYYY-MM-DD format.").required(),phone:Jn.Z_().matches(/^\+380\d{9}$/,"Please use +380XXXXXXXXX format.").required(),city:Jn.Z_().required()}),Qn=function(){var n=(0,$.useState)(!0),e=(0,m.Z)(n,2),i=e[0],r=e[1],t=(0,$.useState)(null),a=(0,m.Z)(t,2),o=a[0],s=a[1],d=(0,$.useState)(!1),l=(0,m.Z)(d,2),c=l[0],h=l[1],p=(0,wn.v9)(Fn.dy),x=(0,wn.v9)(Fn.pd),u=(0,wn.I0)(),g=(0,$.useRef)();(0,$.useEffect)((function(){x||u((0,jn.Ec)())}),[u,x]);var w=function(){var n=(0,f.Z)(v().mark((function n(e){var i,t,a,o;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(t in i=new FormData,e)i.append(t,e[t]);return g.current.files[0]&&(a=g.current.files[0],i.append("avatar",a),console.log(i),g.current.value=null),n.next=5,u((0,jn.Nq)(i));case 5:if(o=n.sent,!jn.Nq.fulfilled.match(o)){n.next=9;break}return r(!0),n.abrupt("return");case 9:alert("database error, please try again later");case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),j=(0,Gn.TA)({initialValues:{name:p.name,email:p.email,birthday:p.birthday,phone:p.phone,city:p.city},validationSchema:Kn,onSubmit:w});return(0,L.jsxs)(Xn,{children:[(0,L.jsx)(qn,{children:"My information:"}),(0,L.jsxs)(Vn,{children:[(0,L.jsx)(Dn,{onClick:function(){return r(!i)},children:i?(0,L.jsx)(Pn,{children:(0,L.jsx)("use",{href:"".concat(q.Z,"#icon-edit-2")})}):(0,L.jsx)(In,{children:(0,L.jsx)("use",{href:"".concat(q.Z,"#icon-cross-small")})})}),(0,L.jsxs)(Nn,{children:[(0,L.jsx)(Rn,{children:(0,L.jsx)(Un,{src:null!==o&&void 0!==o?o:p.avatarURL,alt:"User avatar",loading:"lazy"})}),!i&&(0,L.jsxs)("form",{onSubmit:function(n){n.preventDefault(),h(!1)},children:[(0,L.jsx)(Yn,{id:"file-upload",type:"file",name:"avatar",accept:"image/*",onChange:function(n){var e=n.currentTarget.files[0];if(e){var i=URL.createObjectURL(e);s(i),h(!0)}},ref:g}),c?(0,L.jsxs)(Hn,{children:[(0,L.jsxs)(Tn,{type:"submit",children:[(0,L.jsx)(An,{children:(0,L.jsx)("use",{href:"".concat(q.Z,"#icon-check")})}),"Confirm"]}),(0,L.jsx)(Wn,{type:"button",onClick:function(){s(null),h(!1),g.current.value=null},children:(0,L.jsx)(On,{children:(0,L.jsx)("use",{href:"".concat(q.Z,"#icon-cross-small")})})})]}):(0,L.jsxs)(Mn,{htmlFor:"file-upload",children:[(0,L.jsx)(An,{children:(0,L.jsx)("use",{href:"".concat(q.Z,"#icon-camera")})}),"Edit Photo"]})]})]}),(0,L.jsx)(_n,{isEditFormInactive:i,formik:j})]})]})},ne=j.zo.div(gn||(gn=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 46px;\n  padding-top: 32px;\n\n  @media screen and (min-width: 768px) {\n    gap: 40px;\n    padding-top: 60px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    flex-direction: row;\n    gap: 32px;\n  }\n"]))),ee=function(){return(0,L.jsxs)(ne,{children:[(0,L.jsx)(Qn,{}),(0,L.jsx)(vn,{})]})}}}]);
//# sourceMappingURL=363.e907d56c.chunk.js.map