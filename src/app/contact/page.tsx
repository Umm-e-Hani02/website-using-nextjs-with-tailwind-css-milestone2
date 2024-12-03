import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faClock, faPhone, faEnvelope, faTruck } from "@fortawesome/free-solid-svg-icons";

export default function Contact(){
    return(
        <section className="bg-purple-300 flex flex-col lg:flex-row">
            <div className="p-10 lg:p-24 lg:w-1/2">
            <h1 className="text-black text-center font-bold text-3xl pt-9 lg:pt-0">Contact</h1>
            <div className="mt-8">
                
            <div className="bg-fuchsia-950 p-3 mb-10 rounded-2xl flex cursor-pointer hover:scale-110 duration-200">
                <p className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faLocationDot} className="h-7"/>
                    123 Main St, Karachi
                </p>
            </div>
            <div className="w-full bg-fuchsia-950 p-3 mb-10 rounded-2xl flex cursor-pointer hover:scale-110 duration-200">
                <p className="flex items-center gap-3 break-all">
                    <FontAwesomeIcon icon={faEnvelope} className="h-7"/> 
                    dessertstop1105@gmail.com
                </p>
            </div>
            <div className="bg-fuchsia-950 p-3 mb-10 rounded-2xl flex cursor-pointer hover:scale-110 duration-200">
                <p className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faClock} className="h-7"/> 
                    5:00pm to 2:00am
                </p>
            </div>
            <div className="bg-fuchsia-950 p-3 mb-10 rounded-2xl flex cursor-pointer hover:scale-110 duration-200">
                <p className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faPhone} className="h-7"/>
                    +123 456 7890
                </p>
            </div>
            <div className="bg-fuchsia-950 p-3 mb-10 rounded-2xl flex cursor-pointer hover:scale-110 duration-200">
                <p className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faTruck} className="h-7"/>
                    6:00pm to 12:00am
                </p>
            </div>
            </div>

            </div>

            <div className="p-7 lg:w-1/2">
                <img className="h-[30rem] lg:h-[34rem] lg:w-[26rem] object-cover m-auto mt-14 rounded-xl shadow-gray-600 shadow-lg cursor-pointer" src="location1.jpg" alt="location"/>
            </div>
        </section>
    )
}