import SettingsCell from "./core/columns/SettingsCell";

export default function GroupList() {
  return (
    <div className="flex flex-col gap-[12px] w-[637px] h-[303px] mt-10  border border-gray-200 rounded-lg shadow-sm">
      <div>
        <p className="text-sm text-gray-500 px-3 py-3">
          قائمة الأفواج لهذا اليوم
        </p>
        <div className=" flex justify-between px-5">
          <div className="flex gap-[10px] items-center ">
            <p>الرياضيات | علي رياد | الأحد - 03:00</p>
            <span className="w-[68px] h-[20px] text-sm text-center border rounded-full">
              2000 دج
            </span>
          </div>
          <div className="flex gap-[8px]">
            {/* <StudentPresentButton  /> */}
            <SettingsCell />
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-500 px-3 py-3">قائمة الأفواج الأخرى</p>
        <div className=" flex justify-between px-5">
          <div className="flex gap-[10px] items-center ">
            <p>الرياضيات | علي رياد | الأحد - 03:00</p>
            <span className="w-[68px] h-[20px] text-sm text-center border rounded-full">
              2000 دج
            </span>
          </div>
          <div className="flex gap-[8px]">
            {/* <StudentPresentButton /> */}
            <SettingsCell />
          </div>
        </div>
      </div>
    </div>
  );
}
