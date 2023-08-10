"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[657],{657:function(e,s,t){t.r(s),t.d(s,{default:function(){return i}});var c=t(6055),a=t(7747),r=t(7107),l=t(1572),o=t(4114),n=t(184);function i(e){var s=e.displayInfo,t=void 0!==s&&s,i=e.displayMessage,d=void 0===i||i,p=e.displayRequiredFields,u=void 0!==p&&p,f=e.displayWide,m=void 0!==f&&f,k=e.showAnotherWayIfPresent,h=void 0===k||k,C=e.headerNode,g=e.showUsernameNode,v=void 0===g?null:g,y=e.infoNode,x=void 0===y?null:y,b=e.kcContext,j=e.i18n,w=e.doUseDefaultCss,N=e.classes,F=e.children,A=(0,r.v)({doUseDefaultCss:w,classes:N}).getClassName,I=j.msg,L=(j.changeLocale,j.labelBySupportedLanguageTag,j.currentLanguageTag,b.realm,b.locale,b.auth),W=b.url,S=b.message,T=b.isAppInitiatedAction,E=b.pageId;return(0,a.M)({doFetchDefaultThemeResources:w,url:W,stylesCommon:["node_modules/patternfly/dist/css/patternfly.min.css","node_modules/patternfly/dist/css/patternfly-additions.min.css","lib/zocial/zocial.css"],styles:["css/login.css"],htmlClassName:A("kcHtmlClass"),bodyClassName:void 0}).isReady?(0,n.jsxs)("div",{className:A("kcLoginClass"),children:[(0,n.jsx)("div",{id:"kc-header",className:A("kcHeaderClass"),children:"register.ftl"!==E&&"register-user-profile.ftl"!==E&&(0,n.jsxs)("div",{id:"kc-header-wrapper",className:A("kcHeaderWrapperClass"),style:{display:"flex",gap:"23px",alignItems:"center",justifyContent:"center"},children:[(0,n.jsx)("img",{src:o,alt:"mint-vernetzt",width:"122",height:"122"}),(0,n.jsx)("img",{src:l,alt:"mint-campus-logo",width:"120",height:"120"})]})}),t&&(0,n.jsx)("div",{id:"kc-info",className:A("kcSignUpClass"),children:(0,n.jsx)("div",{id:"kc-info-wrapper",className:A("kcInfoAreaWrapperClass"),children:x})}),(0,n.jsxs)("div",{className:(0,c.W)(A("kcFormCardClass"),m&&A("kcFormCardAccountClass")),children:[(0,n.jsx)("header",{className:A("kcFormHeaderClass"),children:void 0===L||!L.showUsername||L.showResetCredentials?u?(0,n.jsxs)("div",{className:A("kcContentWrapperClass"),children:[(0,n.jsx)("div",{className:(0,c.W)(A("kcLabelWrapperClass"),"subtitle"),children:(0,n.jsxs)("span",{className:"subtitle",children:[(0,n.jsx)("span",{className:"required",children:"*"}),I("requiredFields")]})}),(0,n.jsx)("div",{className:"col-md-10",children:(0,n.jsx)("h1",{id:"kc-page-title",children:C})})]}):(0,n.jsx)("h1",{id:"kc-page-title",children:C}):u?(0,n.jsxs)("div",{className:A("kcContentWrapperClass"),children:[(0,n.jsx)("div",{className:(0,c.W)(A("kcLabelWrapperClass"),"subtitle"),children:(0,n.jsxs)("span",{className:"subtitle",children:[(0,n.jsx)("span",{className:"required",children:"*"})," ",I("requiredFields")]})}),(0,n.jsxs)("div",{className:"col-md-10",children:[v,(0,n.jsx)("div",{className:A("kcFormGroupClass"),children:(0,n.jsxs)("div",{id:"kc-username",children:[(0,n.jsx)("label",{id:"kc-attempted-username",children:null===L||void 0===L?void 0:L.attemptedUsername}),(0,n.jsx)("a",{id:"reset-login",href:W.loginRestartFlowUrl,children:(0,n.jsxs)("div",{className:"kc-login-tooltip",children:[(0,n.jsx)("i",{className:A("kcResetFlowIcon")}),(0,n.jsx)("span",{className:"kc-tooltip-text",children:I("restartLoginTooltip")})]})})]})})]})]}):(0,n.jsxs)(n.Fragment,{children:[v,(0,n.jsx)("div",{className:A("kcFormGroupClass"),children:(0,n.jsxs)("div",{id:"kc-username",children:[(0,n.jsx)("label",{id:"kc-attempted-username",children:null===L||void 0===L?void 0:L.attemptedUsername}),(0,n.jsx)("a",{id:"reset-login",href:W.loginRestartFlowUrl,children:(0,n.jsxs)("div",{className:"kc-login-tooltip",children:[(0,n.jsx)("i",{className:A("kcResetFlowIcon")}),(0,n.jsx)("span",{className:"kc-tooltip-text",children:I("restartLoginTooltip")})]})})]})})]})}),(0,n.jsx)("div",{id:"kc-content",children:(0,n.jsxs)("div",{id:"kc-content-wrapper",children:[d&&void 0!==S&&("warning"!==S.type||!T)&&(0,n.jsxs)("div",{className:(0,c.W)("alert","alert-".concat(S.type)),children:["success"===S.type&&(0,n.jsx)("span",{className:A("kcFeedbackSuccessIcon")}),"warning"===S.type&&(0,n.jsx)("span",{className:A("kcFeedbackWarningIcon")}),"error"===S.type&&(0,n.jsx)("span",{className:A("kcFeedbackErrorIcon")}),"info"===S.type&&(0,n.jsx)("span",{className:A("kcFeedbackInfoIcon")}),(0,n.jsx)("span",{className:"kc-feedback-text",dangerouslySetInnerHTML:{__html:S.summary}})]}),F,void 0!==L&&L.showTryAnotherWayLink&&h&&(0,n.jsx)("form",{id:"kc-select-try-another-way-form",action:W.loginAction,method:"post",className:(0,c.W)(m&&A("kcContentWrapperClass")),children:(0,n.jsx)("div",{className:(0,c.W)(m&&[A("kcFormSocialAccountContentClass"),A("kcFormSocialAccountClass")]),children:(0,n.jsxs)("div",{className:A("kcFormGroupClass"),children:[(0,n.jsx)("input",{type:"hidden",name:"tryAnotherWay",value:"on"}),(0,n.jsx)("a",{href:"#",id:"try-another-way",onClick:function(){return document.forms["kc-select-try-another-way-form"].submit(),!1},children:I("doTryAnotherWay")})]})})})]})})]})]}):null}},2889:function(e,s,t){t.d(s,{a:function(){return r}});var c=t(6055),a=t(969);function r(e){var s=e.defaultClasses;return{useGetClassName:function(e){var t=e.classes;return{getClassName:(0,a.O)((function(e){return(0,c.W)(e,s[e],null===t||void 0===t?void 0:t[e])}))}}}}},7747:function(e,s,t){t.d(s,{M:function(){return p}});var c=t(4165),a=t(2982),r=t(5861),l=t(885),o=t(2791),n=t(1630),i=t(6196),d=t(6055);function p(e){var s=e.doFetchDefaultThemeResources,t=e.stylesCommon,d=void 0===t?[]:t,p=e.styles,f=void 0===p?[]:p,m=e.url,k=e.scripts,h=void 0===k?[]:k,C=e.htmlClassName,g=e.bodyClassName,v=(0,o.useReducer)((function(){return!0}),!s),y=(0,l.Z)(v,2),x=y[0],b=y[1];return(0,o.useEffect)((function(){if(s){var e=!1,t=[];return(0,r.Z)((0,c.Z)().mark((function s(){var r;return(0,c.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return r=[],[].concat((0,a.Z)(d.map((function(e){return(0,i.pathJoin)(m.resourcesCommonPath,e)}))),(0,a.Z)(f.map((function(e){return(0,i.pathJoin)(m.resourcesPath,e)})))).reverse().forEach((function(e){var s=(0,n.t)({type:"css",position:"prepend",href:e}),c=s.prLoaded,a=s.remove;t.push(a),r.push(c)})),s.next=4,Promise.all(r);case 4:if(!e){s.next=6;break}return s.abrupt("return");case 6:b();case 7:case"end":return s.stop()}}),s)})))(),h.forEach((function(e){var s=(0,n.t)({type:"javascript",src:(0,i.pathJoin)(m.resourcesPath,e)}).remove;t.push(s)})),function(){e=!0,t.forEach((function(e){return e()}))}}}),[]),u({target:"html",className:C}),u({target:"body",className:g}),{isReady:x}}function u(e){var s=e.target,t=e.className;(0,o.useEffect)((function(){if(void 0!==t){var e=document.getElementsByTagName(s)[0].classList,c=(0,d.W)(t).split(" ");return e.add.apply(e,(0,a.Z)(c)),function(){e.remove.apply(e,(0,a.Z)(c))}}}),[t])}},7107:function(e,s,t){t.d(s,{v:function(){return c}});var c=(0,t(2889).a)({defaultClasses:{kcHtmlClass:"login-pf",kcLoginClass:"login-pf-page",kcContentWrapperClass:"row",kcHeaderClass:"login-pf-page-header",kcHeaderWrapperClass:void 0,kcFormCardClass:"card-pf",kcFormCardAccountClass:"login-pf-accounts",kcFormSocialAccountClass:"login-pf-social-section",kcFormSocialAccountContentClass:"col-xs-12 col-sm-6",kcFormHeaderClass:"login-pf-header",kcLocaleWrapperClass:void 0,kcFeedbackErrorIcon:"pficon pficon-error-circle-o",kcFeedbackWarningIcon:"pficon pficon-warning-triangle-o",kcFeedbackSuccessIcon:"pficon pficon-ok",kcFeedbackInfoIcon:"pficon pficon-info",kcResetFlowIcon:"pficon pficon-arrow fa-2x",kcFormGroupClass:"form-group",kcLabelWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcSignUpClass:"login-pf-signup",kcInfoAreaWrapperClass:void 0,kcLogoClass:"login-pf-brand",kcContainerClass:"container-fluid",kcContentClass:"col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3",kcFeedbackAreaClass:"col-md-12",kcLocaleClass:"col-xs-12 col-sm-1",kcAlertIconClasserror:"pficon pficon-error-circle-o",kcFormAreaClass:"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2",kcFormSocialAccountListClass:"login-pf-social list-unstyled login-pf-social-all",kcFormSocialAccountDoubleListClass:"login-pf-social-double-col",kcFormSocialAccountListLinkClass:"login-pf-social-link",kcWebAuthnKeyIcon:"pficon pficon-key",kcWebAuthnDefaultIcon:"pficon pficon-key",kcFormClass:"form-horizontal",kcFormGroupErrorClass:"has-error",kcLabelClass:"control-label",kcInputClass:"form-control",kcInputErrorMessageClass:"pf-c-form__helper-text pf-m-error required kc-feedback-text",kcInputWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormOptionsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormSettingClass:"login-pf-settings",kcTextareaClass:"form-control",kcInfoAreaClass:"col-xs-12 col-sm-4 col-md-4 col-lg-5 details",kcFormGroupHeader:"pf-c-form__group",kcButtonClass:"btn",kcButtonPrimaryClass:"btn-primary",kcButtonDefaultClass:"btn-default",kcButtonLargeClass:"btn-lg",kcButtonBlockClass:"btn-block",kcInputLargeClass:"input-lg",kcSrOnlyClass:"sr-only",kcSelectAuthListClass:"list-group list-view-pf",kcSelectAuthListItemClass:"list-group-item list-view-pf-stacked",kcSelectAuthListItemFillClass:"pf-l-split__item pf-m-fill",kcSelectAuthListItemIconPropertyClass:"fa-2x select-auth-box-icon-properties",kcSelectAuthListItemIconClass:"pf-l-split__item select-auth-box-icon",kcSelectAuthListItemTitle:"select-auth-box-paragraph",kcSelectAuthListItemInfoClass:"list-view-pf-main-info",kcSelectAuthListItemLeftClass:"list-view-pf-left",kcSelectAuthListItemBodyClass:"list-view-pf-body",kcSelectAuthListItemDescriptionClass:"list-view-pf-description",kcSelectAuthListItemHeadingClass:"list-group-item-heading",kcSelectAuthListItemHelpTextClass:"list-group-item-text",kcAuthenticatorDefaultClass:"fa list-view-pf-icon-lg",kcAuthenticatorPasswordClass:"fa fa-unlock list-view-pf-icon-lg",kcAuthenticatorOTPClass:"fa fa-mobile list-view-pf-icon-lg",kcAuthenticatorWebAuthnClass:"fa fa-key list-view-pf-icon-lg",kcAuthenticatorWebAuthnPasswordlessClass:"fa fa-key list-view-pf-icon-lg",kcSelectOTPListClass:"card-pf card-pf-view card-pf-view-select card-pf-view-single-select",kcSelectOTPListItemClass:"card-pf-body card-pf-top-element",kcAuthenticatorOtpCircleClass:"fa fa-mobile card-pf-icon-circle",kcSelectOTPItemHeadingClass:"card-pf-title text-center",kcFormOptionsWrapperClass:void 0}}).useGetClassName},4943:function(){HTMLElement.prototype.prepend||(HTMLElement.prototype.prepend=function(e){if("string"===typeof e)throw new Error("Error with HTMLElement.prototype.appendFirst polyfill");this.insertBefore(e,this.firstChild)})},6055:function(e,s,t){t.d(s,{W:function(){return l}});var c=t(2982),a=t(9883),r=t(9465),l=function e(){for(var s=arguments.length,t=0,l="";t<s;t++){var o=t<0||arguments.length<=t?void 0:arguments[t];if(null!=o){var n=void 0;switch(typeof o){case"boolean":break;case"object":if(Array.isArray(o))n=e.apply(void 0,(0,c.Z)(o));else for(var i in(0,a.h)(!(0,r.z)(o,!1)),n="",o)o[i]&&i&&(n&&(n+=" "),n+=i);break;default:n=o}n&&(l&&(l+=" "),l+=n)}}return l}},1630:function(e,s,t){t.d(s,{t:function(){return a}});t(4943);var c=t(3172);function a(e){var s=document.createElement(function(){switch(e.type){case"css":return"link";case"javascript":return"script"}}()),t=new c.Deferred;return s.addEventListener("load",(function(){return t.resolve()})),Object.assign(s,function(){switch(e.type){case"css":return{href:e.href,type:"text/css",rel:"stylesheet",media:"screen,print"};case"javascript":return{src:e.src,type:"text/javascript"}}}()),document.getElementsByTagName("head")[0][function(){switch(e.type){case"javascript":return"appendChild";case"css":return function(){switch(e.position){case"append":return"appendChild";case"prepend":return"prepend"}}()}}()](s),{prLoaded:t.pr,remove:function(){return s.remove()}}}},1572:function(e,s,t){e.exports=window.kcContext.url.resourcesPath + "/build/static/media/MINT-Campus-Logo.c59b70b47a5c92f323ce.png"},4114:function(e,s,t){e.exports=window.kcContext.url.resourcesPath + "/build/static/media/Mintvernetzt-Logo.10e0485fdc8bd99ca4e1.png"},9465:function(e,s,t){function c(e,s){return s}t.d(s,{z:function(){return c}})}}]);
//# sourceMappingURL=657.d634f5c4.chunk.js.map