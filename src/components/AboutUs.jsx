import companyImg from '../assets/company-image.png'

const AboutUs = () => {
  return (
    <section className="flex items-center justify-center bg-white py-10 font-poppins">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between max-w-4xl w-full px-4">
     <div className='object-cover object-center'>
     
        <img
          src={companyImg} // Replace with the relevant image of the company
          alt="About Us"
          className=" rounded-lg h-full object-cover object-center"
        />
     </div>
        <div className="md:ml-5 lg:ml-10">
          <h2 className="text-4xl font-semibold  mb-2 font-lora">About ServeSense</h2>
          <h5 className="text-xl font-medium mb-4 font-lora">
            Innovative Solutions for Service Reviews
          </h5>
          <p className=" text-lg mb-6">
            ServeSense is committed to providing top-notch solutions for businesses
            and customers alike. Our platform allows users to leave and view
            reviews for services, ensuring transparency and trust. With a team of
            dedicated professionals, we work tirelessly to improve service quality
            and customer satisfaction. Whether you&apos;re a service provider or a customer,
            ServeSense is here to help you make informed decisions and grow together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
