export type Student = {
  _id?: string;
  studentId: number;
  dayOfWeek:string;
  time:string;
  value:string
  //scanningCardId: string;
  
};

export interface Payment {
  _id: string;
  student: string;
  amount?: number;
  totalOutstanding?: number;
  totalDebts?: number;
  rest?: number;
  modules?: string;
  date: string;
}