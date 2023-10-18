let button = document.getElementById("unread-noti-remover");

button.addEventListener("click",() =>{
    document.querySelectorAll(".note").forEach(e =>{
        e.classList.remove("unread");
    });
    document.querySelectorAll(".dot").forEach(e =>{
        e.classList.remove("dot");
    });
    document.getElementById("notification-number").innerText = "0";
});