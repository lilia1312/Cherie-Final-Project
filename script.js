/*
    Contact Page Validation
    2024-04-11
    Treasure Onah
 */

function validate(e) {
    hideAllErrors();

    if(formHasErrors()) {
        e.preventDefault()
        return false;
    }
    return true;
}

function resetForm(e) {
    // Confirm that the user wants to reset the form.
    if (confirm('Clear')) {
        // Ensure all error fields are hidden
        hideAllErrors();

        // Set focus to the first text field on the page
        document.getElementById("fname").focus();

        // When using onReset="resetForm()" in markup, returning true will allow
        // the form to reset
        return true;
    }

    // Prevents the form from resetting
    e.preventDefault();

    // When using onReset="resetForm()" in markup, returning false would prevent
    // the form from resetting
    return false;
}

// function to check if the forma has errors and to confirm phone number is 10 digits 
function formHasErrors() {
    let errorFlag = false;

    let requiredFields = ["fname", "lname", "phone"];

    for (let i = 0; i < requiredFields.length; i++) {
        let textField = document.getElementById(requiredFields[i]);
        if (!formFieldHasInput(textField)) {
            document.getElementById(requiredFields[i] + "_error").style.display = "block";
            errorFlag = true;
        }
    }

    let regex = /^\d{10}$/;
    let phone = document.getElementById("phone").value;

    if (!regex.test(phone)) {
        document.getElementById("num_error").style.display = "block";

        if(!errorFlag){
            document.getElementById("phone").focus();
            document.getElementById("phone").select();
        }
                //Raise the error flag
        errorFlag = true;
    }

    return errorFlag;
}
/*
function formFieldHasInput(fieldElement){
    //Check if tthe exact the text field has a value 
    if(fieldElement.value == null || fieldElement.value.trim() == ""){
        //Invalid entry 
        return false;
    }

    //Valid entry
    return true;
}*/
function formFieldHasInput(fieldElement){
    //Check if tthe exact the text field has a value 
    if(fieldElement.value == null || fieldElement.value.trim() == ""){
        //Invalid entry 
        return false;
    }

    //Valid entry
    return true;
}


/*
 * Resets (hides) all of the error messages on the page.
 */
function hideAllErrors() {

    //Get an array of the error fields 
    let errorFields = document.getElementsByClassName("error");

    for(let i= 0; i< errorFields.length; i++){
        errorFields[i].style.display = "none";
    }
}



function load() {

    hideAllErrors();
    // Add event listener for the form submit
    document.getElementById("client_form").addEventListener("submit", validate);

    // Reset the form using the default browser reset
    // This is done to ensure the radio buttons are unchecked when the page is refreshed
    // This line of code must be done before attaching the event listener for the customer reset
    document.getElementById("client_form").reset();

    // Add event listener for our custom form submit function
    document.getElementById("client_form").addEventListener("reset", resetForm);
}

// Add the event listener for the document load
document.addEventListener("DOMContentLoaded", load);


























/*

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        // Validate form fields and show error messages if needed

        if (!validateName()) {
            event.preventDefault();
            // Display error message for name field
        }

        if (!validatePhoneNumber()) {
            event.preventDefault();
            // Display error message for phone number field
        }

        if (!validateEmail()) {
            event.preventDefault();
            // Display error message for email field
        }
    });

    function validateName() {
        // Implement name validation logic
    }

    function validatePhoneNumber() {
        // Implement phone number validation logic
    }

    function validateEmail() {
        // Implement email validation logic
    }
});
*/