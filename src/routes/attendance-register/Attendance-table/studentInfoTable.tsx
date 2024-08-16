import { Student } from "./core/_models";
import {
  returnInstitutionInAR,
  returnLevelInAR,
} from "../../../handlers/returnInArabic";

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
      <div className="text-blueDark max-w-4xl w-[637px] mt-10 border border-[#E2E8F0] rounded-xl">
        <div className="bg-gray-100 p-4  text-center text-blue text-2xl border-b rounded-t-xl ">
          {student.firstName} {student.lastName}
        </div>
        <div className="flex justify-between gap-3 p-3">
          <div className="p-2">
            <h3 className="text-textGray">المستوى</h3>
            <p className="text-lg">
              {returnInstitutionInAR(student.institution)}
            </p>
          </div>
          <div className="p-2">
            <h3 className="text-textGray">السنة</h3>
            <p className="text-lg">{returnLevelInAR(student.level)}</p>
          </div>
          <div className="p-2">
            <h3 className="text-textGray">رقم الهاتف</h3>
            <p className="text-lg">{student.phoneNumber}</p>
          </div>
          <div className="p-2">
            <h3 className="text-textGray">تاريخ الميلاد</h3>
            <p className="text-lg">
              {new Date(student.birthDate).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    );
}
