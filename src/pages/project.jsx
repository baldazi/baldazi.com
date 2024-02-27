import React from 'react';
import ProjectCard from '../components/projectCard';
import conflistikImg from '../assets/img/conflistik.png';
function Projet() {
    return (
        <div className="min-h-screen">
            <div className="">
            <div className="divider divider-primary divider-start"><span className="badge badge-lg badge-primary">Mobile App</span></div>
                <div className="">
                    {/* conflistik card */}
                    <ProjectCard title="Conflistik" description="" image={conflistikImg}/>
                    {/* stage card */}
                </div>            
            </div>
        </div>
    );
}

export default Projet;