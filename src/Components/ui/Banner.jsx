const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: "url('https://i.ibb.co.com/KhLKWfX/slide-2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative w-full h-screen flex items-center justify-center"
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Overlay Content */}
      <div className="relative text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold">Welcome to GymFlow</h1>
        <p className="mt-4 text-lg md:text-xl">
          Your ultimate destination for fitness and health.
        </p>
        <button className="button mt-4">Join Now</button>
      </div>
    </div>
  );
};

export default Banner;
