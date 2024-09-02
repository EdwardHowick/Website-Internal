/*
================================================================================
STORE PRICE FILTER


Description: 
This is the function for filtering the store items by price.

P.S if you want proper comments then go to bikefilter.js as it is essentially the same filter.
================================================================================
*/



function filterItems() {
    const range = document.querySelector('#price-range').value;
    const bikes = document.querySelectorAll('.bike-box');
    const noResultsMsg = document.querySelector('#no-results-msg')
    
    let minPrice = 0;
    let maxPrice = Infinity;
    let results = false;

    if (range !== 'all') {
        const [min, max] = range.split('-');
        minPrice = parseFloat(min);
        if (max == 'infinite') {
            maxPrice = Infinity;
        }
        else {
            maxPrice = parseFloat(max);
        }
    }

    bikes.forEach(bike => {
        const bikePrice = parseFloat(bike.getAttribute('data-price'));

        if (bikePrice >= minPrice && bikePrice <= maxPrice) {
            bike.style.display = 'block';
            results = true;
        } else {
            bike.style.display = 'none';
        }
    });

    if (results) {
        noResultsMsg.style.display = 'none';
    }
    else {
        noResultsMsg.style.display = 'block';
    }
}

document.querySelector('#filter-button').addEventListener('click', filterItems);

filterItems();