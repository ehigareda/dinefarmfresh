import { NavLink } from "react-router-dom";

export function Navigation(){
    return(
        <nav className = "text-white font-medium">
            <ul className="flex justify-center space-x-12 list-none p-0 m-0">
                <li className="group">
                    <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-lg font-bold" :"text-lg"}>
                        Home
                     </NavLink>
                     <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
                </li>
                {/* <li className="group">
                    <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-lg font-bold" :"text-lg"}>
                        About Us
                     </NavLink>
                     <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
                </li> */}
                <li className="group">
                    <NavLink to="/menu" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-lg font-bold" :"text-lg"}>
                        Menu
                     </NavLink>
                     <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
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