import React from 'react';
import { FaAsterisk } from 'react-icons/fa';
function About() {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
        <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow h-64 md:w-72 card bg-base-300 rounded-box place-items-center">"à venir"</div> 
            <div className="divider lg:divider-horizontal"><FaAsterisk/></div> 
            <div className="grid flex-grow h-64 md:w-72 card bg-base-300 rounded-box place-items-center">"en manque d'inspiration"</div>
            </div>
        </div>
        </div>
    );
}

export default About;