

const menuItem = document.querySelectorAll(".menuItem");
const wrapper = document.querySelector(".sliderWrapper");


/////////NOT Working Check it//////////////
// menuItem.forEach((item,index) => {

//     item.addEventListener("click", () => {
//         const l=wrapper.style.tranform=`translateX(${-100 * index}vw)`;
//         console.log("Clicked"+index);
//         console.log(l);

//     });
// });
/////////////////////////////////////////////



const products=[
    {
        id:1,
        title:"Air Force",
        price:119,
        colors:[
            {
                code:"black",
                img:"./image/air.png",
            },
            {
                code:"darkblue",
                img:"./image/air2.png",
            },

        ],
    },

    {
        id:2,
        title:"Air Jordan",
        price:299,
        colors:[
            {
                code:"lightgray",
                img:"./image/jordan.png",
            },
            {
                code:"green",
                img:"./image/jordan2.png",
            },
        ],
    },

    {
        id:3,
        title:"Blazer",
        price:599,
        colors:[
            {
                code:"white",
                img:"./image/blazer.png",
            },
            {
                code:"green",
                img:"./image/blazer2.png",
            },
        ],
    },

    {
        id:4,
        title:"Crater",
        price:999,
        colors:[
            {
                code:"black",
                img:"./image/crater.png",
            },
            {
                code:"lightgray",
                img:"./image/crater2.png",
            },
        ],
    },

    {
        id:5,
        title:"Hippie",
        price:699,
        colors:[
            {
                code:"gray",
                img:"./image/hippie.png",
            },
            {
                code:"black",
                img:"./image/hippie2.png",
            },
        ],
    },
]




////////////////

let chooseProduct=products[0]

const crrentProductImg=document.querySelector(".productImg");
const crrentProductTitle=document.querySelector(".productTitle");
const crrentProductPrice=document.querySelector(".productPrice");
const crrentProductColors=document.querySelectorAll(".color");
const crrentProductSizes=document.querySelectorAll(".size");







/////////////


for(let index=0;index<menuItem.length;index++)
    {
        const item=menuItem[index];
    
        item.addEventListener("click",()=>{
    
            wrapper.style.transform=`translateX(${-100*index}vw)`;
            
            chooseProduct=products[index]

            crrentProductTitle.textContent=chooseProduct.title;
            crrentProductPrice.textContent="$" + chooseProduct.price;
            crrentProductImg.src=chooseProduct.colors[0].img;

            crrentProductColors.forEach((color,index)=>
            {
                color.style.backgroundColor= chooseProduct.colors[index].code;
            });
            


            
        });
    };   

    crrentProductColors.forEach((color,index)=>
    {
        color.addEventListener("click",()=>{

            crrentProductImg.src=chooseProduct.colors[index].img
        });
    });

    crrentProductSizes.forEach((size,index)=>
        {
            size.addEventListener("click",()=>{

                crrentProductSizes.forEach((size)=>
                {
                    size.style.backgroundColor="white";
                    size.style.color="black";
                })

                size.style.backgroundColor="black";
                size.style.color="white";

            });
        });

        /////Payment////////


        const productButton=document.querySelector(".productButton");
        const payment=document.querySelector(".payment");
        const close=document.querySelector(".close");


        productButton.addEventListener("click",()=>{

            payment.style.display="flex";
        })

        close.addEventListener("click",()=>{
            payment.style.display="none";
        })