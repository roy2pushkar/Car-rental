import { cars } from "@/lib/data"
import RatingStars from "@/components/RatingStars"
"

type PageProps = {
  params: { id: string }
}

export default async function CarDetailsPage({ params }: PageProps) {
  // params is a Promise in App Router
  const id = await params.id // unwrap the promise
  const car = cars.find(c => c.id === id)

  if (!car) {
    return <div className="p-10 text-center">Car not found</div>
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
      {/* IMAGE */}
      <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-[420px] object-cover"
        />
      </div>

      {/* DETAILS */}
      <div>
        <h1 className="text-4xl font-bold">{car.name}</h1>
        <p className="text-gray-500 mt-1">Model {car.model}</p>

        <div className="mt-3">
          <RatingStars rating={car.rating} />
        </div>

        <div className="mt-6 space-y-2 text-sm">
          <p>🚗 Seater: <strong>{car.seater}</strong></p>
          <p>🧑‍✈️ Driver Experience: <strong>{car.driverExperience}</strong></p>
          <p>📍 Distance Included: <strong>{car.distanceIncluded}</strong></p>
        </div>

        <div className="mt-6 flex items-center gap-6">
          <span className="text-3xl font-bold text-indigo-600">
            ₹{car.pricePerDay}/day
          </span>

          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl transition">
            Rent Now
          </button>
        </div>

        {car.topChoice && (
          <span className="inline-block mt-4 text-green-600 font-semibold">
            ⭐ Top Customer Choice
          </span>
        )}
      </div>
    </div>
  )
}
