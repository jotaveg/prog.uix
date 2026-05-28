/**
 * FREELANCER-COMMON.js - Shared freelancer workspace functionality
 * Handles navigation, role switching, and common renders
 */

class FreelancerPage {
  constructor(currentView) {
    this.currentView = currentView;
    this.nodes = {
      workspaceNav: document.getElementById('workspace-nav'),
      workspaceSwitcher: document.querySelectorAll('.workspace-switcher .pill'),
      workspaceTitle: document.getElementById('workspace-title'),
      workspaceContent: document.getElementById('workspace-content'),
      switchClientBtn: document.getElementById('switch-client'),
      switchFreelancerBtn: document.getElementById('switch-freelancer'),
    };

    this.bindEvents();
    this.syncNavigation();
  }

  bindEvents() {
    // Navigation buttons in sidebar
    document.querySelectorAll('[data-workspace-view]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.navigateToView(btn.dataset.workspaceView);
      });
    });

    // Role switching
    if (this.nodes.switchClientBtn) {
      this.nodes.switchClientBtn.addEventListener('click', () => {
        localStorage.setItem('freelas-role', 'client');
        navigateTo('../client/marketplace.html', {});
      });
    }

    if (this.nodes.switchFreelancerBtn) {
      this.nodes.switchFreelancerBtn.addEventListener('click', () => {
        // Already on freelancer, do nothing
      });
    }
  }

  syncNavigation() {
    // Update active state for all navigation buttons
    document.querySelectorAll('[data-workspace-view]').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.workspaceView === this.currentView);
    });
  }

  navigateToView(view) {
    const views = {
      dashboard: '../freelancer/dashboard.html',
      services: '../freelancer/services.html',
      activities: '../freelancer/activities.html',
      messages: '../freelancer/messages.html',
    };

    if (views[view]) {
      navigateTo(views[view], { section: view });
    }
  }

  setTitle(title) {
    if (this.nodes.workspaceTitle) {
      this.nodes.workspaceTitle.textContent = title;
    }
  }

  renderContent(html) {
    if (this.nodes.workspaceContent) {
      this.nodes.workspaceContent.innerHTML = html;
    }
  }
}
