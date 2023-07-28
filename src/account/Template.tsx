// Copy pasted from: https://github.com/InseeFrLab/keycloakify/blob/main/src/login/Template.tsx

import { clsx } from 'keycloakify/tools/clsx'
import { usePrepareTemplate } from 'keycloakify/lib/usePrepareTemplate'
import type { TemplateProps } from 'keycloakify/account/TemplateProps'
import { useGetClassName } from 'keycloakify/account/lib/useGetClassName'
import type { KcContext } from './kcContext'
import type { I18n } from './i18n'
import { lazy, useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/20/solid'
import Sidebar from './components/Sidebar'

const Header = lazy(() => import('./components/Header'))

export default function Template(props: TemplateProps<KcContext, I18n>) {
  const { kcContext, i18n, doUseDefaultCss, active, classes, children } = props

  const { getClassName } = useGetClassName({ doUseDefaultCss, classes })

  const { url, message } = kcContext

  const { isReady } = usePrepareTemplate({
    doFetchDefaultThemeResources: doUseDefaultCss,
    url,
    // "stylesCommon": ["node_modules/patternfly/dist/css/patternfly.min.css", "node_modules/patternfly/dist/css/patternfly-additions.min.css"],
    styles: ['css/account.css'],
    htmlClassName: undefined,
    bodyClassName: clsx('admin-console', 'user', getClassName('kcBodyClass')),
  })

  const [sidebarOpen, setSidebarOpen] = useState(false)

  if (!isReady) {
    return null
  }

  return (
    <div>
      <Sidebar active={active} i18n={i18n} kcContext={kcContext} onClose={() => setSidebarOpen(false)} open={sidebarOpen} />
      <div className="lg:pl-72">
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <Header i18n={i18n} kcContext={kcContext} />
        </div>

        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            {message !== undefined && (
              <div className={clsx('rounded-md p-4 mb-5', { 'bg-green-50': message.type === 'success', 'bg-red-50': message.type === 'error' })}>
                <div className="flex">
                  <div className="flex-shrink-0">
                    {message.type === 'success' && <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />}
                    {message.type === 'error' && <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />}
                  </div>
                  <div className="ml-3">
                    <p className={clsx('text-sm font-medium', { 'text-green-800': message.type === 'success', 'text-red-800': message.type === 'error' })}>
                      {message.summary}
                    </p>
                  </div>
                </div>
              </div>
            )}
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
