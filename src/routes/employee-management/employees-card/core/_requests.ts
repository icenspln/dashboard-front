import { AxiosInstance } from "../../../../api/Axios";

export const getEmployees = () => {
  return AxiosInstance.get(`/employee`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error("Error fetching employees:", error);
      throw error;
    });
};
