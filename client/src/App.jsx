import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SignUP from "./pages/SignUP";
import Header from "./components/Header";
import PrivateRoute from './components/PrivateRoute';
import CreateListing from "./pages/CreateListing";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      {/* for router install pakage (npm i react-router-dom) */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path='/create-listing' element={<CreateListing />} />

        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUP />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
