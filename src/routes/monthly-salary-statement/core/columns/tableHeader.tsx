import { View, Text, StyleSheet } from "@react-pdf/renderer";

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
}
export default function TableHeader({ alldays }: TableHeaderProps) {
  return (
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
  );
}
