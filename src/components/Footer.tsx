import { HashLink } from "react-router-hash-link";

import config from "@root/config.json";

export function Footer() {
    return (
        <>
            <footer className="h-[50vh] bg-gray-200 dark:bg-neutral-800 shadow-footer p-4 flex justify-around snap-end">
                <div>
                    <h1>My portfolio</h1>
                    <ul className="flex flex-col items-center gap-2.5 py-2">
                        {config.navigation.map((item) => (
                            <li key={item.name}>
                                <HashLink
                                    to={item.href}
                                    elementId={item.scrollTo}
                                >
                                    {item.name}
                                </HashLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </footer>
        </>
    );
}
