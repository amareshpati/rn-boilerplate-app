# Locale

This folder holds all **user-visible strings** for the app, organised by screen / feature.

## Files

| File | Language |
|------|----------|
| `en.ts` | English (default) |

---

## How to Use

```ts
import { en } from '@/locale/en';

// Inside a component
<Text>{en.settings.title}</Text>

// Nested keys
<Text>{en.settings.apiDemo.fetchButton}</Text>
```

---

## Structure of `en.ts`

```
en
├── common          – shared labels used across many screens
├── home            – Home screen strings
└── settings
    ├── ...         – top-level settings strings
    └── apiDemo     – API Demo section strings
```

---

## Adding a New String

1. Open `en.ts` and find (or create) the section for your screen.
2. Add the key–value pair.
3. Use it in your component via `en.<section>.<key>`.

> **Convention**: Keys are `camelCase`. Values are the final, user-facing English text.

---

## Adding a New Language

1. Create `src/locale/<lang>.ts` (e.g. `hi.ts` for Hindi).
2. Copy the entire shape from `en.ts` and translate the values.
3. Build a `useLocale()` hook that picks the right file based on the device locale or user preference.

The exported `LocaleKeys` type ensures every language file matches the same shape:

```ts
import type { LocaleKeys } from '@/locale/en';

const hi: LocaleKeys = { ... }; // TypeScript will error if any key is missing
```
