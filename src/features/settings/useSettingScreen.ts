import { useApi } from '@/hooks';
import { useTheme } from '@/hooks/useTheme';
import {
    getBoolean,
    getString,
    removeItem,
    setBoolean,
    setString,
    STORAGE_KEYS,
} from '@/storage';
import { postsApi } from '@/services/api/modules';
import { useEffect, useState } from 'react';

// ─── useSettingScreen ────────────────────────────────────────────────────────

export const useSettingScreen = () => {
    const { toggleTheme, scheme } = useTheme();

    // ── Local state ────────────────────────────────────────────────────────────
    const [check, setCheck] = useState(false);
    const [radio, setRadio] = useState(false);
    const [password, setPassword] = useState('');
    const [savedInfo, setSavedInfo] = useState<string | null>(null);

    // ── POST form state ────────────────────────────────────────────────────────
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [postValidationError, setPostValidationError] = useState<string | null>(null);

    // ── useApi hooks ───────────────────────────────────────────────────────────
    const {
        data: postsData,
        loading: getLoading,
        error: getError,
        execute: fetchPosts,
    } = useApi(postsApi.getAll);

    const {
        data: createdPost,
        loading: postLoading,
        error: postError,
        execute: addPost,
    } = useApi(postsApi.add);

    // ── Rehydrate storage on mount ─────────────────────────────────────────────
    useEffect(() => {
        const storedPassword = getString(STORAGE_KEYS.AUTH_TOKEN);
        const storedCheck = getBoolean(STORAGE_KEYS.SETTINGS_CHECKBOX);
        const storedRadio = getBoolean(STORAGE_KEYS.SETTINGS_RADIO);

        if (storedPassword !== undefined) setPassword(storedPassword);
        if (storedCheck !== undefined) setCheck(storedCheck);
        if (storedRadio !== undefined) setRadio(storedRadio);
    }, []);

    // ── Persist ALL component values to MMKV ──────────────────────────────────
    const handleSave = () => {
        setString(STORAGE_KEYS.AUTH_TOKEN, password);
        setBoolean(STORAGE_KEYS.SETTINGS_CHECKBOX, check);
        setBoolean(STORAGE_KEYS.SETTINGS_RADIO, radio);
        setSavedInfo(
            `Theme: ${scheme} · CheckBox: ${check} · Radio: ${radio} · Password: ${password}`,
        );
    };

    const handleClear = () => {
        removeItem(STORAGE_KEYS.AUTH_TOKEN);
        removeItem(STORAGE_KEYS.SETTINGS_CHECKBOX);
        removeItem(STORAGE_KEYS.SETTINGS_RADIO);
        setPassword('');
        setCheck(false);
        setRadio(false);
        setSavedInfo(null);
    };

    // ── POST handler ──────────────────────────────────────────────────────────
    const handleAddPost = () => {
        if (!postTitle.trim() || !postBody.trim()) {
            setPostValidationError('Title and body are required.');
            return;
        }
        setPostValidationError(null);
        addPost({ title: postTitle.trim(), body: postBody.trim(), userId: 1, tags: ['demo'] });
    };

    return {
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
    };
};
