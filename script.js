function checkPassword() {
    const pw = document.getElementById('password')
    const pwConfirm = document.getElementById('pwconfirm')

    if (pw.value == pwConfirm.value) {
        pw.classList.remove("error")
        pwConfirm.classList.remove("error")
    } else {
        pw.classList.add("error")
        pwConfirm.classList.add("error")
    }
}