document.getElementById("registerForm").addEventListener("submit", function(event){
  event.preventDefault();
  let email = document.getElementById("email").value;

  if(email === ""){
    alert("Please enter your email!");
    return;
  }

  let password = document.getElementById("password").value;

  if(password !== ""){
    alert("Please Enter a password!");
    return;
  }

  alert("Registration successful!");
  window.location.href = "login.html"; 
});
