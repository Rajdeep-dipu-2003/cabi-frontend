import { Link } from "react-router-dom"

const CaptainHome = () => {
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

            <div className="h-4/6">
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

            <div className="h-2/6 p-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start  gap-2">
                        <img className="h-10 w-10 rounded-full object-cover " src="https://i.pinimg.com/736x/23/2a/2f/232a2febbb2507dc3af33bbc8e9715ba.jpg" alt="" />
                        <h4 className="text-lg font-medium">Jasper</h4>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold">₹20000</h4>
                        <p clfont-mediumassName="text-sm text-gray-600">Earned</p>
                    </div>
                </div>

                <div className="flex p-3 bg-gray-50 my-5 rounded-xl justify-center gap-5 items-start ">
                    <div className="text-center">
                        <i className="text-2xl font-thin  ri-time-line"></i>
                        <h5 className="text-lg font-medium">10.2</h5>
                        <p className="text-sm text-gray-600">Hours Online</p>
                    </div>
                    <div className="text-center">
                        <i className="text-2xl font-thin  ri-speed-up-fill"></i>
                        <h5 className="text-lg font-medium">23</h5>
                        <p className="text-sm text-gray-600">Km Driver</p>
                    </div>
                    <div className="text-center">
                        <i className="text-2xl font-thin  ri-booklet-line"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaptainHome