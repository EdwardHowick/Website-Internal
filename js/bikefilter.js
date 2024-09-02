/*
================================================================================
STORE PRICE AND BRAND FILTER


Description:
This is the function for filtering the bikes by price and brand
================================================================================
*/

// Function to filter price and brand
function filterItems() {
    const range = document.querySelector('#price-range').value;
    const bikes = document.querySelectorAll('.bike-box');
    const noResultsMsg = document.querySelector('#no-results-msg')
    const chosenbrand = document.querySelector('#brand').value;



    let minPrice = 0;
    let maxPrice = Infinity;
    let results = false;

    // Splits the data max and minimum data from html and sets the range
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

    // Sets the visibility of all the bike boxes using filters
    bikes.forEach(bike => {
        const bikePrice = parseFloat(bike.getAttribute('data-price'));
        const bikebrand = bike.getAttribute('brand');

        const isinpricerange = bikePrice >= minPrice && bikePrice <= maxPrice
        const isbrand = chosenbrand == 'all' || chosenbrand === bikebrand;

        // Adds visibility of the bikes that fit the price range and brand
        if (isinpricerange && isbrand) {
            bike.style.display = 'block';
            results = true;

        // Removes visibility of the bikes that dont fit price range and brand
        } else {
            bike.style.display = 'none';
        }
    });

    // If there are any items visible in the store then hide the no results message
    if (results) {
        noResultsMsg.style.display = 'none';
    }
    // If there are no items visible in the store then show the no results message
    else {
        noResultsMsg.style.display = 'block';
    }
}

// When filter button pressed then filter items.
document.querySelector('#filter-button').addEventListener('click', filterItems);

filterItems();