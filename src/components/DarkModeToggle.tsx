import { useState, useEffect } from "react";
import classNames from "classnames";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

interface DarkModeToggleProps {
    menuType: "desktop" | "mobile";
}

export function DarkModeToggle({ menuType }: DarkModeToggleProps) {
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

    const btnClass = classNames({
        "hidden lg:block lg:h-8 lg:w-8": menuType == "desktop",
        "block h-8 w-8": menuType == "mobile",
    });

    return (
        <button className={btnClass} onClick={toggle}>
            {darkModeOn ? <SunIcon /> : <MoonIcon />}
        </button>
    );
}
