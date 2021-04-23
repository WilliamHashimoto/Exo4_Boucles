//1
// for (let i = 0; i <=5; i++) {
//     console.log("William");
//     console.log(i);    
// }

//3
// let prenoms = ["Yassine", "Mohammed", "Issam"];
// prenoms.forEach(element => {
//     console.log("Bonjour " + element);
// });

//Exercice mélangé
//1

// let nbre = prompt("Entrez un grand nombre");

// for (let i=0; i <= nbre; i+=2) {
//     console.log(i);
// };

//2
// let nbre = prompt("Entrez un grand nombre");

// for (i = 0; i <=nbre; i++) {
//     if (i%2 == 0) {
//         console.log(`Le nombre ${i} est pair`);
//     }else{
//         console.log(`Le nombre ${i} est impair`);
//     }
// };

//3
//let coding = ["Alexis", "Loic", "Mohammed", "Yassin", "Issam", "Mihai", "Oussama", "Dorian", "Tania", "Anthony", "Junior", "Kevin", "Andy", "Cheb Khaled", "he Kairi 78", "Arouf gangsta le plus beau de tout les rebeux"];

// for (let i = 0; i < coding.length; i++) {
//     if (i%2==0) {
//         console.log(coding[i] + " a un index pair");
//     } else {
//         console.log(coding[i] + " a un index impair");
//     }
// };

// let impair = [];
// let pair = [];
// let i = 0;

// coding.forEach(element => {
//     if (i%2 == 0) {
//         pair.push(element);
//     } else {
//         impair.push(element);
//     }
//     i++
// });

// console.log(pair, impair);

//4 pt1

let prenoms = ["alphaidknldakln", "beta", "capaaljlmxka", "data", "elaxkmae", "fatou", "groro", "halmaliho", "inio", "olifannnt", "kadjkdaa", "yahnx", "psp"];

// prenoms.forEach(element => {
//     console.log(element);
// });

// prenoms.forEach(element=> {
//     console.log(element[0]);
// });

// prenoms.forEach(element=> {
//     console.log(element[1]);
// });

// prenoms.forEach(element=> {
//     console.log(element[1]+element);
// });

// for (i=0; i<prenoms.length;i+=2) {
//     console.log(prenoms[i]);
// }

//pt2
let impair = [];
let pair = [];

//ex2
// for (i=1; i<prenoms.length;i+=2) {
//     impair.push(prenoms[i].toUpperCase());
// };
// console.log(impair);

//ex3
// for (i=0; i<prenoms.length;i+=2) {
//     let letters = prenoms[i].split("");
//     letters[0] = letters[0].toUpperCase();
//     letters = letters.join("");
//     console.log(letters);
//     pair.push(letters);
// };
// console.log(pair);

//ex4
// impair.forEach(element => {
//     if (element.length>4) {
//         console.log(element);
//     }
// });

//ex5
// for (i=0; i<prenoms.length; i+=2) {
//     pair.push(prenoms[i][0].toUpperCase());
// };
// console.log(pair);

//ex6
// let names = [];
// prenoms.forEach(element => {
//     switch (element[0]) {
//         case "a":
//             names.push(element);
//             break;
//         case "e":
//             names.push(element);
//             break;
//         case "m":
//             names.push(element);
//             break;
//         case "f":
//             names.push(element);
//             break;
//         case "y":
//             names.push(element);
//             break;
//         case "n":
//             names.push(element);
//             break;
//         default:
//             break;
//     }
// });
// console.log(names);

//ex7
// names.forEach(element => {
//     if (element.length > 5) {
//         console.log(element);
//     }
// });

//pt3
//ex2

let names = [];
let namesLong = [];

// prenoms.forEach(element => {
//     if (element.length < 5) {
//         switch (element[0]) {
//             case "a":
//                 names.push(element);
//                 break;
//             case "e":
//                 names.push(element);
//                 break;
//             case "m":
//                 names.push(element);
//                 break;
//             case "f":
//                 names.push(element);
//                 break;
//             case "y":
//                 names.push(element);
//                 break;
//             case "n":
//                 names.push(element);
//                 break;
//             default:
//                 break;
//         }
//     }
//     else if (element.length > 4 && prenoms.indexOf(element)%2 !=0) {
//         switch (element[0]) {
//             case "k":
//                 namesLong.push(element);
//                 break;
//             case "c":
//                 namesLong.push(element);
//                 break;
//             case "m":
//                 namesLong.push(element);
//                 break;
//             case "f":
//                 namesLong.push(element);
//                 break;
//             case "y":
//                 namesLong.push(element);
//                 break;
//             case "n":
//                 namesLong.push(element);
//                 break;
//             case "a":
//                 namesLong.push(element);
//                 break;
//             case "e":
//                 namesLong.push(element);
//                 break;
//             case "p":
//                 namesLong.push(element);
//                 break;
//             case "o":
//                 namesLong.push(element);
//                 break;
//             default:
//                 break;
//         }
//     }
// });

// console.log(names, namesLong);

//ex3

// prenoms.forEach(element => {
//     if (element.length> 5 && prenoms.indexOf(element)%2 ==0) {
//         switch (element[0]) {
//             case "k":
//                 console.log(element[0].toLowerCase()+element[1].toUpperCase()+element.slice(2,element.length).toLowerCase()+element[element.length-1].toUpperCase());
//                 break;
//             case "c":
//                 console.log();
//                 break;
//             case "m":
//                 console.log(element[0].toLowerCase()+element[1].toUpperCase()+element.slice(2,element.length).toLowerCase()+element[element.length-1].toUpperCase());
//                 break;
//             case "f":
//                 console.log(element[0].toLowerCase()+element[1].toUpperCase()+element.slice(2,element.length).toLowerCase()+element[element.length-1].toUpperCase());
//                 break;
//             case "y":
//                 console.log(element[0].toLowerCase()+element[1].toUpperCase()+element.slice(2,element.length).toLowerCase()+element[element.length-1].toUpperCase());
//                 break;
//             case "n":
//                 console.log(element[0].toLowerCase()+element[1].toUpperCase()+element.slice(2,element.length).toLowerCase()+element[element.length-1].toUpperCase());
//                 break;
//             case "a":
//                 console.log(element[0].toLowerCase()+element[1].toUpperCase()+element.slice(2,element.length).toLowerCase()+element[element.length-1].toUpperCase());
//                 break;
//             case "e":
//                 console.log(element[0].toLowerCase()+element[1].toUpperCase()+element.slice(2,element.length).toLowerCase()+element[element.length-1].toUpperCase());
//                 break;
//             case "p":
//                 console.log(element[0].toLowerCase()+element[1].toUpperCase()+element.slice(2,element.length).toLowerCase()+element[element.length-1].toUpperCase());
//                 break;
//             case "o":
//                 console.log(element[0].toLowerCase()+element[1].toUpperCase()+element.slice(2,element.length).toLowerCase()+element[element.length-1].toUpperCase());
//                 break;
//             default:
//                 break;
//         }
//     }
// });

//ex4
let res = ""
prenoms.forEach(e => {
    if (e.length < 7 && prenoms.indexOf(e) % 2 == 0) {
        switch (e[0]) {
            case "k":
                res = res + e[0].toUpperCase() + e[1].toLowerCase();
                break;
            case "m":
                res = res + e[0].toUpperCase() + e[1].toLowerCase();
                break;
            case "f":
                res = res + e[0].toUpperCase() + e[1].toLowerCase();
                break;
            case "y":
                res = res + e[0].toUpperCase() + e[1].toLowerCase();
                break;
            case "n":
                res = res + e[0].toUpperCase() + e[1].toLowerCase();
                break;
            case "a":
                res = res + e[0].toUpperCase() + e[1].toLowerCase();
                break;
            case "e":
                res = res + e[0].toUpperCase() + e[1].toLowerCase();
                break;
            case "o":
                res = res + e[0].toUpperCase() + e[1].toLowerCase();
                break;
        }

    }
});
console.log(res);