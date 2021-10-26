const footerButton = document.querySelectorAll(".phone-nav-btn");

footerButton.forEach((element) => {
    if (element.getAttribute("href") == "." + window.location.pathname) {
        footerButton.forEach((i) => {
            if (i.classList.contains("active")) {
                i.classList.remove("active");
            }
        });
        element.classList.add("active");
    }
});
