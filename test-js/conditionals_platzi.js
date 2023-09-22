function checkSuscription(tipoDeSuscripcion) {
    if (tipoDeSuscripcion == "Free") {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    } if  (tipoDeSuscripcion == "Basic") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    } if  (tipoDeSuscripcion == "Expert") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    } if  (tipoDeSuscripcion == "ExpertPlus") {
        console.log(
        "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    }
    else {
        console.warn("No tienes ninguna suscripción");
    }
}


checkSuscription("Exprto")