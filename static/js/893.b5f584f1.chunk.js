"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[893],{1893:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var r=e(7762),i=e(9439),o=e(2791),u=e(9434),a=e(7689),c=e(6351),m=e(208),f=e(6429),h=e.n(f),s=e(6680),d=e(184);function p(){var n=(0,a.s0)(),t=(0,u.I0)(),e=(0,u.v9)(c.K).items,f=(0,o.useState)(""),p=(0,i.Z)(f,2),g=p[0],l=p[1],b=(0,o.useState)(""),y=(0,i.Z)(b,2),z=y[0],Z=y[1],x=h().generate(),w=h().generate(),k=function(){l(""),Z("")};return(0,d.jsxs)(s.QS,{onSubmit:function(i){i.preventDefault();var o=!1;if(e&&e!==[]){var u,a=(0,r.Z)(e);try{for(a.s();!(u=a.n()).done;){if(u.value.name===g){alert("".concat(g," is alredy in contacts")),o=!0;break}}}catch(c){a.e(c)}finally{a.f()}}o||t((0,m.uK)({name:g,number:z})),k(),n("/contacts/filter")},children:[(0,d.jsxs)(s.HE,{children:[(0,d.jsxs)(s.L3,{htmlFor:x,children:["name",(0,d.jsx)(s.M5,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:g,onChange:function(n){l(n.currentTarget.value)},id:x})]}),(0,d.jsxs)(s.L3,{htmlFor:w,children:["number",(0,d.jsx)(s.M5,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:z,onChange:function(n){Z(n.currentTarget.value)},id:w})]})]}),(0,d.jsx)(s.cu,{type:"submit",children:"Add contact"})]})}},6680:function(n,t,e){e.d(t,{HE:function(){return g},L3:function(){return l},M5:function(){return b},P:function(){return p},QS:function(){return s},cu:function(){return y},q2:function(){return d}});var r,i,o,u,a,c,m,f=e(168),h=e(9202),s=h.Z.form(r||(r=(0,f.Z)(["\n  margin-top: ",";\n  margin-right: auto;\n  margin-bottom: ",";\n  margin-left: auto;\n\n  padding-top: ",";\n  padding-right: ",";\n  padding-bottom: ",";\n  padding-left: ",";\n\n  width: ",";\n\n  border-top-right-radius: ",";\n  border-bottom-left-radius: ",";\n  border-bottom-right-radius: ",";\n\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n\n  background-color: ",";\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.sizes.width.container}),(function(n){return n.theme.radii.ml}),(function(n){return n.theme.radii.ml}),(function(n){return n.theme.radii.ml}),(function(n){return n.theme.color.background})),d=h.Z.form(i||(i=(0,f.Z)(["\n  position: absolute;\n\n  margin-top: ",";\n  margin-right: a ",";\n  margin-bottom: ",";\n  margin-left: ",";\n\n  padding-top: ",";\n  padding-right: ",";\n  padding-bottom: ",";\n  padding-left: ",";\n\n  top: ",";\n  right: 0;\n\n  width: ",";\n\n  border-radius: ",";\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n\n  background-color: ",";\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.sizes.height.friendsItem}),(function(n){return n.theme.sizes.width.semicontainer}),(function(n){return n.theme.radii.ml}),(function(n){return n.theme.color.background})),p=h.Z.h3(o||(o=(0,f.Z)(["\n  margin-top: ",";\n  margin-right: ",";\n  margin-bottom: ",";\n  margin-left: ",";\n\n  padding-top: ",";\n  padding-right: ",";\n  padding-bottom: ",";\n  padding-left: ",";\n\n  font-family: ",";\n  font-size: ","px;\n  font-weight: ",";\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.fonts.heading}),(function(n){return n.theme.fontSizes.ml}),(function(n){return n.theme.fontWeights.bold})),g=h.Z.div(u||(u=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  margin-top: ",";\n  margin-right: ",";\n  margin-bottom: ",";\n  margin-left: ",";\n\n  padding-top: ",";\n  padding-right: ",";\n  padding-bottom: ",";\n  padding-left: ",";\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]})),l=h.Z.label(a||(a=(0,f.Z)(["\n  margin-top: ",";\n  margin-right: ",";\n  margin-bottom: ",";\n  margin-left: ",";\n\n  padding-top: ",";\n  padding-right: ",";\n  padding-bottom: ",";\n  padding-left: ",";\n\n  text-align: right;\n\n  font-family: ",";\n  font-size: ","px;\n  font-weight: ",";\n\n  color: ",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.fonts.heading}),(function(n){return n.theme.fontSizes.ml}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.color.secondary})),b=h.Z.input(c||(c=(0,f.Z)(["\n  margin-top: ",";\n  margin-right: ",";\n  margin-bottom: ",";\n  margin-left: ",";\n\n  padding-top: ",";\n  padding-right: ",";\n  padding-bottom: ",";\n  padding-left: ",";\n\n  width: ",";\n  height: ",";\n\n  font-family: ",";\n  font-size: ","px;\n  font-weight: ",";\n\n  color: ",";\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.sizes.width.inputForm}),(function(n){return n.theme.sizes.height.inputForm}),(function(n){return n.theme.fonts.heading}),(function(n){return n.theme.fontSizes.ml}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.color.primary})),y=h.Z.button(m||(m=(0,f.Z)(["\n  margin-top: ",";\n  margin-right: ",";\n  margin-bottom: ",";\n  margin-left: ",";\n\n  padding-top: ",";\n  padding-right: ",";\n  padding-bottom: ",";\n  padding-left: ",";\n\n  width: ",";\n  height: ",";\n\n  font-family: ",";\n  font-size: ","px;\n  font-weight: ",";\n\n  color: ",";\n\n  border-radius: ",";\n\n  background-color: ",";\n\n  cursor: pointer;\n\n  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.sizes.width.buttonXL}),(function(n){return n.theme.sizes.height.buttonXL}),(function(n){return n.theme.fonts.heading}),(function(n){return n.theme.fontSizes.ml}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.color.primary}),(function(n){return n.theme.radii.m}),(function(n){return n.theme.color.background}),(function(n){return n.theme.color.backgroundAccent}))}}]);
//# sourceMappingURL=893.b5f584f1.chunk.js.map