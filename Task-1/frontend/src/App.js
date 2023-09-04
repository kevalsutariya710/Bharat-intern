import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Nav from "./components/Nav";
import AddBlog from "./components/AddBlog";
import Contact from "./components/Contact";

function App() {
  return (

    <>
      <BrowserRouter>
        < Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addBlog" element={<AddBlog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
