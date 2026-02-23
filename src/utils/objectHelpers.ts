// src/utils/objectHelpers.ts

/**
 * Remove keys with undefined or null values from an object.
 * Only removes top-level properties (not recursive).
 * @param obj - Object to clean
 * @returns New object without null/undefined values
 * @example
 * cleanObject({ a: 1, b: null, c: undefined, d: 'hello' })
 * // { a: 1, d: 'hello' }
 */
export const cleanObject = <T extends object>(obj: T): Partial<T> =>
    Object.fromEntries(
        Object.entries(obj).filter(([, v]) => v !== undefined && v !== null),
    ) as Partial<T>;

/**
 * Deeply clean an object (recursively removes null/undefined).
 * @param obj - Object to clean
 * @returns New object with nested properties cleaned
 */
export const deepCleanObject = <T extends object>(obj: T): Partial<T> => {
    const clean = (val: unknown): unknown => {
        if (val === null || val === undefined) {
            return undefined;
        }
        if (typeof val === 'object' && !Array.isArray(val)) {
            return Object.fromEntries(
                Object.entries(val).map(([k, v]) => [k, clean(v)]),
            );
        }
        if (Array.isArray(val)) {
            return val.map(clean).filter((v) => v !== undefined);
        }
        return val;
    };
    return clean(obj) as Partial<T>;
};
