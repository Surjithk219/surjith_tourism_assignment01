var logemail = document.getElementById("logemail");
var logpass = document.getElementById("logpass");
function email()
{
    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-z]{2,3}))$/;
    // var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(reg.test(logemail.value))
    {
        logemail.style.border = "2px solid green"
        return true;
        
    }
    else{
        logemail.style.border = "2px solid red"
        logemail.value = "";
        logemail.placeholder = "Enter a valid Email";
        //  alert("hi");
        return false;
    }
}
function pass()
{
    
            errors = [];
        if (logpass.value.length < 8) {
            errors.push("Your password must be at least 8 characters"); 
        }
        if (logpass.value.search(/[a-z]/) < 0) {
            errors.push("Your password must contain at least one lowercase letter.");
        }
        if (logpass.value.search(/[0-9]/) < 0) {
            errors.push("Your password must contain at least one digit."); 
        }
        if (logpass.value.search(/[A-Z]/) < 0) {                       
              errors.push("Your password must contain at least one uppercase letter.");                    
             } 
        if (errors.length > 0) {
            alert(errors.join("\n"));
            return false;
            logpass.value = "";
            logpass.placeholder = "Enter a valid Password";
        }
        logpass.style.border = "2px solid green"
        return true;
    

}