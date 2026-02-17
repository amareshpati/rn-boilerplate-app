import { ROUTES } from '../constants/routes';
import { HomeScreen, TestScreen } from '../features/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" >
      <Stack.Screen name={ROUTES.HOME} component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name={ROUTES.TEST} component={TestScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default RootNavigator;