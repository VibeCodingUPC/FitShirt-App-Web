import useAxios from "./useAxios";

const useApi = (endpoint) => {
  
  const axiosInstance = useAxios();

  const getObjects = () => {
    return axiosInstance
      .get(endpoint)
      .then(res => res.data);
  }


  return { getObjects }
}

export default useApi;
