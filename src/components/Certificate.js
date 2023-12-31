import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
} from "@react-pdf/renderer/lib/react-pdf.browser.es.js";

const styles = StyleSheet.create({
    page: {
        flexDirection: "row",
        backgroundColor: "#E4E4E4",
        width: "1000px",
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    text: {
        fontSize: 20,
        textAlign: "center",
    },
});

const Certificate = ({ name }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.text}>Certificate of Completion</Text>
                    <Text style={styles.text}>{name}</Text>
                </View>
            </Page>
        </Document>
    );
};

export default Certificate;
