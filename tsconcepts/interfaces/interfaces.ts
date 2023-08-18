interface myPerson {
  [key: string]: string | number | boolean | [] | {};
}
type peopleObj = {
  username: string;
  age: number;
};

type arrayOb = peopleObj[];

const person: myPerson = {
  username: "Rogers",
  age: 23,
  address: "Nkumba",
};

let prop: string = "username";
console.log(person[prop]);

// const myPeople = (person: myPerson): {} => {
//   const myArray = [];
//   for (let p in person) {
//     myArray.push(person[p]);
//   }
//   return myArray;
// };
// console.log(myPeople(person));

const myNewPerson: arrayOb = [
  {
    username: "Rogers",
    age: 23,
  },
  {
    username: "Cathy",
    age: 22,
  },
];

const calculateTotals = (array: arrayOb): number => {
  let total = 0;
  array.forEach((obj) => {
    let num = obj.age;
    total += num;
  });
  return total;
};
console.log(calculateTotals(myNewPerson));

type incomekeys = "salary" | "bonus" | "sidehustle";
type Incomes = Record<incomekeys, number>;
const personIncome: Incomes = {
  salary: 2000,
  bonus: 0,
  sidehustle: 3000,
};
