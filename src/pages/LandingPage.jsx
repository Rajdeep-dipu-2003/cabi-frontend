import { Link } from "react-router-dom"

const LandingPage = () => {
    return ( 
        <div>
            <div
                className="h-screen w-full flex items-end bg-center bg-cover"
                style={{ backgroundImage: "url(https://i.pinimg.com/736x/9f/d2/75/9fd27593af905e25b7b2b08885cec1ab.jpg)" }}
            >
                <div className="absolute top-0 left-0 flex items-center gap-2 p-6">
                    <img src="/logo2.png" alt="" className="h-8 w-8 object-contain" />
                    <h1 className="text-shadow-xl text-3xl font-bold text-white">Cabi</h1>
                </div>

                <div className="w-full flex flex-col items-center justify-center py-5 bg-white rounded-2xl shadow-lg">
                    <h1 className="text-4xl font-bold text-black mb-4 drop-shadow-md">Get Your Cabi ✨</h1>
                    <Link 
                        to="/login"
                        className="inline-block px-8 py-2 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-xl hover:bg-blue-700 hover:scale-105 transition duration-300 ease-in-out"
                    >
                        Continue
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage