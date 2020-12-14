window.onscroll = function(event) {
    var header = document.getElementById("header");

    if(window.scrollY > 0){
        header.classList.add("header-color");
    }else{
        header.classList.remove("header-color");
    }

}