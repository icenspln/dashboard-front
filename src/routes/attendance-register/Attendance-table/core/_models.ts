import { Group } from "../../../group-management/groups-table/core/_models";

export type Student = {
  _id?: string;
  studentId: number;
  firstName: string;
  lastName: string;
  birthDate: string | Date;
  phoneNumber?: string;
  gardianPhoneNumber: string;
  scanningCardId: string;
  institution: string | "primarySchool" | "middleSchool" | "highSchool";
  level: number;
  __v?: number;
  groups: any[];
};

export type Note = {
  _id: string;
  studentId: string;
  text: string;
  date: string;
  __v: number;
};
export type GetStudentByCardIdType = {
  totalMonthlyFee: number;
  totalPaidThisMonth: number;
  totalOutstandingBalance: number;
  remainingBalanceForThisMonth: number;
  totalDebts: number;
  debts: [];
  student: Student;
  todayGroups: Group[];
  otherGroups: Group[];
  notes: Note[];
};
