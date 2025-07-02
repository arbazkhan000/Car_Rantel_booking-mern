import { useNavigate } from "react-router-dom";

export const VehiclesCard = ({ vehicles }) => {

  const navigate =useNavigate();
  return (
    <div onClick={() => navigate(`/vehicles/${vehicles.id}`)}  className="w-full bg-white rounded-xl shadow-md p-4 flex flex-col hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="w-full aspect-video overflow-hidden rounded-lg mb-3 relative">
        <img
          src={vehicles.imageUrl}
          alt={`${vehicles.brand} ${vehicles.model}`}
          className="object-cover w-full h-full"
        />
        {/* Price overlay */}
        <div className="absolute bottom-2 right-2 bg-[#1e293b] bg-opacity-90 text-white font-semibold text-xs px-3 py-1 rounded-lg shadow">
          ${vehicles.pricePerDay} / day
        </div>
      </div>

      {/* Availability and Meta */}
      <div className="flex justify-between items-center mb-1">
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full ${
            vehicles.isAvailable ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {vehicles.isAvailable ? "Available" : "Unavailable"}
        </span>
        <span className="text-xs text-gray-500">
          {vehicles.year} • {vehicles.type}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-base font-bold text-center mb-1 text-[#1e293b]">
        {vehicles.brand} {vehicles.model}
      </h3>

      {/* Location */}
      <p className="text-sm text-gray-500 text-center mb-2">{vehicles.location}</p>

      {/* Description */}
      <p className="text-gray-600 text-sm text-center mb-3 line-clamp-2 md:line-clamp-3">
        {vehicles.description}
      </p>

      {/* Features */}
      <div className="flex flex-wrap justify-center gap-2 mb-3">
        {vehicles.features?.map((feature, idx) => (
          <span
            key={idx}
            className="bg-[#1e293b] text-white text-xs px-2 py-1 rounded-full"
          >
            {feature}
          </span>
        ))}
      </div>
    </div>
  );
};
