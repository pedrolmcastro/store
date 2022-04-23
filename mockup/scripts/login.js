// Set the CSS style
function style(section, selected) {
    section.form.style.display = selected ? "block" : "none";

    section.button.style.color = selected ? "var(--red)" : "var(--grey)";
    section.button.style.borderBottom = selected ? "1px solid var(--red)" : "0";
}

// Select the given section
function select(section) {
    const login = { form: document.querySelector("#login-form"), button: document.querySelector("#login-button") };
    const register = { form: document.querySelector("#register-form"), button: document.querySelector("#register-button") };
    
    style(login, section === "login")
    style(register, section === "register");
}
