// utility types
type alluniontypes = string | number | boolean | undefined | null | {} | [];
//partial
interface assignment {
  studentId: number | string;
  studentName: string;
  grade: number;
  verified?: boolean;
  [key: string]: alluniontypes;
}

const updateAssignment = (
  assign: assignment,
  propsToUpdate: Partial<assignment>
): assignment => {
  return { ...assign, ...propsToUpdate };
};

const student: assignment = {
  studentId: 1,
  studentName: "Wandera Rogers",
  grade: 4.5,
  verified: false,
};

console.log(updateAssignment(student, { verified: true }));

// required and readonly
const recordAssignment = (assign: Required<assignment>): assignment => {
  return assign;
};
console.log(recordAssignment({ ...student, verified: true }));

//record
type students = "Rogers" | "Cathy" | "William";
type Grades = "A" | "B" | "C" | "D" | "U";

const studentMarks: Record<students, Grades> = {
  Rogers: "A",
  Cathy: "D",
  William: "C",
};

//Pick and Omit
type assignmentResults = Pick<assignment, "studentId" | "grade">;
const score: assignmentResults = {
  studentId: "23",
  grade: 4.5,
};

const studentsArray: Required<assignment>[] = [
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

const assignGrades = (
  assign: Pick<assignment, "studentId" | "grade">
): Required<assignment>[] => {
  const student = studentsArray.find(
    (student) => student.studentId === assign.studentId
  );
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

const assignPropsForStudents = (
  assign: Required<assignment>[],
  propsToUpdate: Partial<assignment>,
  studentId: number | string
): Required<assignment>[] => {
  const newArray = assign.map((std) => {
    if (std.studentId === studentId) {
      const update = { ...std, ...propsToUpdate };
      return update;
    }
    return std;
  });
  return newArray;
};

// console.log(assignGrades({ studentId: 2, grade: 3.5 }));
console.log(
  assignPropsForStudents(
    studentsArray,
    { grade: 4.5, verified: true, date: "2023-01-09" },
    1
  )
);

const testFunc = (name: string, age: number) => {
  return { name, age };
};
// Return type
type NewAssign = ReturnType<typeof testFunc>;
//parameters
type AssignParams = Parameters<typeof testFunc>;

const assignsArgs: AssignParams = ["Rogers", 23];
const assignFunc: NewAssign = testFunc(...assignsArgs);

// awaited
interface user {
  id: number | string;
  name: string;
  username: string;
  email: string;
}
const fetcheUsers = async (): Promise<user[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
};

type FetchUserReturn = Awaited<ReturnType<typeof fetcheUsers>>;

fetcheUsers().then((data) => console.log(data));
