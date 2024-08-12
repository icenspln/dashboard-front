import React, { useContext, useEffect, useState } from "react";
import SelectGroup from "./Popup-menu-component/PresentStudentsList";
import Select from "react-select";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Overlay } from "../../../../../../components/Overlay";
import { GroupsTableContext } from "../../GroupsTableContext";
import { returnStudentLabel } from "../../../../../../handlers/returnInArabic";
import {
  assignStudentToGroup,
  deleteStudentFromGroup,
  getStudents,
} from "../../../group-add-studen-modal/core/_requests";
import { Student } from "../../../../../student-management/students-table/core/_models";
import ButtonRoundedPrimary from "../../../../../../components/ButtonRoundedPrimary";

interface RegistredStudentsOverlayProps {
  onClose: () => void;
}

export const RegistredStudentsOverlay: React.FC<
  RegistredStudentsOverlayProps
> = ({ onClose }) => {
  const queryClient = useQueryClient();
  const { selectedGroup, setSelectedGroup } = useContext(GroupsTableContext);
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

  const { isPending, error, data } = useQuery<Student[]>({
    queryKey: ["getStudents"],
    queryFn: () => getStudents(),
  });

  useEffect(() => {
    if (data && !error && !isPending) {
      const excludeSet = selectedGroup?.students.map((std) => std._id);
      const filteredSet = data.filter(
        (item) => !excludeSet?.includes(item._id)
      );
      const arr = filteredSet.map((student) => {
        return {
          value: `${student._id}`,
          label: returnStudentLabel(student.firstName, student.lastName),
        };
      });
      setReactSelectOptions(arr);
      setSelectedOption(undefined);
    }
    if (error) setReactSelectOptions([{ label: "خطأ", value: "" }]);
  }, [data, isPending, error, selectedGroup]);

  const onSubmitGroups = () => {
    const student = selectedOption;
    mutation.mutate({
      groupId: selectedGroup?._id,
      studentId: student?.value,
    });
  };

  //mutation for signing up a student for a group
  const mutation = useMutation({
    mutationFn: ({ groupId, studentId }: any) =>
      assignStudentToGroup(groupId, studentId),
    onSuccess: (res) => {
      toast.success("تم تسجيل الطالب بنجاح");
      // onClose();
      queryClient.invalidateQueries({ queryKey: ["getGroups"] });
      setSelectedGroup(res);
    },
    onError: () => {
      toast.error("حدث خطأ ما");
      // onClose();
      queryClient.invalidateQueries({ queryKey: ["getGroups"] });
    },
  });

  // //mutation for removing a student for a group

  const removeMutation = useMutation({
    mutationFn: ({ groupId, studentId }: any) =>
      deleteStudentFromGroup(groupId, studentId),
    onSuccess: (res) => {
      toast.success("تمت إزالة الطالب بنجاح");
      // onClose();
      queryClient.invalidateQueries({ queryKey: ["getGroups"] });
      setSelectedGroup(res);
    },
    onError: () => {
      toast.error("حدث خطأ ما");
      // onClose();
      queryClient.invalidateQueries({ queryKey: ["getGroups"] });
    },
  });

  const deleteGroup = (groupId: string, studentId: string) => {
    removeMutation.mutate({ groupId, studentId });
  };

  return (
    <Overlay onClose={onClose} isVisible>
      <>
        <div className=" w-[553px]  flex flex-col items-center gap-[15px]">
          <h1 className="text-2xl">قائمة المسجلين في الفوج</h1>
          <p>يرجى اختيار التلميذ الذي تريد اضافته</p>

          <div className="flex w-full flex-col gap-[12px]">
            {selectedGroup && (
              <>
                {selectedGroup.students.map((student, i) => (
                  <SelectGroup
                    id={i}
                    key={i}
                    onDelete={() => deleteGroup(selectedGroup._id, student._id)}
                    label={returnStudentLabel(
                      student.firstName,
                      student.lastName
                    )}
                  />
                ))}
              </>
            )}
            {/* {error && <span>خطأ</span>} */}
          </div>
        </div>

        <div className="my-10">
          <Select
            className="max-w-[553px]"
            options={reactSelectOptions}
            defaultValue={selectedOption}
            isClearable
            onChange={setSelectedOption as any}
          />
        </div>
        <span className="flex justify-center gap-[12px]">
          <ButtonRoundedPrimary
            text="تسجيل التغييرات"
            onClick={onSubmitGroups}
          />
        </span>
      </>
    </Overlay>
  );
};
