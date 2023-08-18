"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const student = {
    studentId: 1,
    studentName: "Wandera Rogers",
    grade: 4.5,
    verified: false,
};
console.log(updateAssignment(student, { verified: true }));
// required and readonly
const recordAssignment = (assign) => {
    return assign;
};
console.log(recordAssignment(Object.assign(Object.assign({}, student), { verified: true })));
const studentMarks = {
    Rogers: "A",
    Cathy: "D",
    William: "C",
};
const score = {
    studentId: "23",
    grade: 4.5,
};
const studentsArray = [
    {
        studentId: 1,
        studentName: "Rogers",
        grade: 0,
        verified: false,
    },
    {
        studentId: 2,
        studentName: "Cathy",
        grade: 0,
        verified: false,
    },
];
const assignGrades = (assign) => {
    const student = studentsArray.find((student) => student.studentId === assign.studentId);
    let newArray = studentsArray;
    if (student) {
        newArray = studentsArray.filter((std) => {
            if (std.studentId === student.studentId) {
                std.grade = assign.grade;
            }
            return std;
        });
    }
    return newArray;
};
const assignPropsForStudents = (assign, propsToUpdate, studentId) => {
    const newArray = assign.map((std) => {
        if (std.studentId === studentId) {
            const update = Object.assign(Object.assign({}, std), propsToUpdate);
            return update;
        }
        return std;
    });
    return newArray;
};
// console.log(assignGrades({ studentId: 2, grade: 3.5 }));
console.log(assignPropsForStudents(studentsArray, { grade: 4.5, verified: true, date: "2023-01-09" }, 1));
const testFunc = (name, age) => {
    return { name, age };
};
const assignsArgs = ["Rogers", 23];
const assignFunc = testFunc(...assignsArgs);
const fetcheUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://jsonplaceholder.typicode.com/users");
    const data = yield response.json();
    return data;
});
fetcheUsers().then((data) => console.log(data));
