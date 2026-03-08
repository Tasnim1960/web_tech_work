const rollInput = document.getElementById("rollInput");
const nameInput = document.getElementById("nameInput");
const addBtn = document.getElementById("addBtn");
const searchInput = document.getElementById("searchInput");
const sortBtn = document.getElementById("sortBtn");
const highlightBtn = document.getElementById("highlightBtn");
const studentList = document.getElementById("studentList");
const totalCount = document.getElementById("totalCount");
const attendanceCount = document.getElementById("attendanceCount");

nameInput.addEventListener("input", function () {
    addBtn.disabled = nameInput.value.trim() === "";
});

addBtn.addEventListener("click", function () {

    const roll = rollInput.value.trim();
    const name = nameInput.value.trim();

    if(name === ""){
        alert("Enter student name");
        return;
    }

    createStudent(roll,name);

    rollInput.value="";
    nameInput.value="";
    addBtn.disabled=true;

    updateCounts();
    filterStudents();
});

function createStudent(roll,name){

    const li = document.createElement("li");

    const studentText = document.createElement("span");
    studentText.className="student-text";
    studentText.textContent = `${roll || "No Roll"} - ${name}`;

    const actions = document.createElement("div");
    actions.className="actions";

    const presentLabel = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type="checkbox";

    checkbox.addEventListener("change",function(){
        li.classList.toggle("present",checkbox.checked);
        updateCounts();
    });

    presentLabel.appendChild(checkbox);
    presentLabel.append(" Present");

    const editBtn = document.createElement("button");
    editBtn.textContent="Edit";

    editBtn.addEventListener("click",function(){

        const parts = studentText.textContent.split(" - ");
        const oldRoll = parts[0] === "No Roll" ? "" : parts[0];
        const oldName = parts[1];

        const newRoll = prompt("Edit roll:",oldRoll);
        if(newRoll === null) return;

        const newName = prompt("Edit name:",oldName);
        if(newName === null) return;

        if(newName.trim()===""){
            alert("Name cannot be empty");
            return;
        }

        studentText.textContent=`${newRoll || "No Roll"} - ${newName}`;
        filterStudents();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent="Delete";

    deleteBtn.addEventListener("click",function(){

        if(confirm("Are you sure to delete this student?")){
            li.remove();
            updateCounts();
        }

    });

    actions.appendChild(presentLabel);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(studentText);
    li.appendChild(actions);

    studentList.appendChild(li);
}

function updateCounts(){

    const students = studentList.querySelectorAll("li");
    const present = studentList.querySelectorAll("input:checked").length;
    const absent = students.length - present;

    totalCount.textContent = `Total students: ${students.length}`;
    attendanceCount.textContent = `Present: ${present}, Absent: ${absent}`;
}

searchInput.addEventListener("input",filterStudents);

function filterStudents(){

    const text = searchInput.value.toLowerCase();
    const students = studentList.querySelectorAll("li");

    students.forEach(function(student){

        const fullText = student.querySelector(".student-text").textContent.toLowerCase();
        const name = fullText.split(" - ")[1] || "";

        if(name.includes(text)){
            student.style.display="flex";
        }
        else{
            student.style.display="none";
        }

    });
}

sortBtn.addEventListener("click",function(){

    const students = Array.from(studentList.querySelectorAll("li"));

    students.sort(function(a,b){

        const nameA = a.querySelector(".student-text").textContent.split(" - ")[1].toLowerCase();
        const nameB = b.querySelector(".student-text").textContent.split(" - ")[1].toLowerCase();

        return nameA.localeCompare(nameB);
    });

    students.forEach(function(student){
        studentList.appendChild(student);
    });
});

highlightBtn.addEventListener("click",function(){

    const students = studentList.querySelectorAll("li");

    students.forEach(function(student){
        student.classList.remove("highlight");
    });

    for(let student of students){
        if(student.style.display !== "none"){
            student.classList.add("highlight");
            break;
        }
    }

});