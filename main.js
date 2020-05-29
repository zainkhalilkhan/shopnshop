let carts = document.querySelectorAll('.btn-primary');

let products =[

    {
         name: '3D PRINTED SHIRT',
         price: 1500,
         inCart:0
    },
    {
        name: 'CR 7 BLACK',
        price: 650,
        inCart:0
   },
   {
    name: ".card-title",
    price: ".card-text",
    inCart:0
},
{
    name: 'PACK OF 3 SHIRTS',
    price: 1950,
    inCart:0
}
];

for (i=0; i < carts.length; i++){
    carts[i].addEventListener('click',() => {
        cartNumbers(products[i]);
    })
    
}


function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.fa-shopping-cart span ').textContent = productNumbers;

    }


}

function cartNumbers(product){
   
     let productNumbers = localStorage.getItem('cartNumbers');


     productNumbers = parseInt(productNumbers);


if(productNumbers){
    localStorage.setItem('cartNumbers',productNumbers + 1);
    document.querySelector('.fa-shopping-cart span ').textContent = productNumbers + 1 ; 

}
else {


localStorage.setItem('cartNumbers',1);
document.querySelector('.fa-shopping-cart span').textContent = 1 ; 
}
            setItems(product);
}

function setItem(product){
    console.log("inside of setItems function");
    console.log("my product ", product);
}
onLoadCartNumbers(); 