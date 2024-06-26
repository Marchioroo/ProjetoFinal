const wrapper = document.querySelector(".wrapper");
const cadastroLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");

cadastroLink.onclick = () => {
    wrapper.classList.add("active")
}

loginLink.onclick = () => {
    wrapper.classList.remove("active")
}