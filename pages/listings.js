/* ============================================
   Listings Page JavaScript
   Filter & Sort Logic
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    const applyFiltersBtn = document.getElementById('applyFilters');
    const resetFiltersBtn = document.getElementById('resetFilters');
    const sortSelect = document.getElementById('sortBy');
    const categoryCheckboxes = document.querySelectorAll('input[name="category"]');
    const ratingCheckboxes = document.querySelectorAll('input[name="rating"]');
    const availabilityCheckboxes = document.querySelectorAll('input[name="availability"]');
    const priceMin = document.getElementById('priceMin');
    const priceMax = document.getElementById('priceMax');

    // Apply Filters
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', function() {
            const selectedCategories = Array.from(categoryCheckboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.value);
            
            const selectedRatings = Array.from(ratingCheckboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.value);
            
            const selectedAvailability = Array.from(availabilityCheckboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.value);

            const filters = {
                categories: selectedCategories,
                ratings: selectedRatings,
                availability: selectedAvailability,
                priceMin: priceMin.value,
                priceMax: priceMax.value
            };

            console.log('Applied filters:', filters);
            alert('Filtros aplicados com sucesso!');
            // In a real app, this would filter the listings dynamically
        });
    }

    // Reset Filters
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', function() {
            categoryCheckboxes.forEach(cb => cb.checked = false);
            categoryCheckboxes[0].checked = true; // Check first category by default
            ratingCheckboxes.forEach(cb => cb.checked = false);
            ratingCheckboxes[1].checked = true; // Check 4+ stars by default
            availabilityCheckboxes.forEach(cb => cb.checked = false);
            availabilityCheckboxes[1].checked = true; // Check this week by default
            priceMin.value = 0;
            priceMax.value = 500;
            console.log('Filters reset');
        });
    }

    // Sort by
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            const sortValue = this.value;
            console.log('Sort by:', sortValue);
            // In a real app, this would re-sort the listings
            alert(`Listagem ordenada por: ${this.options[this.selectedIndex].text}`);
        });
    }

    // Favorite button toggle
    const favoriteButtons = document.querySelectorAll('.listing-card .btn--ghost');
    favoriteButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            this.textContent = this.textContent === '♡' ? '♥' : '♡';
            this.style.color = this.textContent === '♥' ? '#ef4444' : 'var(--color-text-muted)';
        });
    });

    // Pagination
    const paginationButtons = document.querySelectorAll('.pagination .btn--secondary');
    paginationButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Navigating to:', this.textContent);
            alert('Navegação de páginas em um app real');
        });
    });
});
