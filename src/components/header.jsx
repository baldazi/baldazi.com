import { useState } from "react";
import { NavLink, Link } from "react-router";
import { IoHome, IoMenu } from "react-icons/io5"
import { BsInfoCircleFill } from "react-icons/bs"
import { AiFillMail } from "react-icons/ai"
import { MdWork } from "react-icons/md"
import { TfiClose } from "react-icons/tfi"
import LangSelector from "./langSelector";
import { m } from "../paraglide/messages";
import ThemePicker from "./themePicker";

function Header() {
    const [menuToggle, setMenuToggle] = useState(false)
    const navClass = "tab"
    const activeNavClass = "tab tab-active border-b-1 border-gray-700 dark:border-gray-500"
    const hideMenu = "md:inline hidden"
    return (
        <header className="dark:text-gray-300 dark:hover:text-white text-gray-800 hover:text-black">
            <div className="flex justify-between items-center pt-2 px-5 lg:px-32 bg-emerald-700 dark:bg-emerald-900 text-lg">

                <div className="">
                    <Link to="/" className="" onClick={e => setMenuToggle(false)}>
                        <IoHome size={32} className="md:hidden" />
                        <span className="font-bold hidden md:inline">Baldazi</span>
                    </Link>
                </div>

                <div className="w-full md:w-auto md:flex">
                    
                    <div className="flex justify-end">
                        <button className="text-gray-300 md:hidden" onClick={e => setMenuToggle(!menuToggle)}>{menuToggle ? <TfiClose size={28} /> : <IoMenu size={40} />}</button>
                    </div>

                    <nav className={!menuToggle ? hideMenu : undefined}>
                        <ul className="tabs md:mx-0 tabs-bordered" role="tablist">
                            <li><NavLink role="tab" to="/" className={({ isActive }) => (isActive ? activeNavClass : navClass) + " hidden md:inline-flex"}><IoHome className="mr-1" />{m["navigation.home"]()}</NavLink></li>
                            <li><NavLink role="tab" to="/project" className={({ isActive }) => isActive ? activeNavClass : navClass}><MdWork className="mr-1" />{m["navigation.project"]()}</NavLink></li>
                            <li><NavLink role="tab" to="/about" className={({ isActive }) => isActive ? activeNavClass : navClass}><BsInfoCircleFill className="mr-1" />{m["navigation.about"]()}</NavLink></li>
                            <li><NavLink role="tab" to="/contact" className={({ isActive }) => isActive ? activeNavClass : navClass}><AiFillMail className="mr-1" />{m["navigation.contact"]()}</NavLink></li>
                        </ul>
                    </nav>
                </div>

                <div className="flex items-center gap-3">
                    <LangSelector />
                    <ThemePicker />
                </div>
            </div>
        </header>
    )
}

export default Header;