// const a=document.querySelector(".hum")
// a.addEventListener("click",()=>{
//    const b=document.querySelector(".menu")
//    b.classList.toggle("menuc")
// });
// function Category() {
    
//  let timer;
//  const n1=document.querySelector("#n1");
//    n1.addEventListener("mouseenter",()=>{
//       clearTimeout(timer);
//    AllType.Category.forEach((item)=>{
//    const submenu1=document.createElement("div")
//    submenu1.classList.add("submenu1")
//    submenu1.innerHTML+=`
//    <h4>${item.Name}</h4>
//    <img src="${item.Image}" alt="${item.Name}">
// `;n1.appendChild(submenu1)

// });
// });
//    n1.addEventListener("mouseleave",()=>{
//        timer=setTimeout(()=>{
//       n1.querySelectorAll(".submenu1").forEach((item)=> {
//          item.remove();
//       });
//    },2000);
//    });
      
// }Category();
// function Obscassion() {
//    let timer;
//  const n2=document.querySelector("#n2")
//    n2.addEventListener("mouseenter",()=>{
//       clearTimeout(timer);
//    AllType.Occasion.forEach((item)=>{
//    const submenu2=document.createElement("div")
//    submenu2.classList.add("submenu2")
//    submenu2.innerHTML+=`
//    <h4>${item.Name}</h4>
//    <img src="${item.Image}" alt="${item.Name}">
// `;n2.appendChild(submenu2)

// });
// });
//    n2.addEventListener("mouseleave",()=>{
//        timer=setTimeout(()=>{
//       n2.querySelectorAll(".submenu2").forEach((item)=> {
//          item.remove();
//       });
//    },2000);
//    });
// }Obscassion();
// function price() {
//    let timer;
//  const n3=document.querySelector("#n3")
//    n3.addEventListener("mouseenter",()=>{
//       clearTimeout(timer);
//    AllType.Price.forEach((item)=>{
//    const submenu3=document.createElement("div")
//    submenu3.classList.add("submenu3")
//    submenu3.innerHTML+=`
//    <h4>${item.Name}</h4>
//    <img src="${item.Image}" alt="${item.Name}">
// `;n3.appendChild(submenu3)

// });
// });
//    n3.addEventListener("mouseleave",()=>{
//        timer=setTimeout(()=>{
//       n3.querySelectorAll(".submenu3").forEach((item)=> {
//          item.remove();
//       });
//    },2000);
//    });
// }price();
// function gender() {
//    let timer;
//  const n4=document.querySelector("#n4")
//    n4.addEventListener("mouseenter",()=>{
//       clearTimeout(timer);
//    AllType.Occasion.forEach((item)=>{
//    const submenu4=document.createElement("div")
//    submenu4.classList.add("submenu4")
//    submenu4.innerHTML+=`
//    <h4>${item.Name}</h4>
//    <img src="${item.Image}" alt="${item.Name}">
// `;n4.appendChild(submenu4)

// });
// });
//    n4.addEventListener("mouseleave",()=>{
//        timer=setTimeout(()=>{
//       n4.querySelectorAll(".submenu4").forEach((item)=> {
//          item.remove();
//       });
//    },2000);
//    });
// }Obscassion();


const AllType={
 Category:[
    {Name:"Necklace",Image:"Category/images.png"},
    {Name:"Mangalsutra",Image:"Category/Mangalsutra.png"},
    {Name:"Earring",Image:"Category/Earring.jfif"},
    {Name:"Ring",Image:"Category/Mainrings.jfif"},
    {Name:"Bracelate",Image:"Category/Braclate.jfif"},
    {Name:"Pendant",Image:"Category/Pendent.jfif"},
    {Name:"Pendant with Mangalsutra",Image:"Category/Pendent with Mangalsutra.jfif"},
    {Name:"Necklace with Pendant",Image:"Category/Pendent with Neckless.jfif"},
    {Name:"Nosepin",Image:"Category/Nosepine.jfif"},
    {Name:"Chains",Image:"Category/Chains.jfif"},
    {Name:"Bangles",Image:"Category/Bangels.jfif"},
    {Name:"AllJwellery",Image:"Category/All Image.jfif"}],
 Price:[{Name:"25k",Image:"Price/Couplering.jfif"},
    {Name:"25k To 50k",Image:"Price/Pendent.jfif"},
    {Name:"50K To 1L",Image:"Price/LittleNecklace.jfif"},{Name:"1L Above",Image:"Price/Bangels.jfif"}],
 Occasion:[
 {Name:"Morden Wear",
 Image:"Occasion/Morden Jwellary.jfif"},
 {Name:"Casual Wear",Image:"Occasion/CasualJwellary.jfif"},
 {Name:"Office Wear",Image:"Occasion/OfficeJwellary.jfif"},
 {Name:"Occasion Traditional Wear",Image:"Occasion/Traditional.jfif"}],
 Gender:[
    {Name:"Male",Image:"Gender/m1.jfif"},
    {Name:"Female",Image:"Gender/w1.jfif"},
    {Name:"Kids",Image:"Gender/k1.jfif"},]
};
const createMenu=(data,selector,option)=>{
      const Dropdown=document.createElement("div");
      data.forEach( (item)=> {
         const itemdiv=document.createElement("div")
         itemdiv.classList.add("Menuitem",option.itemClass);
         itemdiv.innerHTML=`
            <img class="${option.imageClass}" src="${item.Image}" alt="${item.Name}">
            <h6>${item.Name}</h6>
         ` ;
         Dropdown.appendChild(itemdiv);
      });
     selector.appendChild(Dropdown)
     selector.addEventListener("mouseenter",() =>{
         Dropdown.style.display ="grid";
      });
      selector.addEventListener("mouseleave",() =>{
         Dropdown.style.display ="none";
      });
      
      };


      const menus=document.querySelectorAll(".m1");
      const data=[
         AllType.Category,AllType.Occasion,AllType.Price,AllType.Gender
      ];
      menus.forEach((menu,index)=>{
         createMenu(data[index],menu,
        {
         menuClass:`menu-${index}`,
         itemClass:`item-${index}`,
         imageClass:`image-${index}`,
      });
      });
