import { Link } from "react-router-dom"

const CaptainRiding = () => {
    return (
        <div className="h-screen">

            <div>
                <div className="absolute top-0 left-0 flex items-center gap-2 p-4 z-1">
                    <img src="/logo2.png" alt="" className="h-8 w-8 object-contain" />
                    <h1 className="text-shadow-xl text-3xl font-bold text-black">Cabi</h1>
                </div>
                <Link to='/home' className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full z-10">
                    <i className="ri-logout-circle-r-line"></i>
                </Link>
            </div>

            <div className="h-5/6">
                <img
                    className="h-1/2 w-full object-fill"
                    src="https://i.pinimg.com/736x/25/78/7c/25787cddc4cfc50ee363395317bf131a.jpg"
                    alt="map"
                    style={{
                        transform: "translateY(-50px)",
                        height: "calc(100% + 50px)"
                    }}
                />
            </div>



            <div className="h-1/6 p-6 relative bg-yellow-500 rounded-t-xl shadow-md flex items-center justify-between">
                <i className="ri-arrow-up-wide-line absolute top-1 left-[48%] text-black text-2xl"></i>

                <h4 className="text-xl font-semibold text-white">4 min away</h4>

                <button className="bg-green-600 hover:bg-green-700 transition text-white font-semibold py-2 px-6 rounded-lg shadow">
                    Complete Ride
                </button>
            </div>


        </div>
    )
}

export default CaptainRiding