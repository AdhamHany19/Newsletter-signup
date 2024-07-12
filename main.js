let formbox = document.querySelector(`.formbox`);
let submitbtn = document.querySelector(`.submit`);
let form = document.querySelector("form");
let span = document.querySelector("span")
let successbox = document.querySelector(`.successbox`);
let dismiss=document.getElementById(`dismiss`)
console.log(formbox);
console.log(submitbtn);
console.log(successbox);

// Add an event listener for the 'submit' event
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the value of the email input field
  const email = document.querySelector(".email").value;
  if (email === "") {
    alert('Please enter your email.');
    return; // Exit function if email is empty
}
//   hiding form box
  formbox.style.display = "none";
  span.innerHTML=`${email} `
  successbox.style.display = "block";
  setTimeout(() => {
    successbox.style.transition = "opacity 0.3s ease-in";
    successbox.style.opacity = "1";
  }, 500);

});
dismiss.onclick=function(){
location.reload()
}