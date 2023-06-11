let box = document.getElementById("cards");
let API = async() => {
    let response = await fetch("https://reqres.in/api/users?page=1");
    let file = await response.json();
    let info = file.data
        .map((element) => {
            return `<div class="card">                     
        <div class="card-image">
            <img src="white.webp" alt="">
        </div>
        <div class="profile-image">
            <img src="${element.avatar}" alt="">
        </div>
        <div class="card-content">
            <h3>${element.first_name} ${element.last_name}</h3>
            <h3>User Id: ${element.id}</h3>
            <h2>${element.email}</h2>
            
        </div>
    </div>`;
        })
        .join("");
    cards.innerHTML = info;
};
let navBtn = document.getElementById("navbar-btn");
navBtn.addEventListener("click", () => {
    cards.innerHTML = `<h1 class='load'>Getting Users Data</h1><br><p>just a second it's loading....</p><br><span><i class="fa fa-spinner fa-spin" style="font-size:24px"></i></span>`;
    setTimeout(() => {
        API();
    }, 2000);
});