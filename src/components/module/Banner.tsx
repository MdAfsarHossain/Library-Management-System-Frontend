import LibraryBanner from "../../assets/library-banner.jpg";

export const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${LibraryBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative h-screen flex items-center justify-center"
    >
      {/* Dark transparent overlay */}
      <div className="absolute inset-0 backdrop-brightness-50 bg-transparent bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 space-y-4">
        {/* Heading */}
        <div className="flex flex-col gap-5">
          <h1 className="uppercase text-white text-2xl md:text-7xl font-extrabold tracking-wide drop-shadow-lg animate-fade-in">
            Welcome to Your
          </h1>
          <h1 className="uppercase text-white text-2xl md:text-7xl font-extrabold tracking-wide drop-shadow-lg animate-fade-in">
            Dream{" "}
            <span className="bg-blue-500 px-2 py-[0px] rounded-3xl">
              Library
            </span>
          </h1>
        </div>

        {/* Subheading */}
        <p className="text-gray-200 text-md md:text-xl max-w-2xl mx-auto animate-fade-in delay-100">
          Explore thousands of books across genres. Discover, read, and grow
          with the best literary collection in one place.
        </p>

        {/* Call to Action Button */}
        <button className="mt-4 px-6 py-3 bg-white text-black rounded-full hover:bg-blue-500 hover:text-white font-bold transition duration-300 shadow-lg cursor-pointer uppercase border-2 border-blue-500">
          Discover More
        </button>
      </div>
    </div>
  );
};
