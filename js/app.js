document.addEventListener("DOMContentLoaded", function () {

    var navList = document.querySelector("li.navigation");
    var menuList = document.querySelector(".menu-list");

    navList.addEventListener("mouseover", function (event) {
        menuList.style.display = "block"
    });

    navList.addEventListener("mouseout", function (event) {
        menuList.style.display = "none"
    });
});


document.addEventListener("DOMContentLoaded", function () {

    var boxes = document.querySelectorAll(".box1, .box2");

    for (var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("mouseover", function (event) {
            this.children[0].style.visibility = "hidden"
        });

        boxes[i].addEventListener("mouseout", function (event) {
            this.children[0].style.visibility = "visible";
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    var prev = document.querySelector(".sign1");
    var next = document.querySelector(".sign2");
    var boxes = document.querySelectorAll(".slider");
    var currentBoxIndex = 0;

    boxes[0].classList.add("visible");

    prev.addEventListener("click", function (event) {
        boxes[currentBoxIndex].classList.remove("visible");
        currentBoxIndex--;
        if (currentBoxIndex === -1) {
            currentBoxIndex = boxes.length - 1;
        }
        boxes[currentBoxIndex].classList.add("visible");
    });

    next.addEventListener("click", function (event) {
        boxes[currentBoxIndex].classList.remove("visible");
        currentBoxIndex++;

        if (currentBoxIndex === boxes.length) {
            currentBoxIndex = 0;
        }
        boxes[currentBoxIndex].classList.add("visible")

    });
});

