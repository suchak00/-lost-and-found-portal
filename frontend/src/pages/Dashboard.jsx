import { useEffect, useState } from 'react'
import axios from 'axios'

function Dashboard() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:5000/auth/me', { withCredentials: true })
      .then(res => {
        setUser(res.data)
        setLoading(false)
      })
      .catch(() => {
        window.location.href = '/login'
      })
  }, [])

  const handleLogout = () => {
    window.location.href = 'http://localhost:5000/auth/logout'
  }

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-500">Loading...</p>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
        <h1 className="text-lg font-bold text-gray-800">Lost & Found Portal</h1>
        <div className="flex items-center gap-4">
          <img src={user?.avatar_url} alt={user?.name} className="w-8 h-8 rounded-full" />
          <span className="text-sm text-gray-700">{user?.name}</span>
          <button onClick={handleLogout} className="text-sm text-red-500 hover:underline">
            Logout
          </button>
        </div>
      </nav>
      <main className="max-w-4xl mx-auto mt-10 px-4">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Welcome, {user?.name} 👋
          </h2>
          <p className="text-gray-500 text-sm mb-6">What would you like to do today?</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition cursor-pointer">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="font-semibold text-gray-700">Report Lost Item</h3>
              <p className="text-sm text-gray-400 mt-1">I lost something and want to report it</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition cursor-pointer">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="font-semibold text-gray-700">Report Found Item</h3>
              <p className="text-sm text-gray-400 mt-1">I found something and want to return it</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard