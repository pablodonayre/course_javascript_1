let a = 'red';
let b = 'blue';

let c = a;

// a = (a == 'red') ? 'blue' : 'red';
// b = (b == 'red') ? 'blue' : 'red';

a = b;
b = c;

// console.log(a);
// console.log(b);


/**
 * Video 10: Ejercicio 1
*/
function maxi(a, b){
    if(a > b){
        console.log("el mayor es A");
    } else if(a < b){
        console.log("el mayor es B");
    } else {
        console.log('son iguales')
    }
}

// maxi(3,3);

/**
 * Video 11: Ejercicio 2
*/
function isLandscape(w, h){
    return (w > h) ? true : false;
}

// console.log(isLandscape(200, 200))


/**
 * Video 12: Ejercicio 3
*/

// const output = fizzBuzz(15);
// console.log(output);

function fizzBuzz(input){
    if(typeof input !== "number") return "Not a number";

    let response = "";
    if(input % 3 === 0) response += "Fizz";
    if(input % 5 === 0) response += "Buzz";

    if(response === "") return input;
    return response;
    
}

/**
 * Video 13: Ejercicio 4
 */
// speed limit = 70
// cada 5 -> 1 point
// 12 points -> suspended

// checkSpeed(71)
function checkSpeed(speed){
    let limit = 70;

    if(speed - limit > 0){
        let points = Math.floor((speed-limit)/5);

        if(points >= 12){
            console.log("License suspended.");
            return;
        }

        console.log(points + " points.")
    } else {
        console.log('ok')
    }

}

/**
 * Video 14: Ejercicio 5
 */

// showNumbers(10)
function showNumbers(limit){
    for(let i = 0; i <= limit; i++){
        // let text = "";
        // if(i % 2 === 0){
        //     text = "EVEN";
        // } else {
        //     text = "ODD";
        // }
        const message = (i % 2 === 0) ? "EVEN" : "ODD";
        console.log(i, message)
    }
}

/**
 * Video 15: Ejercicio 6
 */

const array = [0, null, 1, 2, 3, 4];
// console.log(countTruthy(array))

function countTruthy(array){
    let count = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i]) count++;
    }
    return count;
}

/**
 * Video 16: Ejercicio 7
 */
const movie = {
    title: "a",
    year: 2025,
    director: "b"
}

// showProperties(movie);

function showProperties(obj){
    let keys = Object.keys(obj);
    for(let key of keys){
        if(typeof obj[key] == "string"){
            console.log(key, obj[key])
        }
    }
}


/**
 * Video 17: Ejercicio 8
 */
//console.log(sum(10))
function sum(limit){
    let count = 0;
    for(i = 0; i <= limit; i++){
        if(i % 3 === 0 || i % 5 === 0){
            count += i;
        }
    }
    return count;
}


/**
 * Video 18: Ejercicio 9
 */
const marks = [80, 80, 50];

// Average = 70

// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A
//const grade = calculateGrade(marks);
//console.log(grade);

function calculateGrade(marks){
    let average = 0;
    marks.forEach(element => {
        average += element;
    });
    average = average / marks.length;
    //console.log(average)
    
    let grade = "";
    if(average > 0 && average <= 59) grade = "F";
    if(average >= 60 && average <= 69) grade = "D";
    if(average >= 70 && average <= 79) grade = "C";
    if(average >= 80 && average <= 89) grade = "B";
    if(average >= 90 && average <= 100) grade = "A";

    return grade;
}


/**
 * Video 19: Ejercicio 10
 */

//showStars(7);

function showStars(rows){
    for(let i = 0; i < rows; i++){
        let text = "*";
        for(let j = 0; j < i; j++){
            text += "*";
        }
        console.log(text)
    }
}


/**
 * Video 20: Ejercicio 11
 */

// showPrimes(20000);

// 15 : 1 3 5 15
//20 : 1 2 4 5 10
function showPrimes(limit){
    let time1 = Date.now();

    for(let i = 1; i <= limit; i++){
        let is_prime = true;
        
        // verificar si es divisible de 2 hasta la mitad del numero
        //for(let j = 2; j <= Math.sqrt(i); j ++){
        for(let j = 2; j <= i/2; j ++){
            if(i % j == 0){
                is_prime = false;
                break;
            }
        }

        //if(is_prime) console.log(i);
    }

    let time2 = Date.now();

    let diff = time2 - time1;
    console.log(diff)
}

/**
 * Objects
 */
const circle = {
    radius: 1
}

circle.color = "yellow";


delete circle.radius;
console.log(circle)

circle = "a"
console.log(circle)

