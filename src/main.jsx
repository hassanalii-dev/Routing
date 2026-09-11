import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import ContactUs from "./pages/ContactUs.jsx"
import About from "./About/About.jsx"

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
    <Routes>
      <Route path="/home" element={<App />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/About" element={<About />} />
    </Routes>
  </BrowserRouter>,

)
