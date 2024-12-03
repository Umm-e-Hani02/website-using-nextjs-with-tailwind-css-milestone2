import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram  } from "@fortawesome/free-brands-svg-icons";
export default function Footer(){
    return(
        <footer className="bg-fuchsia-950 h-44">
            <div className="flex justify-center p-7 gap-5">
            <FontAwesomeIcon icon={faFacebook} className="h-7 duration-200 hover:scale-125 cursor-pointer"/>
            <FontAwesomeIcon icon={faInstagram} className="h-7 duration-200 hover:scale-125 cursor-pointer"/>
            </div>
            <div className="flex justify-center items-center gap-2">
                <p className="text-sm md:text-lg font-semibold text-gray-400">Powered by <span className="underline text-white cursor-pointer hover:text-gray-200">Indolj</span></p>
                <span>|</span>
                <p className="text-sm md:text-lg underline cursor-pointer hover:text-gray-200">Privacy Policy</p>
                <span>|</span>
                <p className="text-sm md:text-lg underline cursor-pointer hover:text-gray-200">Faqs</p>
            </div>
        </footer>
    )
}

