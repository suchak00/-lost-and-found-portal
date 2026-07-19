import { API_URL } from '../config';
function Login() {
  const handleLogin = () => {
    window.location.href = `${API_URL}/auth/google`
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-md p-10 flex flex-col items-center gap-6 w-full max-w-sm">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Lost & Found Portal</h1>
          <p className="text-gray-500 text-sm mt-1">Sign in to report or find lost items</p>
        </div>
        <button
          onClick={handleLogin}
          className="flex items-center gap-3 bg-white border border-gray-300 rounded-lg px-6 py-3 text-gray-700 font-medium shadow-sm hover:shadow-md transition w-full justify-center"
        >
          <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
          Sign in with Google
        </button>
        <p className="text-xs text-gray-400 text-center">
          Your photos are private and never shown publicly
        </p>
      </div>
    </div>
  )
}

export default Login