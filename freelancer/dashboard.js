/**
 * DASHBOARD.js - Freelancer dashboard page logic
 */

class DashboardPage extends FreelancerPage {
  constructor() {
    super('dashboard');
    this.render();
  }

  render() {
    this.setTitle('Painel');

    const data = DATA.workspace.dashboard;
    const metricLabels = {
      'Pontos gerais': 'Pontos gerais',
      'Atividades pendentes': 'Atividades pendentes',
      'Mensagens não lidas': 'Mensagens não lidas',
    };

    const taskStatuses = {
      pending: 'pendente',
      active: 'ativo',
      done: 'concluído',
    };

    const html = `
      <section class="metric-grid">
        ${data.metrics.map((metric) => `
          <article class="metric-card">
            <span class="badge">${metric.label}</span>
            <div class="metric-value">${metric.value}</div>
            <span class="delta">${metric.delta}</span>
          </article>
        `).join('')}
      </section>
      <section class="workspace-panels">
        <div class="panel">
          <h3>Tarefas imediatas</h3>
          <div class="task-list">
            ${data.tasks.map((task) => `
              <article class="task-row">
                <div class="meta-stack">
                  <strong>${task.type}</strong>
                  <span>${task.client}</span>
                  <small>${task.eta}</small>
                </div>
                <div class="footer-actions">
                  <span class="status ${task.status}">${taskStatuses[task.status] || task.status}</span>
                  <button class="cta ${task.status === 'done' ? 'secondary' : 'primary'}" type="button">
                    ${task.status === 'done' ? 'Revisar' : 'Responder'}
                  </button>
                </div>
              </article>
            `).join('')}
          </div>
        </div>
        <div class="panel">
          <h3>Avaliações recentes</h3>
          <div class="review-list">
            ${data.reviews.map((review) => `
              <article class="review-card">
                <div>
                  <div class="review-head">
                    <strong>${review.name}</strong>
                    <span class="rating">★ ${review.rating.toFixed(1)}</span>
                  </div>
                  <p>${review.text}</p>
                </div>
                <small>${review.time}</small>
              </article>
            `).join('')}
          </div>
        </div>
      </section>
    `;

    this.renderContent(html);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new DashboardPage();
});
