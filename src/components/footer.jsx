import React from 'react';
import {BsInstagram, BsTwitter, BsGithub, BsLinkedin} from 'react-icons/bs';
function Footer() {
    return (
        <footer className="bg-emerald-900 pb-5">
        <div className="flex justify-around gap-2 p-5 content-end">
            <ul className="flex md:gap-4 gap-3 content-center">
                <li className="hover:text-white hover:scale-110"><a href="#insta"><BsInstagram size={24}/></a></li>
                <li className="hover:text-white hover:scale-110"><a href="#twitter"><BsTwitter size={24}/></a></li>
                <li className="hover:text-white hover:scale-110"><a href="https://www.linkedin.com/in/baldazi/" target="_blank" rel="noreferrer"><BsLinkedin size={24}/></a></li>
                <li className="hover:text-white hover:scale-110"><a href="https://github.com/baldazi" target="_blank" rel="noreferrer"><BsGithub size={24}/></a></li>
            </ul>
        </div>
        <p className="text-center text-gray-100 font-medium ">&copy; baldazi.com 2023</p>
      </footer>
    );
}

export default Footer;