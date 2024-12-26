function ServiceCard() {
  return (
    <div className="bg-[hsl(30,38%,92%)] w-full h-full mx-auto flex items-center justify-center font-poppins">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full  rounded-lg ">
        {/* Left Side */}
        <div className="w-full h-[350px] bg-red-500">
          <img
            src="https://i.ibb.co/xzq5YWH/image-product-desktop.jpg"
            alt=""
            className="w-full h-full object-cover object-center "
          />
        </div>

        {/* Right Side */}
        <div className="py-4 px-3 my-auto">
          <p className="text-xs tracking-widest text-black border-black border-b-2 w-fit">
            PERFUME
          </p>
          <h1 className="font-lora text-2xl text-[hsl(212,21%,14%)] leading-tight mt-4 mb-3">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="text-sm text-black mb-4">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL
          </p>

          <div className="flex items-center mb-4">
            <h1 className="text-[black] font-poppins text-2xl mr-4">$149.99</h1>
          </div>

          <button className="flex items-center justify-center w-full h-12 text-black hover:text-white hover:bg-black font-bold text-sm rounded-lg transition duration-200 border-black border-2">
            Show Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
