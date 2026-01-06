import { GiBoxingGloveSurprise } from "react-icons/gi";
import { m } from "../paraglide/messages.js";
import {Link} from "react-router";

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
                    <Link className="btn" to="/project">
                        {m["page.home.portfolio"]()} <GiBoxingGloveSurprise />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;