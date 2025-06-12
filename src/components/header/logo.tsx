import logo from "@/assets/tf-logo.png"
import { NavLink } from "react-router";

export function Logo(){
    return(
        <NavLink to= "/">
            <img src={logo} alt="Dine Fresh Farm Logo" className="bg-transparent h-20 w-auto"/>
        </NavLink>
    )
}