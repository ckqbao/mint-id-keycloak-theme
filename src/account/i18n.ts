import { createUseI18n } from "keycloakify/account";

//NOTE: See src/login/i18n.ts for instructions on customization of i18n messages.
export const { useI18n } = createUseI18n({
  de: {
    deleteAccount: 'Konto löschen',
    deleteAccountPopoverInfo: 'Du kannst die Löschung Deiner MINT-ID per E-Mail an support@mint-id.org beauftragen. Wir nehmen die Löschung schnellstmöglich vor.'
  },
  en: {
    deleteAccount: 'Delete account',
    deleteAccountPopoverInfo: 'You can request the deletion of your MINT ID by sending an email to support@mint-id.org. We will delete it as quickly as possible.'
  }
});

export type I18n = NonNullable<ReturnType<typeof useI18n>>;
