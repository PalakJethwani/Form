document.getElementById("form").addEventListener("submit",function(event){
    clearErrors();
    var username=document.getElementById("username").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;

    var isvalid=true;

    if(username===""){
        showError("usernameError","Username is necessary");
        isvalid=false;
    }

    if(email===""){
        showError("emailError","Email is necessary");
        isvalid=false;
    }

    if(password===""){
        showError("passwordError","Password is necessary");
        isvalid=false;
    }else if(password.length<6){
        showError("passwordError","Password should be 6 characters long");
        isvalid=false;
    }

    if(!isvalid){
        event.preventDefault();

    }else{
        alert("Form Submitted succesfully")
    }
})

function clearErrors(){
    document.getElementById("usernameError").textContent="";
    document.getElementById("emailError").textContent="";
    document.getElementById("passwordError").textContent="";
}

function showError(elementId, message){
    document.getElementById(elementId).textContent= message;
}
