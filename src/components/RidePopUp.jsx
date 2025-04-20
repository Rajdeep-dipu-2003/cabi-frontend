


const RidePopUp = ({ setRidePopUpPenel, setConfirmRidePopUpPenel }) => {

    return (
        <div className="bg-white rounded-xl p-4 shadow-lg space-y-6">
            <h5>
                <i
                    onClick={() => setRidePopUpPenel(false)}
                    className="ri-arrow-down-wide-line absolute top-2 right-2 text-2xl"
                >
                </i>
            </h5>

            <h4 className="text-xl font-semibold text-orange-500">New Ride Available</h4>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <img
                        className="h-16 w-16 rounded-full object-cover"
                        src="https://i.pinimg.com/736x/23/2a/2f/232a2febbb2507dc3af33bbc8e9715ba.jpg"
                        alt="Driver"
                    />
                    <h2 className="text-lg font-semibold text-gray-800">Jolly</h2>
                </div>
                <h5 className="text-orange-500 text-sm font-medium">2.2 KM</h5>
            </div>

            <div className="w-full space-y-4">
                <div className="flex items-center gap-5 border-b border-gray-300 pb-2">
                    <i className="text-xl text-orange-500 ri-map-pin-line"></i>
                    <div>
                        <h3 className="text-lg font-medium text-gray-800">456 Ocean Drive, Miami Beach, FL</h3>
                        <p className="text-sm text-gray-500">Next to the Ocean</p>
                    </div>
                </div>

                <div className="flex items-center gap-5 border-b border-gray-300 pb-2">
                    <i className="text-xl text-orange-500 ri-map-pin-line"></i>
                    <div>
                        <h3 className="text-lg font-medium text-gray-800">456 Ocean Drive, Miami Beach, FL</h3>
                        <p className="text-sm text-gray-500">Next to the Ocean</p>
                    </div>
                </div>

                <div className="flex items-center gap-5 border-b border-gray-300 pb-2">
                    <i className="text-xl text-orange-500 ri-wallet-3-line"></i>
                    <div>
                        <h3 className="text-lg font-medium text-gray-800">₹193</h3>
                        <p className="text-sm text-gray-500">Cash</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <button
                    onClick={() => {
                        setConfirmRidePopUpPenel(true)
                    }}
                    className="w-full bg-orange-500 hover:bg-orange-600 transition text-white p-3 font-semibold rounded-lg"
                >
                    Accept
                </button>

                <button
                    onClick={() => {
                        setRidePopUpPenel(false)
                    }}
                    className="w-full bg-white text-orange-500 border border-orange-400 hover:bg-orange-50 transition p-3 font-semibold rounded-lg"
                >
                    Ignore
                </button>
            </div>
        </div>

    )
}

export default RidePopUp