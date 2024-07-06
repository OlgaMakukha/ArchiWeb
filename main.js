const searchIcon = document.querySelector('.search-icon');
const searchInput = document.getElementById('searchInput');

searchIcon.addEventListener('click', function(event) {
    event.preventDefault();
    searchInput.style.display = 'block';
    searchInput.focus();
    this.style.display = 'none';
});

searchInput.addEventListener('blur', function() {
    if (this.value.trim() === '') {
        this.style.display = 'none';
        searchIcon.style.display = 'block';
    }
});

searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        console.log('Поисковый запрос:', this.value);
        this.value = '';
    }
});