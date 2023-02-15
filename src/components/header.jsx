import React, {useState} from "react";
import {NavLink, Link} from "react-router-dom";
import {IoHome, IoMenu} from "react-icons/io5"
import {BsInfoCircleFill} from "react-icons/bs"
import {AiFillMail} from "react-icons/ai"
import {MdWork} from "react-icons/md"
import {TfiClose} from "react-icons/tfi"

function Header(){
    const [menuToggle, setMenuToggle] = useState(false)
    const navClass = "tab md:tab-bordered"
    const activeNavClass = "tab md:tab-bordered tab-active"
    const hideMenu = "md:inline hidden"
    return (
        <header>
            <div className="flex md:justify-between content-between md:content-end pt-2 px-5 lg:px-32  bg-emerald-900 text-lg">
                    <div className="">
                         <Link to="/" className="text-gray-300 hover:text-white" onClick={e =>setMenuToggle(false)}>
                            <IoHome size={32} className="md:hidden"/>
                            <span className="font-bold hidden md:inline">Baldazi</span>
                        </Link>
                    </div>

                    <div className="w-full md:w-auto md:block">
                        <div class="flex justify-end">
                            <button className="text-gray-300 md:hidden" onClick={e => setMenuToggle(!menuToggle)}>{menuToggle?<TfiClose size={28}/>:<IoMenu size={40}/>}</button>
                        </div>

                        <nav className={!menuToggle?hideMenu:undefined}>
                            <ul className="md:tabs md:mx-0">
                                <li className="hidden md:inline"><NavLink to="/" className={({isActive})=>isActive?activeNavClass:navClass}><IoHome className="mr-1"/>Accueil</NavLink></li> 
                                <li className="text-center"><NavLink to="/project" className={({isActive})=>isActive?activeNavClass:navClass}><MdWork className="mr-1"/>Projets</NavLink></li> 
                                <li className="text-center"><NavLink to="/about" className={({isActive})=>isActive?activeNavClass:navClass}><BsInfoCircleFill className="mr-1"/>A propos</NavLink></li> 
                                <li className="text-center "><NavLink to="/contact" className={({isActive})=>isActive?activeNavClass:navClass}><AiFillMail className="mr-1"/>Contact</NavLink></li> 
                            </ul>
                        </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;