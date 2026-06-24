import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { Contact } from "./components/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    
    </>
    
  );
}

export default App;
