import { ROUTES } from '@/constants';
import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

// ─── Root Stack Param List ────────────────────────────────────────────────────
//
//  Add a new entry here every time you add a new screen to RootNavigator.
//
//  Shape:
//    [ROUTES.SCREEN_NAME]: ParamsType | undefined
//
//  • Pass `undefined` when the screen requires NO navigation params.
//  • Pass a plain object type when the screen DOES require params.
//
// ─────────────────────────────────────────────────────────────────────────────

export type RootStackParamList = {
    [ROUTES.HOME]: undefined;
    [ROUTES.SETTINGS]: undefined;
};

// ─── Navigation Prop Shorthand ────────────────────────────────────────────────
//
//  Usage inside any screen:
//
//    const navigation = useNavigation<RootStackNavigationProp>();
//
// ─────────────────────────────────────────────────────────────────────────────

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

// ─── Screen Props Shortcuts ───────────────────────────────────────────────────
//
//  Usage at the top of a screen component:
//
//    type Props = HomeScreenProps;
//    const HomeScreen = ({ navigation, route }: Props) => { ... }
//
// ─────────────────────────────────────────────────────────────────────────────

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, typeof ROUTES.HOME>;
export type SettingsScreenProps = NativeStackScreenProps<RootStackParamList, typeof ROUTES.SETTINGS>;
