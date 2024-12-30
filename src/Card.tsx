import { projectProps } from "./projects";

const Card = ({ project }: { project: projectProps }) => {
    const hoverStyle =
        "[&>img]:hover:border-opacity-100 [&>img]:hover:shadow-lg hover:cursor-pointer " +
        "[&>div:nth-of-type(1)>div:nth-of-type(1)>i]:hover:-translate-y-1 ";

    return (
        <a
            className={
                "flex flex-row max-md:flex-row gap-4 p-4 rounded-lg shadow-lg bg-light_gradient animate-appear-from-right items-start animation-scroll " +
                hoverStyle
            }
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div>
                <div className="text-white flex flex-row font-bold gap-2 items-center">
                    <div className="text-xl font-bold ">{project.title}</div>

                    <i className="fas fa-xs fa-location-arrow duration-300  ease-in-out self-center"></i>
                </div>

                <div className="text-white my-4 ml-2">{project.desc}</div>
                <div className="flex flex-wrap gap-4 my-4">
                    {project.skills.map((skill) => (
                        <div className="rounded-full bg-text_primary_color px-6 py-1  font-semibold text-sm">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </a>
    );
};

export default Card;
