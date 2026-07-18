// ===============================
// Medical Reminder Authentication
// auth.js
// ===============================


// Register user

function registerUser(user){


let users =
JSON.parse(localStorage.getItem("users")) || [];



users.push(user);



localStorage.setItem(
"users",
JSON.stringify(users)
);


}




// Login user

function loginUser(email,password){


let users =
JSON.parse(localStorage.getItem("users")) || [];



let user =
users.find(
u =>
u.email === email &&
u.password === password
);



if(user){

localStorage.setItem(
"currentUser",
JSON.stringify(user)
);


return true;

}


return false;


}





// Logout

function logout(){


localStorage.removeItem(
"currentUser"
);


window.location.href="login.html";


}





// Check login

function checkAuth(){


let user =
localStorage.getItem("currentUser");



if(!user){

window.location.href="login.html";

}


}
