jest.mock('react-native-mmkv', () => {
    return {
        createMMKV: jest.fn().mockReturnValue({
            set: jest.fn(),
            getString: jest.fn(),
            getNumber: jest.fn(),
            getBoolean: jest.fn(),
            remove: jest.fn(),
            clearAll: jest.fn(),
            getAllKeys: jest.fn(),
        }),
    };
});

jest.mock('react-native-nitro-modules', () => ({
    NitroModules: {
        get: jest.fn(),
        set: jest.fn(),
    },
}));

jest.mock('react-native-safe-area-context', () => {
    const React = require('react');
    const inset = { top: 0, right: 0, bottom: 0, left: 0 };
    const frame = { x: 0, y: 0, width: 390, height: 844 };

    const SafeAreaContext = React.createContext(inset);
    const SafeAreaFrameContext = React.createContext(frame);
    const SafeAreaInsetsContext = React.createContext(inset);

    return {
        SafeAreaContext,
        SafeAreaFrameContext,
        SafeAreaInsetsContext,
        SafeAreaProvider: jest.fn(({ children }) => (
            React.createElement(SafeAreaContext.Provider, { value: inset },
                React.createElement(SafeAreaFrameContext.Provider, { value: frame },
                    React.createElement(SafeAreaInsetsContext.Provider, { value: inset }, children)
                )
            )
        )),
        SafeAreaConsumer: jest.fn(({ children }) => children(inset)),
        SafeAreaView: jest.fn(({ children }) => children),
        useSafeAreaInsets: jest.fn(() => inset),
        useSafeAreaFrame: jest.fn(() => frame),
        initialWindowMetrics: {
            fallback: {
                insets: inset,
                frame: frame,
            },
            insets: inset,
            frame: frame,
        },
    };
});

jest.mock('react-native-config', () => ({
    API_BASE_URL: 'https://api.example.com',
    APP_ENV: 'development',
}));

// Mock react-native-screens as it is used by native-stack
jest.mock('react-native-screens', () => ({
    enableScreens: jest.fn(),
    ScreenContainer: jest.fn(({ children }) => children),
    Screen: jest.fn(({ children }) => children),
    NativeScreen: jest.fn(({ children }) => children),
    NativeScreenContainer: jest.fn(({ children }) => children),
    ScreenStack: jest.fn(({ children }) => children),
    ScreenStackHeaderConfig: jest.fn(({ children }) => children),
    ScreenStackHeaderSubview: jest.fn(({ children }) => children),
    SearchBar: jest.fn(({ children }) => children),
}));
