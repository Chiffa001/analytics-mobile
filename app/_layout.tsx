import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { CustomColors } from "../constants/vars";

const RootLayout: FC = () => (
    <>
        <StatusBar style="light" />
        <SafeAreaView style={styles.container}>
            <Stack
                screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: CustomColors.DARK },
                }}
            >
                <Stack.Screen name="index" />
            </Stack>
        </SafeAreaView>
    </>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default RootLayout;
