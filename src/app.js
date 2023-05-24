/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["dark", "big", "funny", "abominable"];
  let noun = ["man", "womoan", "clown", "rodent", "animal", "famous"];
  let end = [".com", ".es", ".uy", ".br", ".io"];

  let listOfDomains = [];

  for (let pronouns of pronoun) {
    for (let adjetives of adj) {
      for (let nouns of noun) {
        for (let ends of end) {
          listOfDomains.push(pronouns + adjetives + nouns + ends);
        }
      }
    }
  }

  let randomDomainName =
    listOfDomains[Math.floor(Math.random() * listOfDomains.length - 1)];

  document.getElementById("hola").innerHTML = randomDomainName;
  document.getElementById("button").addEventListener("click", function() {
    location.reload();
    alert("I'll give you a better one O|");
  });
};
