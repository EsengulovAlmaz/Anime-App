const lastName = document.querySelector(".lastName");
const fIrstName = document.querySelector(".fIrstName");
const email = document.querySelector(".email");
const img = document.querySelector(".img");
const password = document.querySelector(".password");
const error = document.querySelector(".error");
const signUp = document.querySelector(".signUp");

window.addEventListener("load", () => {
    if (!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify([]));
    }
});

const allUsers = JSON.parse(localStorage.getItem("users"));

signUp.addEventListener("click", (e) => {
    e.preventDefault();

    const user = !!allUsers.find(item => item.email === email.value);
    console.log(user);

    if (lastName.value !== "" && fIrstName.value !== "" && email.value !== "" && password.value !== "" && img.value !== "") {
        if (!user) {
            localStorage.setItem("users", JSON.stringify([
                ...allUsers,
                {
                    lastName: lastName.value,
                    fIrstName: fIrstName.value,
                    email: email.value,
                    img: img.value,
                    password: password.value
                }
            ]))
            window.open("../login.html", "_self");
        } else {
            error.innerHTML = "Данный пользователь существует!";
        }
        email.value = "";
        password.value = "";
        name.value = "";
    } else {
        error.innerHTML = "Все поля должны быть заполнены!";
    }
});

window.addEventListener("load", () => {
    if (localStorage.getItem("access_token") === "true") {
        window.open("../index.html", "_self");
    }
})