// src/utils/stringHelpers.ts

/**
 * Capitalise first letter of each word.
 * Non-letter characters are not affected.
 * @param str - The string to convert
 * @returns Title-cased string
 * @example
 * toTitleCase('john doe') // 'John Doe'
 * toTitleCase('hello world 123') // 'Hello World 123'
 */
export const toTitleCase = (str: string): string =>
    str.replace(/\b\w/g, (char) => char.toUpperCase());

/**
 * Truncate string with ellipsis if it exceeds max length.
 * Only adds ellipsis if actual truncation occurs.
 * @param str - The string to truncate
 * @param maxLength - Maximum length including ellipsis
 * @returns Truncated string with '...' or original if shorter
 * @example
 * truncate('hello world', 8) // 'hello...'
 * truncate('hi', 5) // 'hi'
 */
export const truncate = (str: string, maxLength: number): string => {
    if (maxLength < 4) {
        throw new Error('maxLength must be at least 4 to accommodate ellipsis');
    }
    return str.length > maxLength ? `${str.slice(0, maxLength - 3)}...` : str;
};

/**
 * Returns initials from a full name.
 * Extracts up to 2 initials from space-separated words.
 * @param name - Full name (e.g., 'John Doe' or 'Jane Mariah Smith')
 * @returns Initials in uppercase (e.g., 'JD', 'JM')
 * @example
 * getInitials('John Doe') // 'JD'
 * getInitials('Jane Mariah Smith') // 'JM'
 * getInitials('Alice') // 'A'
 */
export const getInitials = (name: string): string => {
    const trimmed = name.trim();
    if (trimmed.length === 0) {
        return '';
    }
    return trimmed
        .split(/\s+/)
        .map((part) => part[0]?.toUpperCase() ?? '')
        .filter((char) => char !== '')
        .slice(0, 2)
        .join('');
};
