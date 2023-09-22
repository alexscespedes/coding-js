const ages = { alice: 18, bob: 27 };

function iterateObject() {
    for (let key in ages) {
        console.log(key, ages[key])
    }
}


iterateObject()

