const form = document.querySelector(".form")
const email = document.querySelector(".email")
const password = document.querySelector(".password")
const btn = document.querySelector(".btn-next")
const h4 = document.querySelector(".text")


let num = 3
form.addEventListener("submit", (e) => {
    e.preventDefault()
    // if (email.value === "" &&  password.value === ""){
    //     email.value = ""
    //     password.value = ""
    //     h4.innerHTML = "404"
    //     h4.style.color = "red"
    // }
    if (email.value === "motion-web" && password.value === "12345"){
        email.value = ""
        // password.value =  ""
        h4.innerHTML = "Hello"
        h4.style.color = "blue"
    } else if (email.value === "" && password.value === ""){
        email.value = ""
        password.value = ""
        h4.innerHTML = "404"
        h4.style.color = "red"
    }
    else {
        num--
        email.value = ""
        password.value = ""

        if (email.value === "" && password.value === ""){
            email.style.border = "2px solid red"
        }

        if (num === 2){
            h4.innerHTML = " сизде 2 попытка калды"
            h4.style.color = "orange"
        }
        if (num === 1){
            h4.innerHTML = " сизде 1 попытка калды"
            h4.style.color = "orange"
        }
        if (num === 0){
            h4.innerHTML = "доступ закрыт"
            h4.style.color = "red"
            btn.setAttribute("disabled", "disabled")
        }
    }
})
