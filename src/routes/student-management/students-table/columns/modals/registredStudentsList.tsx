import React, { useContext, useEffect, useState } from "react";
import ConfirmButton from "./Popup-menu-component/confirmButton";
import SelectGroup from "./Popup-menu-component/PresentStudentsList";
import { Overlay } from "../../../../../components/Overlay";
import Select from "react-select";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  assignStudentToGroup,
  getGroups,
} from "../../student-group-modal/core/_requests";
import { Group } from "../../student-group-modal/core/_model";
import { returnGroupLabel } from "../../../../../handlers/returnInArabic";
import toast from "react-hot-toast";
import { StudentsTableContext } from "../../core/StudentsTableContext";

interface RegistredStudentsOverlayProps {
  onClose: () => void;
}

const RegistredStudentsOverlay: React.FC<RegistredStudentsOverlayProps> = ({
  onClose,
}) => {
  const { setGroupModal, setSelectedStudent } =
    useContext(StudentsTableContext);
  const [reactSelectOptions, setReactSelectOptions] = useState<
    {
      value: string;
      label: string;
    }[]
  >([{ label: "loading", value: "" }]);

  const { isPending, error, data } = useQuery<Group[]>({
    queryKey: ["getGroups"],
    queryFn: () => getGroups(),
  });

  useEffect(() => {
    if (data && !error && !isPending) {
      const arr = data.map((group) => {
        return {
          value: `${group._id}`,
          label: `${returnGroupLabel(group)}`,
        };
      });
      setReactSelectOptions(arr);
    }
    if (error) setReactSelectOptions([{ label: "خطأ", value: "" }]);
  }, [data, isPending, error]);

  const onSubmitGroups = () => {
    const group = reactSelectOptions[0];
    mutation.mutate({
      groupId: group.value,
      studentId: "66b260ca961cd35fbe4c4080",
    });
  };

  const mutation = useMutation({
    mutationFn: ({ groupId, studentId }: any) =>
      assignStudentToGroup(groupId, studentId),
    onSuccess: () => {
      toast.success("تم تسجيل الطالب بنجاح");
      setGroupModal(false);
      setSelectedStudent(undefined);
    },
    onError: () => {
      toast.error("حدث خطأ ما");
      setGroupModal(false);
      setSelectedStudent(undefined);
    },
  });
  return (
    <Overlay onClose={onClose}>
      <>
        <div className=" w-[553px]  flex flex-col items-center gap-[15px]">
          <h1 className="text-2xl">اختر الفوج</h1>
          <p>يرجى اختيار الفوج الذي تريد اضافة التلميذ اليه</p>

          <div className="flex w-full flex-col gap-[12px]">
            {!isPending && !error && data && (
              <>
                {data.map((group, i) => (
                  <SelectGroup
                    id={i}
                    key={i}
                    onDelete={() => {}}
                    label={returnGroupLabel(group)}
                  />
                ))}
              </>
            )}
            {error && <span>خطأ</span>}
          </div>
        </div>

        <div className="my-10">
          <Select
            className="max-w-[553px]"
            isMulti
            options={reactSelectOptions}
          />
        </div>
        <span className="flex justify-center gap-[12px]">
          <ConfirmButton
            text="تسجيل التغييرات"
            color="bg-blue"
            textColor="text-white"
            onClick={onSubmitGroups}
          />
        </span>
      </>
    </Overlay>
  );
};

export default RegistredStudentsOverlay;
