import React, { useContext, useEffect, useState } from "react";
import ConfirmButton from "./Popup-menu-component/confirmButton";
import SelectGroup from "./Popup-menu-component/PresentStudentsList";
import { Overlay } from "../../../../../components/Overlay";
import Select from "react-select";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  assignStudentToGroup,
  deleteStudentFromGroup,
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
  const queryClient = useQueryClient();
  const { selectedStudent } = useContext(StudentsTableContext);
  const [selectedOption, setSelectedOption] = useState<{
    label: string;
    value: string;
  }>();
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
      const excludeSet = selectedStudent?.groups.map((grp) => grp._id);
      const filteredSet = data.filter(
        (item) => !excludeSet?.includes(item._id)
      );
      const arr = filteredSet.map((group) => {
        return {
          value: `${group._id}`,
          label: `${returnGroupLabel(group)}`,
        };
      });
      setReactSelectOptions(arr);
    }
    if (error) setReactSelectOptions([{ label: "خطأ", value: "" }]);
  }, [data, isPending, error, selectedStudent]);

  const onSubmitGroups = () => {
    const group = selectedOption;
    mutation.mutate({
      groupId: group?.value,
      studentId: selectedStudent?._id,
    });
  };

  //mutation for signing up a student for a group
  const mutation = useMutation({
    mutationFn: ({ groupId, studentId }: any) =>
      assignStudentToGroup(groupId, studentId),
    onSuccess: () => {
      toast.success("تم تسجيل الطالب بنجاح");
      onClose();
      queryClient.invalidateQueries({ queryKey: ["getStudents"] });
    },
    onError: () => {
      toast.error("حدث خطأ ما");
      onClose();
      queryClient.invalidateQueries({ queryKey: ["getStudents"] });
    },
  });

  //mutation for removing a student for a group

  const removeMutation = useMutation({
    mutationFn: ({ groupId, studentId }: any) =>
      deleteStudentFromGroup(groupId, studentId),
    onSuccess: () => {
      toast.success("تمت إزالة الطالب بنجاح");
      onClose();
      queryClient.invalidateQueries({ queryKey: ["getStudents"] });
    },
    onError: () => {
      toast.error("حدث خطأ ما");
      onClose();
      queryClient.invalidateQueries({ queryKey: ["getStudents"] });
    },
  });
  console.log("selectedStudent", selectedStudent);
  const deleteGroup = (groupId: string, studentId: string) => {
    removeMutation.mutate({ groupId, studentId });
  };
  return (
    <Overlay onClose={onClose} isVisible>
      <>
        <div className=" w-[553px]  flex flex-col items-center gap-[15px]">
          <h1 className="text-2xl">اختر الفوج</h1>
          <p>يرجى اختيار الفوج الذي تريد اضافة التلميذ اليه</p>

          <div className="flex w-full flex-col gap-[12px]">
            {selectedStudent && (
              <>
                {selectedStudent.groups.map((group, i) => (
                  <SelectGroup
                    id={i}
                    key={i}
                    onDelete={() => deleteGroup(group._id, selectedStudent._id)}
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
            options={reactSelectOptions}
            // defaultValue={SelectedOption}
            onChange={setSelectedOption as any}
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
