import { useState, useRef } from "react";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'

const Home = () => {
    const [pickup, setPickup] = useState("");
    const [destination, setDestination] = useState("");
    const [panelOpen, setPanelOpne] = useState(false);

    const panelRef = useRef(null);
    const panelCloseRef = useRef(null);

    const submitHandler = (e) => {
        e.preventDefault();
    }

    useGSAP(function () {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: '70%'
            })
            gsap.to(panelCloseRef.current, {
                opacity: 1
            })
        }
        else {
            gsap.to(panelRef.current, {
                height: '0%'
            })
            gsap.to(panelCloseRef.current, {
                opacity: 0
            })
        }
    }, [panelOpen])

    return (
        <div className="h-screen w-screen relative" >
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
                            onClick={() => setPanelOpne(false)}
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
                                setPanelOpne(true)
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
                            onClick={() => setPanelOpne(true)}
                            className="w-full px-8 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </form>
                </div>

                <div ref={panelRef} className="bg-red-200">

                </div>

            </div>

        </div>
    )
}

export default Home 