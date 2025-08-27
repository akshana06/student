document.getElementById("regForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const gender = document.getElementById("gender").value;
  const dob = document.getElementById("dob").value;
  const course = document.getElementById("course").value;

  const output = `
    <h3>Registration Successful 🎉</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>DOB:</strong> ${dob}</p>
    <p><strong>Course:</strong> ${course}</p>
  `;

  document.getElementById("output").innerHTML = output;
  this.reset();
});
