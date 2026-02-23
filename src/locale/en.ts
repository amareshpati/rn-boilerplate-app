// ─── English Locale Strings ───────────────────────────────────────────────────
//
//  All user-visible strings for the app, grouped by screen / feature.
//
//  How to use
//  ──────────
//  Import this object into any component or hook:
//
//    import { en } from '@/locale/en';
//    <Text>{en.settings.title}</Text>
//
//  To support multiple languages in future, create a matching `fr.ts`, `hi.ts`
//  etc. file with the same shape and swap at runtime via a locale hook.
//
// ─────────────────────────────────────────────────────────────────────────────

export const en = {
    // ── Common ─────────────────────────────────────────────────────────────────
    common: {
        save: 'Save All',
        clear: 'Clear Storage',
        loading: 'Loading…',
        error: 'Something went wrong',
        retry: 'Retry',
        cancel: 'Cancel',
        confirm: 'Confirm',
    },

    // ── Home Screen ────────────────────────────────────────────────────────────
    home: {
        title: 'Home',
        welcome: 'Welcome to FeaturesHub',
        subtitle: 'Explore the app components below.',
    },

    // ── Settings Screen ────────────────────────────────────────────────────────
    settings: {
        title: '⚙️ Settings',
        darkTheme: 'Dark Theme',
        checkbox: 'AppCheckBox',
        radio: 'AppRadioButton',
        passwordLabel: 'Enter your password',
        savedPrefix: '✅ Saved →',
        image: 'AppImage',
        // API Demo section
        apiDemo: {
            title: '🌐 API Demo — DummyJSON',
            subtitle: 'Live calls to https://dummyjson.com — no auth needed.',
            getPosts: 'GET /posts  (fetch 5 posts)',
            fetchButton: 'Fetch Posts',
            fetchingButton: 'Fetching…',
            postAdd: 'POST /posts/add  (create a post)',
            postTitleLabel: 'Post Title',
            postBodyLabel: 'Post Body',
            addButton: 'Add Post',
            sendingButton: 'Sending…',
            postValidation: 'Title and body are required.',
            createdPrefix: '✅ Created Post (ID:',
        },
    },
} as const;

// ── Type export ───────────────────────────────────────────────────────────────
export type LocaleKeys = typeof en;
