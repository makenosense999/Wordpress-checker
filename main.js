function checkWordPress() {
    var url = document.getElementById('urlInput').value;
    var resultElement = document.getElementById('result');

    if (url.includes("wordpress")) {
        resultElement.textContent = "Сайт использует WordPress.";
    } else {
        resultElement.textContent = "Сайт не использует WordPress.";
    }
}
