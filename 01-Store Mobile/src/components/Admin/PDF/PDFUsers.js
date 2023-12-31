import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';



export const PDFUsers = ({ users }) => {
    const styles = StyleSheet.create({
        page: {
            paddingTop: 35,
            paddingBottom: 48,
            paddingHorizontal: 48,
            boxSizing: "border-box",
        },
        heading: {
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 10,
            textAlign: "center",
        },
        footer: {
            fontSize: 15,
            marginBottom: 10,
            textAlign: "right",
        },
    });
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View>
                    <Text style={styles.heading}>List Users PDF</Text>
                    <PDFTable data={users} />
                </View>
            </Page>
        </Document>
    );
}

const PDFTable = ({ data, extraStyle }) => {
    const styles = StyleSheet.create({
        table: {
            width: "100%",
            marginBottom: 20,
            borderRadius: 4,
            marginTop: 10,
            border: extraStyle ? "" : "1px solid #e0e0e0",
        },
        row: {
            flexDirection: "row",
            borderBottomWidth: 1,
            borderBottomColor: "#e0e0e0",
            alignItems: "center",
            minHeight: 30,
            flexWrap: "wrap",
            ":not(:last-child)": {
                borderBottom: "none",
            },
        },
        rowHead: {
            flexDirection: "row",
        },
        cell: {
            flex: 1,
            padding: 5,
            fontSize: 8,
            color: "#424242",
            alignItems: "center",
        },
        image: {
            width: '36px',
            height: '36px',
            marginRight: '0.5rem',
            borderRadius: '50%',
            verticalAlign: 'middle',
            flex: 1,
            padding: 5,
        },
        headerCell: {
            backgroundColor: "#DAF7A6",
            fontWeight: "bold",
            overflow: "hidden",
            whiteSpace: "nowrap",
            alignItems: "center",
        },
        snCell: {
            flex: 0.4,
            padding: "8px 4px",
            fontSize: 11,
            color: "#424242",
            backgroundColor: "#DAF7A6",
            fontWeight: 700,
            flexWrap: "wrap",
        },
        snRow: {
            flex: 0.4,
            padding: "8px 4px",
            fontSize: 11,
            color: "#424242",
            fontWeight: "bold",
        },
        innerHeading: {
            fontSize: 16,
            fontWeight: 700,
            marginBottom: 12,
            marginTop: 12,
        },
    });
    return <View wrap={true}>
        <Text style={styles.innerHeading}>Users</Text>
        <View style={styles.table}>
            {/* Table Headers */}
            <View style={[styles.rowHead, { justifyContent: "space-between" }]}>
                <Text style={[styles.cell, styles.headerCell]}>Id</Text>
                <Text style={[styles.cell, styles.headerCell]}>Image</Text>
                <Text style={[styles.cell, styles.headerCell]}>Name</Text>
                <Text style={[styles.cell, styles.headerCell]}>Email</Text>
                <Text style={[styles.cell, styles.headerCell]}>Phone</Text>
                <Text style={[styles.cell, styles.headerCell]}>Authorization</Text>
            </View>
            {/* Table content */}
            {data?.map((row, dataIndex) => {
                return <View key={dataIndex}>
                    <View style={styles.row}>
                        <Text style={styles.cell}>{row && row.id}</Text>
               
                            <Image src={row && row.image} style={styles.image} />
                        <Text style={styles.cell}>{row && row.name}</Text>
                        <Text style={styles.cell}>{row && row.email}</Text>
                        <Text style={styles.cell}>{row && row.phone}</Text>
                        <Text style={styles.cell}>{row && row.authorization}</Text>
                    </View>
                </View>
            })}
        </View>
    </View>
}
