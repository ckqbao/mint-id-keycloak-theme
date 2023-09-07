import { Fragment, useMemo } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { clsx } from 'keycloakify/tools/clsx'
import type { KcContext } from '../kcContext'
import { I18n } from 'keycloakify/account/i18n'
import { GlobeAltIcon, UserCircleIcon } from '@heroicons/react/24/outline'

type HeaderProps = {
  i18n: I18n
  kcContext: KcContext
}

export default function Header(props: HeaderProps) {
  const { i18n, kcContext } = props

  const { msg, changeLocale, labelBySupportedLanguageTag, currentLanguageTag } = i18n

  const { locale, url } = kcContext

  const logoutUrl = useMemo(() => {
    const { origin, pathname, searchParams } = new URL(url.getLogoutUrl())
    let logoutUrl = origin + pathname
    let logoutUrlSearchParams = new URLSearchParams()
    searchParams.forEach((value, key) => {
      if (key.endsWith('id_token_hint')) logoutUrlSearchParams.append('id_token_hint', value)
      else logoutUrlSearchParams.append(key, value)
    })
    logoutUrl += `?${logoutUrlSearchParams.toString()}`
    return logoutUrl
  }, [url])

  return (
    <Disclosure as="nav" className="w-full">
      {({ open }) => (
        <>
          <div className="mx-auto">
            <div className="flex h-16 items-center justify-end">
              <div className="sm:ml-6 sm:block">
                <div className="flex items-center space-x-1">
                  {/* Languages dropdown */}
                  <Menu as="div" className="relative z-10">
                    <div>
                      <Menu.Button className="ds-btn ds-btn-circle ds-btn-ghost">
                        <span className="sr-only">Open languages menu</span>
                        <GlobeAltIcon className="h-8 w-8 text-[#252131]" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {locale?.supported.map(({ languageTag }) => (
                          <Menu.Item key={languageTag}>
                            {({ active }) => (
                              <button
                                className={clsx(active ? 'bg-gray-100' : '', 'w-full block px-4 py-2 text-left text-sm text-gray-700', { 'font-bold': currentLanguageTag === languageTag})}
                                onClick={() => changeLocale(languageTag)}
                              >
                                {labelBySupportedLanguageTag[languageTag]}
                              </button>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative z-10">
                    <div>
                      <Menu.Button className="ds-btn ds-btn-circle ds-btn-ghost">
                        <span className="sr-only">Open user menu</span>
                        <UserCircleIcon className="h-8 w-8 text-[#252131]" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a href={logoutUrl} className={clsx(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 hover:text-gray-700')}>
                              {msg('doSignOut')}
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
