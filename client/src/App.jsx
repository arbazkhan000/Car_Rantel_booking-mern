import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Index } from './components/Index';
import {Navbar} from './components/Navbar';
import { Footer } from './components/Footer';
import { Vehicles } from './components/Vehicles';
import { VehicleDetails } from './components/VehicleDetails';

function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element ={<Index />} />
        <Route path="/vehicles" element ={<Vehicles />} />
        <Route path="/vehicles/:id" element ={<VehicleDetails />} />


      </Routes>
      <Footer />
    </>
  )
}

export default App
