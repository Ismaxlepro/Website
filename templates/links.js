function clickwait() {
    const content = document.querySelector(".content");

    if (content.classList.contains("active")) {
        content.classList.remove("active");
    } else {
        content.classList.add("active");
    }
}