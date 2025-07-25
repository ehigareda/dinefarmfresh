import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Navigation(){

    return(
        <nav className = "font-medium font-secondary">
            <ul className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-16 list-none p-0 m-0 text-center">
                <li className="group inline-block">
                    <NavLink to="/" className="relative text-lg">
                        {({ isActive }) => (
                        <>
                            <span className={isActive ? "font-bold" : ""}>Home</span>
                            <span
                            className={`absolute left-0 -bottom-1 h-0.5 bg-jetblack transition-all duration-300 ${
                                isActive ? "w-full" : "w-0 group-hover:w-full"
                            }`}
                            ></span>
                        </>
                        )}
                    </NavLink>
                </li>

                <li className="group inline-block">
                    <NavLink to="/menu" className="relative text-lg">
                        {({ isActive }) => (
                        <>
                            <span className={isActive ? "font-bold" : ""}>Menu</span>
                            <span
                            className={`absolute left-0 -bottom-1 h-0.5 bg-jetblack transition-all duration-300 ${
                                isActive ? "w-full" : "w-0 group-hover:w-full"
                            }`}
                            ></span>
                        </>
                        )}
                    </NavLink>
                </li>
                <li className="group inline-block">
                    <NavLink to="/visit-us" className="relative text-lg">
                        {({ isActive }) => (
                        <>
                            <span className={isActive ? "font-bold" : ""}>Hours & Location</span>
                            <span
                            className={`absolute left-0 -bottom-1 h-0.5 bg-jetblack transition-all duration-300 ${
                                isActive ? "w-full" : "w-0 group-hover:w-full"
                            }`}
                            ></span>
                        </>
                        )}
                    </NavLink>
                </li>
                <li className="group inline-block">
                    <NavLink to="/faq" className="relative text-lg">
                        {({ isActive }) => (
                        <>
                            <span className={isActive ? "font-bold" : ""}>FAQ</span>
                            <span
                            className={`absolute left-0 -bottom-1 h-0.5 bg-jetblack transition-all duration-300 ${
                                isActive ? "w-full" : "w-0 group-hover:w-full"
                            }`}
                            ></span>
                        </>
                        )}
                    </NavLink>
                </li>   
                <li className="group inline-block">
                <a href="https://order.toasttab.com/online/the-farm-fresh-2450-park-blvd?diningOption=takeout&rwg_token=ACgRB3fvQEFwvW2g7njpOu9ADeVaVYhX-rLQocFp3s1iMnBrTVbGfBOiPuxfZNCIqgpCBCLug0Y_M9U1GVVDbPTfXmM16TU6Mw%3D%3D">
                        <Button className="bg-jetblack text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition">
                            Order Online
                        </Button>
                    </a>
                </li>

                {/* <li className="group">
                    <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-lg font-bold" :"text-lg"}>
                        Contact Us
                     </NavLink>
                     <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
                </li> */}
            </ul>
        </nav>
    )
}