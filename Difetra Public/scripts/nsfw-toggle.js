var nsfw = false;
var sfwButton = document.getElementById("sfw-toggle");
var nsfwButton = document.getElementById("nsfw-toggle");
var sfwContent = document.getElementById("sfw-content");
var nsfwContent = document.getElementById("nsfw-content");
var image = document.getElementsByClassName("content-img")[0];
var ratingAnchor = window.location.hash;

if (ratingAnchor) {
    console.log(ratingAnchor);
    if (ratingAnchor == "#sfw") {
        toggleNSFW(false);
    } else if (ratingAnchor == "#nsfw") {
        toggleNSFW(true);
    }
}

function toggleNSFW(b) {
    if (b == true) { //nsfw
        image.src = nsfwButton.dataset.image;
        nsfwButton.className="highlighted";
        sfwButton.className="";
        nsfwContent.style.display = "block";
        sfwContent.style.display = "none";
        window.location.hash = "#nsfw";
    } else { //sfw
        image.src = sfwButton.dataset.image;
        sfwButton.className="highlighted";
        nsfwButton.className="";
        sfwContent.style.display = "block";
        nsfwContent.style.display = "none";
        window.location.hash = "#sfw";
    }
}

sfwButton.addEventListener("click", function(){
    toggleNSFW(false);
});
nsfwButton.addEventListener("click", function(){
    toggleNSFW(true);
});
