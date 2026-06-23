function sendMessage(){

let name = document.getElementById("name").value;
let message = document.getElementById("message").value;
let result = document.getElementById("result");

if(name === "" || message === ""){
result.innerHTML = "Please fill all fields!";
result.style.color = "red";
}
else{
result.innerHTML = "Message Sent Successfully!";
result.style.color = "green";
}
}
