import { createUseI18n } from 'keycloakify/login'

export const { useI18n } = createUseI18n({
  // NOTE: Here you can override the default i18n messages
  // or define new ones that, for example, you would have
  // defined in the Keycloak admin UI for UserProfile
  // https://user-images.githubusercontent.com/6702424/182050652-522b6fe6-8ee5-49df-aca3-dba2d33f24a5.png
  de: {
    // doLogin: "Anmelden",
    // doCancel: "Abbrechen",
    alreadyHaveAccount: 'Bereits eine MINT-ID?',
    'error-empty': '*Bitte die Pflichtfelder ausfüllen.',
    loginTitle: 'Anmelden mit MINT-ID',
    noAccount: 'Noch keine MINT-ID?',
    organizationName: 'Name der Organisation',
    privacyPolicyTitle: 'Datenschutzerklärung',
    shortPrivacyPolicyTitle: 'Datenschutz',
    registerBanner: 'Mit der MINT-ID können folgende Angebote genutzt werden:',
    registerTitle: 'Eine MINT-ID registrieren',
    registerTermsAgreement: "*Ich erkläre mich mit der Geltung der <a id='terms-of-use'></a> einverstanden.",
    registerPrivacyPolicyAgreement: "Die <a id='privacy-policy'></a> habe ich zur Kenntnis genommen.",
    termsTitle: 'Nutzungsbedingungen',
    footerCopyright: 'Copyright © 2023. Alle Rechte vorbehalten matrix gGmbH',
    footerMintIDInfo: 'Alle Informationen zur MINT-ID',
    imprintTitle: 'Impressum',
    emailVerifyTitle: 'Neues Profil anlegen',
    emailVerifyInstruction1:
      'Dein Profil wurde erstellt. Um die Registrierung abzuschließen, bestätige bitte innerhalb von 24 Stunden den Registrierungslink in Deinen E-Mails. Bitte sieh auch in Deinem Spam-Ordner nach.',
    oauthGrantTitle: 'Zugriff über MINT-ID bestätigen',
    oauthGrantRequest: 'Möchtest Du den Zugriff über Deine MINT-ID freigeben?',
    emailSentMessage: 'Du solltest in Kürze eine E-Mail mit weiteren Informationen erhalten.',
    errorSupportMessage: 'Falls Du Fragen hast, schreib uns gerne eine E-Mail an support@mint-id.org.',
  },
  en: {
    // doLogin: "Login",
    // doCancel: "Cancel",
    alreadyHaveAccount: 'Already have a MINT-ID?',
    'error-empty': '*Please fill out the mandatory fields.',
    loginTitle: 'Login with MINT-ID',
    noAccount: 'No MINT-ID yet?',
    organizationName: 'Organization name',
    privacyPolicyTitle: 'Privacy policy',
    shortPrivacyPolicyTitle: 'Privacy',
    registerBanner: 'The following offers can be used with the MINT-ID:',
    registerTitle: 'Register a MINT-ID',
    registerTermsAgreement: "*I agree to the <a id='terms-of-use'></a>.",
    registerPrivacyPolicyAgreement: "I have taken note of <a id='privacy-policy'></a>.",
    termsTitle: 'Terms and Conditions',
    footerCopyright: 'Copyright © 2023. All Rights Reserved matrix gGmbH',
    footerMintIDInfo: 'All information about the MINT-ID',
    imprintTitle: 'Imprint',
    emailVerifyTitle: 'Email verification',
    emailVerifyInstruction1:
      'Your profile has been created. To complete the registration, please confirm the registration link in your email within 24 hours. Please also check your spam folder.',
    oauthGrantTitle: 'Grant Access via MINT-ID',
    oauthGrantRequest: 'Would you like to grant access via MINT-ID?',
    emailSentMessage: 'You should receive an email shortly with more information.',
    errorSupportMessage: 'If you have any questions, please send us an email to support@mint-id.org.',
  },
  // fr: {
  //     /* spell-checker: disable */
  //     alphanumericalCharsOnly: "Caractère alphanumérique uniquement",
  //     gender: "Genre",
  //     doForgotPassword: "J'ai oublié mon mot de passe"
  //     /* spell-checker: enable */
  // },
})

export type I18n = NonNullable<ReturnType<typeof useI18n>>
