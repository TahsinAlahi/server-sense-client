import { createContext, useContext, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loader from "../components/Loader";

const serviceContext = createContext(null);

function ServiceProvider({ children }) {
  const [services, setServices] = useState([]);
  const axiosPrivate = useAxiosSecure();
  const [isServiceLoading, setIsServiceLoading] = useState(false);

  const value = {};

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
