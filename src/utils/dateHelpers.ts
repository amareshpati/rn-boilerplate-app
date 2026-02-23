// src/utils/dateHelpers.ts

/**
 * Format a Date or ISO string to a readable date string in en-GB locale.
 * Uses local timezone — dates are interpreted in user's timezone.
 * @param date - Date object or ISO string
 * @returns Formatted date string (e.g., '22 Feb 2026')
 * @example
 * formatDate(new Date('2026-02-22')) // '22 Feb 2026'
 * formatDate('2026-02-22') // '22 Feb 2026'
 */
export const formatDate = (date: Date | string): string => {
    const d = typeof date === 'string' ? new Date(date) : date;
    if (isNaN(d.getTime())) {
        throw new Error('Invalid date');
    }
    return d.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });
};

/**
 * Check if two dates fall on the same calendar day.
 * Compares year, month, and date fields directly (in local timezone).
 * @param a - First date
 * @param b - Second date
 * @returns True if both dates are the same calendar day
 * @example
 * isSameDay(new Date('2026-02-22'), new Date('2026-02-22')) // true
 * isSameDay(new Date('2026-02-22'), new Date('2026-02-23')) // false
 */
export const isSameDay = (a: Date, b: Date): boolean =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

/**
 * Format a Date to UTC ISO string (useful for API calls).
 * @param date - Date to format
 * @returns ISO string in UTC (e.g., '2026-02-22T00:00:00Z')
 * @example
 * formatDateUTC(new Date('2026-02-22')) // '2026-02-22T...'
 */
export const formatDateUTC = (date: Date): string => date.toISOString();
