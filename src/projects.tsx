import Card from "./Card";

export type projectProps = {
    img: string;
    title: string;
    github: string;
    desc: string;
    skills: string[];
};

const projectInformation: projectProps[] = [
    {
        img: "b1.jpg",
        title: "Appointment Management App",
        github: "https://github.com/sKalathiya/Appointment-Systems-WEBAPP",
        desc: "Developed a scalable appointment management system using the MERN stack, enabling seamless service scheduling and improving scheduling efficiency by 30%. Implemented secure session-based authentication for reliable and protected data access. Leveraged React for a responsive user interface and MongoDB for efficient data management.",
        skills: [
            "React",
            "TypeScript",
            "Express.js",
            "Node.js",
            "TailwindCSS",
            "MongoDB",
            "Git",
            "REST API",
        ],
    },
    {
        img: "b1.jpg",
        title: "Library Management App",
        github: "https://github.com/sKalathiya/Library-Management-System",
        desc: "Built a robust library management platform using React and Tailwind CSS for an intuitive and responsive interface. Designed secure role-based authentication with Bcrypt to ensure API access reliability. Streamlined inventory tracking and book-borrowing processes using MongoDB Atlas and Express.js, offering administrative features for effective library management.",

        skills: [
            "React",
            "TypeScript",
            "Express.js",
            "Node.js",
            "TailwindCSS",
            "MongoDB",
            "Bcrypt",
            "Git",
            "REST API",
        ],
    },
    {
        img: "b1.jpg",
        title: "Shift Management App",
        github: "https://github.com/sKalathiya/Shiftboard_Backend",
        desc: "Designed an employee shift scheduling application with Spring Boot for API development and React for the frontend. Integrated MongoDB Atlas for scalable data storage and Spring Security for JWT-based authentication, ensuring robust access control and efficient scheduling.",

        skills: [
            "React",
            "JavaScript",
            "Java",
            "Spring Boot",
            "MongoDB",
            "TailwindCSS",
            "JWT",
            "Git",
            "REST API",
        ],
    },
    {
        img: "b1.jpg",
        title: "Career Service Application",
        github: "https://github.com/sKalathiya/Solvers-Soen6011summer2023",
        desc: "Collaborated in a 6-member team to develop a career service platform that connected employers and students. Employers could post job openings, search for candidates, and manage applications, while students could manage portfolios and apply for jobs. Utilized Django for backend development, ensuring efficient database operations and maintaining over 95% unit test coverage.",

        skills: [
            "Python",
            "Django",
            "HTML5",
            "CSS3",
            "SQLite",
            "PyTest",
            "SCRUM",
            "Git",
        ],
    },
    {
        img: "b1.jpg",
        title: "Restaurant Recommendation System",
        github: "https://github.com/sKalathiya/RealTaste",
        desc: "Developed a personalized restaurant recommendation system using collaborative filtering algorithms and data from the Zomato API. Built a scalable backend using Django and MongoDB, ensuring sub-100ms response times. Enhanced user insights with a dataset of 50,000+ restaurants.",

        skills: ["Python", "Django", "MongoDB", "Machine Learning", "Git"],
    },
];

const Projects = () => {
    return (
        <>
            {projectInformation.map((project) => (
                <Card project={project} />
            ))}

            <a
                className="text-white flex flex-row gap-2 group items-center hover:cursor-pointer self-start mt-4 bg-light_gradient w-full rounded-lg p-4"
                href="https://github.com/sKalathiya"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="w-10 border-[0.5px] duration-300  ease-in-out group-hover:w-16"></div>
                <p className="font-semibold">More on Github</p>
                <i className="fas fa-xs fa-location-arrow duration-300  ease-in-out group-hover:-translate-y-1"></i>
            </a>
        </>
    );
};

export default Projects;
