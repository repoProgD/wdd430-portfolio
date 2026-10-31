import ProjectCard from './ProjectCard';

// define the Project interface.
interface Project {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

interface ProjectListProps { 
    projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
    return (
        <section>
            {projects.map((project) => (
                <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    link={project.link ?? '#'}
                />
            ))}
        </section>
    );
}

