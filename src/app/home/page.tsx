export default function HomePage() {
    return (
    <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          <video 
          src="landingvideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"></video>
        </div>
         
        <div className="relative  z-10 flex flex-col justify-center items-center h-full w-full text-center px-4">
          <p className="font-semibold text-xl mb-4">Indulge in a world of sweetness and joy where every bite is crafted to bring you happiness. From velvety textures to heavenly flavors discover the perfect blend of taste and love in every creation. Treat yourself—you deserve it!</p>
          <button className="bg-rose-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-rose-700 transition-all active:opacity-0">
            <a href="/menu">Discover Delights</a>
          </button>
        </div>
      </section>
    );
}