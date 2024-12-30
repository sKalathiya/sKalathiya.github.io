import Card from "./Card";

export type projectProps = {
    img: string;
    title: string;
    github: string;
    desc: string[];
    skills: string[];
};

const projectInformation: projectProps[] = [
    {
        img: "b1.jpg",
        title: "Software Developer",
        github: "sdwd",
        desc: [
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
        img: "b1.jpg",
        title: "Software Developer",
        github: "sdwd",
        desc: [
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
        img: "b1.jpg",
        title: "Software Developer",
        github: "sdwd",
        desc: [
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
        img: "b1.jpg",
        title: "Software Developer",
        github: "sdwd",
        desc: [
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
];

const Projects = () => {
    const hoverStyle =
        "[&_div>div:nth-of-type(2)_div:nth-of-type(1)_div:nth-of-type(2)_i:nth-of-type(1)]:hover:-translate-y-1 " +
        "[&_div>div:nth-of-type(2)_div:nth-of-type(1)_div:nth-of-type(1)]:hover:text-text_primary_color " +
        "[&_div>div:nth-of-type(2)_div:nth-of-type(1)_div:nth-of-type(2)]:hover:text-text_primary_color " +
        "hover:cursor-pointer hover:bg-light_gradient hover:bg-opacity-40 hover:shadow-md";
    return (
        <>
            {projectInformation.map((project) => (
                <Card project={project} />
            ))}
        </>
    );
};

export default Projects;
