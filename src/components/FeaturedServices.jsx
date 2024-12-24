import { useEffect } from 'react';
import { useState } from 'react';
import FeaturedCard from './FeaturedCard';

function FeaturedServices() {
 const [services, setServices] = useState([]);

 useEffect(() => { 
  fetch('https://b10a11-server-side-tahsin-alahi.vercel.app/api/services/home-services').then(res => res.json()).then(data => { setServices(data); console.log(data) })
  },[])

 

  return (
   <section className="min-h-[75svh] max-w-screen-lg mx-auto pt-10 font-poppins space-y-9">
   <h1 className="text-center text-3xl  md:text-4xl font-lato font-bold">
     Featured Services
   </h1>

   <div className="grid grid-cols-1 lg:mx-0 mx-4 lg:grid-cols-3 md:grid-cols-2 gap-3">
     {services?.map((service, index) => (
       <FeaturedCard data={service} key={index} />
     ))}
   </div>

 </section>
  )
}

export default FeaturedServices