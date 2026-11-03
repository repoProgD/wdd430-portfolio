
// Define the SkillCategory interface.
interface SkillCategory {
    title: string;
    skills: string[];
}
// This interface receives an array of SkillCategory objects as a prop.
interface SkillListProps {
    categories: SkillCategory[];
}

// The function component that renders the list of skill categories and their skills.

interface SkillCategory {
    title: string;
    skills: string[];
}

interface SkillListProps {
    categories: SkillCategory[];
}

export default function SkillList({ categories }: SkillListProps) {
    return (
        <section className="mt-12">
            <h2 className="text-3xl font-bold text-black mb-6">
                Technical Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categories.map((category) => (
                    <article
                        key={category.title}
                        className="bg-zinc-900 text-white border border-zinc-700 rounded-xl p-6 shadow-md"
                    >
                        <h3 className="text-xl font-bold mb-4">
                            {category.title}
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="bg-zinc-700 text-gray-200 text-sm px-3 py-2 rounded-full"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
