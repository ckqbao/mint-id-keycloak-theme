import type { PageProps } from 'keycloakify/account/pages/PageProps'
import type { KcContext } from '../kcContext'
import type { I18n } from '../i18n'

export default function LogoutConfirm(props: PageProps<Extract<KcContext, { pageId: 'password.ftl' }>, I18n>) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props

  const { url, password, account, stateChecker } = kcContext

  const { msg } = i18n

  return (
    <Template {...{ kcContext, i18n, doUseDefaultCss, classes }} active="password">
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="kc-page-title">{msg('changePasswordHtmlTitle')}</h2>
        </div>
      </div>

      <form action={url.passwordUrl} className="mt-5 bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2" method="post">
        <div className="pt-4 pr-4 sm:pr-8 text-right">
          <span className="subtitle">{msg('allFieldsRequired')}</span>
        </div>
        <div className="px-4 pb-6 sm:px-8 sm:pb-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <input type="text" id="username" name="username" value={account.username ?? ''} autoComplete="username" readOnly style={{ display: 'none' }} />

            {password.passwordSet && (
              <div className="sm:col-span-4">
                <label htmlFor="password" className="kc-input-label">
                  {msg('password')}
                </label>

                <div className="relative mt-2 rounded-md">
                  <input type="password" className="kc-input" id="password" name="password" autoFocus autoComplete="current-password" />
                </div>
              </div>
            )}

            <input type="hidden" id="stateChecker" name="stateChecker" value={stateChecker} />

            <div className="sm:col-span-4">
              <label htmlFor="password-new" className="kc-input-label">
                {msg('passwordNew')}
              </label>

              <div className="relative mt-2 rounded-md">
                <input type="password" className="kc-input" id="password-new" name="password-new" autoComplete="new-password" />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="password-confirm" className="kc-input-label">
                {msg('passwordConfirm')}
              </label>

              <div className="relative mt-2 rounded-md">
                <input type="password" className="kc-input" id="password-confirm" name="password-confirm" autoComplete="new-password" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
          <button name="submitAction" type="submit" value="Save" className="ds-btn kc-btn ds-btn-primary normal-case">
            {msg('doSave')}
          </button>
        </div>
      </form>
    </Template>
  )
}
