const ConfirmRide = () => {
    return (
        <div>

            <h4 className="text-xl font-semibold text-gray-800 mb-4">Confirm Ride</h4>

            <div className="flex gap-4 justify-between flex-col items-center">
                <img className="h-50 w-50 rounded-full" src="https://i.pinimg.com/originals/14/57/e1/1457e11d2776bae50e365660ec7a0317.gif" alt="" />

                <div className="w-full ">
                    <div className="flex items-center gap-5 border-b-1 border-b-gray-300">
                        <i className="text-lg ri-map-pin-line"></i>
                        <div>
                            <h3 className="text-lg font-medium">456 Ocean Drive, Miami Beach, FL</h3>
                            <p className="text-sm text-gray-600" >Next to the Ocean</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 border-b-1 border-b-gray-300">
                        <i className="text-lg ri-map-pin-line"></i>
                        <div>
                            <h3 className="text-lg font-medium">456 Ocean Drive, Miami Beach, FL</h3>
                            <p className="text-sm text-gray-600" >Next to the Ocean</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 border-b-1 border-b-gray-300">
                        <i className="ri-wallet-3-line"></i>
                        <div>
                            <h3 className="text-lg font-medium">₹193</h3>
                            <p className="text-sm text-gray-600" >Cash</p>
                        </div>
                    </div>
                </div>

                <button className="w-full bg-green-400 text-white p-3 font-semibold rounded-lg" >Confirm</button>
            </div>

        </div>
    )
}

export default ConfirmRide