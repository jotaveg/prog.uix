/**
 * MESSAGES.js - Freelancer messages page logic
 */

class MessagesPage extends FreelancerPage {
  constructor() {
    super('messages');
    this.conversationId = getUrlParam('conversation') || DATA.workspace.conversations[0]?.id;
    this.bindEvents();
    this.render();
  }

  bindEvents() {
    // Call parent bindEvents first to set up role switching and navigation
    super.bindEvents();

    // Use event delegation for conversation selection (survives re-renders)
    document.addEventListener('click', (e) => {
      const conversationItem = e.target.closest('[data-conversation]');
      if (conversationItem) {
        this.conversationId = conversationItem.dataset.conversation;
        this.render();
      }
    });
  }

  render() {
    this.setTitle('Mensagens');

    const selectedConversation = DATA.workspace.conversations.find(
      (conv) => conv.id === this.conversationId
    ) || DATA.workspace.conversations[0];

    const html = `
      <section class="workspace-panels">
        <div class="conversation-list">
          <h3>Conversas</h3>
          ${DATA.workspace.conversations.map((conversation) => `
            <article class="conversation-item ${conversation.id === selectedConversation.id ? 'active' : ''}" data-conversation="${conversation.id}">
              <div class="meta-stack">
                <strong>${conversation.client}</strong>
                <span>${conversation.project}</span>
                <small>${conversation.last}</small>
              </div>
              <span class="badge">${conversation.unread ? `${conversation.unread} novas` : 'Lida'}</span>
            </article>
          `).join('')}
        </div>
        <div class="message-stream">
          <div class="service-head">
            <div>
              <h3>${selectedConversation.client}</h3>
              <p class="hero-text">${selectedConversation.project}</p>
            </div>
            <div class="message-actions">
              <button class="cta secondary" type="button">Arquivar</button>
              <button class="cta primary" type="button">Responder</button>
            </div>
          </div>
          <div class="review-list">
            ${selectedConversation.messages.map((message) => `
              <article class="message-row ${message.author === 'Você' ? 'me' : ''}">
                <div class="avatar">${initials(message.author)}</div>
                <div class="message-body">
                  <strong>${message.author}</strong>
                  <span>${message.text}</span>
                </div>
                <small class="message-time">${message.time}</small>
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
  new MessagesPage();
});
