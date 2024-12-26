import { createContext, useContext, useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Loader from "../components/Loader";
import { toast } from "react-toastify";

const serviceContext = createContext(null);

function ServiceProvider({ children }) {
  const [services, setServices] = useState([]);
  const axiosPrivate = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const [isServiceLoading, setIsServiceLoading] = useState(false);

  // useEffect(() => {
  //   async function getAllServices() {
  //     setIsServiceLoading(true);
  //     try {
  //       const res = await axiosPublic.get("/services/all-services");
  //       setServices(res.data);
  //       console.log(res.data);
  //     } catch (error) {
  //       console.error("Error fetching services:", error);
  //       toast.error("Failed to load services. Please try again later.");
  //     } finally {
  //       setIsServiceLoading(false);
  //     }
  //   }

  //   getAllServices();
  // }, []);

  if (isServiceLoading) return <Loader />;
  const value = { services };

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
