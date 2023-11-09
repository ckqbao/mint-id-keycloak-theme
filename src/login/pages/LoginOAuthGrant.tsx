import type { PageProps } from 'keycloakify/login/pages/PageProps'
import type { KcContext } from '../kcContext'
import type { I18n } from '../i18n'
import { useGetClassName } from 'keycloakify/login/lib/useGetClassName'
import { clsx } from 'keycloakify/tools/clsx'

export default function LoginOAuthGrant(props: PageProps<Extract<KcContext, { pageId: 'login-oauth-grant.ftl' }>, I18n>) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props

  const { getClassName } = useGetClassName({
    doUseDefaultCss,
    classes,
  })

  const { advancedMsg, msg, msgStr } = i18n
  const { oauth, url } = kcContext

  return (
    <Template {...{ kcContext, i18n, doUseDefaultCss, classes }} displayMessage={false} headerNode={msg('oauthGrantTitle')}>
      <h3 className="text-xl text-[#252131]">{msg('oauthGrantRequest')}</h3>
      <ul className='flex flex-col space-y-4 pt-4 pb-4 text-[#252131]'>
        {oauth?.clientScopesRequested?.map((scope, idx) => (
          <li key={idx}>
            <span className='text-base'>
              {advancedMsg(scope.consentScreenText)}
              {!!scope.dynamicScopeParameter && <b>{scope.dynamicScopeParameter}</b>}
            </span>
          </li>
        ))}
      </ul>
      <form className="form-actions mt-5" action={url.oauthAction} method="POST">
        <input
          className={clsx(
            getClassName('kcButtonClass'),
            getClassName('kcButtonClass'),
            getClassName('kcButtonClass'),
            getClassName('kcButtonPrimaryClass'),
            getClassName('kcButtonLargeClass'),
            'cursor-pointer'
          )}
          name="accept"
          type="submit"
          value={msgStr('doConfirm')}
        />
        {/* <input
          className={clsx(getClassName('kcButtonClass'), getClassName('kcButtonDefaultClass'), getClassName('kcButtonLargeClass'), 'cursor-pointer')}
          name="cancel"
          type="submit"
          value={msgStr('doNo')}
        /> */}
      </form>
      <div className="clearfix" />
    </Template>
  )
}
