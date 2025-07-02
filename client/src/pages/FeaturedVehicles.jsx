import { useNavigate } from "react-router-dom";
import { VehiclesCard } from "../components/VehiclesCard";

export const FeaturedVehicles = () => {

  const navigate =useNavigate();
  // Placeholder data
 const vehicles = [
    {
      id: 1,
      brand: "BMW",
      model: "X5",
      year: 2006,
      type: "SUV",
      seats: 4,
      fuelType: "Hybrid",
      transmission: "Semi-Automatic",
      location: "New York",
      description:
        "The BMW X5 is a mid-size luxury SUV produced by BMW. The X5 made its debut in 1999 as the first SUV ever produced by BMW.",
      features: ["360 Camera", "Bluetooth", "GPS", "Heated Seats"],
      imageUrl: "https://imgs.search.brave.com/ALfzVnVbRiS5god1LouTORxMA4xiWSRoQ6ngT94XK9Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC83LzIv/OC81ODE4MDkwLTE5/MjB4MTIwMC1kZXNr/dG9wLWhkLWNvb2wt/Y2FyLWJhY2tncm91/bmQtcGhvdG8uanBn",
      pricePerDay: 120,
      isAvailable: true,
    },
    {
      id: 2,
      brand: "Mercedes-Benz",
      model: "E-Class",
      year: 2020,
      type: "Sedan",
      seats: 5,
      fuelType: "Petrol",
      transmission: "Automatic",
      location: "Los Angeles",
      description:
        "A luxury sedan known for comfort, technology, and smooth performance. The E-Class offers elegance and advanced driving features.",
      features: ["Bluetooth", "GPS", "Sunroof", "Ambient Lighting"],
      imageUrl: "https://imgs.search.brave.com/ALfzVnVbRiS5god1LouTORxMA4xiWSRoQ6ngT94XK9Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC83LzIv/OC81ODE4MDkwLTE5/MjB4MTIwMC1kZXNr/dG9wLWhkLWNvb2wt/Y2FyLWJhY2tncm91/bmQtcGhvdG8uanBn",
      pricePerDay: 160,
      isAvailable: true,
    },
    {
      id: 3,
      brand: "Audi",
      model: "Q7",
      year: 2018,
      type: "SUV",
      seats: 7,
      fuelType: "Diesel",
      transmission: "Automatic",
      location: "Chicago",
      description:
        "The Audi Q7 is a powerful, spacious SUV with premium design, high-tech cabin, and strong off-road capability.",
      features: ["360 Camera", "Heated Seats", "Panoramic Sunroof", "BOSE Sound"],
      imageUrl: "https://imgs.search.brave.com/ALfzVnVbRiS5god1LouTORxMA4xiWSRoQ6ngT94XK9Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC83LzIv/OC81ODE4MDkwLTE5/MjB4MTIwMC1kZXNr/dG9wLWhkLWNvb2wt/Y2FyLWJhY2tncm91/bmQtcGhvdG8uanBn",
      pricePerDay: 150,
      isAvailable: true,
    },
    {
      id: 4,
      brand: "Tesla",
      model: "Model S",
      year: 2022,
      type: "Sedan",
      seats: 5,
      fuelType: "Electric",
      transmission: "Automatic",
      location: "San Francisco",
      description:
        "The Tesla Model S is a fully electric luxury sedan with incredible acceleration, Autopilot features, and modern minimalist design.",
      features: [
        "Autopilot",
        "Touchscreen",
        "Heated Seats",
        "Wireless Charging",
      ],
      imageUrl: "https://imgs.search.brave.com/ALfzVnVbRiS5god1LouTORxMA4xiWSRoQ6ngT94XK9Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC83LzIv/OC81ODE4MDkwLTE5/MjB4MTIwMC1kZXNr/dG9wLWhkLWNvb2wt/Y2FyLWJhY2tncm91/bmQtcGhvdG8uanBn",
      pricePerDay: 180,
      isAvailable: true,
    },
    {
      id: 5,
      brand: "Range Rover",
      model: "Velar",
      year: 2019,
      type: "SUV",
      seats: 5,
      fuelType: "Petrol",
      transmission: "Automatic",
      location: "Miami",
      description:
        "The Range Rover Velar combines off-road prowess with refined styling and a luxurious cabin experience.",
      features: [
        "Touch Display",
        "All Wheel Drive",
        "Leather Seats",
        "Terrain Response",
      ],
      imageUrl: "https://imgs.search.brave.com/ALfzVnVbRiS5god1LouTORxMA4xiWSRoQ6ngT94XK9Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC83LzIv/OC81ODE4MDkwLTE5/MjB4MTIwMC1kZXNr/dG9wLWhkLWNvb2wt/Y2FyLWJhY2tncm91/bmQtcGhvdG8uanBn",
      pricePerDay: 170,
      isAvailable: true,
    },
    {
      id: 6,
      brand: "Porsche",
      model: "Cayenne",
      year: 2021,
      type: "SUV",
      seats: 5,
      fuelType: "Petrol",
      transmission: "Automatic",
      location: "Houston",
      description:
        "A performance-oriented luxury SUV that offers dynamic driving, sporty styling, and superior handling.",
      features: [
        "Sport Mode",
        "Navigation",
        "Leather Interior",
        "Adaptive Suspension",
      ],
      imageUrl: "https://imgs.search.brave.com/ALfzVnVbRiS5god1LouTORxMA4xiWSRoQ6ngT94XK9Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC83LzIv/OC81ODE4MDkwLTE5/MjB4MTIwMC1kZXNr/dG9wLWhkLWNvb2wt/Y2FyLWJhY2tncm91/bmQtcGhvdG8uanBn",
      pricePerDay: 200,
      isAvailable: true,
    },
  ];


  return (
     <section className="py-12 bg-[#f4f8fb]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#1e293b]">Featured Vehicles</h2>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {vehicles.map((vehicle, idx) => (
            <VehiclesCard key={idx} vehicles={vehicle} />
          ))}
        </div>

        <div className="flex items-center justify-center mt-10">
          <button onClick={() => navigate("/vehicles")} className="bg-[#1e293b] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition">
            Show All Vehicles
          </button>
        </div>
      </div>
    </section>
  );
}