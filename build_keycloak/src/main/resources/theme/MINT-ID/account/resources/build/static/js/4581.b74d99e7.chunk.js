"use strict";(self.webpackChunkmint_id=self.webpackChunkmint_id||[]).push([[4581],{4581:function(s,e,c){c.r(e),c.d(e,{default:function(){return a}});var t=c(7107),l=c(6055),o=c(184);function a(s){var e,c,a=s.kcContext,n=s.i18n,i=s.doUseDefaultCss,r=s.Template,f=s.classes,u=(0,t.v)({doUseDefaultCss:i,classes:f}).getClassName,p=n.advancedMsg,k=n.msg,m=n.msgStr,d=a.client,C=a.oauth,g=a.url;return(0,o.jsxs)(r,{kcContext:a,i18n:n,doUseDefaultCss:i,classes:f,displayMessage:!1,headerNode:k("oauthGrantTitle",null!==(e=d.name)&&void 0!==e?e:d.clientId),children:[(0,o.jsx)("h3",{className:"text-xl",children:k("oauthGrantRequest")}),(0,o.jsx)("ul",{className:"flex flex-col space-y-4 pt-4 pb-4",children:null===C||void 0===C||null===(c=C.clientScopesRequested)||void 0===c?void 0:c.map((function(s,e){return(0,o.jsx)("li",{children:(0,o.jsxs)("span",{className:"text-base",children:[p(s.consentScreenText),!!s.dynamicScopeParameter&&(0,o.jsx)("b",{children:s.dynamicScopeParameter})]})},e)}))}),(0,o.jsxs)("form",{className:"form-actions mt-5",action:g.oauthAction,method:"POST",children:[(0,o.jsx)("input",{className:(0,l.W)(u("kcButtonClass"),u("kcButtonClass"),u("kcButtonClass"),u("kcButtonPrimaryClass"),u("kcButtonLargeClass"),"cursor-pointer"),name:"accept",type:"submit",value:m("doYes")}),(0,o.jsx)("input",{className:(0,l.W)(u("kcButtonClass"),u("kcButtonDefaultClass"),u("kcButtonLargeClass"),"cursor-pointer"),name:"cancel",type:"submit",value:m("doNo")})]}),(0,o.jsx)("div",{className:"clearfix"})]})}},2889:function(s,e,c){c.d(e,{a:function(){return o}});var t=c(6055),l=c(969);function o(s){var e=s.defaultClasses;return{useGetClassName:function(s){var c=s.classes;return{getClassName:(0,l.O)((function(s){return(0,t.W)(s,e[s],null===c||void 0===c?void 0:c[s])}))}}}}},7107:function(s,e,c){c.d(e,{v:function(){return t}});var t=(0,c(2889).a)({defaultClasses:{kcHtmlClass:"login-pf",kcLoginClass:"login-pf-page",kcContentWrapperClass:"row",kcHeaderClass:"login-pf-page-header",kcHeaderWrapperClass:void 0,kcFormCardClass:"card-pf",kcFormCardAccountClass:"login-pf-accounts",kcFormSocialAccountClass:"login-pf-social-section",kcFormSocialAccountContentClass:"col-xs-12 col-sm-6",kcFormHeaderClass:"login-pf-header",kcLocaleWrapperClass:void 0,kcFeedbackErrorIcon:"pficon pficon-error-circle-o",kcFeedbackWarningIcon:"pficon pficon-warning-triangle-o",kcFeedbackSuccessIcon:"pficon pficon-ok",kcFeedbackInfoIcon:"pficon pficon-info",kcResetFlowIcon:"pficon pficon-arrow fa-2x",kcFormGroupClass:"form-group",kcLabelWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcSignUpClass:"login-pf-signup",kcInfoAreaWrapperClass:void 0,kcLogoClass:"login-pf-brand",kcContainerClass:"container-fluid",kcContentClass:"col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3",kcFeedbackAreaClass:"col-md-12",kcLocaleClass:"col-xs-12 col-sm-1",kcAlertIconClasserror:"pficon pficon-error-circle-o",kcFormAreaClass:"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2",kcFormSocialAccountListClass:"login-pf-social list-unstyled login-pf-social-all",kcFormSocialAccountDoubleListClass:"login-pf-social-double-col",kcFormSocialAccountListLinkClass:"login-pf-social-link",kcWebAuthnKeyIcon:"pficon pficon-key",kcWebAuthnDefaultIcon:"pficon pficon-key",kcFormClass:"form-horizontal",kcFormGroupErrorClass:"has-error",kcLabelClass:"control-label",kcInputClass:"form-control",kcInputErrorMessageClass:"pf-c-form__helper-text pf-m-error required kc-feedback-text",kcInputWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormOptionsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormSettingClass:"login-pf-settings",kcTextareaClass:"form-control",kcInfoAreaClass:"col-xs-12 col-sm-4 col-md-4 col-lg-5 details",kcFormGroupHeader:"pf-c-form__group",kcButtonClass:"btn",kcButtonPrimaryClass:"btn-primary",kcButtonDefaultClass:"btn-default",kcButtonLargeClass:"btn-lg",kcButtonBlockClass:"btn-block",kcInputLargeClass:"input-lg",kcSrOnlyClass:"sr-only",kcSelectAuthListClass:"list-group list-view-pf",kcSelectAuthListItemClass:"list-group-item list-view-pf-stacked",kcSelectAuthListItemFillClass:"pf-l-split__item pf-m-fill",kcSelectAuthListItemIconPropertyClass:"fa-2x select-auth-box-icon-properties",kcSelectAuthListItemIconClass:"pf-l-split__item select-auth-box-icon",kcSelectAuthListItemTitle:"select-auth-box-paragraph",kcSelectAuthListItemInfoClass:"list-view-pf-main-info",kcSelectAuthListItemLeftClass:"list-view-pf-left",kcSelectAuthListItemBodyClass:"list-view-pf-body",kcSelectAuthListItemDescriptionClass:"list-view-pf-description",kcSelectAuthListItemHeadingClass:"list-group-item-heading",kcSelectAuthListItemHelpTextClass:"list-group-item-text",kcAuthenticatorDefaultClass:"fa list-view-pf-icon-lg",kcAuthenticatorPasswordClass:"fa fa-unlock list-view-pf-icon-lg",kcAuthenticatorOTPClass:"fa fa-mobile list-view-pf-icon-lg",kcAuthenticatorWebAuthnClass:"fa fa-key list-view-pf-icon-lg",kcAuthenticatorWebAuthnPasswordlessClass:"fa fa-key list-view-pf-icon-lg",kcSelectOTPListClass:"card-pf card-pf-view card-pf-view-select card-pf-view-single-select",kcSelectOTPListItemClass:"card-pf-body card-pf-top-element",kcAuthenticatorOtpCircleClass:"fa fa-mobile card-pf-icon-circle",kcSelectOTPItemHeadingClass:"card-pf-title text-center",kcFormOptionsWrapperClass:void 0}}).useGetClassName},6055:function(s,e,c){c.d(e,{W:function(){return a}});var t=c(2982),l=c(9883),o=c(9465),a=function s(){for(var e=arguments.length,c=0,a="";c<e;c++){var n=c<0||arguments.length<=c?void 0:arguments[c];if(null!=n){var i=void 0;switch(typeof n){case"boolean":break;case"object":if(Array.isArray(n))i=s.apply(void 0,(0,t.Z)(n));else for(var r in(0,l.h)(!(0,o.z)(n,!1)),i="",n)n[r]&&r&&(i&&(i+=" "),i+=r);break;default:i=n}i&&(a&&(a+=" "),a+=i)}}return a}},9465:function(s,e,c){function t(s,e){return e}c.d(e,{z:function(){return t}})}}]);
//# sourceMappingURL=4581.b74d99e7.chunk.js.map