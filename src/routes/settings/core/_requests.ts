import { AxiosInstance } from "../../../api/Axios";
import { SettingsData } from "./_models";

const API_BASE_URL = "/params"; // Adjust the base URL as needed

export const getAppNameAndLogo = async (): Promise<SettingsData> => {
  const response = await AxiosInstance.get(`${API_BASE_URL}/get-params`);
  return response.data;
};

export const checkPassword = async (password: string): Promise<boolean> => {
  try {
    const response = await AxiosInstance.post(
      `${API_BASE_URL}/check-password`,
      { password: password },
      // { headers: { 'Content-Type': 'application/json' } }
    );
    return response.status === 200 ? true : false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const updatePassword = async (oldPassword: string, newPassword: string): Promise<void> => {
  await AxiosInstance.put(`${API_BASE_URL}/update-password`, { oldPassword, newPassword });
};

export const updateAppName = async (name: string): Promise<void> => {
  await AxiosInstance.put(`${API_BASE_URL}/update-app-name`, { appName : name });
};

export const updateLogo = async (file: File): Promise<void> => {
  const formData = new FormData();
  formData.append("logo", file);
  await AxiosInstance.put(`${API_BASE_URL}/update-logo`, formData);
};

export const backupDatabase = async (): Promise<void> => {
  await AxiosInstance.get(`${API_BASE_URL}/backup`);
};

export const restoreDatabase = async (file: File): Promise<void> => {
  const formData = new FormData();
  formData.append("backup", file);
  
  try {
    await AxiosInstance.post(`${API_BASE_URL}/restore`, formData);
  } catch (error) {
    throw new Error(`Failed to restore database: `);
  
  }
};