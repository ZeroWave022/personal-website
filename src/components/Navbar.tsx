import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import config from "@root/config.json";
import { LanguageSwitcher } from "@components/LanguageSwitcher.tsx";
import { DarkModeToggle } from "@components/DarkModeToggle";

import logo from "@assets/logo.png";

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();

    return (
        <>
            <nav className="text-md flex items-center justify-between bg-slate-100 px-6 py-1 font-semibold text-gray-900 shadow-md dark:bg-neutral-800 dark:text-slate-100 lg:px-8">
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
                <div className="hidden lg:flex lg:gap-x-6">
                    {config.navigation.map((item) => (
                        <HashLink
                            key={item.id}
                            to={item.href}
                            elementId={item.scrollTo}
                            className="p-2.5"
                        >
                            {t(`nav.${item.id}`)}
                        </HashLink>
                    ))}
                </div>
                <div className="hidden items-center gap-5 lg:flex">
                    <LanguageSwitcher />
                    <DarkModeToggle menuType="desktop" />
                </div>
                <Dialog
                    as="div"
                    className="dark:text-slate-100 lg:hidden"
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}
                >
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto border-l-4 border-emerald-500 bg-slate-100 px-6 py-1 dark:bg-neutral-900 sm:max-w-sm">
                        <div className="flex justify-between">
                            <HashLink
                                to="/"
                                elementId="top"
                                className="-m-1.5 p-1.5"
                            >
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
                        <div className="mt-6 flex flex-col divide-y">
                            <div className="space-y-2 pb-2">
                                {config.navigation.map((item) => (
                                    <HashLink
                                        key={item.id}
                                        to={item.href}
                                        elementId={item.scrollTo}
                                        className="block rounded-lg py-2 pl-2 font-semibold text-gray-900 hover:bg-slate-200 dark:text-slate-200 dark:hover:bg-neutral-800"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {t(`nav.${item.id}`)}
                                    </HashLink>
                                ))}
                            </div>
                            <div className="space-y-2 pt-2">
                                <span className="block text-center text-lg font-bold">
                                    Languages
                                </span>
                                {Object.entries(config.languages).map(
                                    ([symbol, langInfo]) => (
                                        <button
                                            key={symbol}
                                            className={`${
                                                i18n.resolvedLanguage == symbol
                                                    ? "font-bold text-emerald-500 dark:text-emerald-400"
                                                    : ""
                                            } block w-full rounded-lg py-2 pl-2 text-left font-semibold hover:bg-slate-200 dark:hover:bg-neutral-800`}
                                            onClick={() => {
                                                setMobileMenuOpen(false);
                                                void i18n.changeLanguage(
                                                    symbol,
                                                );
                                            }}
                                        >
                                            {langInfo.nativeName}
                                        </button>
                                    ),
                                )}
                            </div>
                        </div>
                        <div className="absolute bottom-6 left-6">
                            <DarkModeToggle menuType="mobile" />
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </nav>
        </>
    );
}
