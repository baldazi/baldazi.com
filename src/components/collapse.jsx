import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Collapse({children, title, showed}){
    const [ishide, setIshide] = useState(!showed)
    return (
        <div className="border border-teal-600 md:w-2/3 rounded">
            <div>
                <button className="w-full cursor-pointer text-xl p-3 bg-teal-600/20 flex justify-between px-5" onClick={() => setIshide(!ishide)}>
                    <span>{title}</span>
                    {ishide?<FaChevronDown />:<FaChevronUp />}
                </button>
                <div className={ishide?"hidden":undefined}>
                    {children}
                </div>
            </div>
        </div>
    )
}