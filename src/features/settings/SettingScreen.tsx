import {
    AppCheckBox,
    AppCustomInput,
    AppDivider,
    AppImage,
    AppRadioButton,
    AppToggle,
    AppText,
    Screen,
    AppView,
    AppPressable
} from '@/components';
import { useTheme } from '@/hooks/useTheme';
import { Layouts, Spacing } from '@/styles';
import { useState } from 'react';
import { StyleSheet } from 'react-native';

export const SettingScreen = () => {
    const [check, setCheck] = useState(false);
    const [radio, setRadio] = useState(false);
    const [password, setPassword] = useState("");
    const { toggleTheme, scheme } = useTheme();

    return (
        <Screen scrollable contentContainerStyle={styles.container}>

            {/* Small Components (Horizontal Layout) */}
            <AppPressable
                onPress={toggleTheme}
                style={styles.row}>
                <AppText variant='bodyMediumSemiBold'>AppToggle (Switch to dark theme)</AppText>
                <AppToggle
                    value={scheme === 'dark'}
                    onValueChange={toggleTheme}
                />
            </AppPressable>

            <AppDivider />


            <AppPressable
                onPress={() => setCheck(!check)}
                style={styles.row}>
                <AppText variant='bodyMediumSemiBold'>AppCheckBox</AppText>
                <AppCheckBox
                    value={check}
                    onValueChange={() => setCheck(!check)}
                />
            </AppPressable>

            <AppDivider />


            <AppPressable
                style={styles.row}
                onPress={() => setRadio(!radio)}
            >
                <AppText variant='bodyMediumSemiBold'>AppRadioButton</AppText>
                <AppRadioButton
                    value={radio}
                    size="medium"
                    onSelect={() => setRadio(!radio)}
                />
            </AppPressable>

            <AppDivider />

            {/* Big Components (Vertical Layout) */}
            <AppView style={styles.verticalBlock}>
                <AppText variant='bodyMediumSemiBold'>AppCustomInput</AppText>
                <AppCustomInput
                    label="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    validationType="password"
                    required
                />
            </AppView>

            <AppDivider />

            <AppView style={styles.verticalBlock}>
                <AppText variant='bodyMediumSemiBold'>AppImage</AppText>
                <AppImage
                    name="test2"
                    style={{ width: 200, height: 200 }}
                />
            </AppView>

        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: Spacing[16],
        gap: Spacing[20],
    },
    row: {
        ...Layouts.flexRow,
        justifyContent: 'space-between',
        ...Layouts.alignCenter,
    },
    verticalBlock: {
        gap: Spacing[12],
    }
});