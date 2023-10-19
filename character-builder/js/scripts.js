// //window.addEventListener("load", function () {
//   let nameForm = document.getElementById("characterName");
//   nameForm.addEventListener("submit", function (event) {
//     const inputName = document.querySelector("name").value;
//     event.preventDefault();
//   });
// });

window.addEventListener("")

let characterName = getElementById("characterName");
let characterType = document.querySelector("input#characterType").value;
let characterAbility = document.querySelector("input#abilities").value;

if (characterType === "wizard" && characterAbility === "superStrength") {
  strongWizard.removeAttribute("class");
} else if (characterType === "wizard" && characterAbility === "mindReading") {
  mindReadingWizard.removeAttribute("class");
} else if (characterType === "wizard" && characterAbility === "flight") {
  flightWizard.removeAttribute("class");
} else if (characterType === "dwarf" && characterAbility === "superStrength") {
  strongDwarf.removeAttribute("class");
} else if (characterType === "dwarf" && characterAbility === "mindReading") {
  mindReadingDwarf.removeAttribute("class");
} else if (characterType === "dwarf" && characterAbility === "flight") {
  flightdwarf.removeAttribute("class");
} else if (characterType === "mermaid" && characterAbility === "superStrength") {
  strongMermaid.removeAttribute("class");
} else if (characterType === "mermaid" && characterAbility === "mindReading") {
  mindReadingMermaid.removeAttribute("class");
} else if (characterType === "mermaid" && characterAbility === "flight") {
  flightMermaid.removeAttribute("class");
}