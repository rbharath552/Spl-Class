//Spread Operator
const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "MongoDB"];


const fullStack = [...frontend, ...backend];

console.log(fullStack);

//Rest Operator

const totalMarks = (...marks) =>
  marks.reduce((total, mark) => total + mark, 0);

console.log(totalMarks(80, 90, 70, 60));

//Template Literals

const name = "Ravi";
const role = "MERN Developer";
const company = "Infosys";


const message = `${name} is working as a ${role} at ${company}.`;

console.log(message);

//Object Destructuring
const student = {
  name: "Arun",
  course: "MERN",
  city: "Chennai"
};


const { name, course, city } = student;
console.log(name);
console.log(course);
console.log(city);

//Array Destructuring

const colors = ["Red", "Blue", "Green"];
const [firstColor, secondColor] = colors;

console.log(firstColor);
console.log(secondColor);

//Function with default parameters

const welcomeUser = (name = "Guest") => {
  console.log(`Welcome, ${name}!`);
};

welcomeUser("Arun");
welcomeUser();

//Enhanced Object Literals
const name = "Priya";
const role = "React Developer";

// Enhanced Object Literal (Shorthand Property)
const employee = {
  name,
  role
};

console.log(employee);

//Nullish Coalescing Operator
const userName = null;

const displayName = userName ?? "Guest User";

console.log(displayName);

