//generics
const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && arg !== null && !Array.isArray(arg);
};

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

interface userId {
  id: number;
}

const checkUser = <T extends userId>(user: T): T => {
  return user;
};

const getUsersProperty = <T extends userId, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

const usersArray = [
  {
    id: 1,
    username: "Rogers Wandera",
    age: 23,
    email: "QfR4f@example.com",
  },
  {
    id: 2,
    username: "Cathy Wandera",
    age: 22,
    email: "QfR3f@example.com",
  },
];

const userprops = getUsersProperty(usersArray, "email");
console.log(userprops);
