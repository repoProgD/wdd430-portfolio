// import the Link component from the Next.js library to enable client-side navigation between pages.
import Link from 'next/link';

// function component in React that returns the content of the header section of a web page. It is defined as a function because functional components are a simpler and more concise way to create components in React. They allow for the use of hooks, which provide state and lifecycle features without needing to use class components. Functional components are also easier to read and test, making them a popular choice in modern React development.
export default function Header() { 
    // JSX - returns four elements: <header>, <div>, <nav>, and <ul>.
    return (
        <header className="bg-gray-900 text-white p-4"> 
            <div id="header-title" className="text-2xl font-bold mb-4">My Portfolio</div>
            <nav>
                <ul className="flex gap-5">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    );
}


// Why is the Header defined as a function? 