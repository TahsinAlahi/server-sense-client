import ServiceCard from "../components/ServiceCard";
import { useService } from "../providers/ServiceProvider";
import { useState } from "react";

function AllServicesPage() {
  const { services } = useService();
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredServices = services.filter(
    (service) =>
      selectedCategory === "" || service.category === selectedCategory
  );

  return (
    <main className="max-w-screen-xl  mx-auto min-h-[calc(100vh-72px)] px-5 py-10">
      <h1 className="mx-auto text-3xl font-lora text-center mb-8 md:mb-10 border-black border-b-4 w-fit">
        All Services
      </h1>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="p-2 border rounded mx-auto block mb-5"
      >
        <option value="">Select a category</option>
        <option value="technology">Technology</option>
        <option value="health">Health</option>
        <option value="education">Education</option>
        <option value="finance">Finance</option>
        <option value="travel">Travel</option>
      </select>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredServices.map((service, index) => (
          <ServiceCard key={index} data={service} />
        ))}
      </div>
    </main>
  );
}

export default AllServicesPage;
