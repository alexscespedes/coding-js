const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const paragraph = document.querySelector('.parrafito')
const pid = document.querySelector('#pid')
const input = document.querySelector('input')

console.log(input.value)


console.log({
    h1,
    p,
    paragraph,
    pid,
    input
});

h1.innerHTML = 'Changing html title'

console.log(h1.getAttribute('screen'))
console.log(h1.setAttribute('screen', 'udemy'))


pid.innerHTML = ""
const img = document.createElement('img');
img.setAttribute('src', 'https://images.pexels.com/photos/3183148/pexels-photo-3183148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
console.log(img)

pid.append(img)
