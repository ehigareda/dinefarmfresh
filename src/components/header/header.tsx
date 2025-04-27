import { Logo } from "./logo"
import { Navigation } from "./navigation"

export default function Header(){
    return (
        <header className="w-full bg-white border-b">
            <div className="container mx-auto flex items-center justify-between p-4">
                <Logo/>
                <Navigation/>
            </div>
        </header>
    )
}