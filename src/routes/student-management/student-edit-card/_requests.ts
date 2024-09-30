import { AxiosInstance } from "../../../api/Axios";

export async function UpdateCard(
    studentId: string,
    newScanningCardId: string
): Promise<{ ok: boolean }> {
    try {
        const response = await AxiosInstance.put(
            `/student/update-scanning-card/${studentId}`,
            { newScanningCardId: newScanningCardId }
        );
        return { ok: response.status === 200 };
    } catch (error) {
        console.error("Error updating card:", error);
        return { ok: false };
    }
}
