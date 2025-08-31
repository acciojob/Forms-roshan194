import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Form from './Form.js';
import FormRef from './FormRef.js';
import FormState from './FormState.js';

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto p-4">
        <nav className="flex justify-center space-x-4 mb-8">
          <Link id="form-link" to="/" className="text-blue-500 hover:underline">Basic Form</Link>
          <Link id="form-ref-link" to="/ref" className="text-blue-500 hover:underline">Form with useRef</Link>
          <Link id="form-state-link" to="/state" className="text-blue-500 hover:underline">Form with useState</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/ref" element={<FormRef />} />
          <Route path="/state" element={<FormState />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;