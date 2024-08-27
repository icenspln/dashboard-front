import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { AttendanceForTeacherGroupType } from "../../../presence-management/teacher-presence/teacher-presence-table/core/_models";

const styles = StyleSheet.create({
  tableRow: {
    flexDirection: "row-reverse",
  },
  tableCol: {
    width: 50,
    borderStyle: "solid",
    borderWidth: 0.3,
    alignItems: "center",
  },
  tableCell: {
    fontSize: 6,
    fontFamily: "Amiri",
    paddingVertical: 1,
    paddingHorizontal: 2,
    textAlign: "center",
  },
});

interface TableRowsProps {
  group: AttendanceForTeacherGroupType;
}

export default function TableRows({ group }: TableRowsProps) {
  const { students, alldays } = group;


  // Function to determine the correct symbol based on the status
  const getStatusSymbol = (status: string) => {
    switch (status) {
      case "present":
        return "ح"; // Present
      case "absent":
        return "غ"; // Absent
      case "not joined":
        return "/"; // Not Joined
      default:
        return "N/A"; // Any other status
    }
  };

  return (
    <>
    
      {students.map((row, index) => (
        <View style={styles.tableRow} key={index}>
          {/* Display student's name */}
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>
              {row.student.firstName} {row.student.lastName}
            </Text>
          </View>

          {/* Loop through the attendance array and display attendance status for each day */}
          {alldays.map((day, dayIndex) => {
            const attendanceRecord = row.attendance.find(
              (att) => att.date === day
            );
            const statusSymbol = attendanceRecord
              ? getStatusSymbol(attendanceRecord.status)
              : "N/A";

            return (
              <View style={styles.tableCol} key={dayIndex}>
                <Text style={styles.tableCell}>{statusSymbol}</Text>
              </View>
            );
          })}
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>
              {row.student.groupFinancials?.groupPaidAmount ?? 0}
            </Text>
          </View>
        </View>
      ))}
    </>
  );
}
