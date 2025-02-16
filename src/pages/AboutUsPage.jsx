function AboutUsPage() {
  return (
    <section className="min-h-[calc(100svh-72px)] w-full max-w-screen-xl mx-auto flex flex-col items-center justify-center relative font-poppins py-10">
      <h1 className="mx-auto text-4xl font-lora text-center mb-6 md:mb-8 border-black border-b-4 w-fit">
        About Us
      </h1>

      <div className="max-w-3xl text-center">
        <h5 className="text-2xl font-medium mb-4 font-lora">
          Innovative Solutions for Service Reviews
        </h5>
        <p className="text-lg mb-6">
          ServeSense is dedicated to enhancing transparency and trust in service
          industries. Our platform enables users to share and explore authentic
          reviews, helping both businesses and customers make informed
          decisions. With a passionate team focused on quality and user
          experience, we strive to improve service standards and customer
          satisfaction. Whether you&apos;re a service provider or a consumer,
          ServeSense empowers you to connect, evaluate, and grow with
          confidence.
        </p>
      </div>
    </section>
  );
}

export default AboutUsPage;
