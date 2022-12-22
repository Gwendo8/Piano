const key = document.querySelector("#key");

const cestDo = document.querySelector("#do");
const cestRe = document.querySelector("#re");
const cestMi = document.querySelector("#mi");
const cestFa = document.querySelector("#fa");
const cestSol = document.querySelector("#sol");
const cestLa = document.querySelector("#la");
const cestSi = document.querySelector("#si");

const cestDoNoir = document.querySelector("#doDiese");
const cestReNoir = document.querySelector("#reDiese");
const cestFaNoir = document.querySelector("#faDiese");
const cestSolNoir = document.querySelector("#solDiese");
const cestLaNoir = document.querySelector("#laDiese");

const sonne = (key) => {
  const audio = new Audio();
  audio.src = key + ".wav";
  audio.play();
};

//mousedown c'est quand on clique sur la souris
cestDo.addEventListener("mousedown", (e) => {
  cestDo.classList.add("Appuie");
  sonne("d");
});

cestRe.addEventListener("mousedown", (e) => {
  cestRe.classList.add("Appuie");
  sonne("f");
});

cestMi.addEventListener("mousedown", (e) => {
  cestMi.classList.add("Appuie");
  sonne("g");
});

cestFa.addEventListener("mousedown", (e) => {
  cestFa.classList.add("Appuie");
  sonne("h");
});

cestSol.addEventListener("mousedown", (e) => {
  cestSol.classList.add("Appuie");
  sonne("j");
});

cestLa.addEventListener("mousedown", (e) => {
  cestLa.classList.add("Appuie");
  sonne("k");
});

cestSi.addEventListener("mousedown", (e) => {
  cestSi.classList.add("Appuie");
  sonne("l");
});

//mouseup c'est quand on relache le clique de la souris
cestDo.addEventListener("mouseup", (e) => {
  cestDo.classList.remove("Appuie");
});

cestRe.addEventListener("mouseup", (e) => {
  cestRe.classList.remove("Appuie");
});

cestMi.addEventListener("mouseup", (e) => {
  cestMi.classList.remove("Appuie");
});

cestFa.addEventListener("mouseup", (e) => {
  cestFa.classList.remove("Appuie");
});

cestSol.addEventListener("mouseup", (e) => {
  cestSol.classList.remove("Appuie");
});

cestLa.addEventListener("mouseup", (e) => {
  cestLa.classList.remove("Appuie");
});

cestSi.addEventListener("mouseup", (e) => {
  cestSi.classList.remove("Appuie");
});

//Pour les touches noirs
//mousedown c'est quand on clique sur la souris
cestDoNoir.addEventListener("mousedown", (e) => {
  cestDoNoir.classList.add("Appuie");
  sonne("r");
});

cestReNoir.addEventListener("mousedown", (e) => {
  cestReNoir.classList.add("Appuie");
  sonne("t");
});

cestFaNoir.addEventListener("mousedown", (e) => {
  cestFaNoir.classList.add("Appuie");
  sonne("u");
});

cestSolNoir.addEventListener("mousedown", (e) => {
  cestSolNoir.classList.add("Appuie");
  sonne("i");
});

cestLaNoir.addEventListener("mousedown", (e) => {
  cestLaNoir.classList.add("Appuie");
  sonne("o");
});

//mouseup c'est quand on relache le clique de la souris
cestDoNoir.addEventListener("mouseup", (e) => {
  cestDoNoir.classList.remove("Appuie");
});

cestReNoir.addEventListener("mouseup", (e) => {
  cestReNoir.classList.remove("Appuie");
});

cestFaNoir.addEventListener("mouseup", (e) => {
  cestFaNoir.classList.remove("Appuie");
});

cestSolNoir.addEventListener("mouseup", (e) => {
  cestSolNoir.classList.remove("Appuie");
});

cestLaNoir.addEventListener("mouseup", (e) => {
  cestLaNoir.classList.remove("Appuie");
});
