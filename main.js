"use strict";

const adviceid = document.getElementById("adviceid");
const advicetext = document.getElementById("advicetext");
const shuffler = document.getElementsByClassName("circle")[0];

async function generate() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  console.log(data);
  adviceid.innerHTML = "#" + data.slip.id;
  advicetext.innerHTML = ` "${data.slip.advice}" `;
}

shuffler.addEventListener("click", generate);