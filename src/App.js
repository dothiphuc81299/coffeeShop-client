import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './App.scss';
import Header from './users/components/ui/Header';
import Footer from './users/components/ui/Footer';
import HomePage  from './learn/pages/HomePage';
import Routes from "./routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ToastContainer />
        <Routes />

       {/* // <HomePage/> */}
        <Footer />
       </div>
     </Router>
  );

}

export default App;
