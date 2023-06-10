const wrapper = document.querySelector(".wrapper");
close1 = document.querySelector(".close");

wrapper.addEventListener("click", () => home.classList.add("show"))
close1 = addEventListener("click", () => home.classList.remove("show"))

function registerActive() {
    wrapper.classList.toggle("active");
}

function loginActive() {
    wrapper.classList.toggle("active");
}