function spin() {
    const object = document.querySelector("#test").contentDocument;
    const wheel = object.querySelector(".Vector");
    wheel.classList.remove("spin");
    void wheel.offsetWidth;
    wheel.classList.add("spin");
}