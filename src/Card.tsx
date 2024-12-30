import { projectProps } from "./projects";

const Card = ({ project }: { project: projectProps }) => {
    const hoverStyle =
        "[&>img]:hover:border-opacity-100 [&>img]:hover:shadow-lg hover:cursor-pointer " +
        "[&>div:nth-of-type(1)>div:nth-of-type(1)>i]:hover:-translate-y-1 " +
        "[&>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(2)]:hover:w-16 ";

    return (
        <div
            className={
                "flex flex-row max-md:flex-row gap-4 p-4 rounded-lg shadow-lg bg-light_gradient animate-appear-from-right items-start animation-scroll bg-opacity-60 " +
                hoverStyle
            }
        >
            <img
                src={project.img}
                alt="Project Cover"
                className="object-contain rounded-xl w-60  border-slate-500 border-opacity-50 border-4 transition"
            />
            <div>
                <div className="text-white flex flex-row font-bold gap-2 items-center">
                    <div className="text-xl font-bold ">{project.title}</div>

                    <div className="w-10 border-[0.5px] duration-200  ease-in-out"></div>
                    {project.github}
                    <i className="fas fa-xs fa-location-arrow transition self-center"></i>
                </div>

                <div className="text-white my-4 ml-2">
                    <ul className="list-disc">
                        {project.desc.map((t) => (
                            <li>{t}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-wrap gap-4 my-4">
                    {project.skills.map((skill) => (
                        <div className="rounded-full bg-text_primary_color px-6 py-1  font-semibold text-sm">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
