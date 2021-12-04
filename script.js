// Create and append HTML basic elements

let root = document.getElementById("root");
let menu = document.createElement("header");
let section = document.createElement("section");
let footer = document.createElement("footer");
let userNameInput = document.createElement("input");
let passWordInput = document.createElement("input");
let btn = document.createElement("button");
let btnLogOut = document.createElement("button");
let login = document.createElement("div");
let logo = document.createElement("h1");

passWordInput.type = "password";

userNameInput.placeholder = "Username";
passWordInput.placeholder = "Password";
btn.innerHTML = "Logga in";
btnLogOut.innerHTML = "Logga ut";
logo.innerHTML ="SampleDoctor";
footer.innerHTML ="Copyright 2021 - SampleDoctor.com";

root.append(menu, section, footer);

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
    menu.append(login, logo);
    login.append(userNameInput, passWordInput, btn); 
    section.innerHTML = "Logga in";
    localStorage.setItem("Users", JSON.stringify(users));
    let isLoggedIn = localStorage.getItem("loginStatus");
    if (isLoggedIn == "True") {
        console.log("Inloggad");
        renderLoggedInPage();
    } else {
        renderFailedToLogIn();
    }
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



function renderLoggedInPage() {
    
    section.innerHTML = "Grattis du är inloggad";
    login.innerHTML = "Välkommen " + userNameInput.value;
    localStorage.setItem("loginStatus", "True");
    login.append(btnLogOut);
    

    // Renderar en inloggad vy (både header och section) med information om samplingar
}

function renderFailedToLogIn() {
    // Renderar "felaktigt användarnamn"
    login.append(userNameInput, passWordInput, btn);
    section.innerHTML = "Du har angett fel användarnamn eller lösenord";
    localStorage.setItem("loginStatus", "False");
}

function renderLoggedOutPage() {
    section.innerHTML = "Du är utloggad"
    login.innerHTML = "";
    login.append(userNameInput, passWordInput, btn);
    
    
}

// Vid klick på knappen körs funktionen logIn
btn.addEventListener("click", checkLogin);

function checkLogin() {
    userName = userNameInput.value;
    passWord = passWordInput.value;
    
    let userList = getUsers();

    for (i = 0; i < userList.length; i++) {
        if (userList[i].name == userName && userList[i].password == passWord) {
        renderLoggedInPage();
        console.log("Inloggad");
        //localStorage.setItem("Inloggad", "Ja")
        break;
    } else {
        renderFailedToLogIn();
        console.log("Inte inloggad");
        //localStorage.setItem("Inloggad", "Nej")
        break;
    }

    }
}

btnLogOut.addEventListener("click", logOut);    
userNameInput.clear();

function logOut() {
    //document.getElementsByName("input")
    userNameInput.value = "";
    passWordInput.value = "";
    localStorage.getItem("loginStatus");
    localStorage.setItem("loginStatus", "False");
    renderLoggedOutPage();

}