import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Admin from "./pages/Admin";
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;