const LocationSearchPanel = ({setPanelOpen, setVehiclePanel}) => {
    const locations = [
        "150-West",
        "Somewhere near big-ben",
        "Chocolate Factory",
        "Grasslands in NewZeland"
    ]

    return (
        <div>

            {locations.map(function (loc, ind) {
                return (
                    <div 
                        key={ind}
                        onClick={() => {
                            console.log("Button clicked")
                            setVehiclePanel(true)
                            setPanelOpen(false)
                        }} 
                        className="flex items-center gap-3 bg-white p-2 mb-2 rounded-lg hover:bg-gray-400 cursor-pointer"
                    >
                        <h2 className="text-orange-500 text-2xl">
                            <i className="ri-map-pin-line"></i>
                        </h2>
                        <h4 className="text-gray-800 font-semibold text-lg">{loc}</h4>
                    </div>
                )
            })}

        </div>
    )
}

export default LocationSearchPanel;
