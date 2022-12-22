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

document.addEventListener("keydown", (e) => {
  if (e.key === "d") {
    sonne(e.key);
    cestDo.classList.add("Appuie");
  } else if (e.key === "f") {
    sonne(e.key);
    cestRe.classList.add("Appuie");
  } else if (e.key === "g") {
    sonne(e.key);
    cestMi.classList.add("Appuie");
  } else if (e.key === "h") {
    sonne(e.key);
    cestFa.classList.add("Appuie");
  } else if (e.key === "j") {
    sonne(e.key);
    cestSol.classList.add("Appuie");
  } else if (e.key === "k") {
    sonne(e.key);
    cestLa.classList.add("Appuie");
  } else if (e.key === "l") {
    sonne(e.key);
    cestSi.classList.add("Appuie");
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "d") {
    cestDo.classList.remove("Appuie");
  } else if (e.key === "f") {
    cestRe.classList.remove("Appuie");
  } else if (e.key === "g") {
    cestMi.classList.remove("Appuie");
  } else if (e.key === "h") {
    cestFa.classList.remove("Appuie");
  } else if (e.key === "j") {
    cestSol.classList.remove("Appuie");
  } else if (e.key === "k") {
    cestLa.classList.remove("Appuie");
  } else if (e.key === "l") {
    cestSi.classList.remove("Appuie");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "r") {
    sonne(e.key);
    cestDoNoir.classList.add("Appuie");
  } else if (e.key === "t") {
    sonne(e.key);
    cestReNoir.classList.add("Appuie");
  } else if (e.key === "u") {
    sonne(e.key);
    cestFaNoir.classList.add("Appuie");
  } else if (e.key === "i") {
    sonne(e.key);
    cestSolNoir.classList.add("Appuie");
  } else if (e.key === "o") {
    sonne(e.key);
    cestLaNoir.classList.add("Appuie");
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "r") {
    cestDoNoir.classList.remove("Appuie");
  } else if (e.key === "t") {
    cestReNoir.classList.remove("Appuie");
  } else if (e.key === "u") {
    cestFaNoir.classList.remove("Appuie");
  } else if (e.key === "i") {
    cestSolNoir.classList.remove("Appuie");
  } else if (e.key === "o") {
    cestLaNoir.classList.remove("Appuie");
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
