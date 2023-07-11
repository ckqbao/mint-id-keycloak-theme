"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[575],{575:function(e,s,t){t.r(s),t.d(s,{default:function(){return u}});var o=t(1413),c=t(885),l=t(2791),r=t(6055),a=t(969),i=t(7107),n=t(184);function u(e){var s=e.kcContext,t=e.i18n,u=e.doUseDefaultCss,d=e.Template,p=e.classes,f=(0,i.v)({doUseDefaultCss:u,classes:p}).getClassName,m=s.social,k=s.realm,C=s.url,g=s.usernameEditDisabled,h=s.login,v=s.auth,b=s.registrationDisabled,x=t.msg,w=t.msgStr,y=(0,l.useState)(!1),A=(0,c.Z)(y,2),j=A[0],I=A[1],S=(0,a.O)((function(e){var s;e.preventDefault(),I(!0);var t=e.target;null===(s=t.querySelector("input[name='email']"))||void 0===s||s.setAttribute("name","username"),t.submit()}));return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(d,{kcContext:s,i18n:t,doUseDefaultCss:u,classes:p,displayInfo:m.displayInfo,displayWide:k.password&&void 0!==m.providers,headerNode:w("loginTitle"),infoNode:k.password&&k.registrationAllowed&&!b&&(0,n.jsx)("div",{id:"kc-registration",children:(0,n.jsxs)("span",{children:[x("noAccount"),(0,n.jsx)("a",{className:"kc-link registerLink",tabIndex:6,href:C.registrationUrl,children:x("doRegister")})]})}),children:(0,n.jsxs)("div",{id:"kc-form",className:(0,r.W)(k.password&&void 0!==m.providers&&f("kcContentWrapperClass")),children:[(0,n.jsx)("div",{id:"kc-form-wrapper",className:(0,r.W)(k.password&&m.providers&&[f("kcFormSocialAccountContentClass"),f("kcFormSocialAccountClass")]),children:k.password&&(0,n.jsxs)("form",{id:"kc-form-login",onSubmit:S,action:C.loginAction,method:"post",children:[(0,n.jsx)("div",{className:f("kcFormGroupClass"),children:function(e){var s=k.loginWithEmailAllowed?k.registrationEmailAsUsername?"email":"usernameOrEmail":"username",t="usernameOrEmail"===s?"username":s;return(0,n.jsx)("input",(0,o.Z)({tabIndex:1,id:t,className:f("kcInputClass"),defaultValue:null!==(e=h.username)&&void 0!==e?e:"",name:t,placeholder:w(s)+"*",required:!0,type:"text"},g?{disabled:!0}:{autoFocus:!0,autoComplete:"off"}))}()}),(0,n.jsx)("div",{className:f("kcFormGroupClass"),children:(0,n.jsx)("input",{tabIndex:2,autoComplete:"off",id:"password",className:f("kcInputClass"),name:"password",placeholder:w("password")+"*",required:!0,type:"password"})}),(0,n.jsxs)("div",{className:(0,r.W)(f("kcFormGroupClass"),f("kcFormSettingClass")),children:[k.rememberMe&&!g&&(0,n.jsx)("div",{id:"kc-form-options",children:(0,n.jsx)("div",{className:"checkbox",children:(0,n.jsxs)("label",{children:[(0,n.jsx)("input",(0,o.Z)({tabIndex:3,id:"rememberMe",name:"rememberMe",type:"checkbox"},h.rememberMe?{checked:!0}:{})),x("rememberMe")]})})}),k.resetPasswordAllowed&&(0,n.jsx)("div",{className:f("kcFormOptionsWrapperClass"),children:(0,n.jsx)("span",{children:(0,n.jsx)("a",{className:"kc-link resetPassword",tabIndex:5,href:C.loginResetCredentialsUrl,children:x("doForgotPassword")})})})]}),(0,n.jsxs)("div",{id:"kc-form-buttons",className:f("kcFormGroupClass"),children:[(0,n.jsx)("input",(0,o.Z)({type:"hidden",id:"id-hidden-input",name:"credentialId"},void 0!==(null===v||void 0===v?void 0:v.selectedCredential)?{value:v.selectedCredential}:{})),(0,n.jsx)("button",{className:(0,r.W)(f("kcButtonClass"),f("kcButtonPrimaryClass")),name:"login",id:"kc-login",type:"submit",disabled:j,children:w("doLogIn")}),(0,n.jsx)("button",{className:(0,r.W)(f("kcButtonClass"),f("kcButtonDefaultClass")),onClick:function(){return window.history.back()},children:w("doCancel")})]})]})}),k.password&&void 0!==m.providers&&(0,n.jsx)("div",{id:"kc-social-providers",className:(0,r.W)(f("kcFormSocialAccountContentClass"),f("kcFormSocialAccountClass")),children:(0,n.jsx)("ul",{className:(0,r.W)(f("kcFormSocialAccountListClass"),m.providers.length>4&&f("kcFormSocialAccountDoubleListClass")),children:m.providers.map((function(e){return(0,n.jsx)("li",{className:f("kcFormSocialAccountListLinkClass"),children:(0,n.jsx)("a",{href:e.loginUrl,id:"zocial-".concat(e.alias),className:(0,r.W)("zocial",e.providerId),children:(0,n.jsx)("span",{children:e.displayName})})},e.providerId)}))})})]})})})}},2889:function(e,s,t){t.d(s,{a:function(){return l}});var o=t(6055),c=t(969);function l(e){var s=e.defaultClasses;return{useGetClassName:function(e){var t=e.classes;return{getClassName:(0,c.O)((function(e){return(0,o.W)(e,s[e],null===t||void 0===t?void 0:t[e])}))}}}}},7107:function(e,s,t){t.d(s,{v:function(){return o}});var o=(0,t(2889).a)({defaultClasses:{kcHtmlClass:"login-pf",kcLoginClass:"login-pf-page",kcContentWrapperClass:"row",kcHeaderClass:"login-pf-page-header",kcHeaderWrapperClass:void 0,kcFormCardClass:"card-pf",kcFormCardAccountClass:"login-pf-accounts",kcFormSocialAccountClass:"login-pf-social-section",kcFormSocialAccountContentClass:"col-xs-12 col-sm-6",kcFormHeaderClass:"login-pf-header",kcLocaleWrapperClass:void 0,kcFeedbackErrorIcon:"pficon pficon-error-circle-o",kcFeedbackWarningIcon:"pficon pficon-warning-triangle-o",kcFeedbackSuccessIcon:"pficon pficon-ok",kcFeedbackInfoIcon:"pficon pficon-info",kcResetFlowIcon:"pficon pficon-arrow fa-2x",kcFormGroupClass:"form-group",kcLabelWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcSignUpClass:"login-pf-signup",kcInfoAreaWrapperClass:void 0,kcLogoClass:"login-pf-brand",kcContainerClass:"container-fluid",kcContentClass:"col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3",kcFeedbackAreaClass:"col-md-12",kcLocaleClass:"col-xs-12 col-sm-1",kcAlertIconClasserror:"pficon pficon-error-circle-o",kcFormAreaClass:"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2",kcFormSocialAccountListClass:"login-pf-social list-unstyled login-pf-social-all",kcFormSocialAccountDoubleListClass:"login-pf-social-double-col",kcFormSocialAccountListLinkClass:"login-pf-social-link",kcWebAuthnKeyIcon:"pficon pficon-key",kcWebAuthnDefaultIcon:"pficon pficon-key",kcFormClass:"form-horizontal",kcFormGroupErrorClass:"has-error",kcLabelClass:"control-label",kcInputClass:"form-control",kcInputErrorMessageClass:"pf-c-form__helper-text pf-m-error required kc-feedback-text",kcInputWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormOptionsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormSettingClass:"login-pf-settings",kcTextareaClass:"form-control",kcInfoAreaClass:"col-xs-12 col-sm-4 col-md-4 col-lg-5 details",kcFormGroupHeader:"pf-c-form__group",kcButtonClass:"btn",kcButtonPrimaryClass:"btn-primary",kcButtonDefaultClass:"btn-default",kcButtonLargeClass:"btn-lg",kcButtonBlockClass:"btn-block",kcInputLargeClass:"input-lg",kcSrOnlyClass:"sr-only",kcSelectAuthListClass:"list-group list-view-pf",kcSelectAuthListItemClass:"list-group-item list-view-pf-stacked",kcSelectAuthListItemFillClass:"pf-l-split__item pf-m-fill",kcSelectAuthListItemIconPropertyClass:"fa-2x select-auth-box-icon-properties",kcSelectAuthListItemIconClass:"pf-l-split__item select-auth-box-icon",kcSelectAuthListItemTitle:"select-auth-box-paragraph",kcSelectAuthListItemInfoClass:"list-view-pf-main-info",kcSelectAuthListItemLeftClass:"list-view-pf-left",kcSelectAuthListItemBodyClass:"list-view-pf-body",kcSelectAuthListItemDescriptionClass:"list-view-pf-description",kcSelectAuthListItemHeadingClass:"list-group-item-heading",kcSelectAuthListItemHelpTextClass:"list-group-item-text",kcAuthenticatorDefaultClass:"fa list-view-pf-icon-lg",kcAuthenticatorPasswordClass:"fa fa-unlock list-view-pf-icon-lg",kcAuthenticatorOTPClass:"fa fa-mobile list-view-pf-icon-lg",kcAuthenticatorWebAuthnClass:"fa fa-key list-view-pf-icon-lg",kcAuthenticatorWebAuthnPasswordlessClass:"fa fa-key list-view-pf-icon-lg",kcSelectOTPListClass:"card-pf card-pf-view card-pf-view-select card-pf-view-single-select",kcSelectOTPListItemClass:"card-pf-body card-pf-top-element",kcAuthenticatorOtpCircleClass:"fa fa-mobile card-pf-icon-circle",kcSelectOTPItemHeadingClass:"card-pf-title text-center",kcFormOptionsWrapperClass:void 0}}).useGetClassName},6055:function(e,s,t){t.d(s,{W:function(){return r}});var o=t(2982),c=t(9883),l=t(9465),r=function e(){for(var s=arguments.length,t=0,r="";t<s;t++){var a=t<0||arguments.length<=t?void 0:arguments[t];if(null!=a){var i=void 0;switch(typeof a){case"boolean":break;case"object":if(Array.isArray(a))i=e.apply(void 0,(0,o.Z)(a));else for(var n in(0,c.h)(!(0,l.z)(a,!1)),i="",a)a[n]&&n&&(i&&(i+=" "),i+=n);break;default:i=a}i&&(r&&(r+=" "),r+=i)}}return r}},4942:function(e,s,t){t.d(s,{Z:function(){return c}});var o=t(9142);function c(e,s,t){return(s=(0,o.Z)(s))in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}},1413:function(e,s,t){t.d(s,{Z:function(){return l}});var o=t(4942);function c(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);s&&(o=o.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?c(Object(t),!0).forEach((function(s){(0,o.Z)(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}},9142:function(e,s,t){t.d(s,{Z:function(){return c}});var o=t(1002);function c(e){var s=function(e,s){if("object"!==(0,o.Z)(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var c=t.call(e,s||"default");if("object"!==(0,o.Z)(c))return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===s?String:Number)(e)}(e,"string");return"symbol"===(0,o.Z)(s)?s:String(s)}},9465:function(e,s,t){function o(e,s){return s}t.d(s,{z:function(){return o}})}}]);
//# sourceMappingURL=575.b8745dd6.chunk.js.map