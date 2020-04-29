let studentKolya = {
    Name: "Коля",
    Age: 19,
    female: false,
    parents:{
        mom: "Анна",
        dad: "Сергей",
    },
};
let studentPetya = {
    Name: "Петя",
    Age: 21,
    female: false,
    parents:{
        mom: "Оля",
        dad: "Вася",
    },
};
let arrayKolya = [studentKolya.Name, studentKolya.Age, studentKolya.female, studentKolya.parents.mom,studentKolya.parents.dad];
console.log(arrayKolya);
let arrayPetya = [studentPetya.Name, studentPetya.Age, studentPetya.female, studentPetya.parents.mom,studentPetya.parents.dad];
console.log(arrayPetya);
