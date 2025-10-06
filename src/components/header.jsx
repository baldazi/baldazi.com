import {useState} from "react";
import {NavLink, Link} from "react-router";
import {IoHome, IoMenu} from "react-icons/io5"
import {BsInfoCircleFill} from "react-icons/bs"
import {AiFillMail} from "react-icons/ai"
import {MdWork} from "react-icons/md"
import {TfiClose} from "react-icons/tfi"
import LangSelector from "./langSelector";

function Header(){
    const [menuToggle, setMenuToggle] = useState(false)
    const navClass = "tab"
    const activeNavClass = "tab tab-active border-b-1  border-gray-300"
    const hideMenu = "md:inline hidden"
    return (
        <header>
            <div className="flex md:justify-between justify-between items-center pt-2 px-5 lg:px-32  bg-emerald-900 text-lg">
                    <div className="">
                         <Link to="/" className="text-gray-300 hover:text-white" onClick={e =>setMenuToggle(false)}>
                            <IoHome size={32} className="md:hidden"/>
                            <span className="font-bold hidden md:inline">Baldazi</span>
                        </Link>
                    </div>

                    <div className="w-full md:w-auto md:flex">
                        <div className="flex justify-end">
                            <button className="text-gray-300 md:hidden" onClick={e => setMenuToggle(!menuToggle)}>{menuToggle?<TfiClose size={28}/>:<IoMenu size={40}/>}</button>
                        </div>

                        <nav className={!menuToggle?hideMenu:undefined}>
                            <div className="tabs md:mx-0 tabs-bordered" role="tablist">
                                <NavLink role="tab" to="/" className={({isActive})=>(isActive?activeNavClass:navClass)+" hidden md:inline-flex"}><IoHome className="mr-1"/>Home</NavLink>
                                <NavLink role="tab" to="/project" className={({isActive})=>isActive?activeNavClass:navClass}><MdWork className="mr-1"/>Project</NavLink>
                                <NavLink role="tab" to="/about" className={({isActive})=>isActive?activeNavClass:navClass}><BsInfoCircleFill className="mr-1"/>About</NavLink>
                                <NavLink role="tab" to="/contact" className={({isActive})=>isActive?activeNavClass:navClass}><AiFillMail className="mr-1"/>Contact</NavLink>
                            </div>
                        </nav>
                </div>

                        <div className="flex items-center">
                            <LangSelector/>
                        </div>
            </div>
        </header>
    )
}

export default Header;