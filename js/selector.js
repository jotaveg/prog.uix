/**
 * SELECTOR.js - Role selector page logic
 * Handles navigation to client or freelancer pages
 */

document.addEventListener('DOMContentLoaded', () => {
  const btnClient = document.getElementById('btn-client');
  const btnFreelancer = document.getElementById('btn-freelancer');

  if (!btnClient || !btnFreelancer) {
    console.error('Buttons not found in selector page');
    return;
  }

  btnClient.addEventListener('click', () => {
    localStorage.setItem('freelas-role', 'client');
    navigateTo('./client/marketplace.html', {});
  });

  btnFreelancer.addEventListener('click', () => {
    localStorage.setItem('freelas-role', 'freelancer');
    navigateTo('./freelancer/dashboard.html', {});
  });
});
