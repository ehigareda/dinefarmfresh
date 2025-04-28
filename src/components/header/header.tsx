import { Logo } from "./logo"
import { Navigation } from "./navigation"

export default function Header(){
    return (
        <header className="w-full bg-white border-b sticky top-0">
            <div className="container mx-auto flex items-center justify-between p-4 relative">
                <Logo/>
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <Navigation/>
                </div> 
            </div>
        </header>
    )
}