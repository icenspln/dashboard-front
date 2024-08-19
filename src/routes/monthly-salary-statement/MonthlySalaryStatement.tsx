import { Link } from "react-router-dom";
import SalaryStatementTable from "./MonthlySalaryStatementTable";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";

Font.register({
  family: "Amiri",
  src: "src/assets/fonts/Amiri-Regular.ttf",
  fontStyle: "normal",
  fontWeight: "normal",
});
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    fontFamily: "Amiri",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    textAlign: "center",
  },
  header: {
    margin: 5,
    height: 50,
    textAlign: "center",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subHeader: {
    flexDirection: "row-reverse",
    justifyContent: "space-around",
  },
  subHeaderText: {
    textAlign: "center",
  },
});

export function MonthlySalaryStatement() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.header}>كشف الراتب لشهر ديسمبر</Text>
        </View>
        <View style={styles.subHeader}>
          <Text style={styles.subHeaderText}>:الأستاذ</Text>
          <Text style={styles.subHeaderText}>:المادة</Text>
          <Text style={styles.subHeaderText}>:السنة</Text>
        </View>

        <View style={styles.section}>
          <SalaryStatementTable />
        </View>
        <View>
          <Text></Text>
        </View>
      </Page>
    </Document>
  );
}

export function PdfViewTest() {
  const { groups, teacher } = useContext(GlobalContext);
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <PDFViewer style={{ width: "1000px", height: "100%" }}>
        <MonthlySalaryStatement />
      </PDFViewer>
      <Link to="/monthlysalarystatement"></Link>
    </div>
  );
}
