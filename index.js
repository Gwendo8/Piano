const btn1 = document.querySelector("#Choix1");
const btn2 = document.querySelector("#Choix2");

btn1.addEventListener("click", (e) => {
  console.log("Yes");
  window.open("index(clavier).html");
});

btn2.addEventListener("click", (e) => {
  console.log("Yes");
  window.open("index(souris).html");
});
