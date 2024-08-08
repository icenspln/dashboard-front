export type Teacher = {
  _id: string;
  teacherId: number;
  firstName: string;
  lastName: string;
  birthDate: Date;
  phoneNumber: string;
  domain?: string[];
  numberOfGroups: number;
  __v: 0;
};
