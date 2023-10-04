import { HashLink } from "react-router-hash-link";

import config from "@root/config.json";
import { useTranslation } from "react-i18next";

export function Footer() {
    const { t } = useTranslation();

    return (
        <>
            <footer className="flex h-[50vh] snap-end justify-around bg-gray-200 p-4 shadow-footer dark:bg-neutral-800">
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
