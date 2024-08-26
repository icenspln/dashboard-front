import { AxiosInstance } from "../../../../api/Axios";


export async function UpdateCard(studentId: string, newCardId: string) {
  try {
    const response = await AxiosInstance.put(`/student/update-scanning-card/${studentId}`, {
      newScanningCardId: newCardId
    });
    return response.data;
  } catch (error) {
    console.error("Error in UpdateCard function:", );
    throw error;
  }
}