import { useEffect } from "react";
import classNames from "classnames";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

interface DarkModeToggleProps {
    menuType: "desktop" | "mobile";
    darkModeOn: boolean;
    onClick: () => void;
}

/**
 * This controlled component is dependent upon a parent which will control the dark mode state.
 * This solution is used to syncronize all other DarkModeToggles so they display the same icon
 * and have the same state at all times.
 * For handling of initial state and the onClick event, see the Navbar component.
 */
export function DarkModeToggle({
    menuType,
    darkModeOn,
    onClick,
}: DarkModeToggleProps) {
    useEffect(() => {
        // darkModeOn may initially be undefined. If so, don't update the DOM.
        if (!(typeof darkModeOn === "boolean")) return;

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
        <button className={btnClass} onClick={onClick}>
            {darkModeOn ? <SunIcon /> : <MoonIcon />}
        </button>
    );
}
