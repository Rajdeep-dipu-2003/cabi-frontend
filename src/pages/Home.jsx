import { useState, useRef } from "react";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
    const [pickup, setPickup] = useState("");
    const [destination, setDestination] = useState("");
    const [panelOpen, setPanelOpen] = useState(false);
    const [vehiclePanel, setVehiclePanel] = useState(false);

    const panelRef = useRef(null);
    const panelCloseRef = useRef(null);
    const vehiclePanelRef = useRef(null);

    const submitHandler = (e) => {
        e.preventDefault();
    }

    useGSAP(function () {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: '70%',
                padding: '20'
            })
            gsap.to(panelCloseRef.current, {
                opacity: 1
            })
        }
        else {
            gsap.to(panelRef.current, {
                height: '0%',
                padding: '0'
            })
            gsap.to(panelCloseRef.current, {
                opacity: 0
            })
        }
    }, [panelOpen])

    useGSAP(function () {
        if (vehiclePanel) {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(0)'
            })
        }
        else {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [vehiclePanel])

    return (
        <div className="h-screen w-screen relative overflow-hidden" >
            <div className="absolute top-0 left-0 flex items-center gap-2 p-4 z-1">
                <img src="/logo2.png" alt="" className="h-8 w-8 object-contain" />
                <h1 className="text-shadow-xl text-3xl font-bold text-black">Cabi</h1>
            </div>

            <div className="h-full w-full">
                <img
                    className="h-full w-full object-fill"
                    src="https://i.pinimg.com/736x/25/78/7c/25787cddc4cfc50ee363395317bf131a.jpg"
                    alt="map"
                    style={{
                        transform: "translateY(-50px)",
                        height: "calc(100% + 50px)"
                    }}
                />
            </div>

            <div className="flex flex-col justify-end absolute top-0 h-full w-full z-2">
                <div className="h-[30%] p-5 shadow-md rounded-b-2xl bg-white relative">
                    <h5 ref={panelCloseRef} className='opacity-0'>
                        <i
                            onClick={() => setPanelOpen(false)}
                            className="ri-arrow-down-wide-line absolute top-2 right-2 text-2xl"
                        >
                        </i>
                    </h5>

                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Find a Trip</h4>
                    <form
                        onSubmit={(e) => submitHandler(e)}
                        className="flex flex-col gap-4 relative"
                    >
                        <div className="line absolute h-20 w-1 top-[16%] left-5 bg-black rounded-full"></div>

                        <input
                            type="text"
                            required
                            placeholder="Add a pick-up location"
                            value={pickup}
                            onChange={(e) => setPickup(e.target.value)}
                            onClick={() => {
                                setPanelOpen(true)
                                console.log("Clicked")
                            }}
                            className="w-full px-8 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />

                        <input
                            type="text"
                            required
                            placeholder="Enter your destination"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            onClick={() => setPanelOpen(true)}
                            className="w-full px-8 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </form>
                </div>

                <div ref={panelRef} className="bg-white">
                    <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
                </div>

            </div>

            <div ref={vehiclePanelRef} className='fixed w-full z-100 bottom-0 p-5 bg-white translate-y-full'>

                <h5>
                    <i
                        onClick={() => setVehiclePanel(false)}
                        className="ri-arrow-down-wide-line absolute top-2 right-2 text-2xl"
                    >
                    </i>
                </h5>

                <h4 className="text-xl font-semibold text-gray-800 mb-4">Choose a vehicle</h4>

                <div className="flex p-3 active:border-2 mb-2 active:border-black rounded-xl w-full items-center justify-between shadow-xl">
                    <img className="h-18 w-18 rounded-full" src="https://i.pinimg.com/originals/14/57/e1/1457e11d2776bae50e365660ec7a0317.gif" alt="" />
                    <div className='w-1/2'>
                        <h4 className="font-medium text-md">Cabi Car <span><i className="ri-user-3-line text-orange"></i>4</span></h4>
                        <h5>2min away</h5>
                        <p className="font-normal text-xs font-gray-600">Affordable, compact rides</p>
                    </div>
                    <h2 className='text-xl font-semibold'>Rs193</h2>
                </div>

                <div className="flex p-3 active:border-2 mb-2 active:border-black rounded-xl w-full items-center justify-between shadow-xl">
                    <img className="h-18 w-18 rounded-full" src="https://i.pinimg.com/originals/a0/00/c9/a000c9389172ac9b0fd88bf83a855142.gif" alt="" />
                    <div className='w-1/2'>
                        <h4 className="font-medium text-md">Coto <span><i className="ri-user-3-line text-orange"></i>4</span></h4>
                        <h5>2min away</h5>
                        <p className="font-normal text-xs font-gray-600">Affordable, compact rides</p>
                    </div>
                    <h2 className='text-xl font-semibold'>Rs193</h2>
                </div>

                <div className="flex p-3 active:border-2 mb-2 active:border-black rounded-xl w-full items-center justify-between shadow-xl">
                    <img className="h-18 w-18 rounded-full" src="https://i.pinimg.com/originals/1b/09/f2/1b09f2fcb514a13829bbb57721a5404e.gif" alt="" />
                    <div className='w-1/2'>
                        <h4 className="font-medium text-md">Cabikes <span><i className="ri-user-3-line text-orange"></i>4</span></h4>
                        <h5>2min away</h5>
                        <p className="font-normal text-xs font-gray-600">Affordable, compact rides</p>
                    </div>
                    <h2 className='text-xl font-semibold'>Rs193</h2>
                </div>

            </div>
        </div>
    )
}

export default Home 