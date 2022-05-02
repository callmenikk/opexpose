import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";

export const homeStyle = StyleSheet.create({
    homeContainer: {
        backgroundColor: "#000",
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, //Android
        height: Dimensions.get("window").height,
        width: "100%",
        overflow: "hidden",
        paddingLeft: 20,
        paddingRight: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    user_data_wrapper: {
        minHeight: 500,
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    },
    user_avatar: {
        width: 175,
        height: 175,
        borderRadius: 100,
        borderColor: "#59EF57",
        borderWidth: 1,
        overflow: "hidden"
    },
    buttons_wrapper: {
        width: "100%",
        minHeight: 200,
        paddingTop: 20,
        paddingBottom: 20,
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    party_buttons: {
        width: 250,
        height: 70,
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        marginBottom: 10,
        backgroundColor: "#59EF57"
    }
})