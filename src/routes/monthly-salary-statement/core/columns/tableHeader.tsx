import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { returnGroupLabelWithoutTeacher } from "../../../../handlers/returnInArabic";
import { AttendanceForTeacherGroupType } from "../../../presence-management/teacher-presence/teacher-presence-table/core/_models";
const styles = StyleSheet.create({
  tableRow: {
    flexDirection: "row-reverse",
  },
  tableColHeader: {
    width: 50,
    borderStyle: "solid",
    borderWidth: 0.3,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
  },
  tableCellHeader: {
    fontSize: 8,
    fontWeight: "bold",
    fontFamily: "Amiri",
    paddingVertical: 1,
    paddingHorizontal: 2,
    textAlign: "center",
  },
});
interface TableHeaderProps {
  alldays: string[]; // Prop to receive allDays array
  group: AttendanceForTeacherGroupType
}
export default function TableHeader({ alldays, group }: TableHeaderProps) {
  return (
    <>
    <View style={styles.tableRow}  >
      <Text style={styles.tableCellHeader}> {returnGroupLabelWithoutTeacher(group.group as any)}</Text>
    </View>
    <View style={styles.tableRow}>
      <View style={styles.tableColHeader}>
        <Text style={styles.tableCellHeader}>الفوج الأول</Text>
      </View>
      {alldays.map((_, index) => (
        <View style={styles.tableColHeader} key={index}>
          <Text style={styles.tableCellHeader}>الحصة {index + 1}</Text>
        </View>
      ))}
      <View style={styles.tableColHeader}>
        <Text style={styles.tableCellHeader}>الدفع الشهري</Text>
      </View>
    </View>
    </>
  );
}
