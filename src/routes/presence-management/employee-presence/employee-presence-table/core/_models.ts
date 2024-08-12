export type Employee = {
  _id: string;
  firstName: string;
  lastName: string;
  job: string;
  phoneNumber: string;
  scanningCardId: string;
};

export type AttendanceRecord = {
  _id: string;
  employeeId: string;
  date: string;
  __v: number;
};

export type PresenceList = {
  employee: Employee;
  attendanceRecords: AttendanceRecord[];
};