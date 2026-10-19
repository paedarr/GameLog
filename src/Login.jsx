// import { useEffect, useState } from 'react'

function Login() {
return (
    <div className="login-page flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <div className="login-container flex flex-col items-center justify-center rounded-lg bg-slate-800 p-8 shadow-lg">
        <h1 className="mb-6 text-3xl font-bold">Login</h1>
        <form className="flex w-full max-w-sm flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full rounded border border-gray-300 bg-slate-700 px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded border border-gray-300 bg-slate-700 px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
)
}

export default Login