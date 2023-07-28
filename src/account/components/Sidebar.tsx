import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { clsx } from 'keycloakify/tools/clsx'
import { KcContext } from 'account/kcContext'
import { I18n } from 'account/i18n'

import mintCampusLogo from '../assets/MINT-Campus-Logo.png'
import mintVernetztLogo from '../assets/Mintvernetzt-Logo.png'

type SidebarProps = {
  active: string
  i18n: I18n
  kcContext: KcContext
  onClose: () => void
  open: boolean
}
export default function Sidebar(props: SidebarProps) {
  const { active, i18n, kcContext, onClose, open } = props

  const { url, features, realm } = kcContext

  const { msg } = i18n

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button type="button" className="-m-2.5 p-2.5" onClick={onClose}>
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                  <div className="flex h-16 shrink-0 items-center space-x-2">
                    <img className="h-8 w-auto" src={mintCampusLogo} alt="MINT Campus" />
                    <img className="h-8 w-auto" src={mintVernetztLogo} alt="MINT Vernetzt" />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul className="-mx-2 space-y-1">
                      <li
                        className={clsx(
                          active === 'account' ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                          'cursor-pointer group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                        )}
                      >
                        <a href={url.accountUrl}>{msg('account')}</a>
                      </li>
                      {features.passwordUpdateSupported && (
                        <li
                          className={clsx(
                            active === 'password' ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                            'cursor-pointer group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <a href={url.passwordUrl}>{msg('password')}</a>
                        </li>
                      )}
                      {/* <li
                        className={clsx(
                          active === 'totp' ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                          'cursor-pointer group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                        )}
                      >
                        <a href={url.totpUrl}>{msg('authenticator')}</a>
                      </li>
                      {features.identityFederation && (
                        <li
                          className={clsx(
                            active === 'social' ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                            'cursor-pointer group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <a href={url.socialUrl}>{msg('federatedIdentity')}</a>
                        </li>
                      )}
                      <li
                        className={clsx(
                          active === 'sessions' ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                          'cursor-pointer group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                        )}
                      >
                        <a href={url.sessionsUrl}>{msg('sessions')}</a>
                      </li>
                      <li
                        className={clsx(
                          active === 'applications' ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                          'cursor-pointer group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                        )}
                      >
                        <a href={url.applicationsUrl}>{msg('applications')}</a>
                      </li>
                      {features.log && (
                        <li
                          className={clsx(
                            active === 'log' ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                            'cursor-pointer group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <a href={url.logUrl}>{msg('log')}</a>
                        </li>
                      )}
                      {realm.userManagedAccessAllowed && features.authorization && (
                        <li
                          className={clsx(
                            active === 'authorization' ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                            'cursor-pointer group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <a href={url.resourceUrl}>{msg('myResources')}</a>
                        </li>
                      )} */}
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center justify-center space-x-3">
            <img className="h-12 w-auto" src={mintCampusLogo} alt="MINT Campus" />
            <img className="h-12 w-auto" src={mintVernetztLogo} alt="MINT Vernetzt" />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul className="-mx-2 space-y-1">
              <li>
                <a
                  href={url.accountUrl}
                  className={clsx(
                    active === 'account' ? 'bg-gray-50 text-primary hover:text-primary' : 'text-gray-700 hover:text-primary hover:bg-gray-50',
                    'cursor-pointer group flex gap-x-3 rounded-md p-2 text-base leading-6 font-semibold'
                  )}
                >
                  {msg('account')}
                </a>
              </li>
              {features.passwordUpdateSupported && (
                <li
                  className={clsx(
                    active === 'password' ? 'bg-gray-50 text-primary hover:text-primary' : 'text-gray-700 hover:text-primary hover:bg-gray-50',
                    'cursor-pointer group flex gap-x-3 rounded-md p-2 text-base leading-6 font-semibold'
                  )}
                >
                  <a href={url.passwordUrl}>{msg('password')}</a>
                </li>
              )}
              {/* <li
                className={clsx(
                  active === 'totp' ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                  'cursor-pointer group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                )}
              >
                <a href={url.totpUrl}>{msg('authenticator')}</a>
              </li>
              {features.identityFederation && (
                <li
                  className={clsx(
                    active === 'social' ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                    'cursor-pointer group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                  )}
                >
                  <a href={url.socialUrl}>{msg('federatedIdentity')}</a>
                </li>
              )}
              <li
                className={clsx(
                  active === 'sessions' ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                  'cursor-pointer group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                )}
              >
                <a href={url.sessionsUrl}>{msg('sessions')}</a>
              </li>
              <li
                className={clsx(
                  active === 'applications' ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                  'cursor-pointer group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                )}
              >
                <a href={url.applicationsUrl}>{msg('applications')}</a>
              </li>
              {features.log && (
                <li
                  className={clsx(
                    active === 'log' ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                    'cursor-pointer group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                  )}
                >
                  <a href={url.logUrl}>{msg('log')}</a>
                </li>
              )}
              {realm.userManagedAccessAllowed && features.authorization && (
                <li
                  className={clsx(
                    active === 'authorization' ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                    'cursor-pointer group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                  )}
                >
                  <a href={url.resourceUrl}>{msg('myResources')}</a>
                </li>
              )} */}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
