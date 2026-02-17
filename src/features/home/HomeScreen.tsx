import { AppButton, AppText, AppView, Screen } from '@/components';
import { AppURL, ROUTES } from '@/constants';
import { Layouts, Spacing } from '@/styles';
import { Linking, StyleSheet } from 'react-native';

export const HomeScreen = ({ navigation }: any) => {

    const openLink = (url: string) => {
        Linking.openURL(url);
    };


    return (
        <Screen scrollable contentContainerStyle={styles.container}>

            {/* Center Content */}
            <AppView style={styles.center}>
                <AppText variant="heading2" >
                    🚀 Welcome Dev!
                </AppText>

                <AppText style={styles.message}>
                    This project was bootstrapped using creat-rn-quichstart custom CLI tool.
                    Fast setup. Clean structure. Scalable foundation.
                    Now go build something that actually matters.
                </AppText>

                <AppButton
                    link
                    size="small"
                    title="Want to see how I build things in the real world?"
                    onPress={() => openLink(AppURL.portfolio)}
                />
            </AppView>

            {/* Action Section */}
            <AppView style={styles.actions}>
                <AppButton
                    title="⚙️ Explore Components"
                    onPress={() => navigation.navigate(ROUTES.SETTINGS)}
                />
            </AppView>

        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        ...Layouts.container,
        justifyContent: 'space-between',
        padding: Spacing[20],
    },
    center: {
        ...Layouts.container,
        ...Layouts.centered,
    },
    message: {
        marginTop: Spacing[16],
        ...Layouts.centeredText
    },
    subMessage: {
        marginTop: Spacing[12],
        opacity: 0.7,
    },
    actions: {
        marginBottom: Spacing[20],
    },
});