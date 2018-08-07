

function isHidden(el) {
    return (el.offsetParent === null);
}

function mobileNav() {
    var navList = document.querySelector("nav .button-list");
    var collapseToggle = document.getElementById("collapse-toggle");
    var hideIcon = collapseToggle.getElementsByClassName("collapsable")[0];
    collapseToggle.addEventListener("click", function() {
        if (!isHidden(hideIcon)) {
            navList.classList.toggle("expand-nav");
        }
    });
}

function init() {
    mobileNav();
}

init();