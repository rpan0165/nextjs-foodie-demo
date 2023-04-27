import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { RxHamburgerMenu, RxBell, RxCross1 } from 'react-icons/rx';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Link from 'next/link';


const navigation = [
  {
    name: 'Publications',
    href: '#',
    current: false,
    submenu: [
      { name: 'Publications', href: '#', current: false },
      { name: 'News', href: '#', current: false },
    ]
  },
  { name: 'Recipes', href: '/recipes', current: false },
  { name: 'Tips & Trends', href: '#', current: false },
  {
    name: 'Operations & Resources',
    href: '#',
    current: false,
    submenu: [
      { name: 'Operations', href: '#', current: false },
      { name: 'Resources', href: '#', current: false },
    ]},
  {
    name: 'Sysco Brands',
    href: '#',
    current: false,
    submenu: [
      { name: 'Sysco Shop', href: '#', current: false },
      { name: 'Sysco Studio', href: '#', current: false },
    ] },
  {
    name: 'Services',
    href: '#',
    current: false,
    submenu: [
      { name: 'Sysco Studio', href: '#', current: false },
      { name: 'Sysco Shop', href: '#', current: false },
    ] },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MainNav() {
  return (
    <Disclosure as="nav" className="bg-[#F7F9FB]">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-12 items-center justify-between">
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
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <ul role="list" className="flex space-x-4">
                    {navigation.map((item) => (
                      <Menu as="li"
                        key={item.name}
                      >
                      
                          <Menu.Button
                            as="a"
                            href={item.href}
                            className={classNames(
                              item.current ? 'bg-[#D9EEF9] text-[#008CD2]' : 'text-[#2A2F33] hover:bg-[#D9EEF9] hover:text-[#008CD2]',
                              'rounded-md px-3 py-2 text-sm font-medium flex'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                    
                          {item.name}
                          {item.submenu ? <RiArrowDropDownLine className="text-2xl cursor-pointer text-[#3EAFE8]" /> : null}
                        </Menu.Button>    
                        {item.submenu && 
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                              <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 focus:outline-none">
                                {item.submenu.map((submenu_item) => (
                                  <Menu.Item as="li" key={submenu_item.key}>
                                    {({ active }) => (
                                      <a
                                        href={submenu_item.href}
                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 hover:text-gray-600')}
                                      >
                                        {submenu_item.name}
                                      </a>
                                    )}
                                  </Menu.Item>
                                ))}
                              </Menu.Items>
                          </Transition>
                        }
                      </Menu>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-[#D9EEF9] text-[#008CD2]' : 'text-[#2A2F33] hover:bg-[#D9EEF9] hover:text-[#008CD2]',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
