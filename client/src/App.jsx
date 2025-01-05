import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SignUP from "./pages/SignUP";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      {/* for router install pakage (npm i react-router-dom) */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUP" element={<SignUP />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
