import { StudentPresentButton } from "../../../components/isPresentButton";
import { returnGroupLabel } from "../../../handlers/returnInArabic";
import { GetStudentByCardIdType } from "./core/_models";
import SettingsCell from "./core/columns/SettingsCell";

export default function GroupList({
    studentInfo,
}: {
    studentInfo: GetStudentByCardIdType;
}) {
    if (studentInfo)
        return (
            <div className="h-full flex flex-col gap-[12px]   py-4 border border-gray-200 rounded-lg shadow-sm">
                <div>
                    <p className="text-sm text-gray-500 px-3 pb-3">
                        Today's Groups
                    </p>

                    {studentInfo.todayGroups.length < 1 && (
                        <>
                            <span className="px-5">No Groups for today</span>
                        </>
                    )}
                    {studentInfo.todayGroups.map((grp, i) => (
                        <div key={i} className=" flex justify-between px-5">
                            <div className="flex gap-[10px] items-center ">
                                <p>{returnGroupLabel(grp as any)}</p>
                                <span className="w-[68px] h-[20px] text-sm text-center border rounded-full">
                                    {grp.pricing} $
                                </span>
                            </div>
                            <div className="flex gap-[8px]">
                                {/* <StudentPresentButton  /> */}
                                <div className="max-w-full w-[90px]">
                                    <StudentPresentButton
                                        att={{
                                            date: new Date().toISOString(),
                                            status: grp.attendanceStatus!,
                                        }}
                                        groupId={grp._id}
                                        studentId={studentInfo.student._id!}
                                        invalidatedQueryName="getStudentByCardId"
                                    />
                                </div>
                                <SettingsCell
                                    studentInfo={studentInfo}
                                    groupId={grp._id}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <p className="text-sm text-gray-500 px-3 pb-3">
                        Other Groups
                    </p>
                    {studentInfo.otherGroups.length < 1 && (
                        <>
                            <span className="px-5">
                                There are no other groups
                            </span>
                        </>
                    )}
                    {studentInfo.otherGroups.map((grp, i) => (
                        <div key={i} className=" flex justify-between px-5">
                            <div className="flex gap-[10px] items-center ">
                                <p>{returnGroupLabel(grp as any)}</p>
                                <span className="w-[68px] h-[20px] text-sm text-center border rounded-full">
                                    {grp.pricing} $
                                </span>
                            </div>
                            <div className="flex gap-[8px]">
                                {/* <StudentPresentButton /> */}
                                <SettingsCell
                                    studentInfo={studentInfo}
                                    groupId={grp._id}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
}
