//Given stored username and password and input username and password, Print if the user can login or not.

let database_user = "Syed Omar Hussaini";
let database_pass = "1234";

let user = "Syed Omar Hussaini";
let pass = "1234";

if (database_user==user){
    if(database_pass==pass){
      console.log("Login Successful")
    }else{
      console.log("Wrong password")
    }
    
}else{
  console.log("Wrong Username")
}