const menuToggle = document.querySelector(".icon-nav");
const navLinks = document.querySelector(".nav-principal");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

let observer = new MutationObserver(() => {
    let shadowElement = document.getElementById("otto-shadow-dom-id");
    if (shadowElement) {
        shadowElement.remove();
        console.log("otto-shadow-dom eliminado.");
        observer.disconnect(); // Detiene la observación después de eliminarlo
    }
});

observer.observe(document.body, { childList: true, subtree: true });

