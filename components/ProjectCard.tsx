type ProjectCardProps = {
    title: string;
    description: string;
    technologies: string[];
    link: string;
};



export default function ProjectCard({
    title,
    description,
    technologies,
    link
}: ProjectCardProps) { 
    return (
        <article className="bg-zinc-900 text-white border border-zinc-700 rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="mb-2">{description}</p>
            <p> {technologies.join(', ')}</p>
            <a href={link} className="text-blue-500 hover:underline">
                View Project
            </a>
        </article>
    )

}






// Why do I need to declare the type of the data being passed into the ProjectCard component?
// You need to declare the type of the data being passed into the ProjectCard component to ensure type safety and provide better developer experience. By defining a type for the props, you can catch errors at compile time, such as passing incorrect data types or missing required properties. This helps prevent runtime errors and makes your code more predictable and easier to maintain. Additionally, it provides better documentation for other developers (or yourself in the future) who may use or modify the component, as they can easily see what data is expected.
// In TypeScript data types work  like in Java?
// TypeScript and Java are both statically typed languages, meaning that the type of a variable is known at compile time. However, there are some differences in how they handle types. In TypeScript, you can define types for variables, function parameters, and return values using type annotations. TypeScript also supports interfaces and type aliases to create complex types. Java, on the other hand, uses classes and interfaces to define types and has a more rigid type system. While both languages aim to provide type safety, TypeScript offers more flexibility with its type system, allowing for features like union types, intersection types, and generics.
