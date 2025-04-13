import { Link } from "react-router-dom"
import { useState } from "react"

const UserSignup = () => {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        setUserData({ fullname, email, password });
        setFullname("");
        setEmail("");
        setPassword("");
    }

    return (
        <div className="min-h-screen bg-white flex items-center justify-center relative">
            <div className="w-full max-w-md bg-white p-8 rounded-lg">
                <div className="absolute top-8 left-1/2 transform -translate-x-3/5 flex items-center justify-center gap-2 p-6">
                    <img src="/logo2.png" alt="" className="h-16 w-16 object-contain" />
                    <h1 className="text-shadow-xl text-5xl text-center font-bold text-black">Cabi</h1>
                </div>

                <form onSubmit={(e) => submitHandler(e)}>
                    <div className="mb-4 mt-8">
                        <label className="block text-gray-700 mb-2" htmlFor="email">Full Name</label>
                        <input
                            required
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            type="text"
                            id="fullname"
                            placeholder="Enter your fullname"
                            className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                        <input
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                        <input
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition duration-300"
                    >
                        Log In
                    </button>

                    <p className="mt-6 text-center text-sm text-gray-600">
                        Already have an Account? <Link to="/login" className="text-orange-500 hover:underline">Login here</Link>
                    </p>
                </form>
            </div>
 
        </div>
    )
}

export default UserSignup
