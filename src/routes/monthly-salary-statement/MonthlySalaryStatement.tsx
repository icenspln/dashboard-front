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
import {Teacher } from "../teacher-management/teacher-table/core/_models"

Font.register({
    family: 'Amiri',
    src: 'src/assets/fonts/Amiri-Regular.ttf', 
    fontStyle: 'normal',
    fontWeight: 'normal'
});
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        fontFamily: 'Amiri',
    },
    section: {
        margin: 3,
        padding: 3,
        flexGrow: 1,  
        textAlign: "center"
    },
    header: {
        margin:3,
        height: 40, 
        textAlign: 'center',
    },
    headerText: {
        fontSize: 14, 
        fontWeight: 'bold',
    },
    subHeader: {
        flexDirection: 'row-reverse',
        justifyContent:'space-around',
        
        
    },
    subHeaderText:{
        textAlign:'center'
    },
    monthlyPaymentContainer:{
        display:'flex',
        
        marginLeft:10,
        marginBottom:10
    },
    monthlyPaymentText:{
        fontSize:14,
        marginLeft:10,
        marginBottom:5,
        
        
        
    },
    monthlyPaymentCell:{
        width: 70, 
        border: "1px solid",
        borderWidth: 1.5,
        fontSize:14,
        textAlign:'center'
    }
});

export function MonthlySalaryStatement(){
    const { teacher = {} as Teacher } = useContext(GlobalContext);

    if (teacher ) {
        return (
            <Document>
                <Page size="A4" style={styles.page}>
                    <View>
                        <Text style={styles.header}>كشف الراتب لشهر ديسمبر</Text>
                    </View>
                    <View style={styles.subHeader}>
                        <Text style={styles.subHeaderText}>{teacher.firstName} :الأستاذ</Text>
                        <Text style={styles.subHeaderText}>:المادة</Text>
                        <Text style={styles.subHeaderText}>:السنة</Text>
                    </View>

                    <View style={styles.section}>
                        <SalaryStatementTable />
                    </View>
                    <View style={styles.monthlyPaymentContainer}>
                        <Text style={styles.monthlyPaymentText}>الدفع الشهري</Text>
                        <View style={styles.monthlyPaymentCell}>
                            <Text>2500دج</Text>
                        </View>
                    </View>
                </Page>
            </Document>
        );
    }

    return null; 
}



export function PdfViewTest() {
  const { groups, teacher } = useContext(GlobalContext);
  console.log("state in the pdf", groups, teacher);
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <PDFViewer style={{ width: "1000px", height: "100%" }}>
        <MonthlySalaryStatement />
      </PDFViewer>
      <Link to="/monthlysalarystatement"></Link>
    </div>
  );
}
