import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Explore from "./pages/Menu/Explore";
import Menu1 from "./pages/Menu/Menu1";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import Signup from "./pages/Authentication/Signup";
import Login from "./pages/Authentication/Login";
import Forgot from "./pages/Authentication/Forgot";
import Footer from "./components/Home/Footer";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/menu/explore" element={<Explore />}></Route>
          <Route path="/menu/menu1" element={<Menu1 />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgot" element={<Forgot />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
