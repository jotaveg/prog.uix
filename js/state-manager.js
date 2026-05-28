/**
 * STATE-MANAGER.js - Central state management for FREELAS
 * Handles client filters, selections, and persistence
 */

class StateManager {
  constructor() {
    this.client = {
      search: getUrlParam('q') || '',
      category: getUrlParam('category') || 'all',
      rating: Number(getUrlParam('min_rating') || 4),
      sort: getUrlParam('sort') || 'recommended',
      budgets: new Set((getUrlParam('budgets') || 'starter,growth,premium').split(',')),
      selectedId: getUrlParam('professional') || DATA.professionals[0]?.id,
    };

    this.workspaceView = getUrlParam('section') || 'dashboard';
    this.conversationId = getUrlParam('conversation') || DATA.workspace.conversations[0]?.id;
    this.role = localStorage.getItem('freelas-role') || 'selector';
  }

  /**
   * Reset client filters to defaults
   */
  resetClientFilters() {
    this.client = {
      search: '',
      category: 'all',
      rating: 4,
      sort: 'recommended',
      budgets: new Set(['starter', 'growth', 'premium']),
      selectedId: DATA.professionals[0]?.id,
    };
    this.updateUrl({
      q: null,
      category: null,
      min_rating: null,
      sort: null,
      budgets: null,
      professional: null,
    });
  }

  /**
   * Set the current role
   * @param {string} role - 'client', 'freelancer', or 'selector'
   */
  setRole(role) {
    this.role = role;
    localStorage.setItem('freelas-role', role);
  }

  /**
   * Get filtered professionals based on current state
   * @returns {Array<object>}
   */
  getFilteredProfessionals() {
    const query = this.client.search.trim().toLowerCase();
    return DATA.professionals
      .filter((item) => {
        const matchesCategory = this.client.category === 'all' || item.category === this.client.category;
        const matchesRating = item.rating >= this.client.rating;
        const matchesBudget = this.client.budgets.has(item.budget);
        const matchesQuery = !query || 
          [item.name, item.label, item.city, item.bio, ...item.services]
            .join(' ')
            .toLowerCase()
            .includes(query);
        return matchesCategory && matchesRating && matchesBudget && matchesQuery;
      })
      .sort((left, right) => {
        switch (this.client.sort) {
          case 'rating':
            return right.rating - left.rating;
          case 'price':
            return left.price - right.price;
          case 'response':
            return left.response - right.response;
          default:
            return Number(right.featured) - Number(left.featured) || right.rating - left.rating;
        }
      });
  }

  /**
   * Update URL parameters
   * @param {object} extra - Parameters to update
   * @param {object} options - Options { replace: boolean }
   */
  updateUrl(extra = {}, options = {}) {
    const urlParams = {
      role: this.role !== 'selector' ? this.role : null,
      q: this.client.search || null,
      category: this.client.category !== 'all' ? this.client.category : null,
      min_rating: this.client.rating !== 4 ? this.client.rating : null,
      sort: this.client.sort !== 'recommended' ? this.client.sort : null,
      budgets: this.client.budgets.size !== 3 ? Array.from(this.client.budgets).join(',') : null,
      professional: this.client.selectedId,
      section: this.workspaceView !== 'dashboard' ? this.workspaceView : null,
      conversation: this.conversationId !== DATA.workspace.conversations[0]?.id ? this.conversationId : null,
      ...extra,
    };

    updateUrl(urlParams, options);
  }
}

// Create global instance
const state = new StateManager();
