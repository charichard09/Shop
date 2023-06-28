import './App.css';
import Home from './pages/home';
import Header from './components/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<Home />} />
        <Route path="/womens" element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;