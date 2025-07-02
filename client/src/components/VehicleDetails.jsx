import { Calendar } from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const VehicleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

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

  const car = vehicles.find((v) => String(v.id) === String(id));

  if (!car) {
    return <div className="text-center py-20 text-xl">Vehicle not found.</div>;
  }

  return (
    <div className="min-h-screen py-10 px-2 md:px-8 bg-[#f4f8fb]">
      {/* Back link */}
      <button
        className="flex items-center gap-2 text-gray-600 hover:text-blue-700 mb-6 text-base"
        onClick={() => navigate(-1)}
      >
        <span className="text-xl">&#8592;</span> Back to all cars
      </button>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Image */}
        <div className="md:col-span-2">
          <img
            src={car.imageUrl}
            alt={car.brand + ' ' + car.model}
            className="w-full rounded-2xl object-cover aspect-video mb-4 shadow"
          />
        </div>
        {/* Booking Card */}
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col justify-between min-h-[340px]">
          <div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-bold">${car.pricePerDay}</span>
              <span className="text-gray-400 text-sm">per day</span>
            </div>
            <hr className="my-4" />
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Pickup Date</label>
              <div className="relative">
                <input
                  type="date"
                  value={pickupDate}
                  onChange={e => setPickupDate(e.target.value)}
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-1">Return Date</label>
              <div className="relative">
                <input
                  type="date"
                  value={returnDate}
                  onChange={e => setReturnDate(e.target.value)}
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition mb-2">Book Now</button>
            <div className="text-xs text-gray-400 text-center">No credit card required to reserve</div>
          </div>
        </div>
      </div>
      {/* Car Name and Details */}
      <div className="max-w-6xl mx-auto mt-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{car.brand} {car.model}</h1>
        <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
          <span>{car.year}</span>
          <span>{car.type}</span>
          <span>{car.seats} Seats</span>
          <span>{car.fuelType}</span>
          <span>{car.transmission}</span>
          <span>{car.location}</span>
        </div>
        <p className="text-gray-700 mb-4 max-w-2xl">{car.description}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {car.features.map((feature, idx) => (
            <span key={idx} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">{feature}</span>
          ))}
        </div>
      </div>
    </div>
  );
}