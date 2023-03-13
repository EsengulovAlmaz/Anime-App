const email = document.querySelector(".email");
const password = document.querySelector(".password");
const signIn = document.querySelector(".signIn");
const error = document.querySelector(".error");

const allUser = JSON.parse(localStorage.getItem("users"));

signIn.addEventListener("click", e => {
    e.preventDefault();
    const user = allUser.find(item => item.email === email.value);

    console.log(user);
    if (email.value !== "" && password.value !== "") {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("access_token", "true");
            window.open("../index.html", "_self");
        } else {
            error.innerHTML = "Данный пользователь не существует!"
        }
    } else {
        error.innerHTML = "Все поля должны быть заполнены!";
    }
});


window.addEventListener("load", () => {
    if(localStorage.getItem("access_token") === "true") {
        window.open("../index.html", "_self");
    }
})