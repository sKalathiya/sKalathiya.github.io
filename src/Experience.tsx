const experienceInformation = [
    {
        date: "May 2021 - Dec 2021",
        employer: "Weapplinse Technology LLP",
        title: "Software Developer",
        decs: [
            "Enhanced component reusability by 30% through React and TypeScript, reducing redundant code and improving maintainability.",
            "Developed 5+ scalable APIs using express.js and integrated them seamlessly into client-facing applications.",
            "Automated unit testing using Jest, increasing test coverage by 35% and improving software reliability.",
            "Collaborated within Agile teams using Scrum methodology to deliver solutions effectively and on time.",
            "Deployed and managed scalable web applications using AWS Elastic Beanstalk.",
        ],

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
        decs: [
            "Utilized Java to implement an efficient waste management system to enhance dustbin clearance efficiency.",
            "Built a route optimization module using Dijkstra’s algorithm, cutting travel time by 30%.",
            "Developed scalable data management solutions using MySQL, improving query performance by 35%",
            "Conducted unit testing with JUnit, achieving 95% code coverage and ensuring software reliability.",
            "Utilized Git for version control, and employed Maven for project build and dependency management.",
        ],

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
        "[&_div>div:nth-of-type(2)_div:nth-of-type(1)_div:nth-of-type(1)]:hover:text-text_primary_color " +
        "[&_div>div:nth-of-type(2)_div:nth-of-type(1)_div:nth-of-type(2)]:hover:text-text_primary_color " +
        "hover:cursor-pointer hover:bg-light_gradient hover:shadow-lg";
    return (
        <>
            {experienceInformation.map((exp) => (
                <div
                    className={
                        "flex flex-col gap-4  animate-appear-from-bottom  rounded-lg animation-scroll " +
                        hoverStyle
                    }
                >
                    <div className="flex flex-row gap-4 items-start p-4 transition">
                        <div className="text-xs text-gray-200 font-semibold text-nowrap mt-1 ">
                            {exp.date}
                        </div>
                        <div className="flex flex-col gap-4 self-start">
                            <div className=" flex flex-wrap ml-8 text-white ">
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
                                    <i className="fas fa-xs fa-location-arrow ml-2 transition self-center"></i>
                                </div>
                            </div>
                            <div className="ml-8 text-white ">
                                <ul className="list-disc">
                                    {exp.decs.map((t) => (
                                        <li>{t}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-wrap ml-8 gap-4">
                                {exp.skills.map((skill) => (
                                    <div className="rounded-full bg-text_primary_color px-6 py-1  font-semibold text-sm">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Experience;
