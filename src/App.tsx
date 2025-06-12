// import { useState } from 'react'
import { Routes, Route, } from "react-router-dom"
import './App.css'
// import { Button } from "@/components/ui/button"
import Header from "@/components/header/header"
import Footer from "@/components/footer"
// import Contact from "@/pages/ContactPage"
import Home from "@/pages/HomePage"
import Menu from "@/pages/MenuPage"
import About from "@/pages/AboutPage"

// import { menuData } from './data/menuData';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/menu" element={<Menu menuData={menuData} />} /> */}
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
