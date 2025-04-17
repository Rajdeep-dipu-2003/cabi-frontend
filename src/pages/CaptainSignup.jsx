import { Link } from "react-router-dom"
import { useState, useContext } from "react"
import { CaptainDataContext } from "../context/captainContext"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const CaptainSignup = () => {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [vehicleColor, setVehicleColor] = useState('')
    const [vehiclePlate, setVehiclePlate] = useState('')
    const [vehicleCapacity, setVehicleCapacity] = useState('')
    const [vehicleType, setVehicleType] = useState('')

    const navigate = useNavigate();

    const { captain, setCaptain } = useContext(CaptainDataContext);

    const submitHandler = async (e) => {
        e.preventDefault();

        const newCaptain = {
            fullname,
            email,
            password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType
            }
        };

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, newCaptain);

        if (response.status === 201) {
            const data = response.data;
            setCaptain(data.captain);
            localStorage.setItem("token", data.token);
            navigate('/captain-home');
        }

        setEmail('')
        setFullname('')
        setPassword('')
        setVehicleColor('')
        setVehiclePlate('')
        setVehicleCapacity('')
        setVehicleType('')
    }

    return (
        <div className="min-h-screen bg-white flex items-center justify-center relative">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 p-6">
                    <img src="/logo2.png" alt="" className="h-16 w-16 object-contain" />
                    <h1 className="text-5xl font-bold text-black">Cabi</h1>
                </div>

                <form onSubmit={submitHandler}>
                    {/* Personal Info */}
                    <div className="mb-4 mt-24">
                        <label htmlFor="fullname" className="block text-gray-700 mb-2">
                            Full Name
                        </label>
                        <input
                            id="fullname"
                            type="text"
                            required
                            value={fullname}
                            onChange={e => setFullname(e.target.value)}
                            placeholder="Enter your full name"
                            className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    {/* Vehicle Info */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Vehicle Information</h3>

                        <div className="mb-4">
                            <label htmlFor="color" className="block text-gray-700 mb-2">
                                Color
                            </label>
                            <input
                                id="color"
                                type="text"
                                required
                                value={vehicleColor}
                                onChange={e => setVehicleColor(e.target.value)}
                                placeholder="e.g. Red"
                                className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="plate" className="block text-gray-700 mb-2">
                                License Plate
                            </label>
                            <input
                                id="plate"
                                type="text"
                                required
                                value={vehiclePlate}
                                onChange={e => setVehiclePlate(e.target.value)}
                                placeholder="e.g. AB12XYZ"
                                className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="capacity" className="block text-gray-700 mb-2">
                                Capacity
                            </label>
                            <input
                                id="capacity"
                                type="number"
                                required
                                value={vehicleCapacity}
                                onChange={e => setVehicleCapacity(e.target.value)}
                                placeholder="Number of seats"
                                className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="vehicleType" className="block text-gray-700 mb-2">
                                Type
                            </label>
                            <select
                                id="vehicleType"
                                required
                                value={vehicleType}
                                onChange={e => setVehicleType(e.target.value)}
                                className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            >
                                <option value="" disabled>
                                    Select type
                                </option>
                                <option value="car">Car</option>
                                <option value="bike">Bike</option>
                                <option value="auto">Auto</option>
                            </select>
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition duration-300"
                    >
                        Create Captain Account
                    </button>

                    <p className="mt-6 text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link to="/captain-login" className="text-orange-500 hover:underline">
                            Login here
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );

}

export default CaptainSignup
