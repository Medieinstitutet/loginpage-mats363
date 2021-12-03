// Create and append HTML basic elements

let root = document.getElementById("root");
let menu = document.createElement("header");
let section = document.createElement("section");
let footer = document.createElement("footer");
let userNameInput = document.createElement("input");
let passWordInput = document.createElement("input");
let btn = document.createElement("button");
let login = document.createElement("div");
let logo = document.createElement("h1");


userNameInput.placeholder = "Username";
passWordInput.placeholder = "Password";
btn.innerHTML = "Logga in";
logo.innerHTML ="SampleDoctor";
footer.innerHTML ="Copyright 2021 - SampleDoctor.com";

root.append(menu, section, footer);
menu.append(login, logo);
login.append(userNameInput, passWordInput, btn); 


window.addEventListener("load", initPage);
// Array with user objects
let users = [
    {
        name: "janne",
        password: "test"
    },
    {
        name: "mats",
        password: "stam"
    },
    {
        name: "jenna",
        password: "hästar"
    },
    {
        name: "felix",
        password: "puck"
    },

]

// Adds user array to Localstorage on load  
function initPage() {
    localStorage.setItem("Users", JSON.stringify(users));
}
function getUsers() {
    // Hämta array från Localstorage - kolla om inlogget stämmer
    let collectedUsers = localStorage.getItem("Users");

    let userList = [];
    if (collectedUsers) {
        userList = JSON.parse(collectedUsers);
    }
    return userList;
}

function logIn() {
    let userList = getUsers();
    console.log(userList);
}

function renderPage() {
    // Renderar en inloggad vy (både header och section) med information om samplingar
}

function renderError() {
    // Renderar "felaktigt användarnamn"
}

// Vid klick på knappen körs funktionen logIn
btn.addEventListener("click", checkLogin);

function checkLogin() {
    //let userName = userNameInput.value;
    //let passWord = passWordInput.value;
    let newUser = [ {
        name: userNameInput.value,
        passWord: passWordInput.value
    }]

    console.log(newUser);

    let userList = getUsers();

    
    
}

