import { clsx } from 'keycloakify/tools/clsx'
import type { PageProps } from 'keycloakify/account/pages/PageProps'
import { useGetClassName } from 'keycloakify/account/lib/useGetClassName'
import type { KcContext } from '../kcContext'
import type { I18n } from '../i18n'
import { ExclamationCircleIcon } from '@heroicons/react/20/solid'

export default function Account(props: PageProps<Extract<KcContext, { pageId: 'account.ftl' }>, I18n>) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props

  const { url, realm, messagesPerField, stateChecker, account, referrer } = kcContext

  const { msg } = i18n

  return (
    <Template {...{ kcContext, i18n, doUseDefaultCss, classes }} active="account">
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="kc-page-title">{msg('editAccountHtmlTitle')}</h2>
        </div>
      </div>

      <form action={url.accountUrl} className="mt-5 bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2" method="post">
        <input type="hidden" id="stateChecker" name="stateChecker" value={stateChecker} />
        <div className="pt-4 pr-4 sm:pr-8 text-right">
          <span className="subtitle">
            <span className="required">*</span> {msg('requiredFields')}
          </span>
        </div>
        <div className="px-4 pb-6 sm:px-8 sm:pb-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {!realm.registrationEmailAsUsername && (
              <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  {msg('username')}
                  {realm.editUsernameAllowed && <span className="required">*</span>}
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    className="kc-input"
                    disabled={!realm.editUsernameAllowed}
                    defaultValue={account.username ?? ''}
                    id="username"
                    name="username"
                    type="text"
                  />
                  {messagesPerField.existsError('username') && (
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                    </div>
                  )}
                </div>
              </div>
            )}
            <div className="sm:col-span-4">
              <label htmlFor="email" className="kc-input-label">
                {msg('email')}
                <span className="required">*</span>
              </label>
              <div className="relative mt-2 rounded-md">
                <input autoFocus className={clsx("kc-input", { "kc-input-error": messagesPerField.existsError('email') })} defaultValue={account.email ?? ''} id="email" name="email" type="email" autoComplete="email" />
                {messagesPerField.existsError('email') && (
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                  </div>
                )}
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="firstName" className="kc-input-label">
                {msg('firstName')}
                <span className="required">*</span>
              </label>
              <div className="relative mt-2 rounded-md">
                <input className="kc-input" defaultValue={account.firstName ?? ''} id="firstName" name="firstName" type="text" />
                {messagesPerField.existsError('firstName') && (
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                  </div>
                )}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="lastName" className="kc-input-label">
                {msg('lastName')}
                <span className="required">*</span>
              </label>
              <div className="relative mt-2 rounded-md">
                <input className="kc-input" defaultValue={account.lastName ?? ''} id="lastName" name="lastName" type="text" />
                {messagesPerField.existsError('lastName') && (
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
          {referrer !== undefined && <a href={referrer?.url}>{msg('backToApplication')}</a>}
          <button name="submitAction" type="submit" value="Save" className="ds-btn kc-btn ds-btn-primary normal-case">
            {msg('doSave')}
          </button>
          <button
            className="ds-btn kc-btn ds-btn-neutral normal-case"
            name="submitAction"
            type="submit"
            value="Cancel"
          >
            {msg('doCancel')}
          </button>
        </div>
      </form>
    </Template>
  )
}
