function enrollbtn() {
    let email = document.getElementById('email').value
    let pwd1 = document.getElementById('pwd1').value
    let pwd2 = document.getElementById('pwd2').value


    if (email !== "" && pwd1 !== "" && pwd2 !== "") {
        document.getElementById('enroll').setAttribute("style", "background-color: yellow");
        document.getElementById('enroll').disabled = false;
    }
    else {
        document.getElementById('enroll').setAttribute("style", "background-color: none");
        document.getElementById('enroll').disabled = true;
    }
}