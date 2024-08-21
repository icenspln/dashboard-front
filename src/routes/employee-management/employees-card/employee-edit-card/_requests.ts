import { AxiosInstance } from "../../../../api/Axios";

export async function UpdateCard(employeeId: string, newScanningCardId: string): Promise<{ ok: boolean }> {
  try {
    const response = await AxiosInstance.put(`/employee/${employeeId}/scanningCardId/`, { newScanningCardId: newScanningCardId });
    return { ok: response.status === 200 };
  } catch (error) {
    console.error("Error updating card:", error);
    return { ok: false };
  }
}