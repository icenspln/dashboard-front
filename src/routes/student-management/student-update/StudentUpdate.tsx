import StudentUpdateForm from "./student-update-form/StudentUpdateForm";

function StudentUpdate() {
  return <StudentUpdateForm />;
}

export const StudentUpdateWrapper = () => {
  return (
    <>
      <section className="w-full min-h-screen p-4 bg-mainBg">
        <div className="  mb-6">
          <h1 className="text-2xl font-medium">تسجيل جديد | تعديل المعلومات</h1>
        </div>
        <StudentUpdate />
      </section>
    </>
  );
};
