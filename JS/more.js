const back = document.querySelector(".back");
const container = document.querySelector(".row");

window.addEventListener("load", () => {
    const ninjas = JSON.parse(localStorage.getItem("moreAboutNinjas"));

    console.log(ninjas);
    cardTemplate(ninjas);
});

back.addEventListener("click", () => {
    window.open("../index.html", "_self");
});

function cardTemplate({ clan, image, level, name, power, village }) {
    const template = `
        <div class="card">
            <div>
                <img src="${image}">
            </div>

            <div>
                <h2>Name: ${name}</h2>
                <p>Clan: ${clan}</p>
                <p>Level: ${level}</p>
                <p>Power: ${power}</p>
                <p>Village: ${village}</p>
            </div>
        </div>
    `

    container.innerHTML = template;
};