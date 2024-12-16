import { MouseEventHandler, useState } from "react";
import { NavLink } from "react-router";

const links = ["Home", "Resume", "Projects", "Contact"];

const widthScreen = window.innerWidth;
export default function Header() {
    const [open, setOpen] = useState(false)

    // const handleOpenMenue: MouseEventHandler = (e) => {
    //     e.preventDefault();
    //     setOpen(o => !o);
    // }
    return (
        <div className="w-full px-3 py-4 flex align-middle justify-between static">
            <h1 className="text-2xl font-bold my-name">Netanel Nagar</h1>
            <nav className="hidden sm:flex flex-wrap justify-center content-end ">
                {links.map((link) => (
                    <NavLink to={`/${link.toLowerCase()}`} key={link} className="link mx-3 text-lg font-medium text-gray-600"  >
                        {link}
                    </NavLink>
                ))}
            </nav>
            {/* mobile navbar */}
            <button className="border-2 px-2 rounded sm:hidden" onClick={() => setOpen(o => !o)}><i className="bi bi-list text-3xl text-neutral-500"></i></button>
            <nav className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform 
            duration-300 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'} flex flex-col space-y-4 z-30`}>
                <div className="h-16 grid place-items-center"><p className="text-lg font-medium">Menu</p></div>
                {links.map((link) => (
                    <NavLink to={`/${link.toLowerCase()}`} key={link} className="link mx-3 text-lg font-medium text-gray-600 hover:bg-gray-100  transition-colors
              duration-200" onClick={() => setOpen(o => !o)}>
                        {link}
                    </NavLink>
                ))}
            </nav>
        </div>
    )
}
