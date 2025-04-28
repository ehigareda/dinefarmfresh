import { NavLink } from "react-router";

import { Button } from "@/components/ui/button"
export default function Home() {
  return (
    <section
      className="min-h-screen bg-columbiablue flex items-center justify-start px-8" 
    >
      <div className="bg- bg-opacity-50 p-6 rounded-lg">
        <h1 className="text-4xl md:text-6xl text-lapislazuli font-bold mb-4">Dine Farm Fresh</h1>
        <Button asChild className="bg-lapislazuli text-white px-6 py-3 rounded-full font-semibold hover:bg-lapislazulitransition">
          <NavLink to="/menu" >
            See Menu
          </NavLink>
        </Button>
      </div>
    </section>
  )
}