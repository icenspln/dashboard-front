import React, { useContext, useEffect, useState } from "react";
import SelectGroup from "./Popup-menu-component/PresentStudentsList";
import { Overlay } from "../../../../../../components/Overlay";
import AsyncSelect from "react-select/async";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  assignStudentToGroup,
  deleteStudentFromGroup,
  getFilteredGroups,
} from "../../../student-group-modal/core/_requests";
import toast from "react-hot-toast";
import { StudentsTableContext } from "../../../core/StudentsTableContext";
import ButtonRoundedPrimary from "../../../../../../components/ButtonRoundedPrimary";
import { returnGroupLabel } from "../../../../../../handlers/returnInArabic";
import { Group } from "../../../student-group-modal/core/_model";

interface RegistredStudentsOverlayProps {
  onClose: () => void;
}

const RegistredStudentsOverlay: React.FC<RegistredStudentsOverlayProps> = ({
  onClose,
}) => {
  const queryClient = useQueryClient();
  const [filter, setFilter] = useState("");
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

  const { isPending, error, data } = useQuery({
    queryKey: ["getFilteredGroups", filter],
    queryFn: () => getFilteredGroups(filter),
  });

  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    if (data && !error && !isPending) {
      const arr = data.data.map((group: Group) => {
        return {
          value: `${group._id}`,
          label: returnGroupLabel(group),
        };
      });
      setReactSelectOptions(arr);
    }
    if (error) setReactSelectOptions([{ label: "خطأ", value: "" }]);
  }, [data, isPending, error, selectedStudent, groups]);

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
    onSuccess: (res) => {
      toast.success("تم تسجيل الطالب بنجاح");
      // onClose();
      queryClient.invalidateQueries({ queryKey: ["getStudents"] });
      setGroups((prev) => [...prev, res]);
    },
    onError: (err: any) => {
      const message = err.response.data.message;
      if (message == "Student already in the group") {
        toast.error("الطالب مسجل في الفوج مسبقا");
      } else if (
        message == "Cannot add student: group is already at maximum capacity."
      ) {
        toast.error("وصل الفوج الى الحد الأقصى");
      } else {
        toast.error("حدث خطأ ما");
      }
      // onClose();
      queryClient.invalidateQueries({ queryKey: ["getStudents"] });
    },
  });

  //mutation for removing a student for a group

  const removeMutation = useMutation({
    mutationFn: ({ groupId, studentId }: any) =>
      deleteStudentFromGroup(groupId, studentId),
    onSuccess: (res) => {
      toast.success("تمت إزالة الطالب بنجاح");
      // onClose();
      queryClient.invalidateQueries({ queryKey: ["getStudents"] });
      setGroups((prev) => [...prev].filter((grp) => grp._id != res._id));
    },
    onError: () => {
      toast.error("حدث خطأ ما");
      // onClose();
      queryClient.invalidateQueries({ queryKey: ["getStudents"] });
    },
  });
  const deleteGroup = (groupId: string, studentId: string) => {
    removeMutation.mutate({ groupId, studentId });
  };

  useEffect(() => {
    setGroups(selectedStudent?.groups || []);
  }, [selectedStudent]);

  const filterStudents = (inputValue: string) => {
    setFilter(inputValue);

    if (data && !isPending && !error) {
      return data.data.map((student: any) => {
        return {
          label: student.firstName + " " + student.lastName,
          value: student._id,
        };
      });
    } else {
      return [];
    }
  };

  const loadOptions = (inputValue: string) =>
    new Promise<any>((resolve) => {
      // setTimeout(() => {
      resolve(filterStudents(inputValue));
      // }, 1000);
    });

  return (
    <Overlay onClose={onClose} isVisible>
      <>
        <div className=" w-[553px]  flex flex-col items-center gap-[15px]">
          <h1 className="text-2xl">اختر الفوج</h1>
          <p>يرجى اختيار الفوج الذي تريد اضافة التلميذ اليه</p>

          <div className="flex w-full flex-col gap-[12px]">
            {groups && selectedStudent && (
              <>
                {groups.map((group, i) => (
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
          <AsyncSelect
            isClearable
            defaultOptions={reactSelectOptions}
            className="max-w-[553px]"
            loadOptions={loadOptions}
            // defaultValue={SelectedOption}
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

export default RegistredStudentsOverlay;
