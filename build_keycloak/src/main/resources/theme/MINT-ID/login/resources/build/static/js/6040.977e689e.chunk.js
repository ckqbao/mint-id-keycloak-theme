"use strict";(self.webpackChunkmint_id=self.webpackChunkmint_id||[]).push([[6040],{96040:function(e,s,a){a.r(s),a.d(s,{default:function(){return o}});var n=a(70885),t=a(80184),i=a(72791),r=a(66055),l=a(57123),c=a(87107);function o(e){var s=e.kcContext,a=e.i18n,o=e.doUseDefaultCss,u=e.Template,d=e.classes,m=(0,c.v)({doUseDefaultCss:o,classes:d}).getClassName,p=a.msg,g=a.msgStr,j=s.url,b=(0,i.useState)(!1),f=(0,n.Z)(b,2),h=f[0],v=f[1];return(0,t.jsx)(u,Object.assign({},{kcContext:s,i18n:a,doUseDefaultCss:o,classes:d},{headerNode:p("loginIdpReviewProfileTitle")},{children:(0,t.jsxs)("form",Object.assign({id:"kc-idp-review-profile-form",className:m("kcFormClass"),action:j.loginAction,method:"post"},{children:[(0,t.jsx)(l.M,{kcContext:s,onIsFormSubmittableValueChange:v,i18n:a,getClassName:m}),(0,t.jsxs)("div",Object.assign({className:m("kcFormGroupClass")},{children:[(0,t.jsx)("div",Object.assign({id:"kc-form-options",className:m("kcFormOptionsClass")},{children:(0,t.jsx)("div",{className:m("kcFormOptionsWrapperClass")})})),(0,t.jsx)("div",Object.assign({id:"kc-form-buttons",className:m("kcFormButtonsClass")},{children:(0,t.jsx)("input",{className:(0,r.W)(m("kcButtonClass"),m("kcButtonPrimaryClass"),m("kcButtonBlockClass"),m("kcButtonLargeClass")),type:"submit",value:g("doSubmit"),disabled:!h})}))]}))]}))}))}},57123:function(e,s,a){a.d(s,{M:function(){return l}});var n=a(80184),t=a(72791),i=a(66055),r=a(71027);function l(e){var s=e.kcContext,a=e.onIsFormSubmittableValueChange,l=e.i18n,c=e.getClassName,o=e.BeforeField,u=e.AfterField,d=l.advancedMsg,m=(0,r.Q)({kcContext:s,i18n:l}),p=m.formValidationState,g=p.fieldStateByAttributeName,j=p.isFormSubmittable,b=m.formValidationDispatch,f=m.attributesWithPassword;(0,t.useEffect)((function(){a(j)}),[j]);var h="";return(0,n.jsx)(n.Fragment,{children:f.map((function(e,s){var a,r=e.group,l=void 0===r?"":r,m=e.groupDisplayHeader,p=void 0===m?"":m,j=e.groupDisplayDescription,f=void 0===j?"":j,v=g[e.name],C=v.value,k=v.displayableErrors,x=(0,i.W)(c("kcFormGroupClass"),0!==k.length&&c("kcFormGroupErrorClass"));return(0,n.jsxs)(t.Fragment,{children:[l!==h&&""!==(h=l)&&(0,n.jsxs)("div",Object.assign({className:x},{children:[(0,n.jsx)("div",Object.assign({className:c("kcContentWrapperClass")},{children:(0,n.jsx)("label",Object.assign({id:"header-".concat(l),className:c("kcFormGroupHeader")},{children:d(p)||h}))})),""!==f&&(0,n.jsx)("div",Object.assign({className:c("kcLabelWrapperClass")},{children:(0,n.jsx)("label",Object.assign({id:"description-".concat(l),className:c("kcLabelClass")},{children:d(f)}))}))]})),o&&(0,n.jsx)(o,{attribute:e}),(0,n.jsxs)("div",Object.assign({className:x},{children:[(0,n.jsxs)("div",Object.assign({className:c("kcLabelWrapperClass")},{children:[(0,n.jsx)("label",Object.assign({htmlFor:e.name,className:c("kcLabelClass")},{children:d(null!==(a=e.displayName)&&void 0!==a?a:"")})),e.required&&(0,n.jsx)(n.Fragment,{children:"*"})]})),(0,n.jsxs)("div",Object.assign({className:c("kcInputWrapperClass")},{children:[function(){var s=e.validators.options;return void 0!==s?(0,n.jsx)("select",Object.assign({id:e.name,name:e.name,onChange:function(s){return b({action:"update value",name:e.name,newValue:s.target.value})},onBlur:function(){return b({action:"focus lost",name:e.name})},value:C},{children:s.options.map((function(e){return(0,n.jsx)("option",Object.assign({value:e},{children:e}),e)}))})):(0,n.jsx)("input",{type:function(){switch(e.name){case"password-confirm":case"password":return"password";default:return"text"}}(),id:e.name,name:e.name,value:C,onChange:function(s){return b({action:"update value",name:e.name,newValue:s.target.value})},onBlur:function(){return b({action:"focus lost",name:e.name})},className:c("kcInputClass"),"aria-invalid":0!==k.length,disabled:e.readOnly,autoComplete:e.autocomplete})}(),0!==k.length&&function(){var s="input-error-".concat(e.name);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{children:"#".concat(s," > span: { display: block; }")}),(0,n.jsx)("span",Object.assign({id:s,className:c("kcInputErrorMessageClass"),style:{position:1===k.length?"absolute":void 0},"aria-live":"polite"},{children:k.map((function(e){return e.errorMessage}))}))]})}()]}))]})),u&&(0,n.jsx)(u,{attribute:e})]},s)}))})}}}]);
//# sourceMappingURL=6040.977e689e.chunk.js.map