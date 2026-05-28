/**
 * ACTIVITIES.js - Freelancer activities page logic
 */

class ActivitiesPage extends FreelancerPage {
  constructor() {
    super('activities');
    this.render();
  }

  render() {
    this.setTitle('Atividades');

    const activities = DATA.workspace.activities;

    const taskStatuses = {
      pending: 'pendente',
      active: 'ativo',
      done: 'concluído',
    };

    const html = `
      <section class="panel">
        <div class="service-head">
          <div>
            <h3>Quadro de atividades</h3>
            <p class="hero-text">Visualização em lista para pedidos, aprovações e entregas concluídas.</p>
          </div>
          <span class="badge">3 solicitações ativas</span>
        </div>
        <div class="activity-list">
          ${activities.map((activity) => `
            <article class="activity-card">
              <div class="meta-stack">
                <strong>${activity.title}</strong>
                <span>${activity.client}</span>
                <small>${activity.detail}</small>
              </div>
              <div class="footer-actions">
                <span class="status ${activity.status}">${taskStatuses[activity.status] || activity.status}</span>
                <button class="cta secondary" type="button">Abrir</button>
              </div>
            </article>
          `).join('')}
        </div>
      </section>
    `;

    this.renderContent(html);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ActivitiesPage();
});
