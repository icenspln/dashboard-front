import React, { useContext, useState } from "react";
import { Overlay } from "../../../../../../components/Overlay";
import ConfirmButton from "../../../../../../components/confirmButton";
import SelectGroup from "./Popup-menu-component/PresentStudentsList";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { SpecialGroupsTableContext } from "../../SpecialGroupsContext";
// import { returnStudentLabel } from "../../../../../../handlers/returnInArabic";
import {
  assignStudentToGroup,
  deleteStudentFromGroup,
} from "../../../group-add-studen-modal/core/_requests";
// import ButtonRoundedPrimary from "../../../../../../components/ButtonRoundedPrimary";

interface RegistredStudentsOverlayProps {
  onClose: () => void;
}

const RegistredStudentsOverlay: React.FC<RegistredStudentsOverlayProps> = ({
  onClose,
}) => {
  const queryClient = useQueryClient();
  const { selectedGroup, setSelectedGroup } = useContext(
    SpecialGroupsTableContext
  );
  console.log(selectedGroup?.toString());
  const [studentInput, setStudentInput] = useState<string>("");

  // const [selectedOption, setSelectedOption] = useState<{
  //   label: string;
  //   value: string;
  // }>();
  // const [reactSelectOptions, setReactSelectOptions] = useState<
  //   {
  //     value: string;
  //     label: string;
  //   }[]
  // >([{ label: "loading", value: "" }]);
  const onSubmitGroups = () => {
    // const student = selectedOption;
    mutation.mutate({
      groupId: selectedGroup?._id,
      studentId: studentInput,
    });
  };

  //mutation for signing up a student for a group
  const mutation = useMutation({
    mutationFn: ({ groupId, studentId }: any) =>
      assignStudentToGroup(groupId, studentId),
    onSuccess: (res) => {
      toast.success("تم تسجيل الطالب بنجاح");
      setStudentInput("");
      // onClose();
      queryClient.invalidateQueries({ queryKey: ["getSpecialGroups"] });
      setSelectedGroup(res);
    },
    onError: () => {
      toast.error("حدث خطأ ما");
      // onClose();
      queryClient.invalidateQueries({ queryKey: ["getSpecialGroups"] });
    },
  });

  // //mutation for removing a student for a group

  const removeMutation = useMutation({
    mutationFn: ({ groupId, studentId }: any) =>
      deleteStudentFromGroup(groupId, studentId),
    onSuccess: (res) => {
      toast.success("تمت إزالة الطالب بنجاح");
      // onClose();
      queryClient.invalidateQueries({ queryKey: ["getSpecialGroups"] });
      setSelectedGroup(res);
    },
    onError: () => {
      toast.error("حدث خطأ ما");
      // onClose();
      queryClient.invalidateQueries({ queryKey: ["getSpecialGroups"] });
    },
  });

  const deleteGroup = (groupId: string, studentId: string) => {
    removeMutation.mutate({ groupId, studentId });
  };

  return (
    <Overlay onClose={onClose} isVisible>
      <>
        <div className=" w-[553px] min-h-[324px] flex flex-col items-center gap-[15px]">
          <h1 className="text-2xl">قائمة المسجلين</h1>
          <p>الرياضيات|السنة الأولى|علي رياد|الأحد-15:00</p>

          <div className="flex w-full flex-col gap-[12px]">
            {selectedGroup && (
              <>
                {selectedGroup.students.map((student, i) => (
                  <SelectGroup
                    id={i}
                    key={i}
                    onDelete={() => deleteGroup(selectedGroup._id, student)}
                    label={student}
                  />
                ))}
              </>
            )}
            {/* {error && <span>خطأ</span>} */}
          </div>
          {/* <span className="flex flex-col gap-[12px]">
            <SelectGroup id={1} label="أسماء عبادي |12/09/2010" />
            <SelectGroup id={2} label="أسماء عبادي |12/09/2010" />
            <SelectGroup id={3} label="أسماء عبادي |12/09/2010" />
            <SelectGroup id={4} label="أسماء عبادي |12/09/2010" />
          </span> */}
          <div className="flex gap-[12px]">
            <input
              className="max-w-[553px]"
              placeholder="أدخل اسم الطالب"
              value={studentInput}
              onChange={(e) => setStudentInput(e.target.value)}
            ></input>
            {/* <select className="w-[419px] h-[32px] border-2 rounded-md"></select>
            <input
              className="w-[86px] h-[32px] border-2 rounded-md text-center"
              placeholder="2000 دج"
              type="text"
            /> */}
          </div>
        </div>

        <span className="flex justify-center gap-[12px]">
          <ConfirmButton
            text="تسجيل التغييرات"
            className="text-white bg-blue hover:bg-grayBlue hover:text-blue border hover:border-blue "
            onClick={onSubmitGroups}
          />
          <ConfirmButton
            text="إضافة طالب جديد"
            className="text-blue bg-grayBlue hover:bg-blue hover:text-white border"
          />
        </span>
      </>
    </Overlay>
  );
};

export default RegistredStudentsOverlay;
