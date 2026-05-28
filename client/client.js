/**
 * CLIENT.js - Client marketplace page logic
 * Handles filtering, searching, sorting, and professional selection
 */

class ClientPage {
  constructor() {
    this.nodes = {
      search: document.getElementById('client-search'),
      sort: document.getElementById('client-sort'),
      ratingRange: document.getElementById('rating-range'),
      ratingValue: document.getElementById('rating-value'),
      categoryRadios: document.querySelectorAll('input[name="category"]'),
      budgetCheckboxes: document.querySelectorAll('input[name="budget"]'),
      professionalGrid: document.getElementById('professional-grid'),
      spotlight: document.getElementById('professional-spotlight'),
      resultsCount: document.getElementById('results-count'),
      resultsSummary: document.getElementById('results-summary'),
      activeFilters: document.getElementById('active-client-filters'),
      filterDrawer: document.getElementById('filter-drawer'),
      mobileFilterCopy: document.getElementById('mobile-filter-copy'),
      openFiltersBtn: document.getElementById('open-filters'),
      closeFiltersBtn: document.getElementById('close-filters'),
      closeFilterBackdrop: document.getElementById('close-filters-backdrop'),
      resetFiltersBtn: document.getElementById('reset-filters'),
      switchClientBtn: document.getElementById('switch-client'),
      switchFreelancerBtn: document.getElementById('switch-freelancer'),
    };

    this.state = {
      search: getUrlParam('q') || '',
      category: getUrlParam('category') || 'all',
      rating: Number(getUrlParam('min_rating') || 4),
      sort: getUrlParam('sort') || 'recommended',
      budgets: new Set((getUrlParam('budgets') || 'starter,growth,premium').split(',')),
      selectedId: getUrlParam('professional') || DATA.professionals[0]?.id,
      drawerOpen: false,
    };

    this.bindEvents();
    this.render();
  }

  bindEvents() {
    // Search
    this.nodes.search.addEventListener('input', (e) => {
      this.state.search = e.target.value;
      this.render();
    });

    // Sort
    this.nodes.sort.addEventListener('change', (e) => {
      this.state.sort = e.target.value;
      this.render();
    });

    // Rating range
    this.nodes.ratingRange.addEventListener('input', (e) => {
      this.state.rating = Number(e.target.value);
      this.render();
    });

    // Category filters
    this.nodes.categoryRadios.forEach((input) => {
      input.addEventListener('change', (e) => {
        this.state.category = e.target.value;
        this.render();
      });
    });

    // Budget filters
    this.nodes.budgetCheckboxes.forEach((input) => {
      input.addEventListener('change', () => {
        this.state.budgets = new Set();
        document.querySelectorAll('input[name="budget"]:checked').forEach((checked) => {
          this.state.budgets.add(checked.value);
        });
        this.render();
      });
    });

    // Professional grid selection
    this.nodes.professionalGrid.addEventListener('click', (e) => {
      const button = e.target.closest('[data-select-professional]');
      const card = e.target.closest('[data-professional-card]');
      const id = button?.dataset.selectProfessional || card?.dataset.professionalCard;
      if (id) {
        this.state.selectedId = id;
        this.render();
      }
    });

    // Filter drawer
    this.nodes.openFiltersBtn.addEventListener('click', () => this.openDrawer());
    this.nodes.closeFiltersBtn.addEventListener('click', () => this.closeDrawer());
    this.nodes.closeFilterBackdrop.addEventListener('click', () => this.closeDrawer());
    this.nodes.resetFiltersBtn.addEventListener('click', () => this.resetFilters());

    // Mobile filter interactions
    this.nodes.mobileFilterCopy.addEventListener('input', (e) => {
      if (e.target.id === 'drawer-rating-range') {
        this.state.rating = Number(e.target.value);
        this.render();
      }
    });

    this.nodes.mobileFilterCopy.addEventListener('change', (e) => {
      if (e.target.name === 'category') {
        this.state.category = e.target.value;
        this.render();
      }
      if (e.target.name === 'budget') {
        this.state.budgets = new Set();
        document.querySelectorAll('#mobile-filter-copy input[name="budget"]:checked').forEach((checked) => {
          this.state.budgets.add(checked.value);
        });
        this.render();
      }
    });

    // Role switching
    this.nodes.switchClientBtn.addEventListener('click', () => {
      // Already on client page, do nothing
    });

    this.nodes.switchFreelancerBtn.addEventListener('click', () => {
      localStorage.setItem('freelas-role', 'freelancer');
      navigateTo('../freelancer/dashboard.html', {});
    });

    // Keyboard
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.state.drawerOpen) {
        this.closeDrawer();
      }
    });
  }

  openDrawer() {
    this.state.drawerOpen = true;
    this.nodes.filterDrawer.hidden = false;
    this.renderMobileFilters();
  }

  closeDrawer() {
    this.state.drawerOpen = false;
    this.nodes.filterDrawer.hidden = true;
  }

  resetFilters() {
    this.state = {
      search: '',
      category: 'all',
      rating: 4,
      sort: 'recommended',
      budgets: new Set(['starter', 'growth', 'premium']),
      selectedId: DATA.professionals[0]?.id,
      drawerOpen: false,
    };
    this.render();
  }

  getFilteredProfessionals() {
    const query = this.state.search.trim().toLowerCase();
    return DATA.professionals
      .filter((item) => {
        const matchesCategory = this.state.category === 'all' || item.category === this.state.category;
        const matchesRating = item.rating >= this.state.rating;
        const matchesBudget = this.state.budgets.has(item.budget);
        const matchesQuery = !query || 
          [item.name, item.label, item.city, item.bio, ...item.services]
            .join(' ')
            .toLowerCase()
            .includes(query);
        return matchesCategory && matchesRating && matchesBudget && matchesQuery;
      })
      .sort((left, right) => {
        switch (this.state.sort) {
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

  renderFilters() {
    this.nodes.search.value = this.state.search;
    this.nodes.sort.value = this.state.sort;
    this.nodes.ratingRange.value = String(this.state.rating);
    this.nodes.ratingValue.textContent = `${Number(this.state.rating).toFixed(1)}+`;
    
    this.nodes.categoryRadios.forEach((input) => {
      input.checked = input.value === this.state.category;
    });

    this.nodes.budgetCheckboxes.forEach((input) => {
      input.checked = this.state.budgets.has(input.value);
    });
  }

  renderMobileFilters() {
    this.nodes.mobileFilterCopy.innerHTML = `
      <div class="filter-group">
        <h4>Categoria</h4>
        <label><input type="radio" name="category" value="all" ${this.state.category === 'all' ? 'checked' : ''} /> Todas</label>
        <label><input type="radio" name="category" value="design" ${this.state.category === 'design' ? 'checked' : ''} /> Design</label>
        <label><input type="radio" name="category" value="development" ${this.state.category === 'development' ? 'checked' : ''} /> Desenvolvimento</label>
        <label><input type="radio" name="category" value="marketing" ${this.state.category === 'marketing' ? 'checked' : ''} /> Marketing</label>
        <label><input type="radio" name="category" value="writing" ${this.state.category === 'writing' ? 'checked' : ''} /> Redação</label>
      </div>
      <div class="filter-group">
        <h4>Nota mínima</h4>
        <input id="drawer-rating-range" type="range" min="3" max="5" step="0.5" value="${this.state.rating}" />
        <div class="range-labels"><span>3.0</span><span id="drawer-rating-value">${Number(this.state.rating).toFixed(1)}+</span><span>5.0</span></div>
      </div>
      <div class="filter-group">
        <h4>Orçamento</h4>
        <label><input type="checkbox" name="budget" value="starter" ${this.state.budgets.has('starter') ? 'checked' : ''} /> Inicial</label>
        <label><input type="checkbox" name="budget" value="growth" ${this.state.budgets.has('growth') ? 'checked' : ''} /> Crescimento</label>
        <label><input type="checkbox" name="budget" value="premium" ${this.state.budgets.has('premium') ? 'checked' : ''} /> Premium</label>
      </div>`;
  }

  renderSpotlight(professional) {
    if (!professional) {
      this.nodes.spotlight.innerHTML = '<strong>Nenhum profissional selecionado</strong><p>Escolha um cartão de perfil para ver os detalhes aqui.</p>';
      return;
    }

    this.nodes.spotlight.innerHTML = `
      <div class="profile-head"><div class="avatar">${professional.initials}</div><div class="meta-stack"><strong>${professional.name}</strong><span>${professional.label}</span></div></div>
      <p>${professional.bio}</p>
      <div class="detail-row"><strong>Preço inicial</strong><span>${money(professional.price)}</span></div>
      <div class="detail-row"><strong>Nota média</strong><span>${professional.rating.toFixed(1)} / 5</span></div>
      <div class="detail-row"><strong>Tempo de resposta</strong><span>${professional.response}h</span></div>
      <div class="detail-row"><strong>Cidade</strong><span>${professional.city}</span></div>
      <div><h4>Serviços em destaque</h4><ul class="spotlight-list">${professional.services.map((service) => `<li><span>${service}</span><span class="badge">Disponível</span></li>`).join('')}</ul></div>
      <div><h4>Última avaliação</h4><p>${professional.review}</p></div>
      <div class="footer-actions"><button class="cta primary" type="button">Solicitar serviço</button><button class="cta secondary" type="button">Enviar mensagem</button></div>`;
  }

  renderGrid() {
    const professionals = this.getFilteredProfessionals();
    const activeProfessional = professionals.find((item) => item.id === this.state.selectedId) || professionals[0] || null;
    
    this.state.selectedId = activeProfessional?.id || this.state.selectedId;

    this.nodes.resultsCount.textContent = `${professionals.length} profissional${professionals.length === 1 ? '' : 'is'}`;
    this.nodes.resultsSummary.textContent = professionals.length 
      ? 'A seleção reflete os filtros ativos e o termo de busca.'
      : 'Não há resultados para este filtro. Reduza a busca ou a nota mínima.';

    this.renderSpotlight(activeProfessional);

    this.nodes.professionalGrid.innerHTML = professionals.map((professional) => {
      const isActive = professional.id === this.state.selectedId;
      return `
        <article class="result-card ${professional.featured ? 'featured' : ''} ${isActive ? 'active' : ''}" data-professional-card="${professional.id}">
          <header><div class="professional-meta"><div class="avatar">${professional.initials}</div><div class="meta-stack"><strong>${professional.name}</strong><span>${professional.label}</span><small>${professional.city}</small></div></div><span class="rating">★ ${professional.rating.toFixed(1)}</span></header>
          <p>${professional.bio}</p>
          <div class="footer-actions"><span class="badge">A partir de ${money(professional.price)}</span><span class="tag">${professional.response}h de resposta</span></div>
          <footer><button class="cta secondary" type="button" data-select-professional="${professional.id}">Ver perfil</button><button class="cta primary" type="button">Solicitar agora</button></footer>
        </article>`;
    }).join('');
  }

  renderActiveFilters() {
    this.nodes.activeFilters.innerHTML = [
      ['Função', 'cliente'],
      ['Categoria', this.state.category === 'all' ? 'Todas' : this.state.category],
      ['Nota', `${Number(this.state.rating).toFixed(1)}+`],
      ['Orçamento', Array.from(this.state.budgets).join(', ')],
      ['Busca', this.state.search || 'Qualquer'],
    ].map(([label, value]) => `<span class="chip"><strong>${label}:</strong> ${value}</span>`).join('');
  }

  updateUrl() {
    const params = {
      q: this.state.search || null,
      category: this.state.category !== 'all' ? this.state.category : null,
      min_rating: this.state.rating !== 4 ? this.state.rating : null,
      sort: this.state.sort !== 'recommended' ? this.state.sort : null,
      budgets: this.state.budgets.size !== 3 ? Array.from(this.state.budgets).join(',') : null,
      professional: this.state.selectedId,
    };

    const url = new URL(window.location.href);
    Object.entries(params).forEach(([key, value]) => {
      if (value === null) {
        url.searchParams.delete(key);
      } else {
        url.searchParams.set(key, String(value));
      }
    });

    history.replaceState({}, '', url.toString());
  }

  render() {
    this.renderFilters();
    this.renderGrid();
    this.renderActiveFilters();
    this.updateUrl();
  }
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  new ClientPage();
});
