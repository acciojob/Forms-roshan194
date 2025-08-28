import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Form from "./components/Form";
import FormRef from "./components/FormRef";
import FormState from "./components/FormState";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <h1>React Form Handling</h1>
        <nav>
          <ul>
            <li>
              <Link id="form-link" to="/">Form Layout</Link>
            </li>
            <li>
              <Link id="form-ref-link" to="/form-ref">Form with useRef</Link>
            </li>
            <li>
              <Link id="form-state-link" to="/form-state">Form with useState</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/form-ref" element={<FormRef />} />
          <Route path="/form-state" element={<FormState />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
