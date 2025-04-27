import { NavLink } from "react-router";

export function Navigation(){
    return(
        <nav>
            <ul className="flex justify-around space-x-8 list-none p-0 m-0">
                <li>
                    <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-lg font-bold" :"text-lg"}>
                        Home
                     </NavLink>
                </li>
                <li>
                    <NavLink to="/menu" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-lg font-bold" :"text-lg"}>
                        Menu
                     </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-lg font-bold" :"text-lg"}>
                        Contact
                     </NavLink>
                </li>
            </ul>
        </nav>
    )
}