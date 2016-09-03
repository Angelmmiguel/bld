/**
 * Library to get the translations for the strings
 */

// Translations
import texts from './es';

/**
 * Get the string for a identifier
 */
const t = (id) => texts[id];

// Export
export default t;
