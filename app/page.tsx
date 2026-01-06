/* ==========================
   5. HOME PAGE
   ========================== */

// app/page.tsx
import { cars } from '@/lib/data'
import CarCard from '@/components/CarCard'

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">Book Your Perfect Ride 🚗</h1>
      <p className="text-gray-600 mb-8">Affordable, reliable & comfortable cars</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cars.map(car => <CarCard key={car.id} car={car} />)}
      </div>
    </section>
  )
}