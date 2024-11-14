let names = ["Алиса", "Аня", "Таня", "Света"];
let cities = ["Москва", "Самара", "Томск", "Иркутск"];

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

let randomName = names[getRandomIndex(names)];
let randomCity = cities[getRandomIndex(cities)];
console.log(randomName + " из " + randomCity);


/*const alphabet=["А","Б","В","Г","Д","Е","Ё","Ж","З","И","Й","К","Л","М","Н","О","П","Р"]

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

let randomWorld = alphabet[getRandomIndex(alphabet)];
console.log("Случайное слово из массива: "+ randomWorld);

/*const randomIndex = Math.floor(Math.random() * alphabet.length);
const randomWord = alphabet[randomIndex];
console.log("Случайное слово из массива: " + randomWord);*/