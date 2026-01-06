import { FaGithub } from "react-icons/fa";
import { RiPresentationFill } from "react-icons/ri";

export default function ProjectCard({
    image,
    imageAlt,
    title,
    description,
    children,
    repositoryLink,
    demoLink
}) {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt={imageAlt || ""} />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                {children}
                {(repositoryLink || demoLink) &&

                    <div className="flex justify-between w-full">
                        {repositoryLink &&
                            <a
                                href={repositoryLink}
                                target="_blank"
                                className="flex gap-2 items-center dark:bg-sky-900 bg-sky-300 px-5 py-1 rounded"
                            >
                                <FaGithub size={24} />
                                <span>Repository</span>
                            </a>
                        }
                        {demoLink &&
                            <a
                                href={demoLink}
                                target="_blank"
                                className="flex gap-2 items-center dark:bg-blue-900 bg-blue-300 px-5 py-1 rounded"
                            >
                                <RiPresentationFill size={28}/>
                                <span>Demo</span>
                            </a>
                        }
                    </div>
                }
            </div>
        </div>)
}