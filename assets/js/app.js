// Btn Open/Close
const btnOpen = document.getElementById('btn-open');
const btnClose = document.getElementById('btn-close')
const form = document.getElementById('form');

btnOpen.addEventListener('click', () => {
    form.classList.add('active');
});

btnClose.addEventListener('click', () => {
    form.classList.remove('active');
});


// Dark Mode
const isDark = document.getElementById('dark');
const cssDark = document.getElementById('css');

isDark.addEventListener('click', () => {
    if (cssDark.classList.contains('isDark')) {
        cssDark.href = "./assets/css/app.css"
        cssDark.classList.remove('isDark')
    } else {
        cssDark.href = "./assets/css/app_dark.css"
        cssDark.classList.add('isDark')
    }

    // localStorage Dark Mode
    if (cssDark.classList.contains('isDark')) {
        localStorage.setItem('dark-db', 'true');
    } else {
        localStorage.setItem('dark-db', 'false');
    }
});

// Save Dark Mode in localStorage
if (localStorage.getItem('dark-db') === 'true') {
    cssDark.href = "./assets/css/app_dark.css"
    cssDark.classList.add('isDark')
} else {
    cssDark.href = "./assets/css/app.css"
    cssDark.classList.remove('isDark')
}

// Save Data
let getData = () => {
    let getName = document.getElementById("getName").value;
    let getSurname = document.getElementById("getSurname").value;
    let getAddress = document.getElementById("getAddress").value;
    let getCity = document.getElementById("getCity").value;
    let getCurp = document.getElementById("getCurp").value;

    if (getName == "") {
        document.getElementById("getName").focus();
        document.getElementById("getName").style = "border: solid 2px red;"
        // Not active
        document.getElementById("getSurname").style = ""
        document.getElementById("getAddress").style = ""
        document.getElementById("getCity").style = ""
        document.getElementById("getCurp").style = ""
    } else {
        if (getSurname == "") {
            document.getElementById("getSurname").focus();
            document.getElementById("getSurname").style = "border: solid 2px red;"
            // Not active
            document.getElementById("getName").style = ""
            document.getElementById("getAddress").style = ""
            document.getElementById("getCity").style = ""
            document.getElementById("getCurp").style = ""
        } else {
            if (getAddress == "") {
                document.getElementById("getAddress").focus();
                document.getElementById("getAddress").style = "border: solid 2px red;"
                // Not active
                document.getElementById("getName").style = ""
                document.getElementById("getSurname").style = ""
                document.getElementById("getCity").style = ""
                document.getElementById("getCurp").style = ""
            } else {
                if (getCity == "") {
                    document.getElementById("getCity").focus();
                    document.getElementById("getCity").style = "border: solid 2px red;"
                    // Not active
                    document.getElementById("getName").style = ""
                    document.getElementById("getSurname").style = ""
                    document.getElementById("getAddress").style = ""
                    document.getElementById("getCurp").style = ""
                } else {
                    if (getCurp == "") {
                        document.getElementById("getCurp").focus();
                        document.getElementById("getCurp").style = "border: solid 2px red;"
                        // Not active
                        document.getElementById("getName").style = ""
                        document.getElementById("getSurname").style = ""
                        document.getElementById("getAddress").style = ""
                        document.getElementById("getCity").style = ""
                    } else {
                        document.getElementById("userName").innerHTML = getName;
                        document.getElementById("getName").style = ""

                        document.getElementById("userSurname").innerHTML = getSurname;
                        document.getElementById("getSurname").style = ""

                        document.getElementById("userAddress").innerHTML = getAddress;
                        document.getElementById("getAddress").style = ""

                        document.getElementById("userCity").innerHTML = getCity;
                        document.getElementById("getCity").style = ""

                        document.getElementById("userCurp").innerHTML = getCurp;
                        document.getElementById("getCurp").style = ""

                        form.classList.remove('active');
                    }
                }
            }
        }
    }
}