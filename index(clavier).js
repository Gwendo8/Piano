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

const retourC = document.querySelector(".Retour");

const sonne = (key) => {
  const audio = new Audio();
  audio.src = key + ".wav";
  audio.play();
};

document.addEventListener("keydown", (e) => {
  if (e.key === "d") {
    sonne(e.key);
    cestDo.classList.add("DoTouche");
  } else if (e.key === "f") {
    sonne(e.key);
    cestRe.classList.add("ReTouche");
  } else if (e.key === "g") {
    sonne(e.key);
    cestMi.classList.add("MiTouche");
  } else if (e.key === "h") {
    sonne(e.key);
    cestFa.classList.add("FaTouche");
  } else if (e.key === "j") {
    sonne(e.key);
    cestSol.classList.add("SolTouche");
  } else if (e.key === "k") {
    sonne(e.key);
    cestLa.classList.add("LaTouche");
  } else if (e.key === "l") {
    sonne(e.key);
    cestSi.classList.add("SiTouche");
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "d") {
    cestDo.classList.remove("DoTouche");
  } else if (e.key === "f") {
    cestRe.classList.remove("ReTouche");
  } else if (e.key === "g") {
    cestMi.classList.remove("MiTouche");
  } else if (e.key === "h") {
    cestFa.classList.remove("FaTouche");
  } else if (e.key === "j") {
    cestSol.classList.remove("SolTouche");
  } else if (e.key === "k") {
    cestLa.classList.remove("LaTouche");
  } else if (e.key === "l") {
    cestSi.classList.remove("SiTouche");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "r") {
    sonne(e.key);
    cestDoNoir.classList.add("DoToucheNoir");
  } else if (e.key === "t") {
    sonne(e.key);
    cestReNoir.classList.add("ReToucheNoir");
  } else if (e.key === "u") {
    sonne(e.key);
    cestFaNoir.classList.add("FaToucheNoir");
  } else if (e.key === "i") {
    sonne(e.key);
    cestSolNoir.classList.add("SolToucheNoir");
  } else if (e.key === "o") {
    sonne(e.key);
    cestLaNoir.classList.add("LaToucheNoir");
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "r") {
    cestDoNoir.classList.remove("DoToucheNoir");
  } else if (e.key === "t") {
    cestReNoir.classList.remove("ReToucheNoir");
  } else if (e.key === "u") {
    cestFaNoir.classList.remove("FaToucheNoir");
  } else if (e.key === "i") {
    cestSolNoir.classList.remove("SolToucheNoir");
  } else if (e.key === "o") {
    cestLaNoir.classList.remove("LaToucheNoir");
  }
});

const documentation = document.querySelector("#docc");
const docAfficherBlanche = document.querySelector(".docToucheBlanche");
const docAfficherNoir = document.querySelector(".docToucheNoir");

documentation.addEventListener("click", (e) => {
  docAfficherBlanche.classList.toggle("showdoc");
  docAfficherNoir.classList.toggle("showdoc");
  console.log("yes");
});

retourC.addEventListener("click", (e) => {
  console.log("Yes");
  window.open("index.html");
});
