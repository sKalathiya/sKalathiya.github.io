const experienceInformation = [
    {
        date: "May 2021 - Dec 2021",
        employer: "Weapplinse Technology LLP",
        title: "Full Stack Developer",
        decs: "As a Full Stack Developer, Developed scalable, user-focused web applications using React.js, TypeScript, and Redux, while designing and implementing secure RESTful APIs with Node.js and Express.js. Refactored legacy code adhering to SOLID principles, enhancing maintainability by 20%. Automated unit testing with Jest, increasing test coverage by 30% and reducing production bugs. Collaborated within Agile Scrum teams, achieving a 20% reduction in development time.",

        skills: [
            "React",
            "TypeScript",
            "Express.js",
            "Node.js",
            "TailwindCSS",
            "AWS Elastic Beanstalk",
            "Git",
            "Jest",
            "REST API",
            "Agile",
        ],
    },
    {
        date: "Dec 2020 - Apr 2021",
        employer: "TechSmith Solutions",
        title: "Software Developer Intern",
        decs: "During my internship, Developed a scalable backend system for a waste management application using Java, enhancing data tracking through modular bean classes. Implemented a route optimization module leveraging Dijkstra’s algorithm, reducing travel time by 30%. Optimized MySQL database structures to improve query performance and minimize data redundancy. Achieved 95% code coverage with JUnit unit testing, ensuring software reliability. Utilized Git for version control and Apache Maven for efficient project builds and dependency management.",
        skills: [
            "Java",
            "Spring Boot",
            "MySQL",
            "JUnit",
            "Git",
            "Agile",
            "Apache Maven",
            "Algorithm Design",
        ],
    },
];

const Experience = () => {
    const hoverStyle =
        "[&_div>div:nth-of-type(1)_i:nth-of-type(1)]:hover:-translate-y-1 " +
        "hover:cursor-pointer hover:shadow-lg";
    return (
        <>
            {experienceInformation.map((exp) => (
                <div
                    className={
                        "flex flex-col gap-4  animate-appear-from-bottom bg-light_gradient rounded-lg animation-scroll " +
                        hoverStyle
                    }
                >
                    <div className="flex flex-col gap-4 self-start duration-300  ease-in-out p-4">
                        <div className="flex flex-col md:lg:flex-row text-white md:lg:items-center gap-2">
                            <p className="font-bold text-nowrap text-xl">
                                {exp.title}
                            </p>
                            <div className="w-5 border-[0.5px] max-lg:hidden"></div>
                            <p className="font-bold text-nowrap text-lg text-white">
                                {exp.employer}
                            </p>
                        </div>

                        <div className="text-sm text-gray-200 font-semibold text-nowrap">
                            {exp.date}
                        </div>

                        <div className=" text-white ">{exp.decs}</div>

                        <div className="flex flex-wrap gap-4 my-4">
                            {exp.skills.map((skill) => (
                                <div className="rounded-full bg-text_primary_color px-6 py-1  font-semibold text-sm">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Experience;
