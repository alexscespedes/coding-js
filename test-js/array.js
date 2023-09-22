const fruits = ["banana", "apple", "peach"];

function arrays(array) {
    console.log(array[0])
}

arrays(fruits)

//2

function arrays(array) {
    for (let index=0; index < fruits.length; index++) {
        console.log(array[index])
    }

}

arrays(fruits) 