import { BiUser } from 'react-icons/bi';
import { AboutCard } from '../components';
import { m } from '../paraglide/messages';
import Collapse from '../components/collapse';
function About() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center gap-10 py-10">
            <div className="flex flex-col md:w-3/5 md:flex-row p-3">
                <div>
                    <BiUser size={200} />
                </div>
                <div className="p-3 text-2xl leading-loose text-center">
                    <p>
                        {m["page.about.bioFrame1"]()}
                        <span className="font-semibold text-teal-500 animate-pulse">Aziz</span>
                        {m["page.about.bioFrame2"]()}
                    </p>
                </div>

            </div>

            <Collapse title="Profil" showed={true}>
                <div className="p-5 py-2 space-y-5 leading-10 text-lg font-light">
                    <p>{m["page.about.educationDesc"]()}</p>
                    <p>{m["page.about.experience"]()}</p>
                    <p>{m["page.about.techWatch"]()}</p>
                    <p>{m["page.about.goal"]()}</p>
                    <p>{m["page.about.goal"]()}</p>
                </div>
            </Collapse>

            {/* scholarship*/}
            <AboutCard
                title={m["page.about.educationTitle"]()}
                content={[
                    { title: "2018 - 2020", content: m["page.about.educationCPGE"]() },
                    { title: "2020 - 2023", content: m["page.about.educationBsc"]() },
                    { title: "2024 - 2025", content: m["page.about.educationMsc"]() },
                ]}
            />

            {/* Skills*/}
            <AboutCard
                title={m["page.about.skillsTitle"]()}
                content={[
                    { title: "Web", content: "Node.js, React/Next, Svelte/Sveltekit, ApiPlateform, " },
                    { title: "Mobile", content: "Native Kotlin, jetpack compose, .net-Maui" },
                    { title: "Systeme & Network", content: "Linux, TCP/IP" },
                    { title: "Others", content: "Git & Github, Docker" }
                ]}
            />
        </div>
    );
}

export default About;