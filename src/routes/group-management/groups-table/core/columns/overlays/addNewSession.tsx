import React, { useContext } from "react";
import { Overlay } from "../../../../../../components/Overlay";
import { useMutation } from "@tanstack/react-query";
import { additionalDayFormType } from "../../../group-add-additional-days/core/_models";
import { addAdditionalDay } from "../../../group-add-additional-days/core/_requests";
import toast from "react-hot-toast";
import { GroupsTableContext } from "../../GroupsTableContext";
import { SubmitHandler, useForm } from "react-hook-form";
import ButtonRoundedPrimary from "../../../../../../components/ButtonRoundedPrimary";

interface AddNewSessionOverlayProps {
  onClose: () => void;
}
type FormInputType = {
  time: string;
  date: string;
};
const AddNewSessionOverlay: React.FC<AddNewSessionOverlayProps> = ({
  onClose,
}) => {
  const { selectedGroup } = useContext(GroupsTableContext);

  const mutation = useMutation({
    mutationFn: (data: additionalDayFormType) => addAdditionalDay(data),
    mutationKey: ["adding-additional-day"],
    onSuccess: () => {
      toast.success("تم اضافة حصة اضافية للفوج");
      onClose();
    },
    onError: () => {
      toast.error("حدث خطأ ما");
      onClose();
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputType>();

  const onSubmit: SubmitHandler<FormInputType> = (formInput) => {
    const [hour, minute] = formInput.time.split(":");
    if (selectedGroup) {
      const requestBody: additionalDayFormType = {
        groupId: selectedGroup._id,
        additionalDay: {
          date: formInput.date,
          timing: {
            hour,
            minute,
          },
        },
      };
      mutation.mutateAsync(requestBody);
      return;
    }
    alert("no selected group found");
  };
  return (
    <Overlay onClose={onClose} isVisible>
      <>
        <div className=" flex flex-col  items-center w-[339] h-[192px] gap-[15px]  ">
          <h1 className="text-2xl">إضافة حصة للفوج</h1>
          <p>يرجى اختيار اليوم و الوقت لإضافة الحصة</p>
          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div className="flex justify-between gap-[12px]">
              <div className="flex flex-col">
                <input
                  {...register("date", { required: "الحقل اجباري" })}
                  type="date"
                />
                {errors.date && (
                  <span className="text-redish">{errors.date.message}</span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  {...register("time", { required: "الحقل اجباري" })}
                  type="time"
                />
                {errors.time && (
                  <span className="text-redish">{errors.time.message}</span>
                )}
              </div>
            </div>
            <span className="flex justify-center">
              <ButtonRoundedPrimary text="تسجيل التغييرات" />
            </span>
          </form>
        </div>
      </>
    </Overlay>
  );
};

export default AddNewSessionOverlay;
