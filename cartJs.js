
// let MyHtml = " "; 
// Newcart.forEach(function(element){
//         MyHtml+=`<div class="card-body">
//         <div class="card" style="width: 18rem">
          
//           <div class="card-body">
//             <h5 class="card-title">Baskets</h5>
//             <p class="card-text">This is a basket</p>
//             <h4 class="unit-price">${element.price} $</h4>
//             <div>
//               <i class="fas fa-plus-circle plus"></i>
//               <span class="quantity" >0</span>
//               <i class="fas fa-minus-circle"></i>
//             </div>
//             <div>
//               <i class="fas fa-trash-alt"></i>
//               <i class="fas fa-heart"></i>
//             </div>
//           </div>
//         </div>
//       </div>
//       <!-- Product 2 : socks -->

//       <div class="card-body">
//         <div class="card" style="width: 18rem">
         
//           <div class="card-body">
//             <h5 class="card-title">Socks</h5>
//             <p class="card-text">This is a socks</p>
//             <h4 class="unit-price">20 $</h4>
//             <div>
//               <i class="fas fa-plus-circle plus"></i>
//               <span class="quantity" >0</span>
//               <i class="fas fa-minus-circle"></i>
//             </div>
//             <div>
//               <i class="fas fa-trash-alt"></i>
//               <i class="fas fa-heart"></i>
//             </div>
//           </div>
//         </div>
//       </div>
//       <!-- Product 3 : bag -->
//       <div class="card-body">
//         <div class="card" style="width: 18rem">
         
//           <div class="card-body">
//             <h5 class="card-title">Bag</h5>
//             <p class="card-text">This is a Bag</p>
//             <h4 class="unit-price">50 $</h4>
//             <div>
//               <i class="fas fa-plus-circle plus"></i>
//               <span class="quantity">0</span>
//               <i class="fas fa-minus-circle"></i>
//             </div>
//             <div>
//               <i class="fas fa-trash-alt"></i>
//               <i class="fas fa-heart"></i>
//             </div>
//           </div>
//         </div>
//       </div>`
//     });

//     document.querySelector('.list-products').textContent = MyHtml;
const prodname = [{
    id: "#93409878",
    productname: "socks",
    price: 100,
    quantity: 0
},{
    id: "#89399221",
productname: "Basket",
    price: 20,
    quantity: 0
},{
    id: "#4593929",
    productname: "Bag",
    price: 50,
    quantity: 0
}
];

let storemyHTML = " ";
prodname.forEach(function(element){
storemyHTML+= `
<div class="card-body">
  <div class="card" style="width: 18rem">
    <img src="/assets/bag.png" class="card-img-top" alt="bag" />
    <div class="card-body">
      <h5 class="card-title">${element.productname}</h5>
      <p class="card-text">This is a ${element.productname}</p>
      <h4 class="unit-price">${element.price} $</h4>
      <div>
        <i class="fas fa-plus-circle" data-class-id = ${element.id}></i>
        <span class="quantity">${element.quantity}</span>
        <i class="fas fa-minus-circle"></i>
      </div>
      <div>
        <i class="fas fa-trash-alt"></i>
        <i class="fas fa-heart"></i>
      </div>
    </div>
  </div>
</div>`
});

 document.querySelector('.list-products').innerHTML = storemyHTML;
//let storemyqty = 1;
document.querySelectorAll('.fa-plus-circle').forEach(function(element){
    console.log(element)
element.addEventListener('click', function(ell){
    console.log(ell.target.classList);
// let uniquedataset = e.dataset;
// console.log(uniquedataset);
//document.querySelector('.quantity').innerHTML = ++storemyqty;
})
})











// let MyHtml = " "; 
// prodname.forEach(function(element){
//     MyHtml+=`<div class="card-body">
//         <div class="card" style="width: 18rem">
          
//           <div class="card-body">
//             <h5 class="card-title">${element.productname}</h5>
//             <p class="card-text">This is a ${element.productname.toLowerCase()}</p>
//             <h4 class="unit-price">${element.price} $</h4>
//             <div>
//               <i class="fas fa-plus-circle plus"></i>
//               <span class="quantity" >0</span>
//               <i class="fas fa-minus-circle"></i>
//             </div>
//             <div>
//               <i class="fas fa-trash-alt"></i>
//               <i class="fas fa-heart"></i>
//             </div>
//           </div>
//         </div>
//       </div>`;
// });

// document.querySelector('.list-products').innerHTML = MyHtml;


// let storeplusbtn =  document.querySelectorAll('.plus');
// let qty = document.querySelectorAll('.quantity');
// let change = document.querySelector('.quantity');

// let quantity=1;
// storeplusbtn.forEach(function(e){
// e.addEventListener('click',function(element){

// change.innerHTML = quantity++;

// })     
//     })



