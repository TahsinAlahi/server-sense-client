import ServiceCard from "../components/ServiceCard";
import { useService } from "../providers/ServiceProvider";

function AllServicesPage() {
  const { services } = useService();
  console.log(services);
  return (
    <main className="max-w-screen-xl  mx-auto min-h-[calc(100vh-72px)]">
      {/* {services?.map((service, index) => (
        <ServiceCard key={index} />
      ))} */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </main>
  );
}

export default AllServicesPage;
