// src/utils/numberHelpers.ts

/**
 * Format a number as compact currency.
 * Uses Intl API for locale-aware formatting.
 * @param amount - The amount to format
 * @param currency - Currency code (default: 'USD')
 * @returns Formatted currency string (e.g., '$1.5K')
 * @example
 * formatCurrency(1500) // '$1.5K'
 * formatCurrency(1000000, 'EUR') // '€1.0M'
 */
export const formatCurrency = (amount: number, currency = 'USD'): string =>
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
        notation: 'compact',
        maximumFractionDigits: 1,
    }).format(amount);

/**
 * Clamp a number between min and max inclusive.
 * @param value - The value to clamp
 * @param min - Minimum bound (inclusive)
 * @param max - Maximum bound (inclusive)
 * @returns Clamped value
 * @example
 * clamp(5, 1, 10) // 5
 * clamp(15, 1, 10) // 10
 * clamp(-5, 1, 10) // 1
 */
export const clamp = (value: number, min: number, max: number): number => {
    if (min > max) {
        throw new Error('min must not be greater than max');
    }
    return Math.min(Math.max(value, min), max);
};
