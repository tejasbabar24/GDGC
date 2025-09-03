
import { Outlet } from 'react-router';
import React from "react"
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <div className="w-full">
    <Header/>
      <Outlet/>
    <Footer/>  
    </div>
  )
}

export default App
