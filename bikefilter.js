/*
================================================================================
STORE PRICE FILTER


Description: 
This is the function for filtering the store items by price
================================================================================
*/


function filterItems() {
    const range = document.querySelector('#price-range').value;
    const bikes = document.querySelectorAll('.bike-box');
    const noResultsMsg = document.querySelector('#no-results-msg')
    const chosenbrand = document.querySelector('#brand').value;


    
    let minPrice = 0; // sets minimum price
    let maxPrice = Infinity; // sets maximum price
    let results = false; // automatically sets results as none

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
        const bikebrand = bike.getAttribute('brand');

        const isinpricerange = bikePrice >= minPrice && bikePrice <= maxPrice
        const isbrand = chosenbrand == 'all' || chosenbrand === bikebrand;

        if (isinpricerange && isbrand) {
            bike.style.display = 'block'; // adds visibility of bike
            results = true; // results were found
        } else {
            bike.style.display = 'none'; // removes visibility of bike
        }
    });

    if (results) {
        noResultsMsg.style.display = 'none'; // 
    }
    else {
        noResultsMsg.style.display = 'block';
    }
}

document.querySelector('#filter-button').addEventListener('click', filterItems);

filterItems();