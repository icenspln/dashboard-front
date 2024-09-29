import { AxiosInstance } from "../../../../api/Axios"

export function getGroups(filter: string, page: number = 1) {
    return AxiosInstance.get(`/groups/filter?${filter}&page=${page}`).then(
        (res) => res.data
    )
}
export function setTeacherAbsence(date: string, groupId: string) {
    return AxiosInstance.post(`groups/teacherAbsence`, { date, groupId }).then(
        (res) => res.data
    )
}
export function deleteTeacherAbsence(absenceId: string) {
    return AxiosInstance.delete(`groups/teacherAbsence/${absenceId}`).then(
        (res) => res.data
    )
}


export function deleteGroup(groupId: string) {
    return AxiosInstance.delete(`groups/${groupId}`).then(
        (res) => res.data
    )
}

