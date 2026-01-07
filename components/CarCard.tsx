import RatingStars from "@/components/RatingStars"
import { cars } from "@/lib/data"
import Image from "next/image"

type FeatureProps = {
  label: string
  value: string
}

function Feature({ label, value }: FeatureProps) {
  return (
    <div className="rounded-2xl bg-white/10 px-4 py-4 border border-white/20 text-center">
      <p className="text-xs uppercase tracking-wide text-gray-400">
        {label}
      </p>
      <p className="mt-1 text-lg font-semibold text-white">
        {value}
      </p>
    </div>
  )
}

type Car = typeof cars[number]

type Props = {
  car: Car
}

export default function CarCard({ car }: Props) {
  return (
    <section className="relative bg-gradient-to-br from-[#0b1220] via-[#0f172a] to-[#020617] px-6 py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT – IMAGE */}
        <div className="relative flex justify-center">
          <div className="absolute -inset-10 bg-indigo-600/20 blur-3xl rounded-full" />

          <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <Image
              src={car.image}
              alt={car.name}
              width={720}
              height={460}
              className="object-cover w-full h-[380px]"
              priority
            />
          </div>
        </div>

        {/* RIGHT – DETAILS */}
        <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-10 shadow-xl text-white">

          {car.topChoice && (
            <span className="inline-flex items-center gap-2 mb-4 rounded-full bg-emerald-500/20 px-4 py-1 text-sm text-emerald-400">
              ⭐ Top Customer Choice
            </span>
          )}

          <h1 className="text-4xl font-extrabold leading-tight">
            {car.name}
          </h1>
          <p className="mt-1 text-gray-300">
            Model {car.model}
          </p>

          <div className="mt-4">
            <RatingStars rating={car.rating} />
          </div>

          {/* DIVIDER */}
          <div className="my-8 h-px w-full bg-white/10" />

          {/* FEATURES */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Feature label="Seats" value={`${car.seater}`} />
            <Feature label="Driver Exp" value={car.driverExperience} />
            <Feature label="Distance" value={`${car.distanceIncluded} km`} />
            <Feature label="Fuel" value="Included" />
          </div>

          {/* PRICE + CTA */}
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="text-sm text-gray-400">
                Starting from
              </p>
              <p className="text-4xl font-bold text-indigo-400">
                ₹{car.pricePerDay}
                <span className="text-base text-gray-400"> /day</span>
              </p>
            </div>

            <button className="relative overflow-hidden rounded-2xl bg-indigo-600 px-10 py-4 font-semibold shadow-lg transition hover:bg-indigo-700">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
