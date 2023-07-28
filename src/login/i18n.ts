import { createUseI18n } from "keycloakify/login";

export const { useI18n } = createUseI18n({
    // NOTE: Here you can override the default i18n messages
    // or define new ones that, for example, you would have
    // defined in the Keycloak admin UI for UserProfile
    // https://user-images.githubusercontent.com/6702424/182050652-522b6fe6-8ee5-49df-aca3-dba2d33f24a5.png
    de: {
        // doLogin: "Anmelden",
        // doCancel: "Abbrechen",
        alreadyHaveAccount: "Bereits eine MINT-ID?",
        "error-empty": "*Bitte die Pflichtfelder ausfüllen.",
        loginTitle: "Anmelden mit MINT-ID",
        noAccount: "Noch keine MINT-ID?",
        organizationName: "Name der Organisation",
        privacyPolicyTitle: "Datenschutzerklärung",
        registerBanner: "Mit der MINT-ID können folgende Angebote genutzt werden:",
        registerTitle: "Eine MINT-ID registrieren",
        registerTermsAgreement: "*Ich erkläre mich mit der Geltung der <a id='terms-of-use'></a> einverstanden.",
        registerPrivacyPolicyAgreement: "Die <a id='privacy-policy'></a> habe ich zur Kenntnis genommen.",
        termsTitle: "Nutzungsbedingungen",
    },
    en: {
        // doLogin: "Login",
        // doCancel: "Cancel",
        alreadyHaveAccount: "Already have a MINT-ID?",
        "error-empty": "*Please fill out the mandatory fields.",
        loginTitle: "Login with MINT-ID",
        noAccount: "No MINT-ID yet?",
        organizationName: "Organization name",
        privacyPolicyTitle: "Privacy policy",
        registerBanner: "The following offers can be used with the MINT-ID:",
        registerTitle: "Register a MINT-ID",
        registerTermsAgreement: "*I agree to the <a id='terms-of-use'></a>.",
        registerPrivacyPolicyAgreement: "I have taken note of <a id='privacy-policy'></a>.",
        termsTitle: "Terms and Conditions"
    },
    // fr: {
    //     /* spell-checker: disable */
    //     alphanumericalCharsOnly: "Caractère alphanumérique uniquement",
    //     gender: "Genre",
    //     doForgotPassword: "J'ai oublié mon mot de passe"
    //     /* spell-checker: enable */
    // },
});

export type I18n = NonNullable<ReturnType<typeof useI18n>>;
