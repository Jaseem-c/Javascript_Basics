class landingPage {
    // property
    dataBase = {
        "Milan": { username: "Milan", password: "milan123" },
        "Manu": { username: "Manu", password: "manu123" },
        "Mani": { username: "Mani", password: "mani123" },
        "Mini": { username: "Mini", password: "mini123" }
    }
    // to save data to browser storage

    savedata() {
        if (this.dataBase) {
            localStorage.setItem("database", JSON.stringify(this.dataBase))
        }
    }
    getdata() {
        this.dataBase = JSON.parse(localStorage.getItem("database"))
        console.log(this.dataBase);
    }
    // method for registration
    register() {
        this.getdata()
        let user = reguname.value
        let pswd = regpwd.value
        // console.log(user);
        // console.log(pswd);
        if (user == "" || pswd == "") {
            alert("please fill the form completely")
        }
        else {
            if (user in this.dataBase) {
                alert("user already exist...please login")
            }
            else {
                this.dataBase[user] = { username: user, password: pswd }
                this.savedata()
                console.log(this.dataBase);


                // navigate login page
                window.location = 'index.html'
            }
        }
    }

    // method for login
    login() {
        let loguser = loguname.value
        let logpswd = logpwd.value
        // console.log(loguser);
        // console.log(logpswd);
        if (loguser == "" || logpswd == "") {
            alert("please fill form completly ")
        }
        else {
            if (loguser in this.dataBase) {
                if (this.dataBase[loguser].password == logpswd) {
                   localStorage.setItem("username",loguser)
                    window.location = 'home.html'
                  
                }
                else {
                    alert("incorrect password")
                }
            }
            else {
                alert("user does't exist...register")
            }

        }

    }
    
}

const obj = new landingPage()
// obj.savedata()
obj.getdata()