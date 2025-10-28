import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DonorRegistration from "./pages/DonorRegistration";
import UserLogin from "./pages/UserLogin";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/test-db")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((err) => {
        setMessage("❌ Frontend couldn't reach backend");
        console.error(err);
      });
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<DonorRegistration />} />
            <Route path="/login" element={<UserLogin />} />
          </Routes>
        </main>
        <Footer />
        {/* Backend connection status */}
        <div className="fixed bottom-4 left-4 bg-gray-800 text-white p-2 rounded shadow-lg text-sm">
          {message || "Connecting..."}
        </div>
      </div>
    </Router>
  );
}

export default App;
