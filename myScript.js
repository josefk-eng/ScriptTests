function doGet() {
    const url = "https://script.google.com/macros/s/AKfycbw4Fbpq7knAO9WqY6My4277fr63hyDtHbYjglh9qoJSdpiek7RXvZGyN71CKa0tPK24/exec";
    fetch(url)
            .then(d => d.json())
            .then(d => {
                 document.getElementById("app").textContent = d[0].status
            });
}
document.getElementById("btn").addEventListener("click", doGet);