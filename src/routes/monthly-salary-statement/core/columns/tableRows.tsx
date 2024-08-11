import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { SalaryStatement } from '../_models';

const styles = StyleSheet.create({
    tableRow: {
        flexDirection: "row-reverse",
    },
    tableCol: {
        width: 50, 
        borderStyle: "solid",
        borderWidth: 0.3,
        alignItems: 'center',
        
    },
    tableCell: {
        fontSize: 10,
        fontFamily: 'Amiri',
        paddingVertical: 1,
        paddingHorizontal: 2,
        textAlign: "center", 
       
    },
});

interface TableRowsProps {
    rows: SalaryStatement[];
}

export default function TableRows({ rows }: TableRowsProps) {
    return (
        <>
            {rows.map((row, index) => (
                <View style={styles.tableRow} key={index}>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>{row.firstName}</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>{row.lastName}</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>{row.teacherId}</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>{row.teacherId}</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>{row.teacherId}</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>{row.teacherId}</Text>
                    </View>
                </View>
            ))}
        </>
    );
}
