var favs = Array.from( document.querySelectorAll(".fa-plus-circle")) ;
var deleteBtns = Array.from(document.querySelectorAll(".fa-trash-alt")) ;
var cards = Array.from(document.querySelectorAll(".card")) ;
var plusBtns = Array.from(document.querySelectorAll(".fa-plus-circle")) ;
var minusBtns = Array.from(document.querySelectorAll(".fa-minus-circle")) ;

for (let fav of favs){
fav.addEventListener("click" , function(){
if (fav.style.color == "black") {
fav.style.color = "red"
} else {
fav.style.color = "black"
}
total()
})
}

for (let i in deleteBtns) {
deleteBtns[i].addEventListener ("click" , function(){
cards[i].remove()
total()
} )
}

for (let plusBtn of plusBtns) {
plusBtn.addEventListener("click" , function(){
plusBtn.nextElementSibling.innerHTML++
total()
})
}

for (let minuBtn of minusBtns) {
minuBtn.addEventListener("click" , function(){
minuBtn.previousElementSibling.innerHTML > 0 ?
minuBtn.previousElementSibling.innerHTML -- :
null
total()
})
}

function total() {
let qte = Array.from(document.querySelectorAll(".qute"))
let price = Array.from(document.querySelectorAll(".unitt-price"))
let s = 0
for ( let i = 0 ; i< price.length ; i++){
s = s + price[i].innerHTML * qte[i].innerHTML
}
document.getElementById("total-price").innerHTML = s
}