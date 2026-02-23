// src/utils/arrayHelpers.ts

/**
 * Remove duplicates from a primitive array.
 * Uses Set for O(n) performance.
 * @param arr - Array of primitives
 * @returns Array with duplicates removed
 * @example
 * unique([1, 2, 2, 3]) // [1, 2, 3]
 * unique(['a', 'b', 'a']) // ['a', 'b']
 */
export const unique = <T>(arr: T[]): T[] => [...new Set(arr)];

/**
 * Chunk an array into groups of specified size.
 * Last chunk may be smaller if array length is not divisible by size.
 * @param arr - Array to chunk
 * @param size - Size of each chunk
 * @returns Array of chunks
 * @throws Error if size <= 0
 * @example
 * chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
 */
export const chunk = <T>(arr: T[], size: number): T[][] => {
    if (size <= 0) {
        throw new Error('Chunk size must be greater than 0');
    }
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size),
    );
};

/**
 * Flatten an array by one level.
 * @param arr - Array of arrays
 * @returns Flattened array
 * @example
 * flatten([[1, 2], [3, 4]]) // [1, 2, 3, 4]
 */
export const flatten = <T>(arr: T[][]): T[] => arr.flat();
