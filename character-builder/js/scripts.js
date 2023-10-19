function hideResults() {
  document.getElementById("strongWizard").setAttribute("class", "hidden");
  document.getElementById("mindReadingWizard").setAttribute("class", "hidden");
  document.getElementById("flightWizard").setAttribute("class", "hidden");
  document.getElementById("strongDwarf").setAttribute("class", "hidden");
  document.getElementById("mindReadingDwarf").setAttribute("class", "hidden");
  document.getElementById("flightDwarf").setAttribute("class", "hidden");
  document.getElementById("strongMermaid").setAttribute("class", "hidden");
  document.getElementById("mindReadingMermaid").setAttribute("class", "hidden");
  document.getElementById("flightMermaid").setAttribute("class", "hidden");
}

window.onload = function() {
  let form = document.querySelector("form#abilities");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    hideResults();
    const characterName = document.getElementById("name").value;
    const characterType = document.querySelector("select#characterType").value;
    const characterAbility = document.querySelector("input#abilities:checked").value;
    document.querySelector("span#resultName").innerText = characterName;


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
      flightDwarf.removeAttribute("class");
    } else if (characterType === "mermaid" && characterAbility === "superStrength") {
      strongMermaid.removeAttribute("class");
    } else if (characterType === "mermaid" && characterAbility === "mindReading") {
      mindReadingMermaid.removeAttribute("class");
    } else if (characterType === "mermaid" && characterAbility === "flight") {
      flightMermaid.removeAttribute("class");
    }
  });
};