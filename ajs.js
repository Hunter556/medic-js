
window.onscroll = function () {
    myFunction()
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {

    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function removeothers(name) {


var elements = document.getElementsByClassName("panel");
for (var i = 0; i < name.length; i++) {

    if (elements[i].id == name) {
      

        elements[i].style.display = "block";
    } else {
        elements[i].style.display = "none";
        
    }
}
return true;
}