//form validate start


function validateName() {
    const name = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    const trimmedValue = name.value.trim();
    if (name.value.length < 3) {
        nameError.style.display = "block";
        nameError.innerHTML = "Please Enter A Valid Name";
        nameError.style.color = "red";
        nameError.style.marginBottom = "10px"
        name.style.border = "5px solid red";

        return false;
    }
    else if (trimmedValue === "") {
        nameError.style.display = "block";
        nameError.style.color = "red";
        nameError.style.marginBottom = "10px";
        name.style.border = "5px solid red";
        nameError.innerHTML = "Name cannot be blank!!";

        return false;

    } else {
        nameError.style.display = "none";
        name.style.border = "";

        return true;
    }

}

function validateNumber() {
    const number = document.getElementById("number");
    const numberError = document.getElementById("numberError");
    const trimmedValue = number.value.trim();
    const regExp = /^(0|91)?[6-9][0-9]{9}$/;


    if (!number.value.match(regExp)) {
        numberError.style.display = "block";
        numberError.innerHTML = "Please Enter A Valid Number";
        numberError.style.marginBottom = "10px"
        numberError.style.color = "red";
        number.style.border = "5px solid red";

        return false;

    } else if (trimmedValue === "") {
        numberError.style.display = "block";
        numberError.style.color = "red";
        number.style.border = "5px solid red";
        numberError.innerHTML = "Name cannot be blank!!";
        numberError.style.marginBottom = "10px";

        return false;

    } else {
        numberError.style.display = "none";
        number.style.border = "";

        return true;
    }

}

function validateEmail() {
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const trimmedValue = email.value.trim();
    const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.value.match(regExp)) {
        emailError.style.display = "block";
        emailError.innerHTML = "Please Enter A Valid Email";
        emailError.style.marginBottom = "10px"
        emailError.style.color = "red";
        email.style.border = "5px solid red";

        return false;

    } else if (trimmedValue === "") {
        emailError.style.display = "block";
        emailError.style.color = "red";
        email.style.border = "5px solid red";
        emailError.innerHTML = "Name cannot be blank!!";
        emailError.style.marginBottom = "10px";

        return false;

    } else {
        emailError.style.display = "none";
        email.style.border = "";

        return true;

    }

}

function validateSubject() {
    const subject = document.getElementById("subject");
    const subjectError = document.getElementById("subjectError");
    const trimmedValue = subject.value.trim();
    if (subject.value.length < 3) {
        subjectError.style.display = "block";
        subjectError.innerHTML = "Please Enter A Valid Subject";
        subjectError.style.color = "red";
        subjectError.style.marginBottom = "10px"
        subject.style.border = "5px solid red";

        return false;

    } else if (trimmedValue === "") {
        subjectError.style.display = "block";
        subjectError.style.color = "red";
        subjectError.style.marginBottom = "10px";
        subject.style.border = "5px solid red";
        subjectError.innerHTML = "Subject  cannot be blank!!";

        return false;

    } else {
        subjectError.style.display = "none";
        subject.style.border = "";

        return true;
    }
}

function validateMessage() {
    const message = document.getElementById("message");
    const messageError = document.getElementById("messageError");
    const trimmedValue = message.value.trim();
    if (message.value.length < 3) {
        messageError.style.display = "block";
        messageError.innerHTML = "Please Enter A Valid Message";
        messageError.style.color = "red";
        messageError.style.marginBottom = "10px";
        message.style.border = "5px solid red";

        return false;

    } else if (trimmedValue === "") {
        messageError.style.display = "block";
        messageError.style.color = "red";
        messageError.style.marginBottom = "10px";
        message.style.border = "5px solid red";
        messageError.innerHTML = "Please Type Your Message";
        return false;

    } else {
        messageError.style.display = "none";
        message.style.border = "";

        return true;
    }
}

function handleSubmit() {
    let submitError = document.getElementById('submitError')
    let submit = document.getElementById('submit')
    if (!validateName() || !validateNumber() || !validateEmail() || !validateMessage()) {
        submitError.style.display = "block";
        submit.style.background = " Red"
        submitError.innerHTML = "Please Fill The All fields";
        submitError.style.color = "red";
        submitError.style.marginTop = "10px";

        return false;

    }else {
        submitError.style.display = "none";
        submit.style.background = "";

        return true;
    }
}
