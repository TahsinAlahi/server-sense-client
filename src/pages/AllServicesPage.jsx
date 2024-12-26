import ServiceCard from "../components/ServiceCard";
import { useService } from "../providers/ServiceProvider";

function AllServicesPage() {
  const { services } = useService();
  console.log(services);
  return (
    <main className="max-w-screen-xl  mx-auto min-h-[calc(100vh-72px)] px-5 py-10">
      <h1 className="mx-auto text-3xl font-lora text-center mb-8 md:mb-10 border-black border-b-4 w-fit">
        All Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services?.map((service, index) => (
          <ServiceCard key={index} data={service} />
        ))}
      </div>
    </main>
  );
}

export default AllServicesPage;
