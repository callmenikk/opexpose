import { StyleSheet } from "react-native";

export const AlertStyle = StyleSheet.create({
    warn: {
        position: "absolute",
        maxWidth: 200,
        width: "100%",
        zIndex: 13,
        padding: 10,
        minHeight: 50,
        backgroundColor: '#2e2e2e',
        display: "flex",
        justifyContent: "center",
        borderLeftWidth: 2,
        borderRadius: 10,
        borderLeftColor: "#f5c127",
    },
    danger: {
        position: "absolute",
        maxWidth: 200,
        padding: 10,
        display: "flex",
        justifyContent: "center",
        width: "100%",
        zIndex: 13,
        minHeight: 50,
        backgroundColor: '#2e2e2e',
        borderLeftWidth: 2,
        borderRadius: 10,
        borderLeftColor: "#ff4040"
    }
})