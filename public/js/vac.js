document.getElementById("booking-form").onsubmit() = () => {
    clearErrors();
    let isValid = true;

    let destination = document.getElementById("destination").value;
    let travelers = document.getElementById("travelers").value;

    if (destination === "none") {
        document.getElementById("err-destination").style.display = block;
        isValid = false;
    }

    if (travelers < 0) {
        document.getElementById("err-travelers").style.display = block;
        isValid = false;
    }

    return isValid;
}

function clearErrors() {
    let errors = document.getElementsByClassName("err")
    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}