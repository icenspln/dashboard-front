import { AxiosInstance } from "../../../../../api/Axios";

export const getAttendeesForEmployee = (id: string) => {
  return AxiosInstance.get(`/employee/${id}/attendance`).then((res) => {
    console.log(res.data); // Log the response data
    return res.data;
  }).catch((error) => {
    console.error('Error fetching employee:', error);
    throw error;
  });
};