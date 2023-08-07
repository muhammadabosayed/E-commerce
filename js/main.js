// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqb6gkzoTR48dYHXxHrDFzCWcPFsMtkhE",
  authDomain: "e-commerce-b345a.firebaseapp.com",
  projectId: "e-commerce-b345a",
  storageBucket: "e-commerce-b345a.appspot.com",
  messagingSenderId: "458578349453",
  appId: "1:458578349453:web:a66a9738fbf1aa7bb081c4",
  measurementId: "G-1GSBBYNZEG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Use Firebase products in your code here, such as Firestore
var db = firebase.firestore();

let alertError   = document.querySelector(".alert")
let closeAlert   = document.querySelector(".closeAlert")
let btnOK        = document.querySelector(".ok")
let successDone  = document.querySelector(".successDone")
let done         = document.querySelector(".done")


closeAlert.addEventListener("click",function(e){
e.preventDefault()
alertError.style.transform= "scale(0)"
})


btnOK.addEventListener("click",
function(e){
  e.preventDefault()
  alertError.style.transform= "scale(0)"
  })
  
  done.addEventListener("click",
function(e){
  e.preventDefault()
  successDone.style.transform= "scale(0)"
  })

  let type       = document.getElementById("type");
  let addProduct = document.getElementById("addProduct");
  
  let name     = document.getElementById("name");
  let price    = document.getElementById("price");
  let img      = document.getElementById("img");
  let desc     = document.getElementById("desc");
  let discount = document.getElementById("discount");
  
  addProduct.addEventListener("click", function(e) {
    e.preventDefault();
  
    if (type.value == "كمبيوتر") {
      // add data in collection Computer
      if (name.value != "" && price.value != "" && img.value != "" && desc.value != "" && discount.value != "") {
        db.collection("computer").add({
          name: name.value,
          price: price.value,
          number: img.value,
          desc: desc.value,
          descount: discount.value
        }).then(() => {
          console.log("Done !!!");
        })
        .catch((error) => {
          console.error(error);
        });
        name.value = "";
        price.value = "";
        img.value = "";
        desc.value = "";
        discount.value = "";
        successDone.style.transform = "scale(1)";
      } else {
        alertError.style.transform = "scale(1)";
      }
    } else if (type.value == "تابلت") {
      // add data in collection tablet
      if (name.value != "" && price.value != "" && img.value != "" && desc.value != "" && discount.value != "") {
        db.collection("tablet").add({
          name: name.value,
          price: price.value,
          number: img.value,
          desc: desc.value,
          descount: discount.value
        }).then(() => {
          console.log("Done !!!");
        })
        .catch((error) => {
          console.error(error);
        });
        name.value = "";
        price.value = "";
        img.value = "";
        desc.value = "";
        discount.value = "";
        successDone.style.transform = "scale(1)";
      } else {
        alertError.style.transform = "scale(1)";
      }
    } else if (type.value == "شاشات") {
      // add data in collection Screen
      if (name.value != "" && price.value != "" && img.value != "" && desc.value != "" && discount.value != "") {
        db.collection("screen").add({
          name: name.value,
          price: price.value,
          number: img.value,
          desc: desc.value,
          descount: discount.value
        }).then(() => {
          console.log("Done !!!");
        })
        .catch((error) => {
          console.error(error);
        });
        name.value = "";
        price.value = "";
        img.value = "";
        desc.value = "";
        discount.value = "";
        successDone.style.transform = "scale(1)";
      } else {
        alertError.style.transform = "scale(1)";
      }
    } else if (type.value == "موبايلات") {
      // add data in collection Mobile
      if (name.value != "" && price.value != "" && img.value != "" && desc.value != "" && discount.value != "") {
        db.collection("phone").add({
          name: name.value,
          price: price.value,
          number: img.value,
          desc: desc.value,
          descount: discount.value
        }).then(() => {
          console.log("Done !!!");
        })
        .catch((error) => {
          console.error(error);
        });
        name.value = "";
        price.value = "";
        img.value = "";
        desc.value = "";
        discount.value = "";
        successDone.style.transform = "scale(1)";
      } else {
        alertError.style.transform = "scale(1)";
      }
    } else if (type.value == "بدل") {
      // add data in collection manDress
      if (name.value != "" && price.value != "" && img.value != "" && desc.value != "" && discount.value != "") {
        db.collection("manDress").add({
          name: name.value,
          price: price.value,
          number: img.value,
          desc: desc.value,
          descount: discount.value
        }).then(() => {
          console.log("Done !!!");
        })
        .catch((error) => {
          console.error(error);
        });
        name.value = "";
        price.value = "";
        img.value = "";
        desc.value = "";
        discount.value = "";
        successDone.style.transform = "scale(1)";
      } else {
        alertError.style.transform = "scale(1)";
      }
    } else if (type.value == "لابتوبات"){
      // add data in collection laptop
      if (name.value != "" && price.value != "" && img.value != "" && desc.value != "" && discount.value != "") {
        db.collection("laptop").add({
          name: name.value,
          price: price.value,
          number: img.value,
          desc: desc.value,
          descount: discount.value
        }).then(() => {
          console.log("Done !!!");
        })
        .catch((error) => {
          console.error(error);
        });
        name.value = "";
        price.value = "";
        img.value = "";
        desc.value = "";
        discount.value = "";
        successDone.style.transform = "scale(1)";
      } else {
        alertError.style.transform = "scale(1)";
      }
    } else {
      alertError.style.transform = "scale(1)";
    }
  });



  let selectImage    = document.getElementById('selectImage')
  let containerImage = document.getElementById('containerImage')
  let cards          = document.querySelectorAll('.cardImage')
  let close          = document.getElementById('close')

  selectImage.addEventListener("click",function(e){
    e.preventDefault()
    containerImage.style.transform=" scale(1)"
  
  })
  
  close.addEventListener("click",function(e){
    e.preventDefault()
    containerImage.style.transform=" scale(0)"
  
  
  })
  
  
  const images = document.querySelectorAll('.cardImage img');
  
  images.forEach(function(image) {
    image.addEventListener('click', function(event) {
      if (event.target.tagName.toLowerCase() === 'img') {
        const card = event.target.closest('.cardImage');
        const span = card.querySelector('span');
  
        img.value = span.textContent
        containerImage.style.transform=" scale(0)"
  
      }
    });
  });
  

