document.addEventListener("DOMContentLoaded", function () {
  const versionButton = document.getElementById("version");
  const iframes = document.querySelectorAll("iframe");
  let showingFirst = true;

  versionButton.addEventListener("click", function () {
    if (showingFirst) {
      iframes[0].style.display = "none";
      iframes[1].style.display = "block";
    } else {
      iframes[0].style.display = "block";
      iframes[1].style.display = "none";
    }
    showingFirst = !showingFirst;
  });
});
