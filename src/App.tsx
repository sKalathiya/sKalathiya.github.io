import { useState } from "react";
import Intro from "./Intro";
import Experience from "./Experience";
import Projects from "./projects";
import Section from "./Section";
import About from "./About";

function App() {
    const [tab, setTab] = useState("About");

    return (
        <section className="flex flex-col max-w-7xl mx-auto gap-8  md:lg:flex-row">
            <div className="md:lg:sticky top-0 left-0 md:lg:h-screen">
                <Intro tab={tab} setTab={setTab} />
            </div>

            <div className="w-full flex flex-col mb-12">
                <Section id="About" setTab={setTab}>
                    <div className="text-white font-semibold text-lg self-start rounded-lg bg-light_gradient w-full p-4">
                        About
                    </div>
                    <About />
                </Section>
                <Section id="Experience" setTab={setTab}>
                    <div className="text-white font-semibold text-lg self-start rounded-lg bg-light_gradient w-full p-4">
                        Experience
                    </div>
                    <Experience />
                </Section>
                <Section id="Projects" setTab={setTab}>
                    <div className="text-white font-semibold text-lg self-start rounded-lg bg-light_gradient w-full p-4">
                        Projects
                    </div>
                    <Projects />
                </Section>
            </div>
        </section>
    );
}

export default App;
