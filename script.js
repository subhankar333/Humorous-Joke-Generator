const jokeContainer = document.getElementById("joke");
const button = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?type=single";


let getJoke = () =>{
    jokeContainer.classList.remove("fade")
    fetch(url)
    .then(data => data.json())
    .then (item =>{
        jokeContainer.textContent = `${item.joke}`;
        jokeContainer.classList.add("fade")
    });
}

getJoke();

btn.addEventListener("click",getJoke)