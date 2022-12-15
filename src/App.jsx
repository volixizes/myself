
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Anything from "./Anything";
import NoPage from "./NoPage";


function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/anything" element={<Anything />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
   

  );
}

export default App;
