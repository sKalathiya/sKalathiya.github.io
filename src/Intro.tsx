type IntroProps = {
    tab: string;
    setTab: React.Dispatch<React.SetStateAction<string>>;
};

const Intro = ({ tab, setTab }: IntroProps) => {
    const tabs = ["About", "Experience", "Projects"];

    return (
        <section
            id="intro"
            className="flex flex-col md:lg:h-full px-8 items-center max-lg:items-start"
        >
            <section className="flex flex-col gap-2 mt-24 max-lg:mt-16 ">
                <div className="text-5xl font-extrabold text-text_primary_color  max-lg:text-4xl ">
                    Sahil Kalathiya
                </div>
                <div className="text-xl font-bold text-text_secondary_color">
                    Software Developer
                </div>
                <div className="text-white mt-4 animate-appear-from-bottom">
                    I build innovative, user-centric, and scalable solutions
                    that bridge technology and real-world impact.
                </div>
            </section>
            <section className="flex flex-col gap-4 max-lg:hidden mt-8 self-start">
                {tabs.map((t) => (
                    <a
                        className={
                            "rounded-box   hover:text-text_primary_color [&>div]:hover:border-text_primary_color font-bold self-start flex flex-row  items-center [&>div]:hover:w-16 cursor-pointer  " +
                            (tab == t
                                ? "[&>div]:border-text_primary_color [&>div]:w-16 text-text_primary_color"
                                : "text-white")
                        }
                        onClick={() => {
                            setTab(t);
                        }}
                        href={"#" + t}
                    >
                        <div className="w-10 border-[0.5px] duration-300  ease-in-out"></div>
                        <p className="ml-4">{t}</p>
                    </a>
                ))}
            </section>

            <section className="flex flex-row gap-8 max-lg:mt-8 mt-auto  mb-16">
                <a
                    className="fas fa-lg fa-envelope text-white hover:text-text_primary_color cursor-pointer hover:-translate-y-1 duration-300 ease-in-out"
                    href="mailto:skalathiya1@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                ></a>
                <a
                    className="fab fa-lg fa-github text-white hover:text-text_primary_color cursor-pointer hover:-translate-y-1 duration-300 ease-in-out"
                    href="https://github.com/skalathiya"
                    target="_blank"
                    rel="noopener noreferrer"
                ></a>
                <a
                    className="fab fa-lg fa-linkedin text-white hover:text-text_primary_color cursor-pointer hover:-translate-y-1 duration-300 ease-in-out"
                    href="https://www.linkedin.com/in/sahilkalathiya/"
                    target="_blank"
                    rel="noopener noreferrer"
                ></a>
            </section>
        </section>
    );
};

export default Intro;
