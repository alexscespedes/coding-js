const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion == "Free") {
  console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion == "ExpertPlus") {
  console.log(
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
  );
}

// solo con if (sin else ni else if).

let typeSuscripción = ["Free", "Basic", "Expert", "ExpertPlus"];

let infoSuscripción = [
  "solo puedes tomar los cursos gratis",
  "puedes tomar casi todos los cursos de Platzi durante un mes",
  "puedes tomar casi todos los cursos de Platzi durante un año",
  "tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
];

let userSuscription = "Expert";

for (let index=0; index < typeSuscripción.length; index++) {
    if (typeSuscripción[index] = userSuscription) {
        console.log(`Actualmente ${infoSuscripción[index]}`)
    }
}
