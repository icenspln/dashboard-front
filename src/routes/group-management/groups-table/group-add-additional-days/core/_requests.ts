import { AxiosInstance } from "../../../../../api/Axios";
import { additionalDayFormType } from "./_models";

export const addAdditionalDay = (data: additionalDayFormType) => {
  return AxiosInstance.post(`/groups/addAdditionalStudyDay`, data).then(
    (res) => res.data
  );
};
