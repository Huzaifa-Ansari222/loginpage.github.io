function showPass(){
    let showPassword=document.getElementById("showPass");
    if(showPassword.type=='password'){
        showPassword.type='text';
    }
    else{
        showPassword.type='password';
    }
}

function checkPass(){
    let createPassword= document.getElementById("createPass").value;
    let confirmPassword=document.getElementById("confirmPass").value ;
    if(createPassword===confirmPassword){
       document.getElementById("msg").textContent="Password Matched";
       document.getElementById("msg").style.color='green';
       }
       else{
        document.getElementById("msg").textContent="Password Not Matched";
        document.getElementById("msg").style.color='red';

       }

        


    }

