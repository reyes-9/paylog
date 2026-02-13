// src/utils/currency.js

// Philippine Peso formatter
const pesoFormatter = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
  maximumFractionDigits: 0,
});

/**
 * Formats a number into Philippine Peso (₱) format.
 * Example: 7651 -> ₱7,651
 */
export function formatPeso(value) {
  if (value === null || value === undefined || isNaN(value)) {
    return "₱0";
  }

  return pesoFormatter
    .format(Number(value))
    .replace("PHP", "₱")
    .replace(/\s/g, "");
}

/**
 * Generic currency formatter
 * Allows flexibility for other currencies in the future.
 */
export function formatCurrency(value, currency = "PHP", locale = "en-PH") {
  if (value === null || value === undefined || isNaN(value)) {
    return 0;
  }

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(Number(value));
}
