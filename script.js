document.getElementById("registrationForm").
addEventListener("submit", function (e) {
e.preventDefault();

  const formData = {
    firstName: 
	document.getElementById("firstName").value,
    middleName:
	document.getElementById("middleName").value,
    lastName: 
	document.getElementById("lastName").value,
    motherName:
	document.getElementById("motherName").value,
    gender: 
	document.getElementById("gender").value,
    age: 
	document.getElementById("age").value,
    birthDate: 
	document.getElementById("birthDate").value,
    birthPlace:
	document.getElementById("birthPlace").value,
    email: 
	document.getElementById("email").value,
    password:
	document.getElementById("password").value,
    branch: 
	document.getElementById("branch").value,
  };

  console.log("Form Data:", formData);
  alert("Form Submitted Successfully!");
});