'use client'
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { RiBookmarkLine, RiArrowDropDownLine } from 'react-icons/ri';
import { RxHamburgerMenu, RxBell, RxCross1 } from 'react-icons/rx';
import SearchBar from './SearchBar';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-[#FCFDFE]">
      {({ open }) => (
        <>
          <div className="mx-auto px-6 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <RxCross1 className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <RxHamburgerMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-initial items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-12 w-auto lg:hidden"
                    src="https://foodie.sysco.com/wp-content/themes/sysco-2022/assets/static/img/Sysco_Foodie_Web_Logo.svg"
                    alt="Sysco Foodie"
                    height="40"
                  />
                  <img
                    className="hidden h-12 w-auto lg:block"
                    src="https://foodie.sysco.com/wp-content/themes/sysco-2022/assets/static/img/Sysco_Foodie_Web_Logo.svg"
                    alt="Sysco Foodie"
                    height="40"
                  />
                </div>
              </div>
              <div className="flex flex-1 items-stretch justify-start pl-5">
                <SearchBar className="w-50" />
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3 text-[#1B4F72] hover:text-sky-600">
                  <div>
                    <Menu.Button className="bg-[#D9EEF9] flex p-2 mx-2 rounded-lg">
                      <span className="sr-only">Open user menu</span>
                      Hi, Anna
                      <RiArrowDropDownLine className="text-2xl cursor-pointer" />
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
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 hover:text-gray-600')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 hover:text-gray-600')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 hover:text-gray-600')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <button
                  type="button"
                  className="rounded-full bg-[#D9EEF9] p-1 mr-2 text-[#1B4F72] hover:text-sky-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">Favorites</span>
                  <RiBookmarkLine className="h-8 w-8 p-1.5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="rounded-full bg-[#D9EEF9] p-1 text-[#1B4F72] hover:text-sky-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">Favorites</span>
                  <HiOutlineShoppingCart className="h-8 w-8 p-1.5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
