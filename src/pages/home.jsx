import { GiBoxingGloveSurprise } from "react-icons/gi";
import { m } from "../paraglide/messages.js";
import monCv from '../assets/cv.pdf'

function Home() {

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">{m["page.home.hooray"]()}</h1>
                    <div className="flex flex-col justify-beetween gap-5 pt-6 pb-2">
                        <p>
                            {m["page.home.aboutFrame1"]()}
                            <b>Aziz BALDE</b>
                            {m["page.home.aboutFrame2"]()}
                            <b>{m["page.home.aboutFrame3"]()}</b>
                            {m["page.home.aboutFrame4"]()}
                            <a rel="noreferrer" href="https://ufr-st.univ-lehavre.fr/" target="_blank" className="link link-info block">{m["page.home.aboutFrame5"]()}</a>
                        </p>

                        <p>{m["page.home.aboutFrame6"]()}</p>

                        <p className="pb-6 italic text-accent">
                            {m["page.home.aboutFrame7"]()}
                        </p>
                    </div>

                    {/* The button to open modal */}
                    <label htmlFor="modal-cv" className="btn">{m["page.home.resume"]()} <GiBoxingGloveSurprise /></label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="modal-cv" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box md:h-96 overflow-clip md:pb-9">
                            <label htmlFor="modal-cv" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <embed src={monCv + "#toolbar=0&navpanes=0&scrollbar=0"} type="application/pdf" className="md:w-full md:h-full rounded-md shadow overflow-y-clip" />
                            <h3 className="text-lg font-bold">Overview of my resume</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;