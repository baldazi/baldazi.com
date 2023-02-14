import React from "react";
import {NavLink, Link} from "react-router-dom";
import {IoHome} from "react-icons/io5"
import {BsInfoCircleFill} from "react-icons/bs"
import {AiFillMail} from "react-icons/ai"
import {MdWork} from "react-icons/md"

function Header(){
    const navClass = "ds-tab ds-tab-bordered"
    const activeNavClass = "ds-tab ds-tab-bordered ds-tab-active"
    return (
        <header>
            <div className="flex justify-between content-center p-2 px-5 lg:px-32 lg:p-3.5 bg-emerald-900 text-lg">
                <div>
                    <Link to="/" className="text-white font-bold">
                        Baldazi
                    </Link>
                </div>

                <nav>
                    <ul className="ds-tabs">
                        <li><NavLink to="/" className={({isActive})=>isActive?activeNavClass:navClass}><IoHome className="mr-1"/>Accueil</NavLink></li> 
                        <li><NavLink to="/projects" className={({isActive})=>isActive?activeNavClass:navClass}><MdWork className="mr-1"/>Projets</NavLink></li> 
                        <li><NavLink to="/about" className={({isActive})=>isActive?activeNavClass:navClass}><BsInfoCircleFill className="mr-1"/>A propos</NavLink></li> 
                        <li><NavLink to="/contact" className={({isActive})=>isActive?activeNavClass:navClass}><AiFillMail className="mr-1"/>Contact</NavLink></li> 
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;