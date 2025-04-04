const noResults = document.getElementById('noResultMessage');
const searchInput = document.querySelector('.headerSearchBar');

searchInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    const term = this.value.trim().toLowerCase();
    const products = document.querySelectorAll('.productOnGrid');
    const grid = document.querySelector('.productGrid');

    let firstMatch = null;
    let matchCount = 0;

    products.forEach(product => {
      const name = product.querySelector('.PDOG-name').textContent.toLowerCase();
      const info = product.querySelector('.PDOG-info').textContent.toLowerCase();

      if (term === "") {
        product.style.display = 'flex';
        matchCount++;
      } else if (name.includes(term) || info.includes(term)) {
        product.style.display = 'flex';
        matchCount++;

        if (!firstMatch) {
          firstMatch = product;
        }
      } else {
        product.style.display = 'none';
      }
    });

    // Show or hide the "no results" message
    if (matchCount === 0) {
      noResults.style.display = 'block';
      grid.style.minHeight = '300px'; // Reserve space to keep layout stable
    } else {
      noResults.style.display = 'none';
      grid.style.minHeight = 'auto'; // Reset if results exist
    }

    // Scroll to first match if any
    if (firstMatch) {
      firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
});
