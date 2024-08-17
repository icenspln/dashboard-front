import { AxiosInstance } from "../../../../api/Axios";

export const getStudents = () => {
  return AxiosInstance.get("/student").then((res) => res.data);
};

export function getStudentByCardId(studentId: string) {
  return AxiosInstance.post("/student/scan/", { userId: studentId }).then(
    (res) => res.data
  );
}

export function submitPayment({
  studentId,
  amount,
}: {
  studentId: string;
  amount: number;
}) {
  return AxiosInstance.post("/payment/submit-payment", {
    studentId,
    amount,
  }).then((res) => res.data);
}

export function updateTotalToPay({
  studentId,
  newTotalAmount,
}: {
  studentId: string;
  newTotalAmount: number;
}) {
  return AxiosInstance.post("/payment/update-total-to-pay", {
    studentId,
    newTotalAmount,
  }).then((res) => res.data);
}
export function updateTotalDebt({
  studentId,
  newTotalDebt,
}: {
  studentId: string;
  newTotalDebt: number;
}) {
  return AxiosInstance.post("/payment/update-total-debt", {
    studentId,
    newTotalDebt,
  }).then((res) => res.data);
}

export function getNotesForStudent(studentId: string) {
  return AxiosInstance.get(`/note/${studentId}`).then((res) => res.data);
}

export function postNoteForStudent(studentId: string, text: string) {
  return AxiosInstance.post(`/note`, { studentId, text }).then(
    (res) => res.data
  );
}
