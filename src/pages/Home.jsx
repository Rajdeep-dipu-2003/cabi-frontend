import { useState, useRef } from "react";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
    const [pickup, setPickup] = useState("");
    const [destination, setDestination] = useState("");
    const [panelOpen, setPanelOpen] = useState(false);
    const [vehiclePanel, setVehiclePanel] = useState(false);
    const [confirmRidePanel, setConfirmRidePanel] = useState(false);
    const [vehicleFound, setVehicleFound] = useState(false);
    const [waitingForDriver, setWaitingForDriver] = useState(false);

    const panelRef = useRef(null);
    const panelCloseRef = useRef(null);
    const vehiclePanelRef = useRef(null);
    const confirmRidePanelRef = useRef(null);
    const vehicleFoundRef = useRef(null);
    const waitingForDriverRef = useRef(null);

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

    useGSAP(function () {
        if (confirmRidePanel) {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        }
        else {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [confirmRidePanel])

    useGSAP(function () {
        if (vehicleFound) {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(0)'
            })
        }
        else {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [vehicleFound])

    useGSAP(function () {
        if (waitingForDriver) {
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(0)'
            })
        }
        else {
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [waitingForDriver])


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
                <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
            </div>

            <div ref={confirmRidePanelRef} className='fixed w-full z-100 bottom-0 p-5 bg-white translate-y-full'>
                <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} setVehicleFound={setVehicleFound}/>
            </div>

            <div ref={vehicleFoundRef} className='fixed w-full z-100 bottom-0 p-5 bg-white translate-y-full'>
                <LookingForDriver setVehicleFound={setVehicleFound}/>
            </div>

            <div ref={waitingForDriverRef} className='fixed w-full z-100 bottom-0 p-5 bg-white translate-y-full'>
                <WaitingForDriver waitingForDriver={waitingForDriver}/>
            </div>
        </div>
    )
}

export default Home 