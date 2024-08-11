
import { View, StyleSheet, Font } from '@react-pdf/renderer';
import data from "./core/data.json";
import { SalaryStatement } from "./core/_models";
import TableHeader from './core/columns/tableHeader';
import TableRows from './core/columns/tableRows';

Font.register({
    family: 'Amiri',
    src: 'src/assets/fonts/Amiri-Regular.ttf',
    fontStyle: 'normal',
    fontWeight: 'normal'
});

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    table: {
        display: "flex",
        width: "48%",
        
      
        borderRightWidth: 0,
        borderBottomWidth: 0,
        marginBottom: 10,
    },
});

function generateTables(data: SalaryStatement[]) {
    const tables = [];
    const rowsPerTable = 24; // Adjust the number of rows per table as needed

    for (let i = 0; i < data.length; i += rowsPerTable) {
        const tableData = data.slice(i, i + rowsPerTable);
        tables.push(
            <View style={styles.table} key={i}>
                <TableHeader />
                <TableRows rows={tableData} />
            </View>
        );
    }

    return tables;
}


export default function SalaryStatementTable() {
    const salaryStatementData: SalaryStatement[] = data;

    return (
        <View style={styles.container}>
            {generateTables(salaryStatementData)}
        </View>
    );
}


