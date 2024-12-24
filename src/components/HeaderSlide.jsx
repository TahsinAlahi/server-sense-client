function HeaderSlide({ image, title, description }) {
 return (
   <div className="w-full h-full relative flex flex-col text-white">
     <div className="flex-1 w-full md:w-1/2 lg:w-1/3 bg-black/50 shadow-lg z-10 flex flex-col items-center justify-center text-center backdrop-filter backdrop-blur-sm md:px-2">
       <h1 className="font-lora font-semibold text-2xl md:text-4xl">
         {title}
       </h1>

       <p className="mx-auto mt-4 text-lg w-11/12 font-poppins ">{description}</p>
     </div>
     <div className="absolute top-0 right-0 bottom-0 left-0 -z-10 select-none">
       <img
         src={image}
         alt=""
         className="w-full h-full object-cover object-center"
       />
     </div>
   </div>
 );
}

export default HeaderSlide;