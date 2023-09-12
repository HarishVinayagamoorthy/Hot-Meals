
const button1 = document.getElementById("herosection-btn1");
const button2 = document.getElementById("herosection-btn2");

button1.classList.add("active");

button1.addEventListener("click", () => {
    button1.classList.remove("active");
    button2.classList.remove("active");

    button1.classList.add("active");
});

button2.addEventListener("click", () => {
    button1.classList.remove("active");
    button2.classList.remove("active");

    
    button2.classList.add("active");
});