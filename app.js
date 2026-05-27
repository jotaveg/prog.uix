const DATA = {
  professionals: [
    { id: 'ana-silva', name: 'Ana Silva', initials: 'AS', category: 'design', label: 'Design de marca', rating: 4.9, price: 1200, response: 2, city: 'São Paulo', budget: 'premium', featured: true, bio: 'Sistemas de identidade, apresentações e direção criativa pronta para lançamento.', services: ['Estratégia de marca', 'Identidade visual', 'Design de apresentações'], review: 'Transformou o projeto em uma experiência clara e premium.' },
    { id: 'bruno-costa', name: 'Bruno Costa', initials: 'BC', category: 'development', label: 'Desenvolvimento front-end', rating: 4.8, price: 900, response: 4, city: 'Curitiba', budget: 'growth', featured: true, bio: 'Interfaces responsivas, sistemas de design e entregas focadas em conversão.', services: ['Páginas de captura', 'Sistemas de design', 'Ajustes de performance'], review: 'Muito organizado, rápido e fácil de comunicar.' },
    { id: 'camila-rocha', name: 'Camila Rocha', initials: 'CR', category: 'marketing', label: 'Marketing de crescimento', rating: 4.7, price: 1500, response: 6, city: 'Recife', budget: 'premium', featured: false, bio: 'Funis, estratégia de conteúdo e campanhas de lançamento para negócios de serviço.', services: ['Mídia paga', 'Planejamento de campanhas', 'Direção de texto'], review: 'A campanha gerou leads consistentes em poucos dias.' },
    { id: 'diego-melo', name: 'Diego Melo', initials: 'DM', category: 'writing', label: 'Redação UX', rating: 4.6, price: 700, response: 1, city: 'Belo Horizonte', budget: 'starter', featured: false, bio: 'Microtexto, fluxos de entrada e mensagens de produto com leitura limpa.', services: ['Auditoria UX', 'Redação', 'Sistema de voz'], review: 'Cada tela ficou mais calma e fácil de entender.' },
    { id: 'elaine-souza', name: 'Elaine Souza', initials: 'ES', category: 'design', label: 'UI de produto', rating: 5, price: 1800, response: 3, city: 'Fortaleza', budget: 'premium', featured: true, bio: 'Painéis de produto, fluxos complexos e sistemas de interface para SaaS.', services: ['UI de painel', 'Consultoria UX', 'Design de produto'], review: 'Sensação excepcional de estrutura e hierarquia visual.' },
    { id: 'felipe-amaral', name: 'Felipe Amaral', initials: 'FA', category: 'development', label: 'Webflow / sem código', rating: 4.5, price: 600, response: 5, city: 'Florianópolis', budget: 'starter', featured: false, bio: 'Sites de marketing rápidos, pensados para velocidade, clareza e manutenção simples.', services: ['Construção em Webflow', 'Automação sem código', 'Atualização de sites'], review: 'Entregou rápido sem perder qualidade.' },
  ],
  workspace: {
    dashboard: {
      title: 'Painel',
      metrics: [
        { label: 'Pontos gerais', value: '84', delta: '+18 este mês' },
        { label: 'Atividades pendentes', value: '06', delta: '-2 desde ontem' },
        { label: 'Mensagens não lidas', value: '03', delta: '+1 desde a manhã' },
      ],
      reviews: [
        { name: 'Marina Costa', rating: 5, time: 'há 12 min', text: 'Entregou o quadro da campanha em tempo recorde e manteve cada detalhe alinhado.' },
        { name: 'Rafael Lima', rating: 4.8, time: 'há 2h', text: 'A interface ficou muito mais clara depois das sugestões de redesenho.' },
      ],
      tasks: [
        { client: 'Studio Lume', type: 'Responder ao briefing', status: 'pending', eta: 'Vence em 2h' },
        { client: 'Mundo Verde', type: 'Concluir revisão da página inicial', status: 'active', eta: 'Hoje' },
        { client: 'Cia. Atlas', type: 'Enviar arquivos finais', status: 'done', eta: 'Concluído' },
      ],
    },
    services: [
      { title: 'Sprint de marca', price: 'R$ 1.200', status: 'Ativo', description: 'Um sprint estruturado de identidade para novos lançamentos e atualizações.' },
      { title: 'Renovação do site', price: 'R$ 2.400', status: 'Ativo', description: 'Revisão responsiva da interface com foco em conversão.' },
      { title: 'Suporte mensal', price: 'R$ 850', status: 'Pausado', description: 'Edições contínuas, correções rápidas e atualizações prioritárias todo mês.' },
      { title: 'Kit de landing pages', price: 'R$ 1.050', status: 'Ativo', description: 'Blocos reutilizáveis de landing page para lançamentos de campanha.' },
    ],
    activities: [
      { client: 'Mariana Lopes', title: 'Feedback pendente na seção hero', status: 'pending', detail: 'Aguardando resposta do cliente' },
      { client: 'André Prado', title: 'Entrega de design aprovada', status: 'done', detail: 'Arquivos compartilhados com sucesso' },
      { client: 'Nexus Labs', title: 'Escopo atualizado para nova funcionalidade', status: 'active', detail: 'Rever cronograma revisado' },
    ],
    conversations: [
      { id: 'marina-costa', client: 'Marina Costa', project: 'Relançamento de marca', last: 'Podemos mover a oficina para quinta-feira?', unread: 2, messages: [
        { author: 'Marina Costa', time: '09:10', text: 'Podemos mover a oficina para quinta-feira?' },
        { author: 'Você', time: '09:22', text: 'Sim. Vou atualizar o convite e enviar uma agenda revisada.' },
        { author: 'Marina Costa', time: '09:41', text: 'Perfeito, obrigada.' },
      ] },
      { id: 'rafael-lima', client: 'Rafael Lima', project: 'Limpeza da página inicial', last: 'A nova versão ficou muito mais forte.', unread: 0, messages: [
        { author: 'Rafael Lima', time: 'Ontem', text: 'A nova versão ficou muito mais forte.' },
        { author: 'Você', time: 'Ontem', text: 'Ótimo. Vou enviar o pacote final de arquivos hoje à noite.' },
      ] },
      { id: 'nexus-labs', client: 'Nexus Labs', project: 'Painel do produto', last: 'Precisamos tornar o feed de atividades mais denso.', unread: 1, messages: [
        { author: 'Nexus Labs', time: '08:30', text: 'Precisamos tornar o feed de atividades mais denso.' },
        { author: 'Você', time: '08:45', text: 'Entendido. Vou reduzir os espaçamentos e melhorar a hierarquia.' },
      ] },
    ],
  },
};

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

const urlState = new URLSearchParams(window.location.search);
const state = {
  role: urlState.get('role') || localStorage.getItem('freelas-role') || 'selector',
  client: {
    search: urlState.get('q') || '',
    category: urlState.get('category') || 'all',
    rating: Number(urlState.get('min_rating') || 4),
    sort: urlState.get('sort') || 'recommended',
    budgets: new Set((urlState.get('budgets') || 'starter,growth,premium').split(',')),
    selectedId: urlState.get('professional') || DATA.professionals[0].id,
  },
  workspaceView: urlState.get('section') || 'dashboard',
  conversationId: urlState.get('conversation') || DATA.workspace.conversations[0].id,
  drawerOpen: false,
};

const nodes = {
  selector: $('#role-selector'),
  experience: $('#experience'),
  client: $('#client-experience'),
  freelancer: $('#freelancer-experience'),
  clientSearch: $('#client-search'),
  clientSort: $('#client-sort'),
  ratingRange: $('#rating-range'),
  ratingValue: $('#rating-value'),
  professionalGrid: $('#professional-grid'),
  spotlight: $('#professional-spotlight'),
  resultsCount: $('#results-count'),
  resultsSummary: $('#results-summary'),
  activeFilters: $('#active-client-filters'),
  workspaceContent: $('#workspace-content'),
  workspaceTitle: $('#workspace-title'),
  filterDrawer: $('#filter-drawer'),
  mobileFilterCopy: $('#mobile-filter-copy'),
};

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
  if (replace) history.replaceState({}, '', next); else history.pushState({}, '', next);
}

function money(value) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(value);
}

function initials(name) {
  return name.split(' ').slice(0, 2).map((part) => part[0]).join('');
}

function setRole(role) {
  state.role = role;
  localStorage.setItem('freelas-role', role);
  if (role === 'selector') {
    nodes.selector.hidden = false;
    nodes.experience.hidden = true;
    updateUrl({
      role: null,
      section: null,
      conversation: null,
      professional: null,
      q: null,
      category: null,
      min_rating: null,
      sort: null,
      budgets: null,
    });
    renderShell();
    return;
  }
  nodes.selector.hidden = true;
  nodes.experience.hidden = false;
  nodes.client.hidden = role !== 'client';
  nodes.freelancer.hidden = role !== 'freelancer';
  if (role === 'client') {
    updateUrl({ role, section: null, conversation: null });
  } else {
    updateUrl({
      role,
      q: null,
      category: null,
      min_rating: null,
      sort: null,
      budgets: null,
      professional: null,
    });
  }
  renderShell();
}

function renderClientFiltersMarkup(target) {
  target.innerHTML = `
    <div class="filter-group">
      <h4>Categoria</h4>
      <label><input type="radio" name="category" value="all" ${state.client.category === 'all' ? 'checked' : ''} /> Todas</label>
      <label><input type="radio" name="category" value="design" ${state.client.category === 'design' ? 'checked' : ''} /> Design</label>
      <label><input type="radio" name="category" value="development" ${state.client.category === 'development' ? 'checked' : ''} /> Desenvolvimento</label>
      <label><input type="radio" name="category" value="marketing" ${state.client.category === 'marketing' ? 'checked' : ''} /> Marketing</label>
      <label><input type="radio" name="category" value="writing" ${state.client.category === 'writing' ? 'checked' : ''} /> Redação</label>
    </div>
    <div class="filter-group">
      <h4>Nota mínima</h4>
      <input id="drawer-rating-range" type="range" min="3" max="5" step="0.5" value="${state.client.rating}" />
      <div class="range-labels"><span>3.0</span><span id="drawer-rating-value">${Number(state.client.rating).toFixed(1)}+</span><span>5.0</span></div>
    </div>
    <div class="filter-group">
      <h4>Orçamento</h4>
      <label><input type="checkbox" name="budget" value="starter" ${state.client.budgets.has('starter') ? 'checked' : ''} /> Inicial</label>
      <label><input type="checkbox" name="budget" value="growth" ${state.client.budgets.has('growth') ? 'checked' : ''} /> Crescimento</label>
      <label><input type="checkbox" name="budget" value="premium" ${state.client.budgets.has('premium') ? 'checked' : ''} /> Premium</label>
    </div>`;
}

function renderClientFilters() {
  nodes.clientSearch.value = state.client.search;
  nodes.clientSort.value = state.client.sort;
  nodes.ratingRange.value = String(state.client.rating);
  nodes.ratingValue.textContent = `${Number(state.client.rating).toFixed(1)}+`;
  $$('input[name="category"]').forEach((input) => { input.checked = input.value === state.client.category; });
  $$('input[name="budget"]').forEach((input) => { input.checked = state.client.budgets.has(input.value); });
  renderClientFiltersMarkup(nodes.mobileFilterCopy);
}

function getFilteredProfessionals() {
  const query = state.client.search.trim().toLowerCase();
  return DATA.professionals
    .filter((item) => {
      const matchesCategory = state.client.category === 'all' || item.category === state.client.category;
      const matchesRating = item.rating >= state.client.rating;
      const matchesBudget = state.client.budgets.has(item.budget);
      const matchesQuery = !query || [item.name, item.label, item.city, item.bio, ...item.services].join(' ').toLowerCase().includes(query);
      return matchesCategory && matchesRating && matchesBudget && matchesQuery;
    })
    .sort((left, right) => {
      switch (state.client.sort) {
        case 'rating': return right.rating - left.rating;
        case 'price': return left.price - right.price;
        case 'response': return left.response - right.response;
        default: return Number(right.featured) - Number(left.featured) || right.rating - left.rating;
      }
    });
}

function renderProfessionalSpotlight(professional) {
  if (!professional) {
    nodes.spotlight.innerHTML = '<strong>Nenhum profissional selecionado</strong><p>Escolha um cartão de perfil para ver os detalhes aqui.</p>';
    return;
  }
  nodes.spotlight.innerHTML = `
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

function renderProfessionalGrid() {
  const professionals = getFilteredProfessionals();
  nodes.resultsCount.textContent = `${professionals.length} profissional${professionals.length === 1 ? '' : 'is'}`;
  nodes.resultsSummary.textContent = professionals.length ? 'A seleção reflete os filtros ativos e o termo de busca na barra de endereço.' : 'Não há resultados para este filtro. Reduza a busca ou a nota mínima.';
  const activeProfessional = professionals.find((item) => item.id === state.client.selectedId) || professionals[0] || null;
  state.client.selectedId = activeProfessional?.id || state.client.selectedId;
  renderProfessionalSpotlight(activeProfessional);
  nodes.professionalGrid.innerHTML = professionals.map((professional) => {
    const isActive = professional.id === state.client.selectedId;
    return `
      <article class="result-card ${professional.featured ? 'featured' : ''} ${isActive ? 'active' : ''}" data-professional-card="${professional.id}">
        <header><div class="professional-meta"><div class="avatar">${professional.initials}</div><div class="meta-stack"><strong>${professional.name}</strong><span>${professional.label}</span><small>${professional.city}</small></div></div><span class="rating">★ ${professional.rating.toFixed(1)}</span></header>
        <p>${professional.bio}</p>
        <div class="footer-actions"><span class="badge">A partir de ${money(professional.price)}</span><span class="tag">${professional.response}h de resposta</span></div>
        <footer><button class="cta secondary" type="button" data-select-professional="${professional.id}">Ver perfil</button><button class="cta primary" type="button">Solicitar agora</button></footer>
      </article>`;
  }).join('');
  nodes.activeFilters.innerHTML = [
    ['Função', 'cliente'],
    ['Categoria', state.client.category === 'all' ? 'Todas' : state.client.category],
    ['Nota', `${Number(state.client.rating).toFixed(1)}+`],
    ['Orçamento', Array.from(state.client.budgets).join(', ')],
    ['Busca', state.client.search || 'Qualquer'],
  ].map(([label, value]) => `<span class="chip"><strong>${label}:</strong> ${value}</span>`).join('');
  updateUrl({ role: 'client', q: state.client.search || null, category: state.client.category === 'all' ? null : state.client.category, min_rating: state.client.rating !== 4 ? state.client.rating : null, sort: state.client.sort === 'recommended' ? null : state.client.sort, budgets: state.client.budgets.size === 3 ? null : Array.from(state.client.budgets).join(','), professional: state.client.selectedId });
}

function syncClientControls() {
  renderClientFilters();
  renderProfessionalGrid();
}

function renderWorkspace() {
  const view = DATA.workspace[state.workspaceView] || DATA.workspace.dashboard;
  const workspaceTitles = {
    dashboard: 'Painel',
    services: 'Serviços',
    activities: 'Atividades',
    messages: 'Mensagens',
  };
  const metricLabels = {
    'Overall points': 'Pontos gerais',
    'Pending activities': 'Atividades pendentes',
    'Unread messages': 'Mensagens não lidas',
  };
  const taskStatuses = {
    pending: 'pendente',
    active: 'ativo',
    done: 'concluído',
  };

  nodes.workspaceTitle.textContent = workspaceTitles[state.workspaceView] || 'Painel';
  $$('#workspace-nav .nav-item, .workspace-switcher .pill').forEach((button) => { button.classList.toggle('active', button.dataset.workspaceView === state.workspaceView); });

  if (state.workspaceView === 'dashboard') {
    nodes.workspaceContent.innerHTML = `
      <section class="metric-grid">${view.metrics.map((metric) => `<article class="metric-card"><span class="badge">${metricLabels[metric.label] || metric.label}</span><div class="metric-value">${metric.value}</div><span class="delta">${metric.delta}</span></article>`).join('')}</section>
      <section class="workspace-panels">
        <div class="panel"><h3>Tarefas imediatas</h3><div class="task-list">${view.tasks.map((task) => `<article class="task-row"><div class="meta-stack"><strong>${task.type}</strong><span>${task.client}</span><small>${task.eta}</small></div><div class="footer-actions"><span class="status ${task.status}">${taskStatuses[task.status] || task.status}</span><button class="cta ${task.status === 'done' ? 'secondary' : 'primary'}" type="button">${task.status === 'done' ? 'Revisar' : 'Responder'}</button></div></article>`).join('')}</div></div>
        <div class="panel"><h3>Avaliações recentes</h3><div class="review-list">${view.reviews.map((review) => `<article class="review-card"><div><div class="review-head"><strong>${review.name}</strong><span class="rating">★ ${review.rating.toFixed(1)}</span></div><p>${review.text}</p></div><small>${review.time}</small></article>`).join('')}</div></div>
      </section>`;
    return;
  }

  if (state.workspaceView === 'services') {
    nodes.workspaceContent.innerHTML = `
      <section class="panel"><div class="service-head"><div><h3>Serviços ativos</h3><p class="hero-text">Uma visão compacta do que está ativo, pausado e do que pode ser duplicado para uma nova oferta.</p></div><button class="cta primary" type="button">Criar novo serviço</button></div><div class="service-grid">${DATA.workspace.services.map((service) => `<article class="service-card"><div class="service-head"><div class="meta-stack"><strong>${service.title}</strong><span>${service.description}</span></div><span class="status ${service.status.toLowerCase() === 'active' ? 'active' : 'pending'}">${service.status.toLowerCase() === 'active' ? 'ativo' : 'pausado'}</span></div><div class="detail-row"><strong>Preço</strong><span>${service.price}</span></div><div class="card-actions"><button class="cta secondary" type="button">Editar</button><button class="cta secondary" type="button">Pausar</button></div></article>`).join('')}</div></section>`;
    return;
  }

  if (state.workspaceView === 'activities') {
    nodes.workspaceContent.innerHTML = `
      <section class="panel"><div class="service-head"><div><h3>Quadro de atividades</h3><p class="hero-text">Visualização em lista para pedidos, aprovações e entregas concluídas.</p></div><span class="badge">3 solicitações ativas</span></div><div class="activity-list">${DATA.workspace.activities.map((activity) => `<article class="activity-card"><div class="meta-stack"><strong>${activity.title}</strong><span>${activity.client}</span><small>${activity.detail}</small></div><div class="footer-actions"><span class="status ${activity.status}">${taskStatuses[activity.status] || activity.status}</span><button class="cta secondary" type="button">Abrir</button></div></article>`).join('')}</div></section>`;
    return;
  }

  const selectedConversation = DATA.workspace.conversations.find((conversation) => conversation.id === state.conversationId) || DATA.workspace.conversations[0];
  nodes.workspaceContent.innerHTML = `
    <section class="workspace-panels">
      <div class="conversation-list"><h3>Conversas</h3>${DATA.workspace.conversations.map((conversation) => `<article class="conversation-item ${conversation.id === selectedConversation.id ? 'active' : ''}" data-conversation="${conversation.id}"><div class="meta-stack"><strong>${conversation.client}</strong><span>${conversation.project}</span><small>${conversation.last}</small></div><span class="badge">${conversation.unread ? `${conversation.unread} novas` : 'Lida'}</span></article>`).join('')}</div>
      <div class="message-stream"><div class="service-head"><div><h3>${selectedConversation.client}</h3><p class="hero-text">${selectedConversation.project}</p></div><div class="message-actions"><button class="cta secondary" type="button">Arquivar</button><button class="cta primary" type="button">Responder</button></div></div><div class="review-list">${selectedConversation.messages.map((message) => `<article class="message-row ${message.author === 'Você' ? 'me' : ''}"><div class="avatar">${initials(message.author)}</div><div class="message-body"><strong>${message.author}</strong><span>${message.text}</span></div><small class="message-time">${message.time}</small></article>`).join('')}</div></div>
    </section>`;
}

function renderShell() {
  document.body.dataset.role = state.role;
  $$('.role-pills .pill').forEach((button) => { const role = button.dataset.switchRole; button.classList.toggle('active', role === state.role); });
  if (state.role === 'selector') { nodes.selector.hidden = false; nodes.experience.hidden = true; return; }
  nodes.selector.hidden = true;
  nodes.experience.hidden = false;
  nodes.client.hidden = state.role !== 'client';
  nodes.freelancer.hidden = state.role !== 'freelancer';
  if (state.role === 'client') syncClientControls(); else renderWorkspace();
}

function openDrawer() { state.drawerOpen = true; nodes.filterDrawer.hidden = false; renderClientFiltersMarkup(nodes.mobileFilterCopy); }
function closeDrawer() { state.drawerOpen = false; nodes.filterDrawer.hidden = true; }

function bindClientEvents() {
  nodes.clientSearch.addEventListener('input', (event) => { state.client.search = event.target.value; syncClientControls(); });
  nodes.clientSort.addEventListener('change', (event) => { state.client.sort = event.target.value; syncClientControls(); });
  nodes.ratingRange.addEventListener('input', (event) => { state.client.rating = Number(event.target.value); syncClientControls(); });
  $$('input[name="category"]').forEach((input) => { input.addEventListener('change', (event) => { state.client.category = event.target.value; syncClientControls(); }); });
  $$('input[name="budget"]').forEach((input) => { input.addEventListener('change', () => { const selectedBudgets = new Set(); $$('input[name="budget"]:checked').forEach((checked) => selectedBudgets.add(checked.value)); state.client.budgets = selectedBudgets; syncClientControls(); }); });
  nodes.mobileFilterCopy.addEventListener('input', (event) => {
    const target = event.target;
    if (target.id === 'drawer-rating-range') {
      state.client.rating = Number(target.value);
      syncClientControls();
    }
  });
  nodes.mobileFilterCopy.addEventListener('click', (event) => {
    const target = event.target;
    if (target.name === 'category') {
      state.client.category = target.value;
      syncClientControls();
      return;
    }
    if (target.name === 'budget') {
      const selectedBudgets = new Set();
      $$('input[name="budget"]:checked', nodes.mobileFilterCopy).forEach((checked) => selectedBudgets.add(checked.value));
      state.client.budgets = selectedBudgets;
      syncClientControls();
    }
  });
  nodes.mobileFilterCopy.addEventListener('change', (event) => {
    const target = event.target;
    if (target.name === 'category') {
      state.client.category = target.value;
      syncClientControls();
      return;
    }
    if (target.name === 'budget') {
      const selectedBudgets = new Set();
      $$('input[name="budget"]:checked', nodes.mobileFilterCopy).forEach((checked) => selectedBudgets.add(checked.value));
      state.client.budgets = selectedBudgets;
      syncClientControls();
    }
  });
  nodes.professionalGrid.addEventListener('click', (event) => { const button = event.target.closest('[data-select-professional]'); const card = event.target.closest('[data-professional-card]'); const professionalId = button?.dataset.selectProfessional || card?.dataset.professionalCard; if (!professionalId) return; state.client.selectedId = professionalId; syncClientControls(); });
  document.addEventListener('click', (event) => {
    if (event.target.matches('[data-open-filters]')) openDrawer();
    if (event.target.matches('[data-reset-client-filters]')) { state.client.search = ''; state.client.category = 'all'; state.client.rating = 4; state.client.sort = 'recommended'; state.client.budgets = new Set(['starter', 'growth', 'premium']); state.client.selectedId = DATA.professionals[0].id; syncClientControls(); }
    if (event.target.matches('[data-start-role]')) setRole(event.target.dataset.startRole);
    if (event.target.matches('[data-switch-role]')) setRole(event.target.dataset.switchRole);
  });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && state.drawerOpen) closeDrawer(); });
  document.addEventListener('click', (event) => { if (event.target.matches('[data-close-filters]')) closeDrawer(); });
  document.addEventListener('click', (event) => {
    const workspaceButton = event.target.closest('[data-workspace-view]');
    if (workspaceButton) { state.workspaceView = workspaceButton.dataset.workspaceView; updateUrl({ role: 'freelancer', section: state.workspaceView, conversation: state.conversationId }); renderWorkspace(); }
    const conversation = event.target.closest('[data-conversation]');
    if (conversation) { state.conversationId = conversation.dataset.conversation; updateUrl({ role: 'freelancer', section: state.workspaceView, conversation: state.conversationId }); renderWorkspace(); }
  });
}

bindClientEvents();

const initialRole = state.role === 'client' || state.role === 'freelancer' ? state.role : 'selector';
setRole(initialRole);
renderShell();