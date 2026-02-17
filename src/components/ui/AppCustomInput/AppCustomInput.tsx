import React, { useState } from 'react';
import {
    TextInputProps,
    StyleSheet,
    ViewStyle,
    StyleProp,
    TextStyle,
    DimensionValue,
} from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { AppText } from '@components/base/AppText';
import { Spacing } from '@/styles/spacing';
import { AppTextInput } from '@/components/base/AppTextInput';
import { AppPressable } from '@/components/base/AppPressable';
import { AppView } from '@/components/base/AppView';
import { Layouts } from '@/styles';

type ValidationType =
    | 'none'
    | 'name'
    | 'email'
    | 'number'
    | 'pincode'
    | 'password';

interface AppCustomInputProps
    extends Omit<TextInputProps, 'onChange'> {
    label?: string;
    value: string;
    onChangeText: (text: string) => void;

    validationType?: ValidationType;
    required?: boolean;

    containerStyle?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<TextStyle>;
    labelStyle?: StyleProp<TextStyle>;

    height?: number;
    width?: DimensionValue;

    labelNumberOfLines?: number;
}

export const AppCustomInput: React.FC<AppCustomInputProps> = ({
    label,
    value,
    onChangeText,
    validationType = 'none',
    required = false,
    containerStyle,
    inputStyle,
    labelStyle,
    height = 56,
    width = '100%',
    labelNumberOfLines = 1,
    style,
    editable = true,
    ...rest
}) => {
    const { theme } = useTheme();

    const [error, setError] = useState<string | null>(null);
    const [secure, setSecure] = useState(
        validationType === 'password'
    );
    const [focused, setFocused] = useState(false);


    const keyboardConfig = (): Partial<TextInputProps> => {
        switch (validationType) {
            case 'email':
                return {
                    keyboardType: 'email-address',
                    autoCapitalize: 'none',
                };
            case 'number':
                return {
                    keyboardType: 'numeric',
                    maxLength: 10
                };
            case 'pincode':
                return {
                    keyboardType: 'numeric',
                    maxLength: 6
                };
            case 'name':
                return {
                    autoCapitalize: 'words',
                };
            case 'password':
                return {
                    autoCapitalize: 'none',
                };
            default:
                return {};
        }
    };


    const validate = (text: string): string | null => {
        if (required && !text.trim()) {
            return 'This field is required';
        }

        if (!text) return null;

        switch (validationType) {
            case 'name':
                if (text.length < 2) {
                    return 'Invalid name';
                }
                break;

            case 'email':
                const emailRegex =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(text)) {
                    return 'Invalid email address';
                }
                break;

            case 'number':
                if (!/^\d{10}$/.test(text)) {
                    return 'Must be exactly 10 digits';
                }
                break;

            case 'pincode':
                if (!/^\d{6}$/.test(text)) {
                    return 'Invalid pincode';
                }
                break;

            case 'password':
                if (text.length < 6) {
                    return 'Password must be at least 6 characters';
                }
                break;
        }

        return null;
    };

    const handleChange = (text: string) => {
        onChangeText(text);
        setError(validate(text));
    };

    const borderColor = !editable
        ? theme.border.strong
        : error
            ? theme.status.error
            : focused
                ? theme.primary.main
                : theme.border.main;

    return (
        <AppView
            style={[
                styles.container,
                { width },
                containerStyle,
            ]}
        >
            <AppView
                style={[
                    styles.inputContainer,
                    {
                        borderColor,
                        height,
                        backgroundColor:
                            theme.background.secondary,
                        opacity: editable ? 1 : 0.6,
                    },
                ]}
            >
                {/* Floating Label */}
                {label && (
                    <AppText
                        numberOfLines={labelNumberOfLines}
                        ellipsizeMode="tail"
                        variant="bodyMedium"
                        style={[
                            styles.floatingLabel,
                            {
                                color: error
                                    ? theme.status.error
                                    : focused
                                        ? theme.primary.main
                                        : theme.text.secondary,
                                backgroundColor:
                                    theme.background.secondary,
                            },
                            labelStyle,
                        ]}
                    >
                        {label}
                        {required && ' *'}
                    </AppText>
                )}

                <AppTextInput
                    {...rest}
                    {...keyboardConfig()}
                    value={value}
                    editable={editable}
                    onChangeText={handleChange}
                    secureTextEntry={secure}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    placeholder={!label ? rest.placeholder : ''}
                    placeholderTextColor={
                        theme.text.tertiary
                    }
                    style={[
                        styles.input,
                        {
                            color: theme.text.primary,
                            flex: 1,
                        },
                        inputStyle,
                        style,
                    ]}
                />

                {validationType === 'password' && (
                    <AppPressable
                        onPress={() => setSecure(!secure)}
                        style={styles.toggle}
                        hitSlop={8}
                    >
                        <AppText
                            variant="bodyMedium"
                            style={{
                                color: theme.primary.main,
                            }}
                        >
                            {secure ? 'Show' : 'Hide'}
                        </AppText>
                    </AppPressable>
                )}
            </AppView>

            {error && (
                <AppText
                    variant="bodyMedium"
                    style={{
                        color: theme.status.error,
                        marginTop: Spacing[4],
                    }}
                >
                    {error}
                </AppText>
            )}
        </AppView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: Spacing[16],
    },
    inputContainer: {
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: Spacing[12],
        ...Layouts.flexRow,
        ...Layouts.alignCenter,
        ...Layouts.relative
    },
    input: {
        ...Layouts.container,
        ...Layouts.fullHeight,
        paddingVertical: 0,
        textAlignVertical: 'center',
    },
    toggle: {
        marginLeft: Spacing[8],
        ...Layouts.centered,
        width: 44,
        height: 44,
    },
    floatingLabel: {
        ...Layouts.absolute,
        top: -10,
        left: 12,
        paddingHorizontal: 8,
        fontSize: 12,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
});