import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"


const Nav = () => {

    return (
        <header className="bg-slate-100 sticky top-0 z-30 w-full shadow-sm border">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8 sticky top-0"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <div className="-m-1.5 p-1">
                        <span className="sr-only">Your Company</span>
                        <img
                            className="h-16 w-20"
                            src={logo}
                            alt=""
                        />
                    </div>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">

                    <Link to="/">
                        <div className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            Blog
                        </div>
                    </Link>
                    <Link to="/addBlog">
                        <div className="text-sm font-semibold leading-6 text-gray-900">
                            Add Blog
                        </div>
                    </Link>

                    <Link to="/contact">
                        <div className="text-sm font-semibold leading-6 text-gray-900">
                            Contact
                        </div>
                    </Link>


                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">

                </div>
            </nav>
        </header>

    )
}

export default Nav