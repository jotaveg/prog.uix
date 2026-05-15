/* ============================================
   Authentication Pages JavaScript
   Login & Register Toggle Logic
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const clientForm = document.getElementById('clientForm');
    const freelancerForm = document.getElementById('freelancerForm');

    // Toggle between Client and Freelancer forms
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const type = this.getAttribute('data-type');

            // Update active button
            toggleButtons.forEach(btn => {
                btn.classList.remove('toggle-btn--active');
            });
            this.classList.add('toggle-btn--active');

            // Show/hide forms
            if (type === 'client') {
                if (clientForm) {
                    clientForm.classList.add('active');
                }
                if (freelancerForm) {
                    freelancerForm.classList.remove('active');
                }
            } else if (type === 'freelancer') {
                if (clientForm) {
                    clientForm.classList.remove('active');
                }
                if (freelancerForm) {
                    freelancerForm.classList.add('active');
                }
            }
        });
    });

    // No form submission needed - buttons now redirect via href
});
