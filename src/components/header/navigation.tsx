import { NavLink } from "react-router-dom";

export function Navigation(){
    return(
        <nav className = "text-white font-medium">
            <ul className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-12 list-none p-0 m-0 text-center">
                <li className="group inline-block">
                    <NavLink to="/" className="relative text-lg">
                        {({ isActive }) => (
                        <>
                            <span className={isActive ? "font-bold" : ""}>Home</span>
                            <span
                            className={`absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 ${
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
                            className={`absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 ${
                                isActive ? "w-full" : "w-0 group-hover:w-full"
                            }`}
                            ></span>
                        </>
                        )}
                    </NavLink>
                </li>
                <li className="group inline-block">
                    <NavLink to="/about" className="relative text-lg">
                        {({ isActive }) => (
                        <>
                            <span className={isActive ? "font-bold" : ""}>About</span>
                            <span
                            className={`absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 ${
                                isActive ? "w-full" : "w-0 group-hover:w-full"
                            }`}
                            ></span>
                        </>
                        )}
                    </NavLink>
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