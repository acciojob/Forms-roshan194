import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Form from './Form';
import FormRef from './FormRef';
import FormState from './FormState';
import './App.css'; // Optional: for styling



const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/form" id="form-link">Form Layout</Link>
                        </li>
                        <li>
                            <Link to="/form-ref" id="form-ref-link">Form with useRef</Link>
                        </li>
                        <li>
                            <Link to="/form-state" id="form-state-link">Form with useState</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/form" component={Form} />
                    <Route path="/form-ref" component={FormRef} />
                    <Route path="/form-state" component={FormState} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;