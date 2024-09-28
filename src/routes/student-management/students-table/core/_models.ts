import { Group } from "../student-group-modal/core/_model"

export type Student = {
    _id: string
    studentId: number
    firstName: string
    lastName: string
    birthDate: string | Date
    phoneNumber?: string
    guardianPhoneNumber: string
    scanningCardId: string
    institution: string | "primarySchool" | "middleSchool" | "highSchool"
    createdAt: Date
    level: number
    __v?: number
    groups: Group[]
    pricing: string
}

export interface FilterOption {
    id: string
    label: string
}

export const ColumnSelectionOptions = [
    { id: 1, label: "ID" },
    { id: 2, label: "First Name" },
    { id: 3, label: "Last Name" },
    { id: 4, label: "Birth Date" },
    { id: 5, label: "Institution" },
    { id: 6, label: "Level" },
    { id: 7, label: "Phone Number" },
    { id: 8, label: "Enrollment Date" },
    { id: 9, label: "Total Groups Number" },
    { id: 10, label: "Current Groups" },
    { id: 11, label: "Total Amount Paid" },
    { id: 12, label: "Total Debt" },
    { id: 13, label: "Total" },
    { id: 14, label: "Settings" },
]

export const institutionFilterOptions = [
    { id: "primarySchool", label: "Primary School" },
    { id: "middleSchool", label: "Middle School" },
    { id: "highSchool", label: "High School" },
]
export const levelFilterOption = [
    { id: "1", label: "First" },
    { id: "2", label: "Secound" },
    { id: "3", label: "Third" },
    { id: "4", label: "Fourth" },
    { id: "5", label: "Fifth" },
]
