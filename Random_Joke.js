let jokeTextElement = document.getElementById("jokeText");
let jokeBtnElement = document.getElementById("jokeBtn");
let spinnerElement = document.getElementById("spinner");

function jokeBtnFunction() {
    let option = {
        method: "GET"
    };
    spinnerElement.classList.remove("d-none");

    fetch("https://apis.ccbp.in/jokes/random", option)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsondata) {
            spinnerElement.classList.add("d-none");
            jokeTextElement.textContent = jsondata.value;
        });
}

jokeBtnElement.addEventListener("click", jokeBtnFunction);