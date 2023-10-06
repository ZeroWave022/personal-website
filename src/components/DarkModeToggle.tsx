import { useState, useEffect } from "react";
import classNames from "classnames";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

interface DarkModeToggleProps {
    menuType: "desktop" | "mobile";
}

export function DarkModeToggle({ menuType }: DarkModeToggleProps) {
    const darkModePreferred = window.matchMedia(
        "(prefers-color-scheme: dark)",
    ).matches;

    const customPreference = localStorage.getItem("darkModeOn");

    // Set the state to the manually selected preference, otherwise use the media query
    const [darkModeOn, setDarkMode] = useState(
        !customPreference ? darkModePreferred : customPreference == "true",
    );

    useEffect(() => {
        if (darkModeOn) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("darkModeOn", "true");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("darkModeOn", "false");
        }
    }, [darkModeOn]);

    const btnClass = classNames({
        "hidden lg:block lg:h-8 lg:w-8": menuType == "desktop",
        "block h-8 w-8": menuType == "mobile",
    });

    return (
        <button className={btnClass} onClick={() => setDarkMode(!darkModeOn)}>
            {darkModeOn ? <SunIcon /> : <MoonIcon />}
        </button>
    );
}
