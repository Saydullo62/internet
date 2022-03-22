const checkStatus = document.querySelector(".checkStatus");

let online = () => {
    checkStatus.innerText = "You are ON-LINE😎";
    checkStatus.style.backgroundColor = "green";
};
let offline = () => {
    checkStatus.innerText = "You are OFF-LINE😟";
    checkStatus.style.backgroundColor = "red";
};

if (window.navigator.onLine) {
    online();
}
else {
    offline();
}


window.addEventListener("online", online);
window.addEventListener("offline", offline);

