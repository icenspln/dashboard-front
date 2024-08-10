
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { SalaryStatement } from '../_models';

const styles = StyleSheet.create({
    tableRow: {
        flexDirection: "row-reverse",
    },
    tableCol: {
        width: "25%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        textAlign: "center",
    },
    tableCell: {
        margin: 5,
        fontSize: 10,
        fontFamily: 'Amiri',
    },
});

interface TableRowsProps {
    rows: SalaryStatement[];
}

export default function TableRows ({ rows }:TableRowsProps)  {
    return(
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
                    <Text style={styles.tableCell}>{row.institution}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{row.teacherId}</Text>
                </View>
            </View>
        ))}
    </>
)
}


