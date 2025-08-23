document.getElementById("loginForm").addEventListener("submit", function(event){
  event.preventDefault(); // stop refresh

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if(email === "" || password === ""){
    alert("Please fill in all fields");
    return;
  }

  alert("Login successful!");
});
