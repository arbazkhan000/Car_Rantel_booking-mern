import { Calendar, MapPin, Search } from "lucide-react";
import CarImage from '../assets/new_car.png'

export const HeroSection = () => {
  return (
    <section className="bg-[#f4f8fb] relative min-h-[60vh] flex flex-col items-center justify-center w-full pb-16 px-4">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mt-8 mb-6 leading-tight text-[#1e293b]">
        Luxury Cars on Rent 
      </h1>

      {/* Form Container */}
      <div className="relative w-full max-w-5xl z-10">
        <div className="backdrop-blur-md bg-white/90 border border-gray-200 rounded-full shadow-xl flex flex-col md:flex-row items-stretch md:items-end gap-4 px-6 py-6 md:py-5 md:px-8">
          {/* Pickup Location */}
          <div className="flex flex-col flex-1 min-w-[180px]">
            <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
              <MapPin className="text-blue-600 w-4 h-4" />
              Pickup Location
            </label>
            <select className="p-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
              <option value="">Please select location</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
            </select>
          </div>

          {/* Pick-up Date */}
          <div className="flex flex-col flex-1 min-w-[150px]">
            <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
              <Calendar className="text-blue-600 w-4 h-4" />
              Pick-up Date
            </label>
            <input
              type="date"
              className="p-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Return Date */}
          <div className="flex flex-col flex-1 min-w-[150px]">
            <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
              <Calendar className="text-blue-600 w-4 h-4" />
              Return Date
            </label>
            <input
              type="date"
              className="p-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Search Button */}
          <button className="flex items-center justify-center gap-2 bg-[#1E293B] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition-all w-full md:w-auto">
            <Search className="w-5 h-5" /> Search
          </button>
        </div>
      </div>

      {/* Car Image */}
      <div className="w-full flex justify-center mt-[-60px] md:mt-[-90px] z-0 pointer-events-none select-none">
        <img
          src={CarImage}
          alt="Luxury Car"
          className="w-[90vw] max-w-3xl object-contain drop-shadow-xl"
          draggable="false"
        />
      </div>
    </section>
  );
};
