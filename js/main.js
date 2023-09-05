const dropDown = document.querySelector("#dropDown"),
  DropList = document.querySelector("#DropList");

//   console.log(dropDown, DropList);
dropDown.addEventListener("click", () => {
  let spanDown = dropDown.querySelector(".iconMenu i");
  spanDown.classList.toggle("rotate");
  DropList.classList.toggle("d-none");
});

const bar = document.querySelector("#bar"),
  nav = document.querySelector("#nav");

bar.addEventListener("click", () => {
  nav.classList.toggle("ShowMenu");
});

// !-------قيد المراجعة-------!
// addEventListener("click" , (event)=>{
//     if (!event.target.classList.contains("ShowMenu")) {
//     //   console.log("ok");
//     if(nav.classList.contains("ShowMenu")) {
//         nav.classList.add("ShowMenu");
//     }else {
//         nav.classList.remove("ShowMenu");
//     }
//     }
// })

const header = document.querySelector("header"),
  headerTop = document.querySelector("#headerTop"),
  goUp = document.querySelector("#goUp");
addEventListener("scroll", () => {
  if (scrollY >= "200") {
    header.classList.add("shadow");
    goUp.classList.remove("d-none");
    headerTop.classList.add("d-none");
  } else {
    header.classList.remove("shadow");
    goUp.classList.add("d-none");
    headerTop.classList.remove("d-none");
  }
});

goUp.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});

// loading css and js
document.body.style.overflow = "hidden";
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  document.body.style.overflow = "visible";

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});
