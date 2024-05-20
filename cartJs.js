
// const prodname = [{
//     id: "#93409878",
//     pass:"#5462wuwu", 
//     productname: "socks",
//     price: 100,
//     quantity: 0
// },{
//     id: "#89399221",
//     pass:"#45gjti89",
// productname: "Basket",
//     price: 20,
//     quantity: 0
// },{
//     id: "#4593929",
//     pass:"#58tikgkbk",
//     productname: "Bag",
//     price: 50,
//     quantity: 0
// }
// ];

// let storemyHTML = " ";
// prodname.forEach(function(element){
// storemyHTML+= `
// <div class="card-body">
//   <div class="card" style="width: 18rem">
//     <img src="/assets/bag.png" class="card-img-top" alt="bag" />
//     <div class="card-body">
//       <h5 class="card-title">${element.productname}</h5>
//       <p class="card-text">This is a ${element.productname}</p>
//       <h4 class="unit-price">${element.price} $</h4>
//       <div>
//         <i class="fas fa-plus-circle" data-class-id = ${element.id}></i>
//         <span class="quantity" data-product-quantity = ${element.id}>0 </span>
//         <i class="fas fa-minus-circle"></i>
//       </div>
//       <div>
//         <i class="fas fa-trash-alt"></i>
//         <i class="fas fa-heart"></i>
//       </div>
//     </div>
//   </div>
// </div>`
// });

//  document.querySelector('.list-products').innerHTML = storemyHTML;

// document.querySelectorAll('.fa-plus-circle').forEach(function(element){
// element.addEventListener('click', function(ell){
// let storemyunique = ell.target.dataset;
//  console.log(storemyunique);
// let storemyqty;
// Newcart.forEach(function(myproducts){
//   if(storemyunique === myproducts.Id){
// storemyqty = myproducts;
// // storemyqty = myproducts.quantity +=1;
//   }
// })

// if(storemyqty){
//   storemyqty.quantity+=1
// console.log(storemyqty);
// } else {
// Newcart.push({
//   Id:storemyunique,
//   quantity: 1
// }) 
// }
// console.log("before ");
// console.log( document.querySelector('.quantity.dataset') );
// console.log(" after ");
// console.log(Newcart);

// })


// })

let mycards = document.querySelectorAll('.card-content')

mycards.forEach(function(e){
  let plusbtn = e.querySelector('.fa-plus-circle')
  let minusbtn = e.querySelector('.fa-minus-circle')
  let qty = e.querySelector('.quantity')
  let changetono = Number(qty.innerHTML) 
  plusbtn.addEventListener('click', function(){

qty.innerHTML= changetono+=1;
console.log(changetono)
total();
})

minusbtn.addEventListener('click',function(){
  if(changetono <= 0){
    return 
  }
  qty.innerHTML = changetono-=1;
  total();

})
})
//slice(0,-1)
function total(){
  let totalpricecenter = document.querySelector('.total1009')
  let zero=0;
mycards.forEach(function(card){
let getcardprice = card.querySelector('.unit-price')
const qty = card.querySelector(".quantity")
let qtytono = Number(qty.innerHTML)
let changetono = Number(qtytono)
let remove_$_and_conver_to_no = Number(getcardprice.innerText.replace('$',"") )
zero += remove_$_and_conver_to_no * qtytono;
})
totalpricecenter.innerHTML=zero + "$";
}
let hearts = document.querySelectorAll('.fa-heart')
hearts.forEach(function(heart) {
  heart.addEventListener('click', function() {
    // heart.style.color = 'red';
    if (heart.style.color === 'red') {
      heart.style.color = ''; // Resets to original color
    } else {
      heart.style.color = 'red';
    }
    }
  )
});

// document.querySelectorAll('.fa-heart').forEach(function(heart) {
//   heart.addEventListener('click', function() {
//     heart.style.color = 'red';
//   });
// });










