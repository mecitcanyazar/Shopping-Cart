const card = document.getElementsByClassName("card");
const btnAdd = document.querySelectorAll(".btn-info");
const btnCart = document.querySelector(".btn-cart");
const shoppingCartList = document.querySelector(".shopping-cart-list");



for (let i = 0; i < btnAdd.length; i++) {
    btnAdd[i].addEventListener("click",(e)=>{
        
        // console.log(card[i]);
        // console.log(card[i].getElementsByClassName("card-title")[0]);
        // console.log(card[i].getElementsByClassName("card-title")[0].textContent);
        let title = card[i].getElementsByClassName("card-title")[0].textContent;
        let price = card[i].getElementsByClassName("price")[0].textContent;
        let image = card[i].getElementsByClassName("card-img-top")[0].src;

        btnAdd[i].classList.add("disabled");
        btnAdd[i].textContent = "In Card"
        
        addToCart(title,price,image);
        removeCart();
        cartCount();

        e.preventDefault();
    })
}

const addToCart = (title,price,image) => {
    const listItem = document.createElement("div");
    listItem.className = "list-item";
    listItem.innerHTML = `
        <div class="row align-items-center text-white-50 ">
            <div class="col-md-3">
                <img src=${image} alt="product1" class="img-fluid">
            </div>
            <div class="col-md-5">
                <div class="title">${title}</div>
            </div>
            <div class="col-md-2">
                <div class="price">${price}</div>
            </div>
            <div class="col-md-2">
                <button class="btn btn-delete">
                    <i class="fas fa-trash-alt text-danger"></i>
                </button>
            </div>
        </div>
    `
    shoppingCartList.appendChild(listItem);
}


const removeCart = () => {
    let btnRemove = document.getElementsByClassName("btn-delete")
    for (let i = 0; i < btnRemove.length; i++) {
        btnRemove[i].addEventListener("click", function() {
            // console.log(this)

            // <!-- <div class="list-item">
            // <div class="row align-items-center text-white-50">
            //     <div class="col-md-3">
            //         <img src="./images/img1.jpg" alt="products" class="img-fluid">
            //     </div>
            //     <div class="col-md-5">
            //         <div class="title">Kulaklık</div>
            //     </div>
            //     <div class="col-md-2">
            //         <div class="price">$14</div>
            //     </div>
            //     <div class="col-md-2">
            //         <button class="btn btn-delete">
            //             <i class="fas fa-trash-alt text-danger"></i>
            //         </button>
            //     </div>
            // </div>

                this.parentElement.parentElement.parentElement.remove();
                cartCount();
        })
    }
}


const cartCount = () => {
       let cartList =  shoppingCartList.getElementsByClassName("list-item");
       let itemCount = document.getElementById("item-count");
       itemCount.textContent = cartList.length
}

const cartToggle = () => {
    //  <div class="shopping-cart-list bg-primary d-none  ">
    btnCart.addEventListener("click",function(){
        shoppingCartList.classList.toggle("d-none")
    })
} 

cartToggle();
