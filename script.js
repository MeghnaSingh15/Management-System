let employeeArray = [];  
let idCounter = 1;     

function addEmployee() {
  const name = document.getElementById("name").value;
  const profession = document.getElementById("profession").value;
  const age = document.getElementById("age").value;
  const messageDiv = document.getElementById("message");

  
  messageDiv.innerHTML = '';

  
  if (name === '' || profession === '' || age === '') {
    messageDiv.innerHTML = '<p class="error">All fields are required!</p>';
    return;
  }

  
  const newEmployee = {
    id: idCounter++,
    name: name,
    profession: profession,
    age: parseInt(age)
  };

  employeeArray.push(newEmployee);
  messageDiv.innerHTML = '<p class="success">Employee added successfully!</p>';

  
  displayEmployees();

  
  document.getElementById("name").value = '';
  document.getElementById("profession").value = '';
  document.getElementById("age").value = '';
}

function displayEmployees() {
  const employeeListDiv = document.getElementById("employeeList");
  employeeListDiv.innerHTML = '';  

  if (employeeArray.length === 0) {
    employeeListDiv.innerHTML = 'No employees added yet.';
    return;
  }

  employeeArray.forEach(employee => {
    const employeeDiv = document.createElement('div');
    employeeDiv.innerHTML = `
      <p>
        ${employee.id}. Name: ${employee.name}, Profession: ${employee.profession}, Age: ${employee.age}
        <button onclick="deleteEmployee(${employee.id})">Delete</button>
      </p>
    `;
    employeeListDiv.appendChild(employeeDiv);
  });
}

function deleteEmployee(id) {
  
  employeeArray = employeeArray.filter(employee => employee.id !== id);

  
  displayEmployees();
}
