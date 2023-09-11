import type { PageProps } from 'keycloakify/login/pages/PageProps'
import type { KcContext } from '../kcContext'
import type { I18n } from '../i18n'

export default function Error(props: PageProps<Extract<KcContext, { pageId: 'error.ftl' }>, I18n>) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props

  const { message, client } = kcContext

  const { msg } = i18n

  return (
    <Template {...{ kcContext, i18n, doUseDefaultCss, classes }} displayMessage={false} headerNode={msg('errorTitle')}>
      <div id="kc-error-message">
        <p className="instruction text-[#252131]">{message.summary}</p>
        <br />
        <p className="instruction text-[#252131]">{msg('errorSupportMessage')}</p>
        <br />
        {client !== undefined && client.baseUrl !== undefined && (
          <p>
            <a id="backToApplication" href={client.baseUrl} className='text-[#252131]'>
              {msg('backToApplication')}
            </a>
          </p>
        )}
      </div>
    </Template>
  )
}
