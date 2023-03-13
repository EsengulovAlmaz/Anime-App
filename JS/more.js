const back = document.querySelector(".back");
const container = document.querySelector(".row");
const deleteCard = document.querySelector(".delete");


const ninjas = JSON.parse(localStorage.getItem("moreAboutNinjas"));
cardTemplate(ninjas);


back.addEventListener("click", () => {
    window.open("../index.html", "_self");
});

function cardTemplate(base) {
    const template = `
        <div class="card">
            <div>
                <img src="${base.image}">
            </div>

            <div>
                <h2>Name: ${base.name}</h2>
                <p>Clan: ${base.clan}</p>
                <p>Level: ${base.level}</p>
                <p>Power: ${base.power}</p>
                <p>Village: ${base.village}</p>
            </div>
        </div>
    `

    container.innerHTML = template;

};



deleteCard.addEventListener("click", () => {
    const allNinjas = JSON.parse(localStorage.getItem("ninjas"));

    const newNinjas = allNinjas.filter(item => item.id !== ninjas.id);

    localStorage.setItem("ninjas", JSON.stringify(newNinjas));
    window.open("../index.html", "_self");
});