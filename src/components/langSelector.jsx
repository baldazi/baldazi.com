import { useState } from "react";
import { setLocale, locales, getLocale } from "../paraglide/runtime.js";

export default function LangSelector(){
    const [lang, SetLang] = useState(getLocale())
    return (
        <div className="">
            <select value={lang} className="select bg-transparent shadow-none border-0 !outline-none !rounded-none cursor-pointer" onChange={e => {
            SetLang(e.target.value);
            setLocale(e.target.value);
            console.log(e.value.target.value);
        }}>
            {
                locales.map(lg => (
                    <option value={lg} key={lg}>{lg.toUpperCase()}</option>
                ))
            }
        </select>
        </div>
    )
}