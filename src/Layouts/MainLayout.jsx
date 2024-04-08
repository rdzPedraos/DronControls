import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Image, View, TouchableOpacity, Text } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useFocusEffect } from '@react-navigation/native';
import { LOGO, ICONS, FONT_SIZES } from '@/constants';

export default function MainLayout({ title, navigation, direction = "vertical", children }) {
    useFocusEffect(() => {
        const directionLock = direction === "vertical"
            ? ScreenOrientation.OrientationLock.PORTRAIT
            : ScreenOrientation.OrientationLock.LANDSCAPE;

        ScreenOrientation.lockAsync(directionLock);
    });

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />

            <View style={styles.header}>
                <View style={styles.title}>
                    <Image source={LOGO} style={styles.titleImg} />
                    <Text style={styles.titleTxt}>{title}</Text>
                </View>

                <TouchableOpacity onPress={navigation.openDrawer}>
                    <ICONS name="bars" size={FONT_SIZES.EXTRA_LARGE} />
                </TouchableOpacity>
            </View>

            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },

    header: {
        width: '100%',
        position: 'absolute',
        top: 20,
        zIndex: 999,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 20,
        padding: 20,
    },

    title: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },

    titleImg: {
        width: 20,
        height: 30,
        objectFit: 'contain',
    },

    titleTxt: {
        fontSize: FONT_SIZES.EXTRA_LARGE,
        fontWeight: 'bold',
    }
});
