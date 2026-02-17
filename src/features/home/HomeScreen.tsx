import { AppButton, AppText } from '@/components';
import { Screen } from '@/components/layout/Screen/Screen';
import { ROUTES } from '@/constants/routes';

export const HomeScreen = ({ navigation }: any) => {
    return (
        <Screen scrollable>

            <AppText variant='heading2'>Hello Welcome</AppText>

            <AppButton
                size='small'
                title='Navigate'
                onPress={() => {
                    navigation.navigate(ROUTES.SETTINGS)
                }}
            />

        </Screen>
    );
}


