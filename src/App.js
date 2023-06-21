import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Header from './components/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  let home = <Home />;
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
