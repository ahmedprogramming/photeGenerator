let boxs = document.querySelector(".boxs");
let btn = document.querySelector(".btn")
let box = document.createElement("div");
box.classList.add("box");
let img = document.createElement("img");
box.appendChild(img);
btn.addEventListener("click",() =>{
    setTimeout(generatePhote, 500);
})
window.onload = generatePhote()
function generatePhote(){
    for(let i = 0; i < 8; i++){
        img.setAttribute("src", `https://picsum.photos/300?random=${Math.floor( Math.random() * 2000 )}`);
        boxs.appendChild(box.cloneNode(true));
    }
}