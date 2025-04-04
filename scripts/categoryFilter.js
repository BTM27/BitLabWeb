document.querySelectorAll('.categoryLink').forEach(link => {
  link.addEventListener('click', () => {
    const selectedCategory = link.dataset.category;
    const productWrappers = document.querySelectorAll('.productDisplayShopBT');

    productWrappers.forEach(wrapper => {
      const product = wrapper.querySelector('.productOnGrid');
      const productCategories = product.dataset.category.split(" ");

      if (selectedCategory === 'all' || productCategories.includes(selectedCategory)) {
        wrapper.style.display = 'flex';
      } else {
        wrapper.style.display = 'none';
      }
    });

    // Hide "no results" message just in case
    const noResults = document.getElementById('noResultMessage');
    if (noResults) noResults.style.display = 'none';

    // Optional: scroll to top after filter
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
