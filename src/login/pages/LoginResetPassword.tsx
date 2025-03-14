import { clsx } from 'keycloakify/tools/clsx'
import type { PageProps } from 'keycloakify/login/pages/PageProps'
import { useGetClassName } from 'keycloakify/login/lib/useGetClassName'
import type { KcContext } from '../kcContext'
import type { I18n } from '../i18n'

export default function LoginResetPassword(props: PageProps<Extract<KcContext, { pageId: 'login-reset-password.ftl' }>, I18n>) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props

  const { getClassName } = useGetClassName({
    doUseDefaultCss,
    classes,
  })

  const { url, realm, auth } = kcContext

  const { msg, msgStr } = i18n

  return (
    <Template {...{ kcContext, i18n, doUseDefaultCss, classes }} displayMessage={false} headerNode={msg('emailForgotTitle')} infoNode={msg('emailInstruction')}>
      <form id="kc-reset-password-form" className={getClassName('kcFormClass')} action={url.loginAction} method="post">
        <div className={getClassName('kcFormGroupClass')}>
          <div className={getClassName('kcInputWrapperClass')}>
            <input
              type="text"
              id="username"
              name="username"
              className={clsx(getClassName('kcInputClass'), 'w-full')}
              autoFocus
              defaultValue={auth !== undefined && auth.showUsername ? auth.attemptedUsername : undefined}
              required
              placeholder={
                !realm.loginWithEmailAllowed ? msgStr('username') : !realm.registrationEmailAsUsername ? msgStr('usernameOrEmail') : msgStr('email') + '*'
              }
            />
          </div>
        </div>
        <div className={clsx(getClassName('kcFormGroupClass'), getClassName('kcFormSettingClass'))}>
          <div id="kc-form-options" className={getClassName('kcFormOptionsClass')}>
            <div className={getClassName('kcFormOptionsWrapperClass')}>
              <span>
                <a href={url.loginUrl}>{msg('backToLogin')}</a>
              </span>
            </div>
          </div>

          <div id="kc-form-buttons" className={getClassName('kcFormButtonsClass')}>
            <input
              className={clsx(getClassName('kcButtonClass'), getClassName('kcButtonPrimaryClass'), getClassName('kcButtonLargeClass'))}
              id="kc-reset-password"
              type="submit"
              value={msgStr('doSubmit')}
            />
          </div>
        </div>
      </form>
    </Template>
  )
}
