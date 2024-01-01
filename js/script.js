document.addEventListener("DOMContentLoaded", function () {
  var aboutLink = document.querySelector('a[href="#about"]');

  aboutLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default behavior of the anchor link

    var currentPath = window.location.pathname;

    // Check if the current page is not the main page
    if (currentPath !== "/" && currentPath !== "/index.html") {
      window.location.href = "/"; // Redirect to the main page
    }
    // If already on the main page, the default behavior will occur
  });
});
