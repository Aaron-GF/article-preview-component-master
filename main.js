const button = document.querySelector("button");
const nav = document.querySelector("nav");

const url = encodeURIComponent(window.location.href); // get url of current page

/* shared links */
const facebook = document.querySelector("a");
const twitter = document.querySelector("a");
const pinterest = document.querySelector("a");

button.addEventListener("click", () => {
    nav.style.display = nav.style.display === "none" ? "block" : "none";

    facebook.href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    twitter.href = `https://twitter.com/intent/tweet?text=${url}`;
    pinterest.href = `https://pinterest.com/pin/create/button/?url=${url}`;
});
