import React from 'react';
import {FiExternalLink} from 'react-icons/fi'
import { GiBoxingGloveSurprise } from "react-icons/gi";
import monCv from '../assets/cv.pdf'

function Home() {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
            <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hooray !</h1>
            <p className="pt-6 pb-2">
            Hello, I am <b>Aziz BALDE</b> and I am currently doing a master 1 in computer science at the 
            <a rel="noreferrer" href="https://ufr-st.univ-lehavre.fr/" target="_blank" className="link link-info block">university le havre normandie (ULHN)</a>
            My passion for IT has been reinforced by the belief that virtual media has significantly transformed the way we live, work and communicate,
            and I chose to pursue a career in IT to be an actor in this evolution.
            </p>
            <p className="pb-6 italic text-accent">
                    On this site, I will share the projects I work on in my free time,
                    as well as those I carry out as part of my studies.
            </p>
                {/* The button to open modal */}
                <label htmlFor="modal-cv" className="btn">Surprise <GiBoxingGloveSurprise /></label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="modal-cv" className="modal-toggle" />
                <div className="modal">
                <div className="modal-box md:h-96 overflow-clip md:pb-9">
                    <label htmlFor="modal-cv" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <embed src={monCv+"#toolbar=0&navpanes=0&scrollbar=0"} type="application/pdf" className="md:w-full md:h-full rounded-md shadow overflow-y-clip"/>
                    <h3 className="text-lg font-bold">Apperçu de mon CV</h3>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Home;