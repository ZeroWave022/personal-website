import { useTranslation } from "react-i18next";
import { Menu } from "@headlessui/react";

import config from "@root/config.json";
import classNames from "classnames";

export function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const genBtnClass = (active: boolean, lngSelected: boolean) => {
        return classNames({
            "bg-slate-200 dark:bg-neutral-800": active,
            "font-bold text-emerald-500 dark:text-emerald-400": lngSelected
        });
    };

    return (
    <Menu as="div" className="relative block">
        <Menu.Button className="p-1 bg-slate-200 shadow-sm dark:bg-neutral-700 rounded-md">Languages</Menu.Button>
        
        <Menu.Items className="flex flex-col gap-2 absolute shadow-md p-2.5 my-1 top-full left-1/2 -translate-x-1/2 bg-slate-100 dark:bg-neutral-700 rounded-md z-10">
            {/* Iterate over all entries of languages and add buttons with dynamic styling */}
            {Object.entries(config.languages).map(([symbol, langInfo]) => (
                <Menu.Item key={symbol}>
                    {({ active }) => (
                        <button
                            className={`${genBtnClass(active, i18n.resolvedLanguage == symbol)} rounded-md p-1`}
                            onClick={() => void i18n.changeLanguage(symbol)}
                            type="submit"
                        >
                            {langInfo.nativeName}
                        </button>
                    )}
                </Menu.Item>
            ))}
        </Menu.Items>
    </Menu>
    )
}
