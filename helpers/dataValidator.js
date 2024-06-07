
/**
 * @typedef {Object} Field
 * @property {string} type - The type of the field (e.g., 'string', 'object', 'date').
 * @property {boolean} required - Indicates if the field is required.
 */

/**
 * @typedef {object} DataValidationResult
 * @property {string[]} errors - An array of strings indicating what's wrong or missing from the data.
 * @property {object} valid_data - An object containing only the valid data.
 */

/**
 * Validates the given data against the given schema. 
 * @param {any} data - The data to validate. (e.g. req.body)
 * @param {Array.<[string, Field]>} schema - The schema to validate the data against. (some type of db Schema)
 * @returns {DataValidationResult} An object indicating if the data is valid and what's missing.
 */
export default function validate(data, schema) {
    const errors = []
    const valid_data = {}

    for (const [key, value] of schema) {
        const field_exists = data.hasOwnProperty(key)
        const required_field_not_exists = value.required && !field_exists
        const not_valid_type = field_exists && typeof data[key] !== value.type

        if (required_field_not_exists) {
            errors.push(`Missing required field: ${key}`);
        } else if (not_valid_type) {
            this.errors.push(`Invalid type for field: ${key}, expected ${value.type}`);
        } else if (field_exists) {
            valid_data[key] = data[key];
        }
    }

    return { errors, valid_data }
}