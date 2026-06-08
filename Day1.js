//Function used arguments passing
const student = (name, age, course) => {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Course: ${course}`);
};

student("Raj", 21, "MERN Stack");

//Callback function with callback injection
const processUser = (name, callback) => {
  console.log(`Processing user: ${name}`);
  callback(name);
};

const displayUser = (name) => {
  console.log(`User Name: ${name}`);
};

processUser("Bharath", displayUser);

//Closure Program

const createCounter = () => {
  let count = 0;

  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
};

const counter = createCounter();

console.log(counter.increment()); 
console.log(counter.increment()); 
console.log(counter.decrement()); 
console.log(counter.getCount());  

//Iteration of Object values

const student = {
  name: "Raj",
  age: 21,
  course: "MERN Stack"
};

for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}

//Iteration of Array values

const students = [
  { name: "Raj", age: 21 },
  { name: "Kumar", age: 22 },
  { name: "Arun", age: 20 }
];

students.map((student) => {
  console.log(`Name: ${student.name}, Age: ${student.age}`);
});