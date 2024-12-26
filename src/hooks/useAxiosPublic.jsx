import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://b10a11-server-side-tahsin-alahi.vercel.app/api",
  withCredentials: true,
  timeout: 10000, // 10 seconds
});

function useAxiosPublic() {
  return axiosPublic;
}
export default useAxiosPublic;
