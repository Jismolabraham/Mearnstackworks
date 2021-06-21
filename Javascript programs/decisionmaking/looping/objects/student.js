var student={id:10,name:"arun",admision:2020,course:"BCA"}
// console.log(student.name);
console.log(student["name"]);
// student.admision=2019
console.log(student);
console.log("gender" in student);
student.gender="male"
console.log(student);
student.admision-=1000;
console.log(student);