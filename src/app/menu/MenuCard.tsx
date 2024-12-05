import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const MenuCard = ({
    imageSrc,
    imageAlt,
    title,
    price,
}: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    price: string;
}) => {
    return (
        <div className="flex justify-center items-center">
            <div className="bg-pink-400 w-64 overflow-hidden text-gray-900 h-[27rem] shadow-gray-600 shadow-lg hover:scale-110 duration-200 rounded-xl">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="h-72 w-64 object-cover"
                />
                <h3 className="font-semibold text-lg text-center py-2">{title}</h3>
                <p className="text-center font-semibold text-sm pt-4">From {price}</p>
                <button className="bg-fuchsia-950 p-2 rounded-lg text-white justify-center m-auto hover:bg-fuchsia-900 hover:scale-110 duration-200 flex text-center gap-1 mt-2">
                    Order Now
                    <FontAwesomeIcon icon={faCartShopping} className="h-5" />
                </button>
            </div>
        </div>
    );
};

export default MenuCard;
