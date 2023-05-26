


let signUp = document.getElementsByClassName("form-control");
    let formValue; 
    for(let i = 0; i < baseOption.length; i++){
        if(signUp[i].checked){
            // baseValue = baseOption[i].value
            // pizzaCost= pizzaCost + +baseOption[i].dataset.cost
        }
    }
addRegister = () => {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let subject = document.getElementById("subject").value
    let number = +document.getElementById("number").value
    let password = document.getElementById("password").value
    

    if(age >= 18){
        signUp.push({
           name: name,
            email: email,            
            subject: subject,
            number: +number,
            password: password

         })

        alert("Welcome" + name + "!"+" Thank you for your interest in"+ subject + "We will contact you via email provided:" + email+ "or alternatively on the phone number:" + number);
    } else {
        alert("Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested" + name+ "If you want to sign up, you better CHECK that newsletter box!");
    }

    console.log(signUp)
    document.getElementsByClassName("form-control").reset();
}
// Welcome Name & Surname! Thank you for your interest in Subject! We will contact you via the email provided: Email, or alternatively on the phone number: Number. 
// Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested Name & Surname!  If you want to sign up, you better CHECK that newsletter box! 