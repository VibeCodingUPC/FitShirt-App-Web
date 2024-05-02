import axios from "axios";

const useAxios = () => {
  const apiKey = "66339c32f7d50bbd9b4a0b1a";
  const baseUrl = `https://${apiKey}.mockapi.io/api/v1`;

  const axiosInstance = axios.create({
    baseURL: baseUrl
  })

  return axiosInstance;
}

export default useAxios;