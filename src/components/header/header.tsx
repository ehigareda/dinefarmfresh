import { Logo } from "./logo"
import { Navigation } from "./navigation"
// import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from 'react';

export default function Header(){
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className={`w-full sticky top-0 py-4 z-50 transition-all duration-300 ${scrolled ? "bg-resedagreen":"bg-transparent"}`}>
            <div className="relative container mx-auto flex items-center justify-between px-4">
                {/* <Logo/> */}
                <h1 className={`flex items-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-primary text-black font-bold z-10 flex-shrink-0 gap-4 ${scrolled ? "text-white":"text-jetblack"}`}>
                    {/* THE <Logo/> FARM */}
                    <Logo/> THE FARM 
                </h1>
                <div     className={`absolute left-1/2 top-1/2 transform -translate-y-1/2 hidden md:block ${
                                scrolled ? "text-white" : "text-black"
                            }`}>
                <Navigation />
                </div>
                {/* <div className="hidden md:block flex-shrink-0">
                    <a href="https://order.toasttab.com/online/the-farm-fresh-2450-park-blvd?diningOption=takeout&rwg_token=ACgRB3fvQEFwvW2g7njpOu9ADeVaVYhX-rLQocFp3s1iMnBrTVbGfBOiPuxfZNCIqgpCBCLug0Y_M9U1GVVDbPTfXmM16TU6Mw%3D%3D">
                        <Button className="bg-jetblack text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition">
                            Order Online
                        </Button>
                    </a>
                </div> */}
                <button 
                className={`md:hidden ${scrolled ? "text-white":"text-jetblack"}`}
                onClick={()=>setMenuOpen(!menuOpen)}
                aria-label="Toggle Menu">
                    {menuOpen ? <X size={28}/> : <Menu size={28}/>}
                </button>
            </div>
            {menuOpen && (
                <div className={`md:hidden border-t border-gray-700 px-4 pb-4 ${scrolled ? "bg-resedagreen text-white" : "text-jetblack"}`}>
                    <Navigation/>
                    {/* <a href="https://order.toasttab.com/online/the-farm-fresh-2450-park-blvd?diningOption=takeout&rwg_token=ACgRB3fvQEFwvW2g7njpOu9ADeVaVYhX-rLQocFp3s1iMnBrTVbGfBOiPuxfZNCIqgpCBCLug0Y_M9U1GVVDbPTfXmM16TU6Mw%3D%3D">
                        <Button className="mt-4 w-full bg-jetblack text-white font-semibold hover:bg-gray-700 transition">
                            Order Online
                        </Button>
                    </a> */}
                </div>
            )}
        </header>
    );
}