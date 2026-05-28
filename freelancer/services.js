/**
 * SERVICES.js - Freelancer services page logic
 */

class ServicesPage extends FreelancerPage {
  constructor() {
    super('services');
    this.render();
  }

  render() {
    this.setTitle('Serviços');

    const services = DATA.workspace.services;

    const html = `
      <section class="panel">
        <div class="service-head">
          <div>
            <h3>Serviços ativos</h3>
            <p class="hero-text">Uma visão compacta do que está ativo, pausado e do que pode ser duplicado para uma nova oferta.</p>
          </div>
          <button class="cta primary" type="button">Criar novo serviço</button>
        </div>
        <div class="service-grid">
          ${services.map((service) => `
            <article class="service-card">
              <div class="service-head">
                <div class="meta-stack">
                  <strong>${service.title}</strong>
                  <span>${service.description}</span>
                </div>
                <span class="status ${service.status.toLowerCase() === 'active' ? 'active' : 'pending'}">
                  ${service.status.toLowerCase() === 'active' ? 'ativo' : 'pausado'}
                </span>
              </div>
              <div class="detail-row">
                <strong>Preço</strong>
                <span>${service.price}</span>
              </div>
              <div class="card-actions">
                <button class="cta secondary" type="button">Editar</button>
                <button class="cta secondary" type="button">Pausar</button>
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
  new ServicesPage();
});
