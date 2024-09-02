/*
================================================================================
REVIEW FORM


Description: 
This is for adding reviews to the website and stores those reviews onto the users local storage.
================================================================================
*/
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('add-review-form');
    const reviewsList = document.getElementById('reviews-list');
    
    // Saves the review to the local storage
    function saveReviews(reviews) {
        try {
            // Converts the review into string then saves review onto the local storage
            localStorage.setItem('reviews', JSON.stringify(reviews));
            alert("Review was added, thank you!")
        // If unable to save to local storage then display error
        } catch (e) {
            alert("Unable to save review. Local Storage limit reached. Try posting a review without an image or a lower quality image. Sorry for inconvenience.")
            window.location.reload();
        }
    }

    // Retrieves the reviews from the local storage
    function getReviews() {
        const reviews = localStorage.getItem('reviews');
        return reviews ? JSON.parse(reviews) : [];
    }

    // Function that displays the user's review on the modal
    function displayReview(review) {

        // Adds the html of the review details using the users review form data
        const reviewItem = document.createElement('li');
        reviewItem.innerHTML = `${review.date}<br><big>${review.name}</big><br> <small>${review.review}<small><br>`;


        // If users attachs image then set the style for the image then add to image as item
        if (review.image) {
            const img = document.createElement('img');
            img.src = review.image;
            img.alt = 'Review Image';
            img.style.maxWidth = "200px";
            img.style.height = "100px";
            img.style.marginTop = "10px";

            // Adds the image as a review item
            reviewItem.appendChild(img);
        }
        reviewsList.appendChild(reviewItem);
    }
    
    // When user sumbits review then add review to the website then save to local storage
    form.addEventListener('submit', (event) => {
        event.preventDefault();
    
        const name = document.getElementById('Name').value;
        const review = document.getElementById('review').value;
        const imageInput = document.getElementById('image');
    
        // Ensures name is less than 20 characters
        if (name.length > 20) {
            alert("Name must not exceed 20 characters")
            return;
        }
        // Ensures review is less than 1000 characters
        if (review.length > 1000) {
            alert("Review must not exceed 1000 characters")
            return;
        }
        // Gets date and converts to string
        const date = new Date();
        const datestring = date.toLocaleDateString();
    
        const reviewData = {name, review, date: datestring, image: null};
    
        const reviews = getReviews();
        
        // Checks if valid image file is provided
        if (imageInput.files && imageInput.files[0]) {
            const file = imageInput.files[0];
            
            // Reads the file and updates the reviews to have image then saves and displays to user
            if (file.type === 'image/png') {
                const reader = new FileReader();
                // When filereader is read then saves review with image attached before displaying it
                reader.onload = function(event) {
                    // Sets image in review data as base64 string data
                    reviewData.image = event.target.result;
                    // Updates the reviews with the image before saving and displaying to user
                    reviews.push(reviewData);
                    saveReviews(reviews);
                    displayReview(reviewData);

                };
                // Converts image file into base64 encoded data
                reader.readAsDataURL(file);

            // Alerts user if file type not valid
            } else {
                alert("Please upload a PNG image!")
            }
        // Update reviews without image
        } else {
            reviews.push(reviewData);
            saveReviews(reviews);
            displayReview(reviewData);
        }
        // Resets form to update to new changes
        form.reset();
    });


    // Adds the existing reviews from the local storage to the modal when page loads
    window.addEventListener('load', () => {
        const reviews = getReviews();
        reviews.forEach(displayReview);
    });

})