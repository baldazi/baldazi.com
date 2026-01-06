import { ProjectCard } from '../components';
import conflistikImg from '../assets/img/conflistik.png';
import stageImg from '../assets/img/stage.png';
import calendarProjectImg from '../assets/img/calendarProject.png';
import { m } from '../paraglide/messages';
function Projet() {
    return (
        <div className="min-h-screen">
            <div className="max-w-lg md:max-w-[82%] mx-auto">
                {/* mobile application project */}
                <div className="divider divider-primary divider-center md:w-[50%] mx-auto"><span className="badge badge-lg badge-primary">{m["page.project.mobileGroup"]()}</span></div>
                <div className="flex gap-5 justify-center">
                    {/* conflistik card */}
                    <ProjectCard
                        title="Conflistik"
                        description={m["page.project.conflisticDesc"]()}
                        image={conflistikImg}
                    />
                    {/* stage card */}
                    <ProjectCard
                        title={m["page.project.internshipTitle"]()}
                        description={m["page.project.internshipMobileDesc"]()}
                        image={stageImg}
                        repositoryLink="https://github.com/baldazi/appMobileStage"
                    />
                </div>

                {/* Website */}
                <div className="divider divider-secondary divider-center md:w-[50%] mx-auto"><span className="badge badge-lg badge-secondary">Website Application</span></div>
                <div className="flex gap-5 justify-center">
                    {/* stage card */}
                    <ProjectCard title={m["page.project.internshipTitle"]()}
                        description={m["page.project.internshipWebAppDesc"]()}
                        image={stageImg}
                        repositoryLink="https://github.com/tobina237/projetWebCesi/tree/master"
                    />
                    {/* calendar card */}
                    <ProjectCard title={m["page.project.calendarTitle"]()}
                        description={m["page.project.calendarDesc"]()}
                        image={calendarProjectImg}
                        repositoryLink="https://github.com/baldazi/TPE"
                        demoLink="https://drive.google.com/file/d/1M64TxwiTkocrpaLWaHi0ZNA3h1eu0XLM/view?usp=sharing"
                    />
                </div>
            </div>


        </div>
    );
}

export default Projet;