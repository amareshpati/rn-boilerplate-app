import { Button, Text, View, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import AppText from '../components/base/AppText';

export function HomeScreen({ navigation }: any) {
    const { theme } = useTheme();

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: theme.background.primary },
            ]}
        >

            <AppText
                variant='heading2'
            >Hello Welcome</AppText>
            <Button
                title="Navigate"
                color={theme.primary.main}
                onPress={() => {
                    navigation.navigate('Test', undefined, { pop: true });
                }}
            />
        </View>
    );
}

export function TestScreen() {
    const { theme } = useTheme();

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: theme.background.primary },
            ]}
        >
            <Text style={[styles.text, { color: theme.text.primary }]}>
                Test Screen
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        marginBottom: 16,
        fontSize: 16,
    },
});