import { Logo } from "./logo"
import { Navigation } from "./navigation"

export default function Header(){
    return (
        <header className="w-full bg-black border-b sticky top-0 py-4 z-50 shadow-md">
            <div className="container mx-auto flex items-center justify-between px-4 relative">
                <Logo/>
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <Navigation/>
                </div> 
            </div>
        </header>
    )
}