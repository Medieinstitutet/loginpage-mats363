// Skapar och appendar HTML

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
// Array med user objects
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

// Startsida. Kollar om användaren är inloggad och renderar lämplig vy  
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
        renderLoginPage();
    }
}
function getUsers() {
    // Hämtar user array från Localstorage
    let collectedUsers = localStorage.getItem("Users");

    let userList = [];
    if (collectedUsers) {
        userList = JSON.parse(collectedUsers);
    }
    return userList;
}



function renderLoggedInPage() {
    section.innerHTML = "Grattis du är inloggad";
    login.innerHTML = "Välkommen!";
    localStorage.setItem("loginStatus", "True");
    login.append(btnLogOut);

    // Renderar en inloggad vy (både header och section)
}

function renderFailedToLogIn() {
    login.append(userNameInput, passWordInput, btn);
    userNameInput.value = "";
    passWordInput.value = "";
    section.innerHTML = "Du har angett fel användarnamn eller lösenord";
    localStorage.setItem("loginStatus", "False");
}

function renderLoginPage() {
    // Renderar "felaktigt användarnamn"
    login.append(userNameInput, passWordInput, btn);
    section.innerHTML = "Välkommen! Logga in för att ta del av alla feta samplingar";
    localStorage.setItem("loginStatus", "False");
}

function renderLoggedOutPage() {
    section.innerHTML = "Du är utloggad"
    login.innerHTML = "";
    login.append(userNameInput, passWordInput, btn);
    
    
}

// Vid klick på knappen körs funktionen checkLogin
btn.addEventListener("click", checkLogin);

function checkLogin() {
    userName = userNameInput.value;
    passWord = passWordInput.value;
    
    let userList = getUsers();

    for (i = 0; i < userList.length; i++) {
        if (userList[i].name == userName && userList[i].password == passWord) {
        renderLoggedInPage();
        console.log("Inloggad");
        let activeUser = userList[i].name;
        localStorage.setItem("Active user", JSON.stringify(activeUser));
        console.log(activeUser);
        
        break;
    } else {
        renderFailedToLogIn();
        console.log("Inte inloggad");
        
    }

    }
}

btnLogOut.addEventListener("click", logOut);    

function logOut() {
    userNameInput.value = "";
    passWordInput.value = "";
    localStorage.getItem("loginStatus");
    localStorage.setItem("loginStatus", "False");
    renderLoggedOutPage();

}