import { Link } from "react-router-dom";
import SalaryStatementTable from "./MonthlySalaryStatementTable";
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';

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
        margin: 10,
        padding: 10,
        flexGrow: 1,  
    },
    header: {
        margin:5,
        height: 50, 
        textAlign: 'center',
    },
    headerText: {
        fontSize: 16, 
        fontWeight: 'bold',
    }
});

export function MonthlySalaryStatement(){
    return(
       
        <Document>
            <Page size="A4" style={styles.page}>
                <View>
                    <Text style={styles.header}>كشف الراتب لشهر ديسمبر</Text>
                </View>
                <View style={styles.section}>
                    <SalaryStatementTable />
                    
                    
                </View>
            </Page>
        </Document>
          
       
    )
}

export function PdfViewTest() {
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <PDFViewer style={{ width: '1000px', height: '100%' }}>
                <MonthlySalaryStatement />
                
            </PDFViewer>
            <Link to="/monthlysalarystatement"></Link>

          
        </div>
    );
}

