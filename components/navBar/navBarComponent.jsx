import React from "react";
import Logo from "../../public/image/Logo.png";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import DarkMode from "./DrarkModeComponent";
import Image from 'next/image';
import { useSession } from "next-auth/react";
const NavLinks = [
    {
        id: 1,
        name: "Home",
        link: "#",
    },
    {
        id: 2,
        name: "Products",
        link: "#",
    },
    {
        id: 3,
        name: "Pricing",
        link: "#",
    },
    {
        id: 4,
        name: "Contact",
        link: "#",
    },
];
const Navbar = () => {
    const { data: session } = useSession();
    const [showMenu, setShowMenu] = React.useState(false);
    const toggleMenu = () => setShowMenu(!showMenu);
    return (
        <div className="relative z-[9999] text-black dark:text-white duration-300">
            <div className="containerbox">
                <div className="flex justify-between items-center" width={100}>
                    {/* logo section */}
                    <div className="flex items-center">
                        <Image src={Logo} alt="logo" className="h-20 -ml-2" width={100} />
                        <p className="text-3xl">
                            <span className="font-bold">Smart Car</span>
                        </p>
                    </div>
                    {/* Desktop Menu section */}
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-8">
                            {NavLinks.map(({ id, name, link }) => {
                                return (
                                    <li key={id} className="py-4">
                                        <a
                                            href={link}
                                            className="text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500"
                                        >
                                            {name}
                                        </a>
                                    </li>
                                );
                            })}
                            {/* Darkmode feature */}
                            <DarkMode />
                            <div>
                                Name: <span className="font-bold">{session?.user?.name}</span>
                            </div>
                        </ul>
                    </nav>

                    {/* Mobile View Sidebar */}
                    <div className="md:hidden block">
                        <div className="flex items-center gap-4">
                            <DarkMode />
                            {showMenu ? (
                                <HiMenuAlt1
                                    onClick={toggleMenu}
                                    className="cursor-pointer "
                                    size={30}
                                />
                            ) : (
                                <HiMenuAlt3
                                    onClick={toggleMenu}
                                    className="cursor-pointer "
                                    size={30}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
