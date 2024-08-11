import { useContext } from "react";
import { UpdateContext, UpdateContextProvider } from "./core/UpdateContext";
import GroupUpdateForm from "./group-update-form/GroupUpdateForm";
import GroupCard from "./group-card/GroupCard";

function GroupUpdate() {
  const { successModal } = useContext(UpdateContext);

  return (
    <>
      <GroupUpdateForm />
      {successModal && <GroupCard />}
    </>
  );
}

export const GroupUpdateWrapper = () => {
  return (
    <>
      <UpdateContextProvider>
        <section className="w-full min-h-screen p-4 bg-mainBg">
          <div className="  mb-6">
            <h1 className="text-2xl font-medium">
              تسجيل جديد | تعديل المعلومات
            </h1>
          </div>
          <GroupUpdate />
        </section>
      </UpdateContextProvider>
    </>
  );
};
