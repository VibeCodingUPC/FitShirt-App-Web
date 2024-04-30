import useAxios from "./useAxios";

const useApi = (endpoint) => {
  
  const axiosInstance = useAxios();

  const getObjects = () => {
    return axiosInstance
      .get(endpoint)
      .then(res => res.data);
  }


  const getObjectById = (id) => {
    return axiosInstance
      .get(`${endpoint}/${id}`)
      .then(res => res.data);
  }

  return { getObjects, getObjectById }
}

export default useApi;
