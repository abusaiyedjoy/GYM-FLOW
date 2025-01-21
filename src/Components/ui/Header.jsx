import Link from "next/link";

const Header = ({Title, Path}) => {
    return (
      <div
        style={{
          backgroundImage: "url('https://i.ibb.co.com/H4NvMf9/wmremove-transformed.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative w-full h-[60vh] flex items-center justify-center"
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
        {/* Overlay Content */}
        <div className="relative text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">{Title}</h1>
          <p className="mt-4 text-lg md:text-xl">
            <Link href={"/"} className="hover:text-primary">Home </Link>{Path}
          </p>
        </div>
      </div>
    );
  };
  
  export default Header;
  