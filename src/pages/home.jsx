import React from 'react';
import {FiExternalLink} from 'react-icons/fi'
import monCv from '../assets/cv.pdf'

function Home() {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
            <div className="max-w-md">
            <h1 className="text-5xl font-bold">Bienvenue !</h1>
            <p className="pt-6 pb-2">
                Bonjour, je m'appelle Abdoul Aziz BALDE et je suis en fin de cycle de licence en informatique à <a rel="noreferrer" href="https://www.univ-smb.fr/" target="_blank" className="link link-info">l'Université de Savoie (USMB) <FiExternalLink className="inline"/></a>. 
                Ma passion pour l'informatique a été renforcée par la conviction que les médias virtuels ont transformé 
                de manière significative notre façon de vivre, de travailler et de communiquer, 
                et j'ai choisi de poursuivre une carrière dans l'informatique pour être un acteur de cette évolution. 
            </p>
            <p className="pb-6 italic text-accent">
                    Sur cet site, je partagerai les projets auxquels je travaille pendant mon temps libre,
                    ainsi que ceux que je réalise dans le cadre de mes études. 
            </p>
                {/* The button to open modal */}
                <label htmlFor="modal-cv" className="btn">mon CV</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="modal-cv" className="modal-toggle" />
                <div className="modal">
                <div className="modal-box h-96 overflow-clip pb-9">
                    <label htmlFor="modal-cv" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <embed src={monCv+"#toolbar=0&navpanes=0&scrollbar=0"} type="application/pdf" className="w-full h-full rounded overflow-y-clip"/>
                    <h3 className="text-lg font-bold">Apperçu de mon CV</h3>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Home;