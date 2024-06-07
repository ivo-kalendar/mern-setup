
/**
 * Validates if the given string is a valid email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean} True if the email is valid, false otherwise.
 */
export default function isValidEmail(email) {
    // Regular expression for validating an Email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Test the email against the regular expression
    return emailRegex.test(email);
}