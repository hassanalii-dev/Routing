import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import ContactUs from "./pages/ContactUs.jsx";
import About from "./About/About.jsx";
import ProductDetail from "./Pages/ProductDetail.jsx";

createRoot(document.getElementById("root")).render( <StrictMode> <BrowserRouter> <Routes>
<Route path="/" element={<Navigate to="/home" replace />} />
<Route path="/home" element={<App />} />
<Route path="/ContactUs" element={<ContactUs />} />
<Route path="/About" element={<About />} />
<Route path="/products/:id" element={<ProductDetail />} /> </Routes> </BrowserRouter> </StrictMode>
);
