document.getElementById("registerForm").addEventListener("submit", function(event){
  event.preventDefault();

  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if(password !== confirmPassword){
    alert("Passwords do not match!");
    return;
  }

  alert("Registration successful!");
  window.location.href = "login.html"; 
});
