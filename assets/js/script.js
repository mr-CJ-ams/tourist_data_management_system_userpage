// JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Get sidebar links
    const dashboardLink = document.querySelector(".sidebar ul li:nth-child(1) a");
    const submissionLink = document.querySelector(".sidebar ul li:nth-child(2) a");
    const trackingLink = document.querySelector(".sidebar ul li:nth-child(3) a");

    // Get content sections
    const dashboardContent = document.getElementById("dashboard-content");
    const submissionContent = document.getElementById("submission-content");
    const trackingContent = document.getElementById("tracking-content");
    

    // Add click event listeners to sidebar links
    dashboardLink.addEventListener("click", function(event) {
        event.preventDefault();
        showContent(dashboardContent);
        hideContent(submissionContent);
        hideContent(trackingContent);

        // Add active class to clicked link and remove from others
        dashboardLink.classList.add("active");
        submissionLink.classList.remove("active");
        trackingLink.classList.remove("active");
    });

    submissionLink.addEventListener("click", function(event) {
        event.preventDefault();
        showContent(submissionContent);
        hideContent(dashboardContent);
        hideContent(trackingContent);

        // Add active class to clicked link and remove from others
        submissionLink.classList.add("active");
        dashboardLink.classList.remove("active");
        trackingLink.classList.remove("active");
    });

    trackingLink.addEventListener("click", function(event) {
        event.preventDefault();
        showContent(trackingContent);
        hideContent(dashboardContent);
        hideContent(submissionContent);

        // Add active class to clicked link and remove from others
        trackingLink.classList.add("active");
        dashboardLink.classList.remove("active");
        submissionLink.classList.remove("active");
    });

    // Function to show content
    function showContent(content) {
        content.style.display = "block";
    }

    // Function to hide content
    function hideContent(content) {
        content.style.display = "none";
    }
});
