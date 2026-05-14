let students = [];

function addStudent(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value.trim();
    let course = document.getElementById("course").value.trim();

    let nameError = document.getElementById("nameError");
    let ageError = document.getElementById("ageError");
    let courseError = document.getElementById("courseError");

    nameError.innerText = "";
    ageError.innerText = "";
    courseError.innerText = "";

    let nameRegex = /^[A-Za-z ]{3,}$/;
    let ageRegex = /^[0-9]{1,2}$/;
    let courseRegex = /^[A-Za-z0-9 ]{2,}$/;

    let isValid = true;

    if (!nameRegex.test(name)) {
        nameError.innerText = "Name must contain only letters and at least 3 characters";
        isValid = false;
    }

    if (!ageRegex.test(age) || age < 5 || age > 60) {
        ageError.innerText = "Age must be a number between 5 and 60";
        isValid = false;
    }

    if (!courseRegex.test(course)) {
        courseError.innerText = "Course must contain at least 2 characters";
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    let student = {
        name: name,
        age: age,
        course: course
    };

    students.push(student);

    document.getElementById("studentForm").reset();

    displayStudents();
}

function displayStudents() {
    let tableBody = document.getElementById("studentTableBody");

    tableBody.innerHTML = "";

    students.map((student, index) => {
        tableBody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.course}</td>
        <td>
          <button class="delete-btn" onclick="deleteStudent(${index})">
            Delete
          </button>
        </td>
      </tr>
    `;
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}