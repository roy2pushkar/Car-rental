/* ==========================
   4. NAVBAR
   ========================== */

// components/Navbar.tsx
'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-600">RentMyCar</Link>
        <div className="space-x-6 hidden md:block">
          <Link href="/cars">Cars</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/service-area">Service Area</Link>
          <Link href="/about">About</Link>
          <Link href="/login" className="bg-indigo-600 text-white px-4 py-2 rounded-lg">Login</Link>
        </div>
      </div>
    </nav>
  )
}
