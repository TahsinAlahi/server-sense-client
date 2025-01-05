import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import ConfirmationModal from "../components/ConfirmationModal";
import Loader from "../components/Loader";
import { useAuth } from "../providers/AuthProvider";
import UpdateServiceModal from "../components/UpdateServiceModal";

function MyServicesPage() {
  const { user } = useAuth();
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    async function getMyServices() {
      setIsLoading(true);
      try {
        const res = await axiosSecure.get(
          `/services/my-services?userEmail=${user.email}`
        );
        console.log(res.data);
        setServices(res.data);
        setFilteredServices(res.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setIsLoading(false);
      }
    }
    getMyServices();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredServices(
      services.filter((service) =>
        service.serviceTitle.toLowerCase().includes(query)
      )
    );
  };

  const openDeleteModal = (service) => {
    setSelectedService(service);
    setIsDeleteModalOpen(true);
  };

  const openUpdateModal = (service) => {
    setSelectedService(service);
    setIsUpdateModalOpen(true);
  };

  const handleDelete = async () => {
    try {
      await axiosSecure.delete(`/services/service/${selectedService._id}`);
      setServices((prev) =>
        prev.filter((service) => service._id !== selectedService._id)
      );
      setFilteredServices((prev) =>
        prev.filter((service) => service._id !== selectedService._id)
      );
    } catch (error) {
      console.error("Error deleting service:", error);
    } finally {
      setIsDeleteModalOpen(false);
      setSelectedService(null);
    }
  };

  const handleUpdate = async (updatedServiceData) => {
    try {
      await axiosSecure.patch(
        `/services/service/${selectedService._id}`,
        updatedServiceData
      );
      setServices((prev) =>
        prev.map((service) =>
          service._id === selectedService._id
            ? { ...service, ...updatedServiceData }
            : service
        )
      );
      setFilteredServices((prev) =>
        prev.map((service) =>
          service._id === selectedService._id
            ? { ...service, ...updatedServiceData }
            : service
        )
      );
    } catch (error) {
      console.error("Error updating service:", error);
    } finally {
      setIsUpdateModalOpen(false);
      setSelectedService(null);
    }
  };

  if (isLoading) return <Loader />;

  return (
    <main className="min-h-[calc(100svh-72px)] w-full max-w-screen-xl mx-auto py-5">
      <h1 className="text-3xl font-semibold text-center mb-6 border-b-4 pb-1 border-black w-fit mx-auto ">
        My Services
      </h1>

      <div className="mb-4 flex justify-center">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search services..."
          className="px-4 py-2 border rounded-md w-full max-w-md"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Category</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredServices.map((service) => (
              <tr key={service._id}>
                <td className="border border-gray-300 px-4 py-2">
                  {service.serviceTitle}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {service.category}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  ${service.price}
                </td>
                <td className="border border-gray-300 px-4 py-2 flex gap-2">
                  <button
                    onClick={() => openUpdateModal(service)}
                    className="px-3 py-1 bg-blue-500 text-white rounded"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => openDeleteModal(service)}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Confirmation Modals */}
      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        message="Are you sure you want to delete this service?"
        onConfirm={handleDelete}
        onCancel={() => setIsDeleteModalOpen(false)}
      />

      {isUpdateModalOpen && (
        <UpdateServiceModal
          isOpen={isUpdateModalOpen}
          service={selectedService}
          onSave={handleUpdate}
          onClose={() => setIsUpdateModalOpen(false)}
        />
      )}
    </main>
  );
}

export default MyServicesPage;
