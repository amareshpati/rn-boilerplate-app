import { Layouts, Spacing } from '@/styles';
import { StyleSheet } from 'react-native';
import { getShadow } from '@/utils';
import { useTheme } from '@/hooks/useTheme';
// ─── Settings Screen Styles ──────────────────────────────────────────────────

export const useSettingScreenStyles = () => {
    const { theme } = useTheme();

    return StyleSheet.create({
        container: {
            padding: Spacing[16],
            gap: Spacing[20],
        },
        row: {
            ...Layouts.flexRow,
            justifyContent: 'space-between',
            ...Layouts.alignCenter,
        },
        labelGroup: {
            gap: Spacing[4],
            ...Layouts.container,
        },
        verticalBlock: {
            gap: Spacing[12],
        },
        buttonRow: {
            ...Layouts.flexRow,
            gap: Spacing[12],
        },
        buttonFlex: {
            ...Layouts.container,
        },
        // ── API demo ────────────────────────────────────────────────────────────────
        apiCard: {
            gap: Spacing[12],
            ...getShadow(theme.primary.main),
        },
        spinner: {
            alignSelf: 'flex-start',
        },
        resultBox: {
            borderRadius: 8,
            padding: Spacing[12],
            backgroundColor: theme.card.background,
            borderWidth: 1,
            borderColor: theme.card.border,
            maxHeight: 260,
            gap: Spacing[8],
        },
        postItem: {
            gap: Spacing[4],
            paddingBottom: Spacing[8],
        },
    });
};
