import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";

import config from "@root/config.json";

import logo from "@assets/logo.png";

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <nav className="flex bg-slate-100 shadow-md dark:bg-neutral-800 items-center justify-between px-6 py-1 lg:px-8">
                {/* Navbar logo */}
                <div className="flex">
                    <HashLink to="/" elementId="top" className="-m-1.5 p-1.5">
                        <span className="sr-only">Logo</span>
                        <img
                            className="h-12 w-auto invert dark:invert-0"
                            src={logo}
                            alt="Logo"
                        />
                    </HashLink>
                </div>
                {/* Mobile menu icon */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 p-2 text-black dark:text-slate-200"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open menu</span>
                        <Bars3Icon className="h-8 w-8" aria-hidden="true" />
                    </button>
                </div>
                {/* Main links */}
                <div className="hidden lg:flex lg:gap-x-12">
                    {config.navigation.map((item) => (
                        <HashLink
                            key={item.name}
                            to={item.href}
                            elementId={item.scrollTo}
                            className="text-sm font-semibold text-gray-900 dark:text-slate-100"
                        >
                            {item.name}
                        </HashLink>
                    ))}
                </div>
                <DarkModeToggle />
                <Dialog
                    as="div"
                    className="lg:hidden"
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}
                >
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto border-l-4 border-emerald-500 bg-slate-100 px-6 py-1 dark:bg-neutral-900 sm:max-w-sm">
                        <div className="flex justify-between">
                            <HashLink to="/" elementId="top" className="-m-1.5 p-1.5">
                                <span className="sr-only">Logo</span>
                                <img
                                    className="h-12 w-auto invert dark:invert-0"
                                    src={logo}
                                    alt="Logo"
                                />
                            </HashLink>
                            <button
                                type="button"
                                className="-m-2.5 p-2 text-gray-700 dark:text-slate-200"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon
                                    className="h-8 w-8"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6">
                                <div className="space-y-2 py-6">
                                    {config.navigation.map((item) => (
                                        <HashLink
                                            key={item.name}
                                            to={item.href}
                                            elementId={item.scrollTo}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-slate-200 dark:text-slate-200 dark:hover:bg-neutral-800"
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                        >
                                            {item.name}
                                        </HashLink>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </nav>
        </>
    );
}

function DarkModeToggle() {
    const [darkModeOn, setDarkMode] = useState(true);

    useEffect(() => {
        const darkModePreferred = window.matchMedia(
            "(prefers-color-scheme: dark)",
        ).matches;

        if (darkModePreferred) {
            document.documentElement.classList.add("dark");
            setDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setDarkMode(false);
        }
    }, []);

    const toggle = () => {
        if (darkModeOn) {
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
        }

        setDarkMode(!darkModeOn);
    };

    return (
        <button className="hidden lg:block lg:h-8 lg:w-8" onClick={toggle}>
            {darkModeOn ? <SunIcon className="invert" /> : <MoonIcon />}
        </button>
    );
}
