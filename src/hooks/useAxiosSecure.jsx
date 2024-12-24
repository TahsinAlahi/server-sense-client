import axios from "axios";
import { useEffect } from "react";

const axiosSecure = axios.create({
 baseURL: 'https://b10a11-server-side-tahsin-alahi.vercel.app',
 withCredentials:true
})


function useAxiosSecure() {
 useEffect(() => {
  const secureResponse = axiosSecure.interceptors.request.use((response) => response, async err => {
   if ([401, 403].includes(err.response.status)) {
    //
   }
   return Promise.reject(err)
  })
 
  return ()=> axiosSecure.interceptors.request.eject(secureResponse)
 },[])

 return axiosSecure
}

export default useAxiosSecure