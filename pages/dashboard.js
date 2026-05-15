/* ============================================
   Dashboard Page JavaScript
   Navigation & Content Switching
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.sidebar-nav__link');
    const sectionContents = document.querySelectorAll('.section-content');

    // Sidebar navigation
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get target section ID from href
            const targetId = this.getAttribute('href').substring(1);
            
            // Remove active class from all links
            sidebarLinks.forEach(l => l.classList.remove('active'));
            
            // Hide all sections
            sectionContents.forEach(section => {
                section.classList.remove('active');
            });
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Contact form submitted:', new FormData(this));
            alert('Solicitação de serviço enviada com sucesso! O profissional responderá em breve.');
            this.reset();
        });
    }

    // Message form handling
    const messageForm = document.querySelector('.message-form');
    if (messageForm) {
        messageForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const input = this.querySelector('.message-input');
            const messageText = input.value.trim();
            
            if (messageText) {
                // Create new message bubble
                const messageBody = document.querySelector('.message-body');
                const newBubble = document.createElement('div');
                newBubble.className = 'message-bubble sent';
                
                const time = new Date();
                const timeStr = time.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
                
                newBubble.innerHTML = `
                    <p>${messageText}</p>
                    <span class="time">${timeStr}</span>
                `;
                
                messageBody.appendChild(newBubble);
                messageBody.scrollTop = messageBody.scrollHeight;
                input.value = '';
            }
        });
    }

    // Settings form handling
    const settingsForms = document.querySelectorAll('.settings-form');
    settingsForms.forEach(form => {
        const submitBtn = form.querySelector('button[type="button"], button[type="submit"]');
        if (submitBtn) {
            submitBtn.addEventListener('click', function(e) {
                e.preventDefault();
                alert('Configurações atualizadas com sucesso!');
            });
        }
    });

    // Message item click
    const messageItems = document.querySelectorAll('.message-item');
    messageItems.forEach(item => {
        item.addEventListener('click', function() {
            messageItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Logout handling
    const logoutBtn = document.querySelector('.header__user .btn--ghost');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('Tem certeza que deseja sair?')) {
                window.location.href = '../index.html';
            }
        });
    }
});
