import React from 'react';
import ProjectCard from '../components/projectCard';
import conflistikImg from '../assets/img/conflistik.png';
import stageImg from '../assets/img/stage.png';
function Projet() {
    return (
        <div className="min-h-screen">
            <div className="max-w-lg md:max-w-[82%] mx-auto">
                {/* mobile application project */}
                <div className="divider divider-primary divider-start"><span className="badge badge-lg badge-primary">Mobile App</span></div>
                <div className="flex gap- justify-center">
                    {/* conflistik card */}
                    <ProjectCard title="Conflistik" description="a mobile application" image={conflistikImg} />
                    {/* stage card */}
                    <ProjectCard title="Stage" description="" image={stageImg} />
                </div>

                {/* Website */}
                <div className="divider divider-secondary divider-start"><span className="badge badge-lg badge-secondary">Website Application</span></div>
                <div className="flex gap-5">
                    {/* stage card */}
                    <ProjectCard title="Stage" description="" image={stageImg} />
                </div>

                {/* other */}
                <div className="divider divider-accent divider-start"><span className="badge badge-lg badge-accent">Others</span></div>
                <div className="flex gap-5">
                    {/* stage card */}
                    <ProjectCard title="Stage" description="" image={conflistikImg} />
                </div>
            </div>


        </div>
    );
}

export default Projet;