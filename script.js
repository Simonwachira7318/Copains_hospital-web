// your-script.js

$(document).ready(function() {
    // Hide the loader initially
    $('#loader').hide();

    // Function to show the loader and automatically hide it after 2 seconds
    function showLoaderAndHideAfter2Seconds() {
        $('#loader').show();

        // Simulate a page switch with a delay (e.g., fetching new content)
        setTimeout(function() {
            hideLoader(); // Hide the loader after 2 seconds
        }, 2000); // Display the loader for 2 seconds (adjust as needed)
    }

    // Function to hide the loader
    function hideLoader() {
        $('#loader').hide();
    }

    // Example: Simulate a page switch with a button click
    $('#page-switch-button').on('click', function() {
        showLoaderAndHideAfter2Seconds(); // Show the loader and hide it after 2 seconds
        // Implement your page-switching logic here
    });
});
