import { AxiosInstance } from "../../../../../api/Axios";

export const getAttendeesForEmployee = (id: string) => {
  return AxiosInstance.get(`/employee/${id}/attendance`).then((res) => {
    return res.data;
  }).catch((error) => {
    console.error('Error fetching employee:', error);
    throw error;
  });
};