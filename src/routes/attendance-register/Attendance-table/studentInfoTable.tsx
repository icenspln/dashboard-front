import { Student } from "./core/_models";
import { digitToStringLevel } from "../../../handlers/returnInArabic";

export function StudentInfoTable({
    student,
}: {
    student: undefined | Student;
}) {
    //const [students, setStudents] = useState<Student[]>([]);
    //
    ////query functions
    //const { data, isLoading } = useQuery({
    //  queryKey: ["getTeachers"],
    //  queryFn: getStudents,
    //});
    //
    //useMemo(() => {
    //  if (data && !isLoading) {
    //    setStudents(data.data);
    //  }
    //}, [data, isLoading]);

    // table functions
    // const table = useReactTable({
    //   columns: studentInfoColumns,
    //   // data: students,
    //   data: studentData,
    //   getCoreRowModel: getCoreRowModel(),
    // });

    if (student)
        return (
            <div className="text-blueDark max-w-4xl   border border-[#E2E8F0] rounded-xl">
                <div className="bg-gray-100 p-4  text-center text-blue text-2xl border-b rounded-t-xl ">
                    {student.firstName} {student.lastName}
                </div>
                <div className="flex justify-between gap-3 p-3">
                    <div className="p-2">
                        <h3 className="text-textGray">Institution</h3>
                        <p className="text-lg">{student.institution}</p>
                    </div>
                    <div className="p-2">
                        <h3 className="text-textGray">Level</h3>
                        <p className="text-lg">
                            {digitToStringLevel(student.level)}
                        </p>
                    </div>
                    <div className="p-2">
                        <h3 className="text-textGray">Phone</h3>
                        <p className="text-lg">{student.phoneNumber}</p>
                    </div>
                    <div className="p-2">
                        <h3 className="text-textGray">Birth</h3>
                        <p className="text-lg">
                            {new Date(student.birthDate).toLocaleDateString()}
                        </p>
                    </div>
                </div>
            </div>
        );
}
