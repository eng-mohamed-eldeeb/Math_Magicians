import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Calculator from './component/Calculator';
import Home from './Home';
import Quote from './Quote';

const App = () => (
  <Router>
    <div className="navContaner">
      <nav className="nav">
        <h1>MATH</h1>
        <ul className="navLinks">
          <Link to="/Home">Home</Link>
          <Link to="/Calculator">Calculator</Link>
          <Link to="/Quote">Quote</Link>
        </ul>
      </nav>
    </div>
    <Routes>
      <Route path="Home" element={<Home />} />
      <Route path="Quote" element={<Quote />} />
      <Route path="Calculator" element={<Calculator />} />
    </Routes>
  </Router>
);

export default App;
