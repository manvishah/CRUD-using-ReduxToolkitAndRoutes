import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Router>
        <ToastContainer />
        <Navbar />
        <Routes>
        <Route  path="/" element={<Home />}  />
          <Route  path="/add" element={<AddContact />} />
          <Route  path="/edit/:id" element={<EditContact />} />

        </Routes>
      </Router>
    </div>
  );
};

export default App;
