import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CustomColors } from "../constants/vars";

const Index: FC = () => (
    <View style={styles.container}>
        <Text style={styles.text}>Home screen</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: CustomColors.WHITE,
    },
});

export default Index;
