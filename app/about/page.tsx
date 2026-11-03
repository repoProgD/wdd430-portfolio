// Create a simple About page that demonstrates file - based routing:
import SkillList from "@/components/SkillList";

const categories = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express", "REST APIs"]
    }
];

export default function About() {
    return (
        <div className="container mx-auto px-4 py-12">
            <section className="text-center py-12">
                <h1 className="text-4xl font-bold mb-4">About Me</h1>
                <p className="text-lg text-black">
                    This about page shares more information about my background and work.
                </p>
            </section>
            <SkillList categories={categories} />
        </div>
    );
}