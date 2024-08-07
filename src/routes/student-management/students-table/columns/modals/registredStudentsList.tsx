import React, { useEffect, useState } from "react";
import ConfirmButton from "./Popup-menu-component/confirmButton";
import SelectGroup from "./Popup-menu-component/PresentStudentsList";
import { Overlay } from "../../../../../components/Overlay";
import Select from "react-select";
import { useQuery } from "@tanstack/react-query";
import { getGroups } from "../../student-group-modal/core/_requests";
import { Group } from "../../student-group-modal/core/_model";
import {
  returnInstitutionInAR,
  returnLevelInAR,
} from "../../../../../handlers/returnInArabic";

interface RegistredStudentsOverlayProps {
  onClose: () => void;
}

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const RegistredStudentsOverlay: React.FC<RegistredStudentsOverlayProps> = ({
  onClose,
}) => {
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
    if (data) {
      const arr = data.map((group) => {
        return {
          value: `group.groupId`,
          label: `${group.module}, ${group.level}, ${group.institution}, ${group.responsibleTeacher.firstName + " " + group.responsibleTeacher.lastName}`,
        };
      });
      setReactSelectOptions(arr);
    }
  }, [data]);

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
                    label={`${group.module} | ${returnLevelInAR(group.level)} ${returnInstitutionInAR(group.institution)} | ${group.responsibleTeacher.firstName + " " + group.responsibleTeacher.lastName} | ${group.dayOfWeek}-${group.timing.hour}`}
                  />
                ))}
              </>
            )}
          </div>
        </div>

        <div className="my-10">
          <Select className="" isMulti options={reactSelectOptions} />
        </div>
        <span className="flex justify-center gap-[12px]">
          <ConfirmButton
            text="تسجيل التغييرات"
            color="bg-blue"
            textColor="text-white"
          />
          <ConfirmButton
            text="إضافة طالب جديد"
            color="bg-grayBlue"
            textColor="text-blue"
          />
        </span>
      </>
    </Overlay>
  );
};

export default RegistredStudentsOverlay;
