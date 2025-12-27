import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import SignUp from "./components/SignUp";


function App() {
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const [count, setCount] = useState(0);
  const [alert, setAlert] = useState(null);
  return (
    <>
      <NoteState>
        {/* it will provide the data to the compoent coming inside it */}
        <Router>
          <NavBar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home showAlert={showAlert} />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login showAlert={showAlert} />} />
              <Route
                path="/signup"
                element={<SignUp showAlert={showAlert} />}
                showAlert={showAlert}
              />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
