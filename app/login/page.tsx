/* ==========================
   7. LOGIN PAGE UI
   ========================== */

// app/login/page.tsx
export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-2xl shadow w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <input className="w-full mb-4 p-3 border rounded-lg" placeholder="Email" />
        <input className="w-full mb-4 p-3 border rounded-lg" placeholder="Password" type="password" />
        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg">Sign In</button>
      </div>
    </div>
  )
}