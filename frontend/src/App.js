import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import AboutUs from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { useState } from "react";
import RefrshHandler from "./RefrshHandler";
import Footer from "./pages/Footer";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <AboutUs />
              <Services />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/profile"
          element={<PrivateRoute element={<Profile />} />}
        />
      </Routes>
    </div>
  );
}

export default App;
