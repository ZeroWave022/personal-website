import { DarkModeToggle } from "../components/DarkModeToggle";

import logo from "@assets/logo.png";

export default function Loading() {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-center bg-slate-100 dark:bg-neutral-900 dark:text-slate-200">
                <div className="hidden">
                    <DarkModeToggle menuType="desktop" />
                </div>

                <img
                    src={logo}
                    alt="Logo"
                    className="h-16 w-16 invert dark:invert-0 md:h-32 md:w-32 lg:h-36 lg:w-36"
                />

                <div className="flex items-center gap-2">
                    {/* Icon source: https://github.com/astrit/css.gg */}
                    {/* prettier-ignore */}
                    <svg className="animate-spin text-green-600 dark:text-emerald-500 w-8 h-8 motion-reduce:hidden" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" />
                        <path d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" fill="currentColor" />
                    </svg>
                    <span className="text-lg font-light md:text-2xl lg:text-3xl">
                        Loading...
                    </span>
                </div>
            </main>
        </>
    );
}
