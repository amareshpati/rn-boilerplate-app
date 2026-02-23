// ─── Global Type Declarations ─────────────────────────────────────────────────
//
//  Place project-wide ambient declarations here so they are auto-included by
//  TypeScript without any explicit import statement.
//
//  Guidelines
//  ──────────
//  • Keep every declaration minimal – only put things here that genuinely need
//    to be globally available (e.g. environment vars, augmented third-party
//    modules, utility aliases).
//  • Do NOT put screen-specific or feature-specific types here; co-locate
//    those with their feature files.
//  • Prefer explicit imports over ambient declarations when possible.
// ─────────────────────────────────────────────────────────────────────────────

// ── Primitive utility aliases ─────────────────────────────────────────────────

/** Any value that can be stored / passed as a plain record field. */
type AnyRecord = Record<string, unknown>;

/** Nullable shorthand — makes `T | null` cleaner to read inline. */
type Nullable<T> = T | null;

/** Makes every property of T deeply optional. */
type DeepPartial<T> = T extends object
    ? { [P in keyof T]?: DeepPartial<T[P]> }
    : T;

/** Makes every property of T (including nested) required & non-null. */
type DeepRequired<T> = T extends object
    ? { [P in keyof T]-?: DeepRequired<T[P]> }
    : NonNullable<T>;

// ── Function helpers ──────────────────────────────────────────────────────────

/** A void-returning callback that accepts no arguments. */
type VoidCallback = () => void;

/** A generic async resolver function. */
type AsyncFn<TArgs extends unknown[] = [], TReturn = void> = (
    ...args: TArgs
) => Promise<TReturn>;

// ── React Native / UI helpers ─────────────────────────────────────────────────

/** Common color-scheme values used across the app. */
type ColorScheme = 'light' | 'dark';

// ── Environment variables ─────────────────────────────────────────────────────
//  Augment NativeConfig when you add new variables to .env / .env.example.
//  Import the typed Config via: import Config from 'react-native-config';
//  Or, preferably, use the central accessor: import { ENV } from '@/config';
declare module 'react-native-config' {
    export interface NativeConfig {
        /** Full base URL for API requests, e.g. https://dummyjson.com */
        API_BASE_URL: string;
        /** Current runtime environment */
        APP_ENV: 'development' | 'staging' | 'production';
    }
    const Config: NativeConfig;
    export default Config;
}
