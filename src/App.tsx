import { useEffect, useRef, useState } from "react";
import Intro from "./Intro";
import Experience from "./Experience";
import Projects from "./projects";
import Section from "./Section";
import About from "./About";

function App() {
    const [tab, setTab] = useState("About");

    return (
        <section className="flex flex-row max-w-7xl mx-auto gap-8">
            <div className="sticky top-0 left-0 h-screen">
                <Intro tab={tab} setTab={setTab} />
            </div>

            <div className="w-full flex flex-col mb-12">
                <Section id="About" setTab={setTab}>
                    <About />
                </Section>
                <Section id="Experience" setTab={setTab}>
                    <Experience />
                </Section>
                <Section id="Projects" setTab={setTab}>
                    <Projects />
                </Section>
            </div>
        </section>
    );
}

export default App;
