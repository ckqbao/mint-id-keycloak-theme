// Copy pasted from: https://github.com/InseeFrLab/keycloakify/blob/main/src/login/Template.tsx

import { clsx } from 'keycloakify/tools/clsx'
import { usePrepareTemplate } from 'keycloakify/lib/usePrepareTemplate'
import type { TemplateProps } from 'keycloakify/login/TemplateProps'
import { useDownloadTerms } from 'keycloakify/login'
import { useGetClassName } from 'keycloakify/login/lib/useGetClassName'
import type { KcContext } from './kcContext'
import type { I18n } from './i18n'
import { CheckCircleIcon, ExclamationTriangleIcon, InformationCircleIcon, XCircleIcon } from '@heroicons/react/20/solid'

import mintCampusLogo from '../assets/img/MINT-Campus-Logo.png'
import mintVernetztLogo from '../assets/img/Mintvernetzt-Logo.png'
import { ReactComponent as FooterSvg } from '../assets/svg/footer.svg'
import tos_en_url from '../assets/tos_en.md'
import tos_de_url from '../assets/tos_de.md'

export default function Template(props: TemplateProps<KcContext, I18n>) {
  const {
    displayInfo = false,
    displayMessage = true,
    displayRequiredFields = false,
    displayWide = false,
    showAnotherWayIfPresent = true,
    headerNode,
    showUsernameNode = null,
    infoNode = null,
    kcContext,
    i18n,
    doUseDefaultCss,
    classes,
    children,
  } = props

  const { getClassName } = useGetClassName({ doUseDefaultCss, classes })

  const { msg, msgStr } = i18n

  const { auth, url, message, isAppInitiatedAction, pageId } = kcContext

  useDownloadTerms({
    kcContext,
    downloadTermMarkdown: async ({ currentLanguageTag }) => {
      const tos_url = (() => {
        switch (currentLanguageTag) {
          case 'de':
            return tos_de_url
          default:
            return tos_en_url
        }
      })()

      if ('__STORYBOOK_ADDONS' in window) {
        // NOTE: In storybook, when you import a .md file you get the content of the file.
        // In Create React App on the other hand you get an url to the file.
        return tos_url
      }

      const markdownString = await fetch(tos_url).then((response) => response.text())

      return markdownString
    },
  })

  const { isReady } = usePrepareTemplate({
    doFetchDefaultThemeResources: doUseDefaultCss,
    url,
    stylesCommon: [
      // 'node_modules/patternfly/dist/css/patternfly.min.css',
      // 'node_modules/patternfly/dist/css/patternfly-additions.min.css',
      'lib/zocial/zocial.css',
    ],
    styles: ['css/login.css'],
    htmlClassName: getClassName('kcHtmlClass'),
    bodyClassName: undefined,
  })

  if (!isReady) {
    return null
  }

  return (
    <div className={clsx(getClassName('kcLoginClass'), 'pt-5')}>
      <div id="kc-header" className={clsx(getClassName('kcHeaderClass'), 'mb-10')}>
        {pageId !== 'register.ftl' && pageId !== 'register-user-profile.ftl' && (
          <div
            id="kc-header-wrapper"
            className={getClassName('kcHeaderWrapperClass')}
            style={{ display: 'flex', gap: '23px', alignItems: 'center', justifyContent: 'center' }}
          >
            <img src={mintVernetztLogo} alt="mint-vernetzt" width="122" height="122" />
            <img src={mintCampusLogo} alt="mint-campus-logo" width="120" height="120" />
          </div>
        )}
      </div>
      {pageId === 'login.ftl' && <p className="max-w-xl mx-auto mb-5 font-normal text-lg text-black text-center">{msg('introduction')}</p>}
      {displayInfo && (
        <div id="kc-info" className={getClassName('kcSignUpClass')}>
          <div id="kc-info-wrapper" className={getClassName('kcInfoAreaWrapperClass')}>
            {infoNode}
          </div>
        </div>
      )}
      <div className={clsx(getClassName('kcFormCardClass'), displayWide && getClassName('kcFormCardAccountClass'))}>
        <header className={getClassName('kcFormHeaderClass')}>
          {/* {realm.internationalizationEnabled && (assert(locale !== undefined), true) && locale.supported.length > 1 && (
            <div id="kc-locale">
              <div id="kc-locale-wrapper" className={getClassName('kcLocaleWrapperClass')}>
                <div className="kc-dropdown" id="kc-locale-dropdown">
                  eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <a href="#" id="kc-current-locale-link">
                    {labelBySupportedLanguageTag[currentLanguageTag]}
                  </a>
                  <ul>
                    {locale.supported.map(({ languageTag }) => (
                      <li key={languageTag} className="kc-dropdown-item">
                        eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <a href="#" onClick={() => changeLocale(languageTag)}>
                          {labelBySupportedLanguageTag[languageTag]}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )} */}
          {!(auth !== undefined && auth.showUsername && !auth.showResetCredentials) ? (
            displayRequiredFields ? (
              <div className={getClassName('kcContentWrapperClass')}>
                <div className={clsx(getClassName('kcLabelWrapperClass'), 'subtitle')}>
                  <span className="subtitle">
                    <span className="required">*</span>
                    {msg('requiredFields')}
                  </span>
                </div>
                <div className="col-md-10">
                  <h1 id="kc-page-title">{headerNode}</h1>
                </div>
              </div>
            ) : (
              <h1 id="kc-page-title">{headerNode}</h1>
            )
          ) : displayRequiredFields ? (
            <div className={getClassName('kcContentWrapperClass')}>
              <div className={clsx(getClassName('kcLabelWrapperClass'), 'subtitle')}>
                <span className="subtitle">
                  <span className="required">*</span> {msg('requiredFields')}
                </span>
              </div>
              <div className="col-md-10">
                {showUsernameNode}
                <div className={getClassName('kcFormGroupClass')}>
                  <div id="kc-username">
                    <label id="kc-attempted-username">{auth?.attemptedUsername}</label>
                    <a id="reset-login" href={url.loginRestartFlowUrl}>
                      <div className="kc-login-tooltip">
                        <i className={getClassName('kcResetFlowIcon')}></i>
                        <span className="kc-tooltip-text">{msg('restartLoginTooltip')}</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              {showUsernameNode}
              <div className={getClassName('kcFormGroupClass')}>
                <div id="kc-username">
                  <label id="kc-attempted-username">{auth?.attemptedUsername}</label>
                  <a id="reset-login" href={url.loginRestartFlowUrl}>
                    <div className="kc-login-tooltip">
                      <i className={getClassName('kcResetFlowIcon')}></i>
                      <span className="kc-tooltip-text">{msg('restartLoginTooltip')}</span>
                    </div>
                  </a>
                </div>
              </div>
            </>
          )}
        </header>
        <div id="kc-content">
          <div id="kc-content-wrapper">
            {/* App-initiated actions should not see warning messages about the need to complete the action during login. */}
            {displayMessage && message !== undefined && (message.type !== 'warning' || !isAppInitiatedAction) && (
              <div
                className={clsx('rounded-md p-4 mb-5', {
                  'bg-green-50': message.type === 'success',
                  'bg-red-50': message.type === 'error',
                  'bg-blue-50': message.type === 'info',
                  'bg-yellow-50': message.type === 'warning',
                })}
              >
                <div className="flex">
                  <div className="flex items-center">
                    {message.type === 'success' && <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />}
                    {message.type === 'warning' && <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />}
                    {message.type === 'error' && <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />}
                    {message.type === 'info' && <InformationCircleIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />}
                  </div>
                  <div className="ml-3">
                    <span
                      className={clsx('kc-feedback-text text-sm font-medium', {
                        'text-green-800': message.type === 'success',
                        'text-red-800': message.type === 'error',
                        'text-blue-700': message.type === 'info',
                        'text-yellow-700': message.type === 'warning',
                      })}
                      dangerouslySetInnerHTML={{
                        __html: message.summary,
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
            {children}
            {auth !== undefined && auth.showTryAnotherWayLink && showAnotherWayIfPresent && (
              <form
                id="kc-select-try-another-way-form"
                action={url.loginAction}
                method="post"
                className={clsx(displayWide && getClassName('kcContentWrapperClass'))}
              >
                <div className={clsx(displayWide && [getClassName('kcFormSocialAccountContentClass'), getClassName('kcFormSocialAccountClass')])}>
                  <div className={getClassName('kcFormGroupClass')}>
                    <input type="hidden" name="tryAnotherWay" value="on" />
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                      href="#"
                      id="try-another-way"
                      onClick={() => {
                        document.forms['kc-select-try-another-way-form' as never].submit()
                        return false
                      }}
                    >
                      {msg('doTryAnotherWay')}
                    </a>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      {(pageId === 'register.ftl' || pageId === 'register-user-profile.ftl') && (
        <div className="kcRegisterBanner">
          <span>{msgStr('registerBanner')}</span>
          <div style={{ display: 'flex', gap: '23px', alignItems: 'center', justifyContent: 'center', marginTop: '30px', marginBottom: '45px' }}>
            <img src={mintVernetztLogo} alt="mint-vernetzt" width="122" height="122" />
            <img src={mintCampusLogo} alt="mint-campus" width="120" height="120" />
          </div>
          <p className="font-normal text-lg">{msg('introduction')}</p>
        </div>
      )}
      <div className="kc-footer flex flex-col items-center mt-10 mb-10">
        <div className="flex items-center justify-center">
          <FooterSvg />
        </div>
        <p className="kc-footer-copyright pt-4 pb-9">{msgStr('footerCopyright')}</p>
        <div className="divide-x divide-gray-500 text-center">
          <a href="/datenschutz" target="_blank" className="px-1 text-black">
            {msg('footerMintIDPrivacyPolicyTitle')}
          </a>
          <a href="/datenschutzerklaerung" target="_blank" className="px-1 text-black">
            {msg('footerMintCampusPrivacyPolicyTitle')}
          </a>
          <a href="/privacy-policy-community-platform" target="_blank" className="px-1 text-black">
            {msg('footerMintVernetztPrivacyPolicyTitle')}
          </a>
          <a href="/nutzungsbedingungen" target="_blank" className="px-1 text-black">
            {msg('termsTitle')}
          </a>
          <a href="/faq" target="_blank" className="px-1 text-black">
            {msg('footerMintIDInfo')}
          </a>
          <a href="/impressum" target="_blank" className="px-1 text-black">
            {msg('imprintTitle')}
          </a>
        </div>
      </div>
    </div>
  )
}
