// Form Submission Handling
const form = document.getElementById("testForm");
const testList = document.getElementById("testList");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("testName").value.trim();
  const result = document.getElementById("testResult").value;

  if (!name || !result) return;

  const listItem = document.createElement("li");
  listItem.className = `list-group-item ${
    result === "Pass" ? "list-group-item-success" : "list-group-item-danger"
  }`;
  listItem.innerHTML = `
    <span>${name}</span>
    <span class="badge bg-${
      result === "Pass" ? "success" : "danger"
    }">${result}</span>
  `;

  testList.appendChild(listItem);
  form.reset();
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");

// Load saved mode
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  darkModeToggle.checked = true;
}

// Toggle and save mode
darkModeToggle.addEventListener("change", function () {
  if (darkModeToggle.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  }
});
