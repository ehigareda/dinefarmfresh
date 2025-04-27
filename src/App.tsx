import { useState } from 'react'
import { Routes, Route, } from "react-router"
import './App.css'
import { Button } from "@/components/ui/button"
import Header from "@/components/header/header"
import Contact from "@/pages/ContactPage"
import Home from "@/pages/HomePage"
import Menu from "@/pages/MenuPage"
import { menuData } from './data/menuData';

function App() {


  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <Routes>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu menuData={menuData}/>} />
      </Routes>
    </div>
  )
}

export default App
