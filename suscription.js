// // Platzi Solution

const typeSuscripción = {
    free: 'solo puedes tomar los cursos gratis',
    basic: 'puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'puedes tomar casi todos los cursos de Platzi durante un año',
    expertduo: 'tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
};

function checkSuscription(tipoDeSuscripcion) {
    if (typeSuscripción[tipoDeSuscripcion]) {
        console.log(typeSuscripción[tipoDeSuscripcion]);
        return;
    }
    console.warn("No tienes ninguna suscripción");

    }

checkSuscription("Expert")