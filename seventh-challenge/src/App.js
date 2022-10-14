import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import PageA from './pages/PageA';
import PageB from './pages/PageB';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a" element={<PageA />} />
        <Route path="/b" element={<PageB />} />
      </Routes>
    </Router>
  );
}

export default App;
