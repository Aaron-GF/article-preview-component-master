document.addEventListener("DOMContentLoaded", () => {
  const shareButton = document.querySelector("button");
  const shareMenu = document.querySelector("#share-menu");
  const author = document.querySelector("#author");
  const url = encodeURIComponent(window.location.href);

  // Set share URLs
  const facebook = document.querySelector("#facebook");
  const twitter = document.querySelector("#twitter");
  const pinterest = document.querySelector("#pinterest");

  if (facebook)
    facebook.href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  if (twitter) twitter.href = `https://twitter.com/intent/tweet?text=${url}`;
  if (pinterest)
    pinterest.href = `https://pinterest.com/pin/create/button/?url=${url}`;

  if (shareButton && shareMenu) {
    shareButton.addEventListener("click", (e) => {
      e.stopPropagation();
      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      // Toggle menu visibility
      shareMenu.classList.toggle("hidden");
      shareMenu.classList.toggle("md:flex");

      // Toggle active state on button
      shareButton.classList.toggle("bg-desaturated-dark-blue");
      shareButton.classList.toggle("text-white");

      if (isMobile) {
        author.classList.toggle("hidden");
      }
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!shareMenu.contains(e.target) && e.target !== shareButton) {
        shareMenu.classList.add("hidden");
        shareMenu.classList.remove("md:flex");
        shareButton.classList.remove("bg-desaturated-dark-blue", "text-white");

        if (window.matchMedia("(max-width: 768px)").matches) {
          author.classList.remove("hidden");
        }
      }
    });
  }
});
