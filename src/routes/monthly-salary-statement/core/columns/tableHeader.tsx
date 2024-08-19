import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    tableRow: {
        flexDirection: "row-reverse",
    },
    tableColHeader: {
        width: 50, 
        borderStyle: "solid",
        borderWidth: 0.3,
        backgroundColor: "#f0f0f0",
        alignItems: 'center',
    },
    tableCellHeader: {
        fontSize: 8,
        fontWeight: 'bold',
        fontFamily: 'Amiri',
        paddingVertical: 1,
        paddingHorizontal: 2,
        textAlign: "center", 
    },
});

export default function TableHeader() {
    return (
        <View style={styles.tableRow}>
            <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>الفوح الأولل</Text>
            </View>
            <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>الحصة 1</Text>
            </View>
            <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>الحصة 2</Text>
            </View>
            <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>الحصة 3</Text>
            </View>
            <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>الحصة 4</Text>
            </View>
            <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>الحصة 5</Text>
            </View>
        </View>
    );
}