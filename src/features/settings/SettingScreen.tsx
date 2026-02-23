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
    AppPressable,
    AppButton,
    AppScrollView,
} from '@/components';
import { STORAGE_KEYS } from '@/storage';
import { ActivityIndicator } from 'react-native';
import { useSettingScreenStyles } from './SettingScreen.styles';
import { useSettingScreen } from './useSettingScreen';

// ─── Settings Screen ─────────────────────────────────────────────────────────

export const SettingScreen = () => {
    const styles = useSettingScreenStyles();
    const {
        // theme
        scheme,
        toggleTheme,
        // component showcase
        check,
        setCheck,
        radio,
        setRadio,
        password,
        setPassword,
        savedInfo,
        setSavedInfo,
        handleSave,
        handleClear,
        // api demo
        postsData,
        getLoading,
        getError,
        fetchPosts,
        createdPost,
        postLoading,
        postError,
        postTitle,
        setPostTitle,
        postBody,
        setPostBody,
        postValidationError,
        handleAddPost,
    } = useSettingScreen();

    return (
        <Screen scrollable contentContainerStyle={styles.container}>

            {/* ═══════════════════════════════════════════════════════════════ */}
            {/* ── SECTION: Component Showcase ─────────────────────────────── */}
            {/* ═══════════════════════════════════════════════════════════════ */}

            <AppText variant="bodyLargeBold">⚙️ Settings</AppText>

            {/* Toggle */}
            <AppPressable onPress={toggleTheme} style={styles.row}>
                <AppView style={styles.labelGroup}>
                    <AppText variant="bodyMediumSemiBold">Dark Theme</AppText>
                    <AppText variant="bodySmall">Key: {STORAGE_KEYS.THEME_MODE}</AppText>
                </AppView>
                <AppToggle value={scheme === 'dark'} onValueChange={toggleTheme} />
            </AppPressable>

            <AppDivider />

            {/* CheckBox */}
            <AppPressable onPress={() => setCheck(v => !v)} style={styles.row}>
                <AppView style={styles.labelGroup}>
                    <AppText variant="bodyMediumSemiBold">AppCheckBox</AppText>
                    <AppText variant="bodySmall">Key: {STORAGE_KEYS.IS_LOGGED_IN}</AppText>
                </AppView>
                <AppCheckBox value={check} onValueChange={() => setCheck(v => !v)} />
            </AppPressable>

            <AppDivider />

            {/* Radio */}
            <AppPressable style={styles.row} onPress={() => setRadio(v => !v)}>
                <AppView style={styles.labelGroup}>
                    <AppText variant="bodyMediumSemiBold">AppRadioButton</AppText>
                    <AppText variant="bodySmall">Key: {STORAGE_KEYS.SETTINGS_RADIO}</AppText>
                </AppView>
                <AppRadioButton value={radio} size="medium" onSelect={() => setRadio(v => !v)} />
            </AppPressable>

            <AppDivider />

            {/* Password Input */}
            <AppView style={styles.verticalBlock}>
                <AppText variant="bodyMediumSemiBold">AppCustomInput</AppText>
                <AppText variant="bodySmall">Key: {STORAGE_KEYS.AUTH_TOKEN}</AppText>
                <AppCustomInput
                    label="Enter your password"
                    value={password}
                    onChangeText={text => {
                        setPassword(text);
                        setSavedInfo(null);
                    }}
                    validationType="password"
                    required
                />
            </AppView>

            <AppDivider />

            {/* Save / Clear */}
            <AppView style={styles.buttonRow}>
                <AppView style={styles.buttonFlex}>
                    <AppButton title="Save All" onPress={handleSave} />
                </AppView>
                <AppView style={styles.buttonFlex}>
                    <AppButton title="Clear Storage" onPress={handleClear} />
                </AppView>
            </AppView>

            {savedInfo !== null && (
                <AppText variant="bodySmall">✅ Saved → {savedInfo}</AppText>
            )}

            <AppDivider />

            <AppView style={styles.verticalBlock}>
                <AppText variant="bodyMediumSemiBold">AppImage</AppText>
                <AppImage name="test2" style={{ width: 200, height: 200 }} />
            </AppView>

            {/* ═══════════════════════════════════════════════════════════════ */}
            {/* ── SECTION: API Demo — DummyJSON ───────────────────────────── */}
            {/* ═══════════════════════════════════════════════════════════════ */}

            <AppDivider />
            <AppText variant="bodyLargeBold">🌐 API Demo — DummyJSON</AppText>
            <AppText variant="bodySmall">
                Live calls to https://dummyjson.com — no auth needed.
            </AppText>

            {/* ── GET /posts ─────────────────────────────────────────────── */}
            <AppView style={styles.apiCard}>
                <AppText variant="bodyMediumSemiBold">GET /posts  (fetch 5 posts)</AppText>
                <AppButton
                    title={getLoading ? 'Fetching…' : 'Fetch Posts'}
                    onPress={() => fetchPosts(5, 0)}
                />
                {getLoading && <ActivityIndicator style={styles.spinner} />}
                {getError !== null && (
                    <AppText variant="bodySmall">❌ {getError}</AppText>
                )}
                {postsData !== null && postsData.posts.length > 0 && (
                    <AppScrollView style={styles.resultBox} nestedScrollEnabled>
                        {postsData.posts.map(p => (
                            <AppView key={p.id} style={styles.postItem}>
                                <AppText variant="bodyMediumSemiBold">
                                    [{p.id}] {p.title}
                                </AppText>
                                <AppText variant="bodySmall" numberOfLines={2}>
                                    {p.body}
                                </AppText>
                                <AppText variant="bodySmall">
                                    👍 {p.reactions.likes}  👎 {p.reactions.dislikes}
                                </AppText>
                            </AppView>
                        ))}
                    </AppScrollView>
                )}
            </AppView>

            <AppDivider />

            {/* ── POST /posts/add ────────────────────────────────────────── */}
            <AppView style={styles.apiCard}>
                <AppText variant="bodyMediumSemiBold">POST /posts/add  (create a post)</AppText>
                <AppCustomInput
                    label="Post Title"
                    value={postTitle}
                    onChangeText={setPostTitle}
                />
                <AppCustomInput
                    label="Post Body"
                    value={postBody}
                    onChangeText={setPostBody}
                    multiline
                    numberOfLines={3}
                />
                <AppButton
                    title={postLoading ? 'Sending…' : 'Add Post'}
                    onPress={handleAddPost}
                />
                {postLoading && <ActivityIndicator style={styles.spinner} />}
                {postValidationError !== null && (
                    <AppText variant="bodySmall">⚠️ {postValidationError}</AppText>
                )}
                {postError !== null && (
                    <AppText variant="bodySmall">❌ {postError}</AppText>
                )}
                {createdPost !== null && (
                    <AppView style={styles.resultBox}>
                        <AppText variant="bodySmall">✅ Created Post (ID: {createdPost.id})</AppText>
                        <AppText variant="bodyMediumSemiBold">{createdPost.title}</AppText>
                        <AppText variant="bodySmall">{createdPost.body}</AppText>
                    </AppView>
                )}
            </AppView>

        </Screen>
    );
};