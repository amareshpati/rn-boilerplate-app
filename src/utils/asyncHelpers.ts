// src/utils/asyncHelpers.ts

/**
 * Sleep for a given number of milliseconds.
 * @param ms - Milliseconds to sleep
 * @returns Promise that resolves after the delay
 * @example
 * await sleep(1000); // Wait 1 second
 */
export const sleep = (ms: number): Promise<void> =>
    new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Retry an async function with exponential backoff.
 * Delays increase exponentially: delayMs, delayMs*2, delayMs*4, etc.
 * @param fn - Async function to retry
 * @param attempts - Number of attempts (default: 3)
 * @param delayMs - Initial delay in milliseconds (default: 500)
 * @param maxDelayMs - Maximum delay cap (default: 30000)
 * @returns Result of successful function call
 * @throws Error from last failed attempt if all retries exhausted
 * @example
 * await retry(() => fetchData(), 5, 1000);
 */
export async function retry<T>(
    fn: () => Promise<T>,
    attempts = 3,
    delayMs = 500,
    maxDelayMs = 30000,
): Promise<T> {
    if (attempts < 1) {
        throw new Error('attempts must be at least 1');
    }

    let lastError: unknown;
    for (let i = 0; i < attempts; i++) {
        try {
            return await fn();
        } catch (err) {
            lastError = err;
            if (i < attempts - 1) {
                const delay = Math.min(delayMs * Math.pow(2, i), maxDelayMs);
                await sleep(delay);
            }
        }
    }
    throw lastError;
}

/**
 * Debounce a function — only call after delay with no new calls.
 * Useful for search input, resize handlers, etc.
 * @param fn - Function to debounce
 * @param delayMs - Delay in milliseconds
 * @returns Debounced function
 * @example
 * const debouncedSearch = debounce((query) => search(query), 300);
 */
export const debounce = <T extends (...args: unknown[]) => unknown>(
    fn: T,
    delayMs: number,
): ((...args: Parameters<T>) => void) => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    return (...args: Parameters<T>) => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delayMs);
    };
};

/**
 * Throttle a function — call at most once per delay period.
 * Useful for scroll/resize events.
 * @param fn - Function to throttle
 * @param delayMs - Minimum delay between calls in milliseconds
 * @returns Throttled function
 * @example
 * const throttledScroll = throttle(() => handleScroll(), 100);
 */
export const throttle = <T extends (...args: unknown[]) => unknown>(
    fn: T,
    delayMs: number,
): ((...args: Parameters<T>) => void) => {
    let lastCall = 0;
    return (...args: Parameters<T>) => {
        const now = Date.now();
        if (now - lastCall >= delayMs) {
            lastCall = now;
            fn(...args);
        }
    };
};
