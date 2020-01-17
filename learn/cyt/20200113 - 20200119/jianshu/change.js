window.onscroll = function() {scrollFunction()};

function scrollFunction() {console.log(121);
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        document.getElementById("scrollhead").style.display = "block";
        document.getElementsByClassName("firsthead").style.display="none"
    } else {
        document.getElementById("scrollhead").style.display = "none";
        document.getElementsByClassName("firstheadhead").style.display = "block";
    }
}