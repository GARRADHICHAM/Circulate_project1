
import Icons from '../Icons'
import Link from 'next/link';
import dynamic from "next/dynamic";



const style = {
  header: 'fixed inset-0 w-full z-50 flex flex-col h-16 bg-[black] border',
  wrapper: 'flex justify-between    bg-black items-center  h-full border-[#343536] pr-4 lg:ml-2',
  leftHeader: 'flex  items-center ',
  rightHeader: 'flex items-center ',
  profileImageContainer:
    'flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full relative',
  profileImage: 'object-contain',
  logo: 'hidden lg:flex h-10 w-15 items-center ',
}

const Header = () => {


  return (

    <div classNameNameName="">
      <nav classNameNameName="bg-gray-800">
        <div classNameNameName="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div classNameNameName="flex h-16 items-center justify-between">
            <div classNameNameName="flex items-center">
              <div classNameName="flex-shrink-0">
                <img classNameName="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/>
              </div>
              <div classNameName="hidden md:block">
                <div classNameName="ml-10 flex items-baseline space-x-4">
                  <a href="#" classNameName="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>
                  <a href="#" classNameName="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
                  <a href="#" classNameName="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
                  <a href="#" classNameName="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>
                  <a href="#" classNameName="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Reports</a>
                </div>
              </div>
            </div>
            <div classNameName="hidden md:block">
              <div classNameName="ml-4 flex items-center md:ml-6">
                <button type="button" classNameName="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span classNameName="absolute -inset-1.5"></span>
                  <span classNameName="sr-only">View notifications</span>
                  <svg classNameName="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                </button>

             
                <div classNameName="relative ml-3">
                  <div>
                    <button type="button" classNameName="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                      <span classNameName="absolute -inset-1.5"></span>
                      <span classNameName="sr-only">Open user menu</span>
                      <img classNameName="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </button>
                  </div>

                 
                  <div classNameName="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                 
                    <a href="#" classNameName="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                    <a href="#" classNameName="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                    <a href="#" classNameName="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                  </div>
                </div>
              </div>
            </div>
            <div classNameName="-mr-2 flex md:hidden">
             
              <button type="button" classNameName="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
                <span classNameName="absolute -inset-0.5"></span>
                <span classNameName="sr-only">Open main menu</span>
          
                <svg classNameName="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
           
                <svg classNameName="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

      
        
      </nav>

     
    </div>

  )
}


export default dynamic(() => Promise.resolve(Header), { ssr: false })

