import { useState } from "react";
import { NavLink, Link } from "react-router";
import { IoClose, IoHome, IoMenu } from "react-icons/io5"
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
    return (
        <header className="dark:text-gray-300 dark:hover:text-white text-gray-800 hover:text-black">
            <div className="flex justify-between items-center pt-2 pl-5 lg:px-32 bg-emerald-700 dark:bg-emerald-900 text-lg">

                <div className="">
                    <Link to="/" className="" onClick={e => setMenuToggle(false)}>
                        <IoHome size={32} className="md:hidden" />
                        <span className="font-bold hidden md:inline">Baldazi</span>
                    </Link>
                </div>

                <div className="lg:hidden relative w-1/2 text-right">
                    <button className="text-gray-300 h-10 pr-5" onClick={e => setMenuToggle(!menuToggle)}>{menuToggle ? <IoClose size={32} /> : <IoMenu size={32} />}</button>
                    <div className={`absolute backdrop-blur w-screen right-0 h-screen ml-auto ${!menuToggle ? "hidden" : undefined} z-20`}>
                        <nav className="flex flex-col gap-10 items-center bg-emerald-700/70 dark:bg-emerald-900/70">
                            <ul className="text-center flex flex-col gap-3 mt-2" role="tablist">
                                <li>
                                    <NavLink role="tab" to="/project"
                                        onClick={e => setMenuToggle(false)}
                                        className={({ isActive }) => "flex items-center gap-2 " + (isActive ? "text-white underline" : "")}
                                    >
                                        <MdWork className="mr-1" /><span>{m["navigation.project"]()}</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink role="tab" to="/about"
                                        onClick={e => setMenuToggle(false)}
                                        className={({ isActive }) => `flex items-center gap-2 ${isActive ? "text-white underline" : ""}`}
                                    >
                                        <BsInfoCircleFill className="mr-1" /><span>{m["navigation.about"]()}</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink role="tab" to="/contact"
                                        onClick={e => setMenuToggle(false)}
                                        className={({ isActive }) => `flex items-center gap-2 ${isActive ? "text-white underline" : ""}`}
                                    >
                                        <AiFillMail className="mr-1" /><span>{m["navigation.contact"]()}</span>
                                    </NavLink>
                                </li>
                            </ul>

                            <div className="flex items-center gap-3">
                                <LangSelector />
                                <ThemePicker />
                            </div>
                        </nav>
                    </div>
                </div>

                {/* <nav className={!menuToggle ? hideMenu : undefined}> */}
                <nav className="hidden lg:block">
                    <ul className="tabs tabs-bordered" role="tablist">
                        <li><NavLink role="tab" to="/" className={({ isActive }) => (isActive ? activeNavClass : navClass) + " hidden md:inline-flex"}><IoHome className="mr-1" />{m["navigation.home"]()}</NavLink></li>
                        <li><NavLink role="tab" to="/project" className={({ isActive }) => isActive ? activeNavClass : navClass}><MdWork className="mr-1" />{m["navigation.project"]()}</NavLink></li>
                        <li><NavLink role="tab" to="/about" className={({ isActive }) => isActive ? activeNavClass : navClass}><BsInfoCircleFill className="mr-1" />{m["navigation.about"]()}</NavLink></li>
                        <li><NavLink role="tab" to="/contact" className={({ isActive }) => isActive ? activeNavClass : navClass}><AiFillMail className="mr-1" />{m["navigation.contact"]()}</NavLink></li>
                    </ul>
                </nav>

                <div className="hidden lg:flex items-center gap-3">
                    <LangSelector />
                    <ThemePicker />
                </div>
            </div>
        </header>
    )
}

export default Header;