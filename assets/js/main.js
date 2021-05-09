$(document).ready(function () {
    $('.text_active').click(function () {
        $(".text_active").each(function (index) {
            $('.text_active').removeClass('at_active');
        });
        $(this).addClass('at_active');
    })
});

window.onscroll = function() {
    myFunction()
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}