const VehiclePanel = ({setVehiclePanel, setConfirmRidePanel}) => {
    return (
        <div>
            <h5>
                <i
                    onClick={() => setVehiclePanel(false)}
                    className="ri-arrow-down-wide-line absolute top-2 right-2 text-2xl"
                >
                </i>
            </h5>

            <h4 className="text-xl font-semibold text-gray-800 mb-4">Choose a vehicle</h4>

            <div onClick={() => setConfirmRidePanel(true)} className="flex p-3 active:border-2 mb-2 active:border-black rounded-xl w-full items-center justify-between shadow-xl">
                <img className="h-18 w-18 rounded-full" src="https://i.pinimg.com/originals/14/57/e1/1457e11d2776bae50e365660ec7a0317.gif" alt="" />
                <div className='w-1/2'>
                    <h4 className="font-medium text-md">Cabi Car <span><i className="ri-user-3-line text-orange"></i>4</span></h4>
                    <h5>2min away</h5>
                    <p className="font-normal text-xs font-gray-600">Affordable, compact rides</p>
                </div>
                <h2 className='text-xl font-semibold'>Rs193</h2>
            </div>

            <div onClick={() => setConfirmRidePanel(true)} className="flex p-3 active:border-2 mb-2 active:border-black rounded-xl w-full items-center justify-between shadow-xl">
                <img className="h-18 w-18 rounded-full" src="https://i.pinimg.com/originals/a0/00/c9/a000c9389172ac9b0fd88bf83a855142.gif" alt="" />
                <div className='w-1/2'>
                    <h4 className="font-medium text-md">Coto <span><i className="ri-user-3-line text-orange"></i>4</span></h4>
                    <h5>2min away</h5>
                    <p className="font-normal text-xs font-gray-600">Affordable, compact rides</p>
                </div>
                <h2 className='text-xl font-semibold'>Rs193</h2>
            </div>

            <div onClick={() => setConfirmRidePanel(true)} className="flex p-3 active:border-2 mb-2 active:border-black rounded-xl w-full items-center justify-between shadow-xl">
                <img className="h-18 w-18 rounded-full" src="https://i.pinimg.com/originals/1b/09/f2/1b09f2fcb514a13829bbb57721a5404e.gif" alt="" />
                <div className='w-1/2'>
                    <h4 className="font-medium text-md">Cabikes <span><i className="ri-user-3-line text-orange"></i>4</span></h4>
                    <h5>2min away</h5>
                    <p className="font-normal text-xs font-gray-600">Affordable, compact rides</p>
                </div>
                <h2 className='text-xl font-semibold'>Rs193</h2>
            </div>
        </div>
    )
}

export default VehiclePanel