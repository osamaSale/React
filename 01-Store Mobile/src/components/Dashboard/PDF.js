import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';


export const PDF = ({ orders }) => {


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
                    <Text style={styles.heading}>My Enhanced PDF</Text>
                    <PDFTable
                        tableHeaders={[
                            { title: "orderid", value: "orderid" },
                            { title: "userId", value: "userId" },
                            { title: "Checkout", value: "Checkout" },
                            { title: "Date", value: "Date" },
                            { title: "Total", value: "Total" },
                        ]}
                        tableHeadersProducts={[
                            { title: "userId", value: "userId" },
                            { title: "name", value: "name" },
                            { title: "Image", value: "Image" },
                            { title: "Brand", value: "Brand" },
                            { title: "Device", value: "Device" },
                            { title: "Color", value: "Color" },
                            { title: "Total", value: "Total" },
                        ]}
                        data={orders}
                        heading="Orders"
                    />
                    <Text style={styles.footer}>Result</Text>
                </View>
            </Page>
        </Document>

    );
}

const PDFTable = ({ tableHeaders, data, heading, extraStyle, tableHeadersProducts }) => {
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
            padding: 8,
            fontSize: 11,
            color: "#424242",
            textTransform: "capitalize",
            alignItems: "center",
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
        <Text style={styles.innerHeading}>{heading}</Text>
        <View style={styles.table}>
            {/* Table Headers */}
            <View style={[styles.rowHead, { justifyContent: "space-between" }]}>
                {tableHeaders?.map((thead, headerIndex) => (
                    <Text key={thead.title} style={[styles.cell, styles.headerCell]}>
                        {thead.title}
                    </Text>
                ))}
            </View>

            {/* Table content */}
            {data?.map((row, dataIndex) => {
                return <View key={dataIndex}>
                    <View style={styles.row}>
                        <Text style={styles.cell}>{row && row.orderid}</Text>
                        <Text style={styles.cell}>{row && row.userId}</Text>
                        <Text style={styles.cell}>{row && row.checkout}</Text>
                        <Text style={styles.cell}>{row && row.date}</Text>
                        <Text style={styles.cell}>{row && row.total}</Text>
                    </View>
                </View>
            })}
        </View>
        <View style={styles.table}>
            <View style={[styles.rowHead, { justifyContent: "space-between" }]}>
                {tableHeadersProducts?.map((thead, headerIndex) => (
                    <Text key={thead.title} style={[styles.cell, styles.headerCell]}>
                        {thead.title}
                    </Text>
                ))}
            </View>
            {data && data[0].products?.map((row, dataIndex) => {
                return <View key={dataIndex}>
                    <View style={styles.row}>
                        <Text style={styles.cell}>{row && row.userId}</Text>
                        <Text style={styles.cell}>{row && row.name}</Text>
                        <Image src={row && row.image} style={styles.cell} alt="" />
                        <Text style={styles.cell}>{row && row.brand}</Text>
                        <Text style={styles.cell}>{row && row.device}</Text>
                        <Text style={styles.cell}>{row && row.color}</Text>
                        <Text style={styles.cell}>{row && row.total}</Text>
                    </View>
                </View>
            })}
        </View>
    </View>
}