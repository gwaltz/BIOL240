document.addEventListener("DOMContentLoaded", function () {
    var myButton = document.getElementById("my-button");
    myButton.addEventListener("click", function () {
        alert("Button clicked!");
    });
});

function toggleInfo(id) {
    var toggleButton = document.getElementById("toggle-button-" + id);
    var additionalInfoElement = document.getElementById("additional-info-" + id);
    toggleButton.addEventListener("click", function () {
        if (additionalInfoElement.style.display === "none") {
            additionalInfoElement.style.display = "block";
            toggleButton.textContent = "Close";
        } else {
            additionalInfoElement.style.display = "none";
            toggleButton.textContent = "More";
        }
    })
}



