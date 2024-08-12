import { AxiosInstance } from "../../../../api/Axios";

export const getEmployees = () => {
  return AxiosInstance.get("/employee").then((res) => {
    console.log(res.data); // Log the response data
    return res.data;
  }).catch((error) => {
    console.error('Error fetching employees:', error);
    throw error;
  });
};