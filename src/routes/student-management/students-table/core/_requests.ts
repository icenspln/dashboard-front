import { AxiosInstance } from "../../../../api/Axios";

export const getStudents = (filter: string = "", page: number = 1) => {
    return AxiosInstance.get(`/student/filter?${filter}&page=${page}`).then(
        (res) => res.data
    );
};
export const getFilteredStudents = (filter: string = "") => {
    return AxiosInstance.get(`/student/filter?search=${filter}`).then(
        (res) => res.data
    );
};
