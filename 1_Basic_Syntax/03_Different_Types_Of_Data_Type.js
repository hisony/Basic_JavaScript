var name = "Sony"; 
console.log("Name of the student is:", name); 
console.log("Type of name:", typeof name); // string

var age = 23; 
console.log("The student's age is:", age); 
console.log("Type of age:", typeof age); // number

var isStudent = true; 
console.log("Is the person a student? Answer:", isStudent); 
console.log("Type of isStudent:", typeof isStudent); // boolean

var person = {
    name: "Sony", 
    age: 23,
    isStudent: true, 
    university: "AIUB",
    skills: ["JavaScript", "Python", "React"] 
};
console.log("Details about the person:", person); 
console.log("Type of person:", typeof person); // object

var studentDetails = ["Sony", 23, true, "AIUB", "Computer Science"]; 
console.log("Student details in a list:", studentDetails); 
console.log("Type of studentDetails:", typeof studentDetails); // object (array)

var uniqueID = Symbol("AIUB12345"); 
console.log("Unique student ID:", uniqueID.toString()); 
console.log("Type of uniqueID:", typeof uniqueID); // symbol

var largeNumber = 12345678901234567890n; 
console.log("A very big number:", largeNumber); 
console.log("Type of largeNumber:", typeof largeNumber); // bigint

var enrollmentDate = new Date("2021-09-01"); 
console.log("The date the student joined AIUB is:", enrollmentDate);
console.log("Type of enrollmentDate:", typeof enrollmentDate); // object

var getStudentInfo = function () {
    return `Hi, my name is ${name}, I am ${age} years old, and I study at ${person.university}.`;
};
console.log("Student info using a function:", getStudentInfo()); 
console.log("Type of getStudentInfo:", typeof getStudentInfo); // function

var courseCredits = new Map(); 
courseCredits.set("JavaScript", 3); 
courseCredits.set("Python", 4);
console.log("Course and credits:", courseCredits); 
console.log("Type of courseCredits:", typeof courseCredits); // object (map)

var completedCourses = new Set(["JavaScript", "Python", "Algorithms"]); 
console.log("Courses the student finished:", completedCourses); 
console.log("Type of completedCourses:", typeof completedCourses); // object (set)

var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
console.log("Pattern for checking valid emails:", emailPattern); 
console.log("Type of emailPattern:", typeof emailPattern); // object (regExp)

var grades = new Uint8Array([90, 95, 98, 92]); 
console.log("Grades for the courses:", grades);
console.log("Type of grades:", typeof grades); // object (typed array)


// Checking if the student is eligible for graduation
var isEligibleForGraduation = person.skills.includes("JavaScript") && age > 20; 
console.log("Is the student eligible to graduate?", isEligibleForGraduation); 
console.log("Type of isEligibleForGraduation:", typeof isEligibleForGraduation); // boolean
