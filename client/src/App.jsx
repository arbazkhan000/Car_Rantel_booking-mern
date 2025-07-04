import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Index } from "./components/Index";
import { Navbar } from "./components/Navbar";
import { VehicleDetails } from "./components/VehicleDetails";
import { Vehicles } from "./components/Vehicles";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/vehicles" element={<Vehicles />} />
                <Route path="/vehicles/:id" element={<VehicleDetails />} />

                {/* auth routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
