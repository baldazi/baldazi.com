import React from 'react';
import { ProjectCard } from '../components';
import conflistikImg from '../assets/img/conflistik.png';
import stageImg from '../assets/img/stage.png';
import networkImg from '../assets/img/network.png';
function Projet() {
    return (
        <div className="min-h-screen">
            <div className="max-w-lg md:max-w-[82%] mx-auto">
                {/* mobile application project */}
                <div className="divider divider-primary divider-center md:w-[50%] mx-auto"><span className="badge badge-lg badge-primary">Mobile App</span></div>
                <div className="flex gap-5 justify-center">
                    {/* conflistik card */}
                    <ProjectCard title="Conflistik"
                        description="This project involved developing a mobile application,
                        specifically a serious game, based on the construction of warehouses in a city. 
                        Participants were required to vote for the warehouse locations, advocating for their interests regarding the city's positioning. 
                        The application supported a multi-user system where each person played on their own device."
                        image={conflistikImg} />
                    {/* stage card */}
                    <ProjectCard title="Stage"
                        description="This mobile application developed in collaboration aims to facilitate the application process for internship opportunities.
                        It consumes a REST API developed and deployed on Heroku, enabling users to search for and apply to internship listings. 
                        Its goal is to streamline the internship search and application process."
                        image={stageImg} />
                </div>

                {/* Website */}
                <div className="divider divider-secondary divider-center md:w-[50%] mx-auto"><span className="badge badge-lg badge-secondary">Website Application</span></div>
                <div className="flex gap-5 justify-center">
                    {/* stage card */}
                    <ProjectCard title="Stage"
                        description="The web application that inspired the mobile application,
                        even though there was no link in the development process of the two and it was imposed by the school,
                        is designed to facilitate the search and application for internship opportunities online. 
                        It provides a user-friendly platform for users to search, filter, and apply to internship postings, 
                        while also offering additional features such as profile management and access to resources for internship seekers."
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