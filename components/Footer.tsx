/* ==========================
   9. FOOTER
   ========================== */

// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold text-white">RentMyCar</h3>
          <p className="text-sm">Trusted car rental service across India</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Company</h4>
          <p>About Us</p>
          <p>Service Area</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Support</h4>
          <p>Reviews</p>
          <p>Contact</p>
        </div>
      </div>
    </footer>
  )
}