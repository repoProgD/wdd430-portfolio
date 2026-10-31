import ProjectList from "@/components/ProjectList";

const projects = [
    {
        title: "Project One",
        description: "Description of the project.",
        technologies: ["Express", "Node.js", "MongoDB"],
        link: "https://github.com/repoProgD/cse340",
    },
    {
        title: "Project Two",
        description: "Description of the project.",
        technologies: ["Express", "Node.js", "MongoDB"],
        link: "https://github.com/repoProgD/cse341-project-02",
    },
];

export default function Home() {
    return (
        <div className="container mx-auto px-4 py-12">
            <section className="text-center py-12">
                <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
                <p className="text-lg text-gray-700">
                    I'm a full-stack developer learning Next.js and React.
                    Here are some of my recent projects.
                </p>
            </section>

            <ProjectList projects={projects} />
        </div>
    );
}