import React from 'react';
import { ProjectCard } from '../components';
import conflistikImg from '../assets/img/conflistik.png';
import stageImg from '../assets/img/stage.png';
import networkImg from '../assets/img/network.png';
import { m } from '../paraglide/messages';
function Projet() {
    return (
        <div className="min-h-screen">
            <div className="max-w-lg md:max-w-[82%] mx-auto">
                {/* mobile application project */}
                <div className="divider divider-primary divider-center md:w-[50%] mx-auto"><span className="badge badge-lg badge-primary">{m["page.project.mobileGroup"]()}</span></div>
                <div className="flex gap-5 justify-center">
                    {/* conflistik card */}
                    <ProjectCard title="Conflistik"
                        description={m["page.project.conflisticDesc"]()}
                        image={conflistikImg} />
                    {/* stage card */}
                    <ProjectCard title={m["page.project.internshipTitle"]()}
                        description={m["page.project.internshipMobileDesc"]()}
                        image={stageImg} />
                </div>

                {/* Website */}
                <div className="divider divider-secondary divider-center md:w-[50%] mx-auto"><span className="badge badge-lg badge-secondary">Website Application</span></div>
                <div className="flex gap-5 justify-center">
                    {/* stage card */}
                    <ProjectCard title={m["page.project.internshipTitle"]()}
                        description={m["page.project.internshipWebAppDesc"]()}
                        image={stageImg} />
                </div>

                {/* other */}
                {/* <div className="divider divider-accent divider-center md:w-[50%] mx-auto"><span className="badge badge-lg badge-accent">Others</span></div>
                <div className="flex gap-5 justify-center">
                    <ProjectCard title="Interconnect Project"
                        description="Currently, I am working on a project to experiment with the operation of networking services such as HTTP/HTTPS, 
                        FTP, SSH, Samba, and DNS. Each day, I am learning about server configurations using two mini PCs at home,
                        one running Ubuntu Server and the other operating on DragonFlyBSD."
                        image={networkImg} />
                </div> */}
            </div>


        </div>
    );
}

export default Projet;