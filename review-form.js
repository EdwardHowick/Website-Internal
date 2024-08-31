document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('add-review-form');
    const reviewsList = document.getElementById('reviews-list');
    
    function saveReviews(reviews) {
        try {
            localStorage.setItem('reviews', JSON.stringify(reviews));
            alert("Review was added, thank you!")
        } catch (e) {

            alert("Unable to save review. Local Storage limit reached. Sorry for inconvenience. Try posting a review without an image.")
            window.location.reload();
        }
    }
    
    function getReviews() {
        const reviews = localStorage.getItem('reviews');
        return reviews ? JSON.parse(reviews) : [];
    }
    
    function displayReview(review) {
        const reviewItem = document.createElement('li');
        reviewItem.innerHTML = `${review.date}<br><big>${review.name}</big><br> <small>${review.review}<small><br>`;
    
        if (review.image) {
            const img = document.createElement('img');
            img.src = review.image;
            img.alt = 'Review Image';
            img.style.maxWidth = "200px";
            img.style.height = "100px";
            img.style.marginTop = "10px";
            reviewItem.appendChild(img); //adds the image as a review item
        }
    
        reviewsList.appendChild(reviewItem);
    }
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
    
        const name = document.getElementById('Name').value;
        const review = document.getElementById('review').value;
        const imageInput = document.getElementById('image');
    
        if (name.length > 20) { // ensures name is less than 20 characters
            alert("Name must not exceed 20 characters")
            return;
        }
        if (review.length > 1000) { // ensures comment is less than 1000 characters
            alert("Review must not exceed 1000 characters")
            return;
        }
    
        const date = new Date(); // gets the current date
        const datestring = date.toLocaleDateString(); //converts date to string
    
        const reviewData = { name, review, date: datestring, image: null };
    
        const reviews = getReviews();
        
        if (imageInput.files && imageInput.files[0]) { //
            const file = imageInput.files[0];
            
            if (file.type === 'image/png') {
                const reader = new FileReader();
                reader.onload = function(event) {
                    reviewData.image = event.target.result;
                    reviews.push(reviewData);
                    saveReviews(reviews);
                    displayReview(reviewData);
                };
                reader.readAsDataURL(file); // reads the image input as a file
            } else {
                alert("Please upload a PNG image!")
            }
        } else {
            displayReview(reviewData);
            reviews.push(reviewData);
            saveReviews(reviews);
        }
        form.reset();
    });
    
    window.addEventListener('load', () => {
        const reviews = getReviews();
        reviews.forEach(displayReview);
    });

})