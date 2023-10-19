// function equilateral(sideA, sideB, sideC) {
//     return sideA === sideB && sideB === sideC && sideC === sideA;
// }
// function isosceles(sideA, sideB, sideC) {
//     return sideA === sideB && sideA != sideC || sideA === sideC && sideA != sideB || sideB === sideC && sideB != sideA;
// }
// function scalene(sideA, sideB, sideC) {
//     return sideA != sideB && sideB != sideC && sideC != sideA;
// }
window.onload = function () {
    let form = document.querySelector("button");
    form.addEventListener("submit", function determineTri(event) {
        event.preventDefault();
        // hideResults();

        const sideA = parseInt(document.getElementById("sideA")).value;
        const sideB = parseInt(document.getElementById("sideB")).value;
        const sideC = parseInt(document.getElementById("sideC")).value;

        if (sideA === sideB && sideB === sideC && sideC === sideA) {
            equilateral.removeAttribute("class");
        } else if (sideA === sideB && sideA != sideC || sideA === sideC && sideA != sideB || sideB === sideC && sideB != sideA) {
            isosceles.removeAttribute("class");
        } else if (sideA != sideB && sideB != sideC && sideC != sideA) {
            scalene.removeAttribute("class");
        } else {
            notATriangle.removeAttribute("class");
        }
    });
};
