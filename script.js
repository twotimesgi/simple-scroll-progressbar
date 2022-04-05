let container = document.querySelector(".container");
let progressBar = document.querySelector(".inner");

for(let i = 0; i < 100; i++){
let card = document.createElement("div");
card.classList.add("card");
container.append(card);
}

let pageHeight = document.body.scrollHeight - this.window.innerHeight;

window.addEventListener("scroll", function(e){
    let progressHeight = (window.pageYOffset / pageHeight) * 100;
    progressBar.style.width = progressHeight + "%";
});
