export default function About(){
    return(
        <section className="bg-purple-300 justify-center">
            <div className="p-3 md:p-10 lg:p-16 pt-20">
            <h1 className="text-black text-center font-bold text-3xl pb-10 pt-9 lg:pt-10">About Us</h1>
                <div className="bg-pink-400 p-3 rounded-xl">
                    <p className="">
                    Welcome to The Dessert Stop a haven for dessert lovers and anyone with a craving for something truly special. Step into a world where every bite tells a story of indulgence love and care. We take immense pride in serving a delightful variety of treats from perfectly brewed coffee that awakens your senses to heavenly waffles topped with the richest flavors refreshing shakes that quench your thirst and indulgent pancakes that melt in your mouth. Our wide array of drinks complements every mood and occasion ensuring there is always something for everyone. Our menu is thoughtfully designed not just to satisfy your taste buds but to create an experience that stays with you. Every item is a labor of love made with the finest ingredients and utmost care because we believe that food is more than nourishment—its a moment to cherish. Whether you are starting your day with a warm coffee catching up with friends over a delightful treat or simply taking a well-deserved break. The Dessert Stop is here to make every visit truly memorable.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row py-7 gap-9 justify-center">
                    <video 
                    src="lemonade.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-72 xl:w-96 lg:w-72 md:w-52 rounded-xl shadow-gray-600 shadow-lg m-auto" ></video>
                    <video 
                    src="icecream.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-72 xl:w-96 lg:w-72 md:w-52 rounded-xl shadow-gray-600 shadow-lg m-auto" ></video>
                    <video 
                    src="waffle.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-72 xl:w-96 lg:w-72 md:w-52 rounded-xl shadow-gray-600 shadow-lg m-auto" ></video>
                </div>
                <div className="bg-pink-400 p-3 rounded-xl">
                    <p className="">
                        Our commitment to quality and health sets us apart. We ensure that no artificial colors flavors or harmful additives are used in our creations. Every bite and sip is made from the finest natural ingredients ensuring our offerings are both delicious and safe for everyone. What's more, all our products are entirely non-alcoholic making them a perfect choice for individuals families and anyone looking for wholesome indulgence. At The Dessert Stop we strive to create a welcoming and family-friendly environment where everyone can enjoy the perfect blend of taste quality and care. Join us and let us treat you to a dessert experience that is as comforting as it is unforgettable.
                    </p>
                </div>
            </div>
        </section>
    )
}