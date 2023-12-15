import { createUseI18n } from 'keycloakify/login'

export const { useI18n } = createUseI18n({
  // NOTE: Here you can override the default i18n messages
  // or define new ones that, for example, you would have
  // defined in the Keycloak admin UI for UserProfile
  // https://user-images.githubusercontent.com/6702424/182050652-522b6fe6-8ee5-49df-aca3-dba2d33f24a5.png
  de: {
    // doLogin: "Anmelden",
    // doCancel: "Abbrechen",
    doConfirm: "Bestätigen",
    alreadyLoggedIn: 'Du bist bereits angemeldet',
    alreadyHaveAccount: 'Bereits eine MINT-ID?',
    'error-empty': '*Bitte die Pflichtfelder ausfüllen.',
    loginTitle: 'Anmelden mit MINT-ID',
    noAccount: 'Noch keine MINT-ID?',
    organizationName: 'Name der Organisation',
    mintIdPrivacyPolicyTitle: 'Datenschutzerklärung MINT-ID',
    mintCampusPrivacyPolicyTitle: 'MINT-Campus',
    mintVernetztPrivacyPolicyTitle: 'MINTvernetzt',
    registerBanner: 'Mit der MINT-ID können folgende Angebote genutzt werden:',
    registerTitle: 'Eine MINT-ID registrieren',
    registerTermsAgreement: "*Ich erkläre mich mit der Geltung der <a id='terms-of-use'></a> einverstanden.",
    registerPrivacyPolicyAgreement: "Die <a id='MINT-ID-privacy-policy' />,<a id='MINTcampus-privacy-policy'/> und <a id='MINTvernetzt-privacy-policy'/> habe ich zur Kenntnis genommen.",
    termsTitle: 'Nutzungsbedingungen',
    footerCopyright: 'Copyright © 2023. Alle Rechte vorbehalten matrix gGmbH',
    footerMintIDInfo: 'Alle Informationen zur MINT-ID',
    footerMintIDPrivacyPolicyTitle: 'Datenschutz MINT-ID',
    footerMintCampusPrivacyPolicyTitle: 'Datenschutz MINT-Campus',
    footerMintVernetztPrivacyPolicyTitle: 'Datenschutz MINTvernetzt',
    imprintTitle: 'Impressum',
    emailVerifyTitle: 'Neues Profil anlegen',
    emailVerifyInstruction1:
      'Dein Profil wurde erstellt. Um die Registrierung abzuschließen, bestätige bitte innerhalb von 24 Stunden den Registrierungslink in Deinen E-Mails. Bitte sieh auch in Deinem Spam-Ordner nach.',
    emailVerifiedMessage: 'Deine E-Mail-Adresse wurde erfolgreich verifiziert.',
    oauthGrantTitle: 'Zugriff über MINT-ID bestätigen',
    oauthGrantRequest: 'Möchtest Du den Zugriff über Deine MINT-ID freigeben?',
    emailSentMessage: 'Du solltest in Kürze eine E-Mail mit weiteren Informationen erhalten.',
    errorSupportMessage: 'Falls Du Fragen hast, schreib uns gerne eine E-Mail an support@mint-id.org.',
    confirmEmailAddressVerification: 'Bitte bestätigen, dass E-Mail-Adresse {0} gültig ist.',
    profileScopeConsentText: 'Konto',
    rolesScopeConsentText: 'Nutzer:innenrollen',
    introduction: '<strong>Die MINT-ID ist die plattformübergreifende Registrierungs- und Anmeldemöglichkeit für die MINTvernetzt Community-Plattform und den MINT-Campus.</strong> Ihr habt damit die Möglichkeit, auf der Community-Plattform von MINTvernetzt andere MINT-Akteur:innen, Organisationen und Veranstaltungen zu entdecken. Beim MINT-Campus ist die MINT-ID erforderlich für die Registrierung, um alle Lernangebote vollumfänglich zu nutzen und z.B. spannende Lernangebote für Euch als Favoriten zu speichern.'
  },
  en: {
    // doLogin: "Login",
    // doCancel: "Cancel",
    doConfirm: 'Yes',
    alreadyLoggedIn: 'You are already logged in.',
    alreadyHaveAccount: 'Already have a MINT-ID?',
    'error-empty': '*Please fill out the mandatory fields.',
    loginTitle: 'Login with MINT-ID',
    noAccount: 'No MINT-ID yet?',
    organizationName: 'Organization name',
    mintIdPrivacyPolicyTitle: 'Privacy policy MINT-ID',
    mintCampusPrivacyPolicyTitle: 'MINT-Campus',
    mintVernetztPrivacyPolicyTitle: 'MINTvernetzt',
    registerBanner: 'The following offers can be used with the MINT-ID:',
    registerTitle: 'Register a MINT-ID',
    registerTermsAgreement: "*I agree to the <a id='terms-of-use'></a>,<a id='MINTcampus-privacy-policy'></a> and <a id='MINTvernetzt-privacy-policy'></a>.",
    registerPrivacyPolicyAgreement: "I have taken note of <a id='privacy-policy'></a>.",
    termsTitle: 'Terms and Conditions',
    footerCopyright: 'Copyright © 2023. All Rights Reserved matrix gGmbH',
    footerMintIDInfo: 'All information about the MINT-ID',
    footerMintIDPrivacyPolicyTitle: 'Privacy MINT-ID',
    footerMintCampusPrivacyPolicyTitle: 'Privacy MINT-Campus',
    footerMintVernetztPrivacyPolicyTitle: 'Privacy MINTvernetzt',
    imprintTitle: 'Imprint',
    emailVerifyTitle: 'Email verification',
    emailVerifyInstruction1:
      'Your profile has been created. To complete the registration, please confirm the registration link in your email within 24 hours. Please also check your spam folder.',
    emailVerifiedMessage: 'Your email address has been verified.',
    oauthGrantTitle: 'Grant Access via MINT-ID',
    oauthGrantRequest: 'Would you like to grant access via MINT-ID?',
    emailSentMessage: 'You should receive an email shortly with more information.',
    errorSupportMessage: 'If you have any questions, please send us an email to support@mint-id.org.',
    confirmEmailAddressVerification: 'Confirm validity of e-mail address {0}.',
    profileScopeConsentText: 'User profile',
    rolesScopeConsentText: 'User roles',
    introduction: '<strong>The MINT-ID is the cross-platform registration and login option for the MINTvernetzt community platform and the MINT campus.</strong> This gives you the opportunity to discover other MINT actors, organizations and events on the MINTvernetzt community platform. At the MINT campus, the MINT ID is required for registration in order to fully use all learning offers and, for example, to save exciting learning offers as favorites for you.'
  },
})

export type I18n = NonNullable<ReturnType<typeof useI18n>>
