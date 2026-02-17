import { HomeScreen, SettingScreen } from '@/features';
import { ROUTES } from '@constants/routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.HOME} >
      <Stack.Screen name={ROUTES.HOME} component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name={ROUTES.SETTINGS} component={SettingScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default RootNavigator;