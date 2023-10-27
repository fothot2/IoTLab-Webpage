document.getElementById("services_btn").addEventListener("click", function() {
    scrollToAnchor("services");
});

document.getElementById("projects_btn").addEventListener("click", function() {
    scrollToAnchor("Projects");
});

function scrollToAnchor(anchorId) {
    var targetElement = document.getElementById(anchorId);
    
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: "smooth" // You can use "auto" for instant scrolling
        });
    }
}