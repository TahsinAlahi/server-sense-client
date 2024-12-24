import letterImg from "../assets/letter.png";

function Subscribe() {
  return (
    <div className="bg-slate-100 backdrop-blur-md border border-white/30 rounded-lg p-4 py-8 shadow-lg  w-full text-white">
      <div className="w-full">
        <div className="w-36 mx-auto rounded-md aspect-square bg-white flex items-center justify-center relative">
          <img src={letterImg} alt="News Letter" className="mx-auto w-28" />
          <div className="absolute bg-white w-8 aspect-square -bottom-3 right-1/2 translate-x-1/2 rotate-45 z-[-5]" />
        </div>
        <div className="text-center mt-7 font-roboto">
          <h1 className="text-3xl text-black font-semibold">Stay with us!</h1>
          <p className="text-lg text-black">Subscribe to our newsletter</p>
        </div>
        <div className="flex items-center justify-center flex-row gap-2 mt-4 border-2 border-black w-fit mx-auto ">
          <input
            type="text"
            className="bg-white px-4 py-2 rounded text-black outline-none"
            placeholder="Enter your email"
          />
          <button className="bg-slate-700 px-4 py-2 text-white font-semibold">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;