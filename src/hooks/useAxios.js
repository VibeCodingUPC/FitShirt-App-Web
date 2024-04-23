import axios from "axios";

const useAxios = () => {
  const baseUrl = '/data';

  const axiosInstance = axios.create({
    baseURL: baseUrl
  })

  return axiosInstance;
}

export default useAxios;