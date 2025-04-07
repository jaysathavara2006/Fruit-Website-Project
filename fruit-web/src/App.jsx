

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Ourmenu from "./Component/Ourmenu";
import Brandinfo from "./Component/Brandinfo";
import Onlinestore from "./Component/Onlinestore";
import Footer from "./Component/Footer";
import Freshfruit from "./Component/Freshfruit";
import Cart from "./Component/Cart";
import list from "./Component/data";
import Contact from "./Component/Contact";

function App() {
  const [productid, setProductid] = useState("");
  const [cartallpr, setCartallpr] = useState([]);

  useEffect(() => {
    const filterobj = list.filter((product) => product.id == productid);
    setCartallpr([...cartallpr, ...filterobj]);
  }, [productid]);
 

  return (
    <>
      <Navbar cartallpr={cartallpr} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Ourmenu setProductid={setProductid} />
              <Brandinfo />
              <Onlinestore />
              <Freshfruit />
              <Contact />
            </> 
          }
        />
        <Route path='/hero' element={ <>
              <Hero />
              <Ourmenu setProductid={setProductid} />
              <Brandinfo />
              <Onlinestore />
              <Freshfruit />
              <Contact />
            </> }/>      
        <Route path="/our" element={<Ourmenu setProductid={setProductid} />} />
        <Route path="/about" element={<Brandinfo />} />
        <Route path="/shop" element={<Onlinestore />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cartallpr={cartallpr} setCartallpr={setCartallpr} />} />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
