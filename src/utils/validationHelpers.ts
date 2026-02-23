// src/utils/validationHelpers.ts

/**
 * Validate email format using regex.
 * Regex is a simple check and not RFC 5322 compliant.
 * @param email - Email string to validate
 * @returns True if email looks valid
 * @example
 * isValidEmail('user@example.com') // true
 * isValidEmail('invalid-email') // false
 */
export const isValidEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

/**
 * Validate password strength.
 * Requires: at least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special char.
 * @param password - Password string to validate
 * @returns True if password meets strength requirements
 * @example
 * isValidPassword('MyPass123!') // true
 * isValidPassword('weak') // false
 */
export const isValidPassword = (password: string): boolean => {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

    return (
        password.length >= minLength &&
        hasUppercase &&
        hasLowercase &&
        hasNumber &&
        hasSpecialChar
    );
};

/**
 * Validate name format.
 * Name must be at least 2 characters long.
 * @param name - Name string to validate
 * @returns True if name is valid
 * @example
 * isValidName('John Doe') // true
 * isValidName('J') // false
 */
export const isValidName = (name: string): boolean => name.trim().length >= 2;

/**
 * Validate Indian mobile phone number.
 * Must be exactly 10 digits.
 * @param phone - Phone string to validate
 * @returns True if phone is valid Indian number
 * @example
 * isValidPhoneNumber('9876543210') // true
 * isValidPhoneNumber('98765') // false
 */
export const isValidPhoneNumber = (phone: string): boolean =>
    /^\d{10}$/.test(phone);

/**
 * Validate Indian postal PIN code.
 * Must be exactly 6 digits.
 * @param pincode - PIN code string to validate
 * @returns True if PIN code is valid
 * @example
 * isValidPincode('400001') // true
 * isValidPincode('4000') // false
 */
export const isValidPincode = (pincode: string): boolean =>
    /^\d{6}$/.test(pincode);

/**
 * Validate URL format.
 * @param url - URL string to validate
 * @returns True if URL looks valid
 * @example
 * isValidUrl('https://example.com') // true
 * isValidUrl('not-a-url') // false
 */
export const isValidUrl = (url: string): boolean => {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
};

/**
 * Validate that a string contains only alphanumeric characters.
 * @param str - String to validate
 * @returns True if string is alphanumeric
 * @example
 * isAlphanumeric('abc123') // true
 * isAlphanumeric('abc@123') // false
 */
export const isAlphanumeric = (str: string): boolean =>
    /^[a-zA-Z0-9]+$/.test(str);
