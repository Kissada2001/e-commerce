import React, { useState, useEffect } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const DarkMode = () => {
    const [theme, setTheme] = useState(
        typeof window !== 'undefined' && localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const element = document.documentElement;
            localStorage.setItem("theme", theme);
            if (theme === "dark") {
                element.classList.add("dark");
                element.classList.remove("light");
            } else {
                element.classList.remove("dark");
                element.classList.add("light");
            }
        }
    }, [theme]);

    return (
        <>
            {theme === "dark" ? (
                <BiSolidSun
                    className="text-2xl cursor-pointer"
                    onClick={() => setTheme("light")}
                />
            ) : (
                <BiSolidMoon
                    className="text-2xl cursor-pointer"
                    onClick={() => setTheme("dark")}
                />
            )}
        </>
    );
};

export default DarkMode;
