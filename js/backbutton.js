/*
================================================================================
BACK BUTTON


Description: 
This is the javascript for the back button which sends the user to the last window.
================================================================================
*/

const backbutton = document.getElementById('backbutton');

backbutton.addEventListener('click', function() {
    const referrer = document.referrer;
    const currentHost = window.location.host;

    // Checks if host name of the back window is the same as current host name
    if (referrer && new URL(referrer).host === currentHost) {
        // If there is history, send back to last window
        if (window.history.length > 1) {
            window.history.back();
        } else {
            // If there is no history, send to store page
            window.location.href = "store.html";
        }
    } else {
        // If host is not the same then go to store page
        window.location.href = "store.html";
    }
});