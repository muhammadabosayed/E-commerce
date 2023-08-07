
let row           = document.querySelector(".row")
let content       = document.getElementById("content")
let addToCart     = document.querySelector(".addToCart")
let allBuyProduct = document.querySelector(".allBuyProduct")
let closeCart     = document.querySelector(".closeCart")
let finalTotal     = document.querySelector(".finalTotal")
let counter     = document.querySelector(".counter")
let arr =[]
let total = 0

addToCart.addEventListener("click",function(e){
  e.preventDefault()
  allBuyProduct.style.transform = "translateX(0)"
  allBuyProduct.style.display = "block";
  
})
// closeCart.addEventListener("click",function(e){
//   e.preventDefault()
//   allBuyProduct.style.transform="translateX(100vw)"
// })

row.addEventListener("click",function(e){
  e.preventDefault()

  if(e.target.classList == "btn btn-danger btn-sm"){
    
    content.innerHTML =""
    let card =`
    <i class="fa fa-close icon"></i>
    <div class="row">
    
    <div class="screen col-lg-6 col-md-6 col-sm-12 p-4">
        
            <img id="image" src="${e.target.parentElement.parentElement.firstElementChild.src}" alt="">
      
    </div>
    <div class="col-lg-6 col-md-6 col-sm-12">
      <p class="nameProuduct">${e.target.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.innerHTML}</p>
         <p id="discription">${e.target.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.innerHTML}</p>
        <div class="price">
        <h3 id="price">${e.target.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML}</h3>
        <h7 style="font-size: 20px;"> <del id="discount">${e.target.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML}</del></h7><br>
        <p style="margin: 8px; color:#0481ff">الأسعار تشمل ضريبة القيمة المضافة.</p>
        <h6>يمكنك الشراء بالقسط ودفع ‏334.45 جنيه لمدة 60 أشهر مع بنوك مختارة.</h6>
  
    </div>
    <hr>
            
        </div>
    </div>
    
    `
    $(function(){
      $("#image").imagezoomsl();
      });
      
    content.style.transform="translateX(0)"
    content.innerHTML +=card
  }
let successDone     = document.querySelector(".successDone1")
  let done     = document.querySelector(".done")    

  done.addEventListener("click" , ()=>{
successDone.style.transform= "scale(0)"

  })
  if(e.target.classList == "btn btn-primary btn-sm"){
successDone.style.transform= "scale(1)"

    counter.innerHTML++
    arr.push(e.target.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML) 
    
    let allBuys =`
    <div class="content">
    <img src="${e.target.parentElement.parentElement.firstElementChild.src}" alt="">
    <h4>${e.target.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.innerHTML}</h4>
    <span class="priceProduct">${e.target.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML}</span>
    <span class="btn btn-danger btn-sm">حذف</span>
  </div>
    `
    allBuyProduct.innerHTML +=allBuys

    
    arr.forEach(i => {
    total += parseFloat(arr)
    
    });


allBuyProduct.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.innerHTML=total
arr=[]

  }

})

content.addEventListener("click",function(e){
  e.preventDefault()
  if(e.target.classList == "fa fa-close icon"){
    content.style.transform="translateX(120vw)"
  
  }

  if(e.target.classList == "fa fa-minus icon"){
    if(e.target.nextElementSibling.value > 0){
      e.target.nextElementSibling.value--
    }else{
      e.target.nextElementSibling.value = 0
    }
  }

  if(e.target.classList == "fa fa-plus icon"){
  e.target.previousElementSibling.value++
  }

})

allBuyProduct.addEventListener("click",function(e){
e.preventDefault()
if(e.target.classList == "closeCart"){
  allBuyProduct.style.transform="translateX(100vw)"

}

if(e.target.classList == "btn btn-danger btn-sm"){
  counter.innerHTML--

  allBuyProduct.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.innerHTML=+allBuyProduct.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.innerHTML - +e.target.previousElementSibling.innerHTML
  if(counter.innerHTML==0){
    total=0
  }
  e.target.parentElement.remove()

}


})





// **********************

let ScreenProduct = document.querySelector(".ScreenProduct")
let img1 = document.querySelector(".img1")
let img2 = document.querySelector(".img2")
let img3 = document.querySelector(".img3")
let img4 = document.querySelector(".img4")
let img5 = document.querySelector(".img5")
console.log(img5);
img1.addEventListener("mousemove",()=>{

  document.ScreenProduct.src=document.screenPro1.src

})
img2.addEventListener("mousemove",()=>{
  
  document.ScreenProduct.src=document.screenPro2.src

})

img3.addEventListener("mousemove",()=>{

  document.ScreenProduct.src=document.screenPro3.src

})

img4.addEventListener("mousemove",()=>{

  document.ScreenProduct.src=document.screenPro4.src

})

img5.addEventListener("mousemove",()=>{

  document.ScreenProduct.src=document.screenPro5.src

})


let DeviceProduct = document.querySelector(".ScreenProduct")
let imgDevice1 = document.querySelector(".imgDevice1")
let imgDevice2 = document.querySelector(".imgDevice2")
let imgDevice3 = document.querySelector(".imgDevice3")
let imgDevice4 = document.querySelector(".imgDevice4")
let imgDevice5 = document.querySelector(".imgDevice5")

imgDevice1.addEventListener("mousemove",()=>{
  document.DeviceProduct.src=document.DevicePro1.src
})
imgDevice2.addEventListener("mousemove",()=>{
  document.DeviceProduct.src=document.DevicePro2.src
})

imgDevice3.addEventListener("mousemove",()=>{
  document.DeviceProduct.src=document.DevicePro3.src
})

imgDevice4.addEventListener("mousemove",()=>{
  document.DeviceProduct.src=document.DevicePro4.src
})

imgDevice5.addEventListener("mousemove",()=>{
  document.DeviceProduct.src=document.DevicePro5.src
})

