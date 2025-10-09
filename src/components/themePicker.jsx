import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

export default function ThemePicker() {
    const [isdark, setIsDark] = useState(
        JSON.parse(localStorage.isdark || (!("isdark" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches))
    );

    useEffect(() => {
        localStorage.isdark = JSON.stringify(isdark);
        document.documentElement.setAttribute("data-theme", isdark? "dark": "light");
    }, [isdark])

    return (
        <label className="swap swap-rotate">
            <input
                type="checkbox"
                class="theme-controller"
                checked = {isdark}
                onChange={() => setIsDark(!isdark)}
            />
            <MdSunny className="swap-off fill-current" />
            <FaMoon className="swap-on fill-current" />
        </label>
    )
}