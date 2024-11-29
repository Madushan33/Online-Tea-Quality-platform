import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import TeaFactories from './pages/Tea factories/TeaFactories';
import Chemicals from './pages/chemicalFactories/Chemicals';
import Fertilizers from './pages/FertilizerF/Fertilizers';
import BabyTeaPlants from './pages/Baby tea plants/BabyTeaPlants';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Navbar/Footer/Footer';
import Login from './pages/login/Login';
import Register from './pages/Register/Register';
import TeaFactoryRegister from './pages/Tea factories/TeaFactoryRegister';

function App() {
  return (
    <Router>
      <Navbar/>
     <div>
        {/* Define routes for each page */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tea-factories" element={<TeaFactories />} />
          <Route path="/fertilizers" element={<Fertilizers />} />
          <Route path="/chemicals" element={<Chemicals />} />
          <Route path="/baby-tea-plants" element={<BabyTeaPlants />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/Tregister" element={<TeaFactoryRegister/>} />




        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}



export default App;