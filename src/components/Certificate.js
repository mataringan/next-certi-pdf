import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#E4E4E4",
        width: "100%",
        height: "100%",
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
        // flexDirection: "column",
        justifyContent: "center",
        // alignItems: "center",
    },
    text: {
        fontSize: 20,
        textAlign: "center",
    },
});

const Certificate = ({ name }) => {
    return (
        <Document>
            <Page size="A4" orientation="landscape" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.text}>Certificate of Completion</Text>
                    <Text style={styles.text}>{name}</Text>
                </View>
            </Page>
        </Document>
    );
};

export default Certificate;
