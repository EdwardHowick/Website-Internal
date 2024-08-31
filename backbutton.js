const backbutton = document.getElementById('backbutton');

backbutton.addEventListener('click', function() {
    const referrer = document.referrer;
    const currentHost = window.location.host;

    // Check if host is the same
    if (referrer && new URL(referrer).host === currentHost) {
        // If there is history, send back
        if (window.history.length > 1) {
            window.history.back();
        } else {
            // If there is no history, send to home page
            window.location.href = "store.html";
        }
    } else {
        // If host is not the same then go to home page
        window.location.href = "store.html";
    }
});