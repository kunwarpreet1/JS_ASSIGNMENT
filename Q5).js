//Q5)Create a list of objects of Employee with info as follows: Name, Age, Salary, DoB 1. Filter all employees with salary greater than 5000 2. Group employee based on their age 3. Fetch employees with salary less than 1000 and age greater than 20. Then give them an increment of 5 times their salary.

const employees = [
    { name: "Alice", age: 25, salary: 6000, dob: "1998-06-15" },
    { name: "Bob", age: 22, salary: 8000, dob: "2002-04-20" },
    { name: "Charlie", age: 30, salary: 4000, dob: "1994-11-10" },
    { name: "David", age: 40, salary: 9500, dob: "1984-12-01" },
    { name: "Eva", age: 18, salary: 1500, dob: "2006-03-23" },
    { name: "Frank", age: 35, salary: 700, dob: "1989-02-10" }
];

//1.
const highSalaryEmployees = employees.filter(employees=>employees.salary > 5000);
console.log(highSalaryEmployees);


//2.
const ageGroups = employees.reduce((acc, employee) => {
    const ageGroup = `${Math.floor(employee.age / 10) * 10}-${Math.floor(employee.age / 10) * 10 + 9}`; // Example: "20-29", "30-39"
    if (!acc[ageGroup]) acc[ageGroup] = [];
    acc[ageGroup].push(employee);
    return acc;
}, {});

console.log(ageGroups);

//3.
const updatedEmployees = employees
    .filter(employee => employee.salary < 1000 && employee.age > 20)
    .map(employee => {
        employee.salary *= 5; 
        return employee;
    });
console.log(updatedEmployees);