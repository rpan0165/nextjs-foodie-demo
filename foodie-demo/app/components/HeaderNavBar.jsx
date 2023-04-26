'use client'
import { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { RiBookmarkLine, RiArrowDropDownLine } from 'react-icons/ri';
import { RxHamburgerMenu, RxBell, RxCross1 } from 'react-icons/rx';
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import SearchBar from './SearchBar';
import MainNav from './MainNav';
import CartItem from './CartItem';

import { useSelector, useDispatch } from 'react-redux'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function HeaderNavBar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const handleCartToggle = () => {
      setIsCartOpen(!isCartOpen);
      console.log(isCartOpen)
  };

  const itemsInCart = useSelector((state) => state.cart.itemsInCart)
  
  return (
    <Disclosure as="nav" className="bg-[#FCFDFE]">
      {({ open }) => (
        <>
          {/* cart */}
          <div className={`cart-popup ${isCartOpen ? "open" : ""}`}>
              <div className='flex flex-row justify-between py-2'>
                  <h3 className='mt-2 ml-1 pt-2 pb-3 font-bold text-xl'>My Basket</h3>
                  <span className=''>
                      {/* <Image className="close-button" onClick={handleCartToggle} src="/close.png" alt="still searching" width={30} height={30} /> */}
                      <GrClose onClick={handleCartToggle} className='mt-3 mr-3 text-2xl text-sky-600 hover:text-sky-500' />
                  </span>
              </div>
              <div className="cart-items">
                  {itemsInCart.map(product => (
                      <CartItem props={product} />
                  ))}
              </div>
              <div className='mx-auto text-center mt-3  align-bottom'>
                  <button className='border border-2 rounded-3xl py-2 px-4 text-sky-600 font-bold'>Review Shopping List</button>
                  <p>or</p>
                  <button className='border border-2 rounded-3xl py-2 px-4 bg-sky-600 text-white font-bold'>Proceed to Sysco Shop</button>
              </div>
          </div>
          <div className="mx-auto px-6 sm:px-6 lg:px-8 flex-column sm:flex-row">
            <div className="relative flex h-24 sm:h-16 items-center">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hidden hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <RxCross1 className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <RxHamburgerMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-initial items-center justify-center  sm:ml-0 sm:items-stretch sm:justify-start">
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
              <div className="flex flex-1 items-stretch justify-start sm:pl-5">
                <SearchBar className="w-50" />
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 hidden sm:flex sm:static sm:inset-auto sm:ml-6 sm:pr-0">
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
                  <span className="sr-only">Cart</span>
                  <HiOutlineShoppingCart onClick={handleCartToggle} className="h-8 w-8 p-1.5" aria-hidden="true" />
                  <button href="#" onClick={handleCartToggle} className="absolute rounded-full p-1 w-6 h-6 bg-red-600 -right-2 top-1 font-bold text-white text-xs">
                    {itemsInCart.length}
                  </button>
                </button>
              </div>
            </div>
          </div>
          <MainNav />
          <Disclosure.Panel className="sm:hidden">
            
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
