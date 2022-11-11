import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    BookmarkSquareIcon,
    CalendarIcon,
    LifebuoyIcon,
    ShieldCheckIcon,
    XMarkIcon,
    HomeIcon,
    ShoppingBagIcon,
    ScaleIcon,
    QuestionMarkCircleIcon


} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Outlet, Link } from "react-router-dom";

const solutions = [
    {
    name: 'Home',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: HomeIcon,
    },
    {
    name: 'Shopping',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: ShoppingBagIcon,
    },
    {
    name: 'Suze Guide',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ScaleIcon,
    },
    {
    name: 'About Me',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: QuestionMarkCircleIcon,
    },
]
const resources = [
    {
        name: 'Help Center',
        description: 'Get all of your questions answered in our forums or contact support.',
        href: '#',
        icon: LifebuoyIcon,
    },
    {
        name: 'Guides',
        description: 'Learn how to maximize our platform to get the most out of it.',
        href: '#',
        icon: BookmarkSquareIcon,
    },
    {
        name: 'Events',
        description: 'See what meet-ups and other events we might be planning near you.',
        href: '#',
        icon: CalendarIcon,
    },
    { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
    { id: 1, name: 'Boost your conversion rate', href: '#' },
    { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
    { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    return (
        <Popover className="relative bg-default-dark bg-opacity-0">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                    <a href="#">
                        <span className="sr-only">SubmitMusic</span>
                        <img
                        className="h-8 w-auto sm:h-10"
                        src="https://tailwindui.com/img/logos/mark.svg?color=color-primary&shade=600"
                        alt=""
                        />
                    </a>
                </div>
                <div className="-my-2 -mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-default-dark p-2 text-gray-400 hover:default-dark hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
                </div>
                <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                    <Link to={`/`}>
                        <a className="text-base font-medium text-white hover:text-white">
                            Home
                        </a>
                    </Link>
                    <a href="#" className="text-base font-medium text-white hover:text-white">
                        Shopping
                    </a>
                    <a href="#" className="text-base font-medium text-white hover:text-white">
                        Size Guide
                    </a>
                    <a href="#" className="text-base font-medium text-white hover:text-white">
                        About
                    </a>
                </Popover.Group>
                <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                <Link to={`/login`}>
                    <a href="#" 
                    className="border-1 border-slate-300 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-btn-primary px-4 py-2 text-base font-medium text-black shadow-sm hover:bg-yellow-500"
                    >
                        Sign in
                    </a>
                </Link>
                <Link to={`/login`}>
                    <a
                        href="#"
                        className="border-2 ml-8 border-slate-300 px-4 py-2 rounded-md whitespace-nowrap text-base font-medium text-white hover:text-white hover:border-slate-400"    
                    >
                        Login
                    </a>
                </Link>
                </div>
            </div>
            </div>

            <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            >
            <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
                <div className="divide-y-2 divide-gray-50 rounded-lg bg-default-dark shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6">
                    <div className="flex items-center justify-between">
                    <div>
                        <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=white"
                        alt="Your Company"
                        />
                    </div>
                    <div className="-mr-2">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-default-dark p-2 text-gray-400 hover:default-dark hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    </div>
                    <div className="mt-6">
                    <nav className="grid gap-y-8">
                        {solutions.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                        >
                            <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                            <span className="ml-3 text-base font-medium text-white">{item.name}</span>
                        </a>
                        ))}
                    </nav>
                    </div>
                </div>
                <div className="space-y-6 py-6 px-5">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <a href="#" className="text-base font-medium text-white hover:text-gray-700">
                        Pricing
                    </a>

                    <a href="#" className="text-base font-medium text-white hover:text-gray-700">
                        Docs
                    </a>
                    {resources.map((item) => (
                        <a
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-white hover:text-gray-700"
                        >
                        {item.name}
                        </a>
                    ))}
                    </div>
                    <div>
                    <a
                        href="#"
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-yellow-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-yellow-700"
                    >
                        Sign up
                    </a>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                        Existing customer?{' '}
                        <a href="#" className="text-indigo-600 hover:text-indigo-500">
                        Sign in
                        </a>
                    </p>
                    </div>
                </div>
                </div>
            </Popover.Panel>
            </Transition>
        </Popover>
    )
}