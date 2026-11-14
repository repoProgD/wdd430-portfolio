"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <ul className="flex gap-5">
            {links.map((link) => {
                const isActive =
                    link.href === "/"
                        ? pathname === "/"
                        : pathname === link.href || pathname.startsWith(`${link.href}/`);

                return (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className={isActive ? "text-indigo-400 font-bold" : ""}
                        >
                            {link.label}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}