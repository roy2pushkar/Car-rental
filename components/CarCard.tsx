/* ==========================
   6. CAR CARD COMPONENT
   ========================== */

// components/CarCard.tsx
import Link from "next/link"
import RatingStars from "./RatingStars"

export default function CarCard({ car }: any) {
  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition overflow-hidden">
      
      <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-3">
        <img
          src={car.image}
          alt={car.name}
          className="h-44 w-full object-cover rounded-2xl"
        />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold">{car.name}</h3>
        <p className="text-gray-500 text-sm">
          Model {car.model} • {car.seater} Seater
        </p>

        <RatingStars rating={car.rating} />

        <div className="mt-3 text-sm text-gray-600">
          🚕 {car.driverExperience} driver<br />
          📍 {car.distanceIncluded}
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-indigo-600">
            ₹{car.pricePerDay}/day
          </span>

          <Link
            href={`/cars/${car.id}`}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl"
          >
            Rent
          </Link>
        </div>

        {car.topChoice && (
          <p className="text-xs mt-2 text-green-600 font-semibold">
            ⭐ Top Customer Choice
          </p>
        )}
      </div>
    </div>
  )
}
