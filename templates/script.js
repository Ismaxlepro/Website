function clickwait() {
    const content = document.querySelector(".content");

    if (content.classList.contains("active")) {
        content.classList.remove("active");
    } else {
        content.classList.add("active");
    }
}
function wow() {
   const image = document.getElementById("headerimage");
   const header = document.querySelector("header");
   if (image.classList.contains("active")) {
        image.classList.remove("active");
	header.classList.remove("active");
    } else {
        image.classList.add("active");
        header.classList.add("active");
    }

}
