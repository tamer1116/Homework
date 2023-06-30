let persons = [
    {
        id: 1,
        firstname: "Dan",
        lastname: "Tiger",
        image: "url",
        date: 1990,
        gender: "male",
        hobbie: ["Football", "Reading"],
        nationality: "switzerland",
        friends: [10, 30],
    },
    {
        id: 2,
        firstname: "Fan",
        lastname: "Tiger",
        image: "url",
        date: 1999,
        gender: "male",
        hobbie: ["Football", "Reading"],
        nationality: "switzerland",
        friends: [10, 1],
    },
    {
        id: 3,
        firstname: "Frank",
        lastname: "Lion",
        image: "url",
        date: 1994,
        gender: "male",
        hobbie: ["walking", "basketball"],
        nationality: "syria",
        friends: [2],
    },
    {
        id: 4,
        firstname: "Maria",
        lastname: "Zakki",
        image: "url",
        date: 1999,
        gender: "female",
        hobbie: ["swimming", "walking"],
        nationality: "canada",
        friends: [20, 100],
    },
    {
        id: 5,
        firstname: "Alex",
        lastname: "Spider",
        image: "url",
        date: 1992,
        gender: "male",
        hobbie: ["swimming", "walking"],
        nationality: "german",
        friends: [20, 100],
    },
];






// function toUpper() {
//     for (let i = 0; i < persons.length; i++) {
//         console.log(persons[i].firstname.toUpperCase())
//     }
// }
// toUpper();





// function removeItem() {
//     for (let i = 0; i < persons.length; i++) {
//         let a = persons[i].id
//         if (a == 3) {
//             persons[i].hobbie.pop()
//             console.log(persons[i])
//         }
//     }
// }

// removeItem();





// let total = 0
// function avgAge() {
//     for (let i = 0; i < persons.length; i++) {
//         let a = persons[i].date
//         let b = 2023 - a
//         total += b

//     }
//     console.log(total / persons.length)
// }

// avgAge();







// function changeNat() {
//     for (let i = 0; i < persons.length; i++) {
//         let a = persons[i].id
//         if (a == 4) {
//             persons[i].nationality = "Africa"
//             console.log(persons[i])
//         }
//     }
// }
// changeNat();







// let total = 0
// function maleCount() {
//     for (let i = 0; i < persons.length; i++) {
//         let a = persons[i].gender;
//         if (a == "male") {
//             total++;
//         }
//     }
//     console.log(total);
// }

// maleCount();