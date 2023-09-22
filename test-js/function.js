// const name = "Juan David";
// const lastname = "Castro Gallego";
// const completeName = name + lastname;
// const nickname = "juandc";

function concatName(name, lastname) {
    return name + ' ' + lastname
}

function greetings (name, lastname, nickname) {
    const completeName = concatName(name, lastname)
    console.log(`mi nombre completo es ${completeName}, pero me puedes decir ${nickname} `)
}


greetings('Alexander', 'Sencion', 'alex')