import { AxiosInstance } from "../../../../api/Axios";

export const getPaymentsHistory = (userId: string) => {
  console.log(`Fetching payment history for user: ${userId}`);
  
  return AxiosInstance.get(`/student/${userId}/payments`)
    .then((res) => {
      console.log('Response data:', res.data);
      return res.data;
    })
    .catch((error) => {
      console.error('Error fetching payment history:', error);
      throw error;
    });
};