import axios from "axios";

const useAxios = () => {
  const baseUrl = `https://localhost:7281/api/v1`;
  const jwtHeader = {
    'Authorization' :'Bearer ' +  sessionStorage.getItem('jwt')
  }

  const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: jwtHeader
  })

  return axiosInstance;
}

export default useAxios;