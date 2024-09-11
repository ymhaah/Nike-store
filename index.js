var e = document.querySelector(".nList"),
    s = document.querySelector("header .Container nav");
(e.onclick = function () {
    var t;
    (t = s), e.classList.toggle("navList"), t.classList.toggle("exbend");
}),
    (window.onscroll = function () {
        e.classList.remove("navList"), s.classList.remove("exbend");
    });
