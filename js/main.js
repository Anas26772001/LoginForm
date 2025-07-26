
// ! ====================== GLOBAL-FUNCTIONS : ==================
function requiredAllInputsAlert() {
    document.querySelector(".alert-msg ").innerHTML = `<span>All Inputs Are Required</span>`
}
function erroeAlert(alertStatus) {
    if (alertStatus) {
        document.querySelector(".alert-msg").innerHTML = `<span class="text-warning">This Email Alerady Exist</span>`
    } else {
        document.querySelector(".alert-msg").innerHTML = `<span>Incorrect Info</span>`
    }
}
// ! ====================== SIGNUP-VARIABLES ==================
var signupNameInput = document.getElementById("signupNameInput")
var signupEmailInput = document.getElementById("signupEmailInput")
var signupPasswordInput = document.getElementById("signupPasswordInput")
var signUpBtn = document.getElementById("signUpBtn")
var goToSignin = document.getElementById("goToSignin")
console.log(goToSignin)
if (goToSignin) {
    goToSignin.addEventListener("click", function () {
        window.location.href = "index.html"
    })
}

console.log(signupNameInput)
console.log(signupNameInput)
console.log(signupPasswordInput)
console.log(signUpBtn)
// ! ======================= SIGN-UP ======================
function isNotEmptySignupInputs() {
    if (signupEmailInput.value !== "" && signupPasswordInput.value !== "" && signupNameInput.value !== "") {
        return true
    } else {
        return false
    }
}
function clearAllSignupInputs() {
    signupEmailInput.value = ""
    signupNameInput.value = ""
    signupPasswordInput.value = ""
}
function successAlert() {
    document.querySelector(".alert-msg ").innerHTML = `<span class="text-success">Success </span>`
}
function isUserExist() {
    for (let i = 0; i < users.length; i++) {
        if (signupEmailInput.value === users[i].email && signupNameInput.value === users[i].name && signupPasswordInput.value === users[i].password) {
            return true
        } else {
            return false
        }
    }
}
function addUser() {
    var user = {
        name: signupNameInput.value,
        email: signupEmailInput.value,
        password: signupPasswordInput.value
    }
    users.push(user)
    localStorage.setItem("users", JSON.stringify(users))
    successAlert()
    clearAllSignupInputs()
    console.log(users)
}
var users = JSON.parse(localStorage.getItem("users")) || []
function signUp() {
    if (isNotEmptySignupInputs()) { // true
        if (isUserExist()) {
            erroeAlert(true)
        } else {
            addUser()
        }
    } else {
        requiredAllInputsAlert()
    }
}
// ! ========================= SIGNIN-VARIABLES =================
var signinEmailInput = document.getElementById("signinEmailInput")
var signinPasswordInput = document.getElementById("signinPasswordInput")
var loginBtn = document.getElementById("loginBtn")
var goToSignup = document.getElementById("goToSignup")
console.log(goToSignup)
if (goToSignup) {
    goToSignup.addEventListener("click", function () {
        window.location.href = "sign-up.html"
    })
}

console.log(signinEmailInput)
console.log(signinPasswordInput)
console.log(loginBtn)
function isNotEmptySigninInputs() {
}
// ! ========================= SIGN-IN ===========================
function isNotEmptySigninInputs() {
    if (signinEmailInput.value !== "" && signinPasswordInput.value !== "") {
        return true
    } else {
        return false
    }
}
function clearAllSigninInputs() {
    signinEmailInput.value = ""
    signinPasswordInput.value = ""
}

function isEmailExist() {
    for (let i = 0; i < users.length; i++) {
        if (signinEmailInput.value === users[i].email && signinPasswordInput.value === users[i].password) {
            var name = users[i].name
            localStorage.setItem("homeUser", JSON.stringify(name))
            return true
        }
    }
}

function login() {
    if (isNotEmptySigninInputs()) {
        if (isEmailExist()) {
            window.location.href = "home.html"
        } else {
            erroeAlert(false)
        }
    } else {
        requiredAllInputsAlert()
    }
}
// ! ======================== HOME-PAGE ================
var innerContentBox = document.querySelector(".innerContentBox")
if (innerContentBox !== null) {
    innerContentBox.innerText = `Welcome ${JSON.parse(localStorage.getItem("homeUser"))}`
}

// ! ======================== EVENTS ================

if (signUpBtn !== null) {
    signUpBtn.addEventListener("click", signUp)
}
if (loginBtn !== null) {
    loginBtn.addEventListener("click", login)
}











































