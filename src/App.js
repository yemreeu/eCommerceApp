import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Navbar } from "./components/Navbar/Navbar"
import "./App.css"
import { Shop } from './pages/shop/Shop';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
