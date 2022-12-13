const key = document.querySelector("#key");

const cestDo = document.querySelector(".Do");
const cestRe = document.querySelector(".Re");
const cestMi = document.querySelector(".Mi");
const cestFa = document.querySelector(".Fa");
const cestSol = document.querySelector(".Sol");
const cestLa = document.querySelector(".La");
const cestSi = document.querySelector(".Si");

const cestDoNoir = document.querySelector(".D");
const cestReNoir = document.querySelector(".R");
const cestFaNoir = document.querySelector(".F");
const cestSolNoir = document.querySelector(".S");
const cestLaNoir = document.querySelector(".L");

const retourS = document.querySelector(".Retourr");

const sonne = (key) => {
  const audio = new Audio();
  audio.src = key + ".wav";
  audio.play();
};

//mousedown c'est quand on clique sur la souris
cestDo.addEventListener("mousedown", (e) => {
  cestDo.classList.add("DoTouche");
  sonne("d");
});

cestRe.addEventListener("mousedown", (e) => {
  cestRe.classList.add("ReTouche");
  sonne("f");
});

cestMi.addEventListener("mousedown", (e) => {
  cestMi.classList.add("MiTouche");
  sonne("g");
});

cestFa.addEventListener("mousedown", (e) => {
  cestFa.classList.add("FaTouche");
  sonne("h");
});

cestSol.addEventListener("mousedown", (e) => {
  cestSol.classList.add("SolTouche");
  sonne("j");
});

cestLa.addEventListener("mousedown", (e) => {
  cestLa.classList.add("LaTouche");
  sonne("k");
});

cestSi.addEventListener("mousedown", (e) => {
  cestSi.classList.add("SiTouche");
  sonne("l");
});

//mouseup c'est quand on relache le clique de la souris
cestDo.addEventListener("mouseup", (e) => {
  cestDo.classList.remove("DoTouche");
});

cestRe.addEventListener("mouseup", (e) => {
  cestRe.classList.remove("ReTouche");
});

cestMi.addEventListener("mouseup", (e) => {
  cestMi.classList.remove("MiTouche");
});

cestFa.addEventListener("mouseup", (e) => {
  cestFa.classList.remove("FaTouche");
});

cestSol.addEventListener("mouseup", (e) => {
  cestSol.classList.remove("SolTouche");
});

cestLa.addEventListener("mouseup", (e) => {
  cestLa.classList.remove("LaTouche");
});

cestSi.addEventListener("mouseup", (e) => {
  cestSi.classList.remove("SiTouche");
});

//Pour les touches noirs
//mousedown c'est quand on clique sur la souris
cestDoNoir.addEventListener("mousedown", (e) => {
  cestDoNoir.classList.add("DoToucheNoir");
  sonne("r");
});

cestReNoir.addEventListener("mousedown", (e) => {
  cestReNoir.classList.add("ReToucheNoir");
  sonne("t");
});

cestFaNoir.addEventListener("mousedown", (e) => {
  cestFaNoir.classList.add("FaToucheNoir");
  sonne("u");
});

cestSolNoir.addEventListener("mousedown", (e) => {
  cestSolNoir.classList.add("SolToucheNoir");
  sonne("i");
});

cestLaNoir.addEventListener("mousedown", (e) => {
  cestLaNoir.classList.add("LaToucheNoir");
  sonne("o");
});

//mouseup c'est quand on relache le clique de la souris
cestDoNoir.addEventListener("mouseup", (e) => {
  cestDoNoir.classList.remove("DoToucheNoir");
});

cestReNoir.addEventListener("mouseup", (e) => {
  cestReNoir.classList.remove("ReToucheNoir");
});

cestFaNoir.addEventListener("mouseup", (e) => {
  cestFaNoir.classList.remove("FaToucheNoir");
});

cestSolNoir.addEventListener("mouseup", (e) => {
  cestSolNoir.classList.remove("SolToucheNoir");
});

cestLaNoir.addEventListener("mouseup", (e) => {
  cestLaNoir.classList.remove("LaToucheNoir");
});

retourS.addEventListener("click", (e) => {
  console.log("Yes");
  window.open("index.html");
});
