import ProjectList from "@/components/ProjectList";

const projects = [
    {
        title: "Volunteer Managament System",
        description: "Web-based platform designed to coordinate local volunteer initiatives",
        technologies: ["Express", "Node.js", "MongoDB"],
        link: "https://github.com/repoProgD/cse340",
    },
    {
        title: "Periodic Elements Visualizer",
        description: "Interactive visualization of the periodic table of elements.",
        technologies: ["CSS", "JavaScript", "Vite"],
        link: "https://github.com/repoProgD/periodic-elements-visualizer-wdd330",
    },
];

export default function Home() {
    return (
        <div className="container mx-auto px-4 py-12">
            <section className="text-center py-12">
                <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
                <p className="text-lg text-black-700">
                    I'm a software development student interested in building web applications. Here are some of my projects.
                </p>
            </section>

            <ProjectList projects={projects} />
        </div>
    );
}