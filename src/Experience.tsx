const experienceInformation = [
    {
        date: "May 2021 - Dec 2021",
        employer: "Weapplinse Technology LLP",
        title: "Full Stack Developer",
        decs: "As a Full Stack Developer, I focused on building scalable and maintainable applications using React and TypeScript. I improved component reusability by 30%, developed REST APIs with Express.js, and automated unit testing with Jest, increasing code reliability and coverage by 35%. Working in an Agile environment, I collaborated with cross-functional teams to deliver high-quality solutions. Additionally, I deployed and managed web applications using AWS Elastic Beanstalk, ensuring scalability and seamless performance.",

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
        decs: "During my internship, I contributed to the development of an efficient waste management system using Java and MySQL, which enhanced dustbin clearance efficiency by 30%. I designed a route optimization module with Dijkstra’s algorithm, reducing travel time significantly. My role involved creating scalable backend solutions, conducting unit testing with JUnit to ensure 95% code coverage, and managing dependencies with Maven. Collaborating within a dynamic team, I leveraged Git for version control to maintain smooth project workflows.",
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
        "[&_div>div:nth-of-type(2)_div:nth-of-type(1)_div:nth-of-type(2)_i:nth-of-type(1)]:hover:-translate-y-1 " +
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
                    <div className="flex flex-col gap-4 self-start duration-300  ease-in-out p-4 text-xl">
                        <div className=" flex flex-wrap text-white ">
                            <div className="flex flex-row">
                                <p className=" font-bold text-nowrap">
                                    {exp.title}
                                </p>

                                <i className="fas fa-xs fa-circle mx-2 self-center"></i>
                            </div>

                            <div className="flex flex-row">
                                <p className="font-bold text-nowrap">
                                    {exp.employer}
                                </p>
                                <i className="fas fa-xs fa-location-arrow ml-2 duration-300  ease-in-out self-center"></i>
                            </div>
                        </div>
                        <div className="text-xs text-gray-200 font-semibold text-nowrap mt-1">
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
