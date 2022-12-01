/*---------------------------------------------------
# All the scripts here will be extends to all pages
-----------------------------------------------------*/

const { default: swal } = require("sweetalert");

// 1) Script to validate all inputs
function validateAll() {
    var name = $("name").val();
    var phone = $("phone").val();
    var email = $("email").val();
    var age = $("age").val();
    var gender = $("gender").val();

    if (name == '') {
        swal("OOPSS !", "Name field can not be empty", "error");
        return false;
    }
    else if (phone == '') {
        swal("OOPSS !", "Phone field can not be empty", "error");
        return false;
    }
    else if (email == '') {
        swal("OOPSS !", "Email field can not be empty", "error");
        return false;
    }
    else if (age == '') {
        swal("OOPSS !", "Age field can not be empty", "error");
        return false;
    }
    else if (gender == '') {
        swal("OOPSS !", "Gender field can not be empty", "error");
        return false;
    }
}