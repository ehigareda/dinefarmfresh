import logo from "@/assets/reshot-icon-coffee-cup.svg"
import { NavLink } from "react-router";

export function Logo(){
    return(
        <NavLink to= "/">
            <img src={logo} alt="Dine Fresh Farm Logo" className="h-13" w-auto/>
        </NavLink>
    )
}