const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
const passwordRegex = /^(?=.*\d).{6,10}$/;

export const validateEmail = (userData, setErrors) => {
    if (!userData.email) {
        setErrors(prevState => { return { ...prevState, email: "Ingrese un email" } })
    }
    else {
        if (regexEmail.test(userData.email)) {
            setErrors(prevState => { return { ...prevState, email: "" } })
        }
        else { setErrors(prevState => { return { ...prevState, email: "Email inválido" } }) }
    }
}

export const validatePassword = (userData, setErrors) => {
    console.log(passwordRegex.test(userData.password));
    if (!userData.password) setErrors(prevState => { return { ...prevState, password: "Debe ingresar una contraseña" } })
    else {
        if (passwordRegex.test(userData.password)) setErrors(prevState => { return { ...prevState, password: "" } })
        else setErrors(prevState => { return { ...prevState, password: "Password inválido" } })
    }
}









/* export const validateEmail = (userData, errors, setErrors) => {
    if (!userData.email) {
        setErrors({ ...errors, email: "Ingrese un email" })
    }
    else {
        if (regexEmail.test(userData.email)) {
            setErrors({ ...errors, email: "" })
        }
        else { setErrors({ ...errors, email: "Email inválido" }) }
    }



}

export const validatePassword = (userData, errors, setErrors) => {
    if (!userData.password) setErrors({ ...errors, password: "Debe ingresar una contraseña" })
    else {
        if (passwordRegex.test(userData.password)) setErrors({ ...errors, password: "" })
        else setErrors({ ...errors, password: "Password inválido" })
    }
} */