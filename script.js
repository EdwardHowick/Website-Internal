function filterItems() {
    const minPrice = parseFloat(document.querySelector('.input-min').value) || 0;
    const maxPrice = parseFloat(document.querySelector('.input-max').value) || 50000;
    const bikes = document.querySelectorAll('.bike-box')

    bikes.forEach(bike => {
        const bikePrice = parseFloat(bike.getAttribute('data-price'));

        if (bikePrice >= minPrice && bikePrice <= maxPrice) {
            bike.style.display = 'block';
        } else {
            bike.style.display = 'none';
        }
    });
}
document.querySelector('#filter-button').addEventListener('click', filterItems);
document.querySelector('#filter-button').addEventListener('click', filterItems);

filterItems();