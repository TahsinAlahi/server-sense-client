import { createContext, useContext, useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Loader from "../components/Loader";

const serviceContext = createContext(null);

function ServiceProvider({ children }) {
  const [services, setServices] = useState([]);
  const axiosPrivate = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const [isServiceLoading, setIsServiceLoading] = useState(false);

  useEffect(() => {
    async function getAllServices() {
      setIsServiceLoading(true);
      try {
        const res = await axiosPrivate.get("/services/all-services");
        console.log(res.data);
        setServices(res.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setIsServiceLoading(false);
      }
    }

    getAllServices();
  }, []);

  const value = { services };

  if (isServiceLoading) return <Loader />;

  return (
    <serviceContext.Provider value={value}>{children}</serviceContext.Provider>
  );
}

export default ServiceProvider;

export function useService() {
  const context = useContext(serviceContext);

  if (context === undefined)
    throw new Error("useService must be used within a ServiceProvider");

  return context;
}
