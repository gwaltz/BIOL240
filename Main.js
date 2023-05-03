document.addEventListener("DOMContentLoaded", function() {
    var myButton = document.getElementById("my-button");
    myButton.addEventListener("click", function() {
      alert("Button clicked!");
    });

    var toggleButton = document.getElementById("toggle-button");
    var additionalInfoElement = document.getElementById("additional-info");

    toggleButton.addEventListener("click", function() {
    if (additionalInfoElement.style.display === "none") {
        additionalInfoElement.style.display = "block";
        toggleButton.textContent = "Close";
    } else {
        additionalInfoElement.style.display = "none";
        toggleButton.textContent = "More";
    }});
});