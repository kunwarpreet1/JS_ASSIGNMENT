//Q4)Given an array of employees, perform the following: Calculate the total salary of all employees. Get the names of all employees in the "IT" department. Find the employee with the highest salary. const employees = [ { name: "Alice", department: "IT", salary: 60000 }, { name: "Bob", department: "HR", salary: 50000 }, { name: "Charlie", department: "IT", salary: 75000 }, { name: "David", department: "Finance", salary: 80000 } ];

const employees = [
    { name: "Alice", department: "IT", salary: 60000 },
    { name: "Bob", department: "HR", salary: 50000 },
    { name: "Charlie", department: "IT", salary: 75000 },
    { name: "David", department: "Finance", salary: 80000 }
  ];
  
 
  let totalSalary = 0;
  for (let employee of employees) {
    totalSalary += employee.salary;
  }
  console.log(totalSalary);
  
  
  let itEmployees = [];
  for (let employee of employees) {
    if (employee.department === "IT") {
      itEmployees.push(employee.name);
    }
  }
  console.log(itEmployees);
  
  
  let highestSalaryEmployee = employees[0];
  for (let employee of employees) {
    if (employee.salary > highestSalaryEmployee.salary) {
      highestSalaryEmployee = employee;
    }
  }
  console.log(highestSalaryEmployee.name);
  