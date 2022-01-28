
document.getElementById('submit').addEventListener('submit',validateName);

function validateName(e)
{
    const name =document.getElementById('Name');
    console.log(name);
    const len=name.length;
    if(len<=0)
    {
        e.preventDefault();
        document.getElementById('name-error').innerText="name cannot be empty";
        document.getElementById('name-error').style.margin=0; 
    }
    else{
        document.getElementById('name-error').innerText="";
        document.getElementById('name-error').style.margin=1.5; 
    }
}































// document.getElementsByClassName('submit-btn')[0].addEventListener('click',validateEmail);
// document.getElementsByClassName('submit-btn')[0].addEventListener('click',validateMoblie);
// document.getElementsByClassName('submit-btn')[0].addEventListener('click',validateUsername);
// document.getElementsByClassName('submit-btn')[0].addEventListener('click',validatePassword);



// function validateEmail(e)
// {
//     if(document.getElementById('#Email').Value==null)
//     {
//         e.preventDefault();
//         document.getElementById('email-error').innerText="email cannot be empty";
//         document.getElementById('email-error').style.margin=0; 
//     }
// }
// function validateMoblie(e)
// {
//     if(document.getElementById('#MobileNumber').Value==null)
//     {
//         e.preventDefault();
//         document.getElementById('mobile-number-error').innerText="mobile number cannot be empty";
//         document.getElementById('mobile-number-error').style.margin=0; 
//     }
// }
// function validateUsername(e)
// {
//     if(document.getElementById('#Username').Value==null)
//     {
//         e.preventDefault();
//         document.getElementById('username-error').innerText="username cannot be empty";
//         document.getElementById('username-error').style.margin=0; 
//     }
// }
// function validatePassword(e)
// {
//     if(document.getElementById('#Password').Value==null)
//     {
//         e.preventDefault();
//         document.getElementById('password-error').innerText="password cannot be empty";
//         document.getElementById('password-error').style.margin=0; 
//     }
// }