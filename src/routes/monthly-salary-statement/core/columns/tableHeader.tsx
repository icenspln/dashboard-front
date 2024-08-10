import { View, Text, StyleSheet } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    tableRow: {
        flexDirection: "row-reverse",
    },
    tableColHeader: {
        width: "25%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        backgroundColor: "#f0f0f0",
        textAlign: "center",
    },
    tableCellHeader: {
        margin: 5,
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: 'Amiri',
    },
})
export default function TableHeader() {
    return (
        <View style={styles.tableRow}>
            <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>الفوح الأولل</Text>
            </View>
            <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>المادة</Text>
            </View>
            <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>المجموع</Text>
            </View>
            <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>المجموع</Text>
            </View>
        </View>
    );
}