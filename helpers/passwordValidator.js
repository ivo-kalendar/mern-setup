// passwordValidator.js

/**
 * @typedef {object} PasswordValidationResult
 * @property {boolean} isStrong - True if the password is strong, false otherwise.
 * @property {string[]} missing - An array of strings indicating what's missing from the password.
 */

/**
 * Checks if the password is strong and returns what's missing.
 * A strong password has at least:
 * - 8 characters
 * - 1 uppercase letter
 * - 1 lowercase letter
 * - 1 number
 * - 1 special character
 * 
 * @param {string} password - The password to validate.
 * @returns {PasswordValidationResult} An object indicating if the password is strong and what is missing.
 */
export default function checkStrongPassword(password) {
    const result = {
        isStrong: true,
        missing: []
    };

    if (password.length < 8) {
        result.isStrong = false;
        result.missing.push('minimum 8 characters');
    }
    
    if (password.length > 50) {
        result.isStrong = false;
        result.missing.push('maximum 50 characters');
    }

    if (!/[A-Z]/.test(password)) {
        result.isStrong = false;
        result.missing.push('uppercase letter');
    }

    if (!/[a-z]/.test(password)) {
        result.isStrong = false;
        result.missing.push('lowercase letter');
    }

    if (!/[0-9]/.test(password)) {
        result.isStrong = false;
        result.missing.push('number');
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        result.isStrong = false;
        result.missing.push('special character');
    }

    return result;
}
