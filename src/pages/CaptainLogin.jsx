import { Link } from "react-router-dom"
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { CaptainDataContext } from "../context/captainContext";

const CaptainLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const {captain, setCaptain} = useContext(CaptainDataContext);

    const submitHandler = async (e) => {
        e.preventDefault();

        const captain = {
            email, password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);

        if (response.status === 200) {
            const data = response.data;

            setCaptain(data.captain);
            localStorage.setItem('token', data.token);
            navigate('/captain-home');
        }

        setEmail("");
        setPassword("");
    }
    
    return (
        <div className="min-h-screen bg-white flex items-center justify-center relative">
            <div className="w-full max-w-md bg-white p-8 rounded-lg">
                <div className="absolute top-13 left-1/2 transform -translate-x-3/5 flex items-center justify-center gap-2 p-6">
                    <img src="/logo2.png" alt="" className="h-16 w-16 object-contain" />
                    <h1 className="text-shadow-xl text-5xl text-center font-bold text-black">Cabi</h1>
                </div>

                <form onSubmit={(e) => submitHandler(e)}>
                    <div className="mb-4 mt-8">
                        <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                        <input
                            required
                            value = {email}
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
                        New Captain? <Link to="/captain-singup" className="text-orange-500 hover:underline">Register here</Link>
                    </p>
                </form>
            </div>

            {/* Sign in as Captain Button */}
            <div className="absolute bottom-6 w-full flex justify-center">
                <Link to="/login">
                    <button className="px-6 py-3 bg-green-100 text-green-700 font-medium rounded-md shadow hover:bg-orange-200 transition">
                        Sign in as User
                    </button>
                </Link>
            </div>
        </div> 
    )
}

export default CaptainLogin