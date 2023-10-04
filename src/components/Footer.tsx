import { HashLink } from "react-router-hash-link";

import config from "@root/config.json";
import { useTranslation } from "react-i18next";

export function Footer() {
    const { t } = useTranslation();

    return (
        <>
            <footer className="h-[50vh] bg-gray-200 dark:bg-neutral-800 shadow-footer p-4 flex justify-around snap-end">
                <div>
                    <h1>{t("footer.title")}</h1>
                    <ul className="flex flex-col items-center gap-2.5 py-2">
                        {config.navigation.map((item) => (
                            <li key={item.id}>
                                <HashLink
                                    to={item.href}
                                    elementId={item.scrollTo}
                                >
                                    {t(`nav.${item.id}`)}
                                </HashLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </footer>
        </>
    );
}
