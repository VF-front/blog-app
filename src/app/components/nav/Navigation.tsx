import Link from "next/link";

interface NavItem {
    id: string;
    name: string;
    link: string;
}

const nav: NavItem[] = [
    { id: 'home', name: 'Home', link: '/' },
    { id: 'about', name: 'About', link: '/about' },
    { id: 'services', name: 'Services', link: '/services' },
]

export const Navigation = () => {
    return (
        <>
            <nav  className="hidden md:flex items-center space-x-6">
                {nav.map(({id, name, link}) => (
                    <Link key={id} href={link}>
                        <span className=" text-gray-700 hover:text-gray-950 transition duration-300">{name}</span>
                    </Link>
                ))}
            </nav>
        </>
    )
}