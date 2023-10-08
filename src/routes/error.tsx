import { useRouteError } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { DarkModeToggle } from "../components/DarkModeToggle";
import { LargeLink } from "../components/LargeLink";

export default function Error() {
    const { t } = useTranslation();
    const error = useRouteError() as { statusText?: string; message?: string };
    console.error(error);

    return (
        <>
            <div className="hidden">
                <DarkModeToggle menuType="desktop" />
            </div>

            <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-100 dark:bg-neutral-900 dark:text-slate-200">
                <h1>{t("error.header")}</h1>
                <div>
                    <h2>{t("error.subheader")}</h2>
                    <span className="block text-center text-xl font-light text-gray-500 dark:text-slate-300">
                        {error.statusText ?? error.message}
                    </span>
                </div>
                <LargeLink color="green-light" link="/" internal={true}>
                    {t("common.goBack")}
                </LargeLink>
            </main>
        </>
    );
}
