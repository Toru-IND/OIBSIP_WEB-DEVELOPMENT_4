function register(event) {
  event.preventDefault();
  const username = document.getElementById('registerUsername').value;
  const password = document.getElementById('registerPassword').value;

  // Save user in localStorage
  const users = JSON.parse(localStorage.getItem("users") || "{}");
  if (users[username]) {
    alert("Username already exists!");
    return false;
  }

  users[username] = password;
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registration successful! Please login.");
  window.location.href = "index.html";
}

function login(event) {
  event.preventDefault();
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  const users = JSON.parse(localStorage.getItem("users") || "{}");
  if (users[username] && users[username] === password) {
    localStorage.setItem("loggedInUser", username);
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials!");
  }
}
