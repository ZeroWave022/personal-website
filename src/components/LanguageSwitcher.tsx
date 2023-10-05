import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { Menu, Transition } from "@headlessui/react";

import config from "@root/config.json";
import classNames from "classnames";

export function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const genBtnClass = (active: boolean, lngSelected: boolean) => {
        return classNames({
            "bg-slate-200 dark:bg-neutral-800": active,
            "font-bold text-emerald-500 dark:text-emerald-400": lngSelected,
        });
    };

    return (
        <Menu as="div" className="relative block">
            <Menu.Button className="rounded-md bg-slate-200 p-1 shadow-sm dark:bg-neutral-700">
                Languages
            </Menu.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Menu.Items className="absolute left-1/2 top-full z-10 my-1 flex -translate-x-1/2 flex-col gap-2 rounded-md bg-slate-100 p-2.5 shadow-md dark:bg-neutral-700">
                    {/* Iterate over all entries of languages and add buttons with dynamic styling */}
                    {Object.entries(config.languages).map(([symbol, langInfo]) => (
                        <Menu.Item key={symbol}>
                            {({ active }) => (
                                <button
                                    className={`${genBtnClass(
                                        active,
                                        i18n.resolvedLanguage == symbol,
                                    )} rounded-md p-1`}
                                    onClick={() => void i18n.changeLanguage(symbol)}
                                    type="submit"
                                >
                                    {langInfo.nativeName}
                                </button>
                            )}
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
