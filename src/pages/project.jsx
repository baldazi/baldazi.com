import React from 'react';
import ProjectCard from '../components/projectCard';
import conflistikImg from '../assets/img/conflistik.png';
function Projet() {
    return (
        <div className="min-h-screen">
            <div className="max-w-lg md:max-w-[92%] mx-auto">
                {/* mobile application project */}
                <div className="divider divider-primary divider-start"><span className="badge badge-lg badge-primary">Mobile App</span></div>
                    <div className="flex gap-5">
                        {/* conflistik card */}
                        <ProjectCard title="Conflistik" description="" image={conflistikImg}/>
                        {/* stage card */}
                        <ProjectCard title="Stage" description="" image={conflistikImg}/>
                    </div>     

                {/* Website */}
                <div className="divider divider-primary divider-start"><span className="badge badge-lg badge-primary">Website Application</span></div> 
                {/* stage card */}
                <ProjectCard title="Stage" description="" image={conflistikImg}/>      
            </div>


        </div>
    );
}

export default Projet;