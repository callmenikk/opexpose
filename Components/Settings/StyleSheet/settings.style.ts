import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";

export const style = StyleSheet.create({
    settings: {
        backgroundColor: "#000",
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, //Android
        height: Dimensions.get("window").height,
        width: "100%",
        overflow: "hidden",
        paddingLeft: 20,
        paddingRight: 20,
        display: "flex",
        alignItems: "center",
    },
    profile_wrapper: {
        marginTop: "30%",
        width: 200,
        height: 200,
        overflow: 'hidden',
        borderRadius: 100,
        zIndex: 25
    },
    input: {
        width: "100%",
        height: 40,
        textAlign: "center",
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 32,
        marginTop: 10
    },
    buttons_wrapper: {
        width: "100%",
        display: "flex",
        alignItems: 'center',
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 10,
        marginTop: 50
    },
    button: {
        width: "45%",
        height: 50,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
    }

})