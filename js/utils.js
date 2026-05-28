/**
 * UTILS.js - Shared utility functions across FREELAS application
 * DOM queries, formatting, and common helpers
 */

/**
 * Query selector wrapper
 * @param {string} selector - CSS selector
 * @param {Element} scope - Optional scope element (defaults to document)
 * @returns {Element}
 */
const $ = (selector, scope = document) => scope.querySelector(selector);

/**
 * Query selector all wrapper
 * @param {string} selector - CSS selector
 * @param {Element} scope - Optional scope element (defaults to document)
 * @returns {Array<Element>}
 */
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

/**
 * Format number as Brazilian Real currency
 * @param {number} value - The value to format
 * @returns {string} - Formatted currency string
 */
function money(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(value);
}

/**
 * Extract initials from a name
 * @param {string} name - Full name
 * @returns {string} - Two-letter initials
 */
function initials(name) {
  return name.split(' ').slice(0, 2).map((part) => part[0]).join('');
}

/**
 * Update URL parameters without reloading page
 * @param {object} extra - URL parameters to set
 * @param {object} options - Options { replace: boolean }
 */
function updateUrl(extra = {}, { replace = true } = {}) {
  const url = new URL(window.location.href);
  const params = url.searchParams;

  Object.entries(extra).forEach(([key, value]) => {
    if (value === null || value === undefined || value === '' || value === 'selector') {
      params.delete(key);
      return;
    }
    params.set(key, String(value));
  });

  const next = `${url.pathname}?${params.toString()}${url.hash}`.replace(/\?$/, '');
  if (replace) {
    history.replaceState({}, '', next);
  } else {
    history.pushState({}, '', next);
  }
}

/**
 * Get URL parameter value
 * @param {string} key - Parameter key
 * @returns {string|null}
 */
function getUrlParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

/**
 * Navigate to a page without reloading
 * @param {string} page - Page path (e.g., 'client/marketplace.html', 'freelancer/dashboard.html')
 * @param {object} params - URL search parameters
 */
function navigateTo(page, params = {}) {
  const url = new URL(page, window.location.origin);
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== '') {
      url.searchParams.set(key, String(value));
    }
  });

  window.location.href = url.toString();
}

/**
 * Navigate back to role selector
 */
function backToSelector() {
  navigateTo('./index.html', {});
}
