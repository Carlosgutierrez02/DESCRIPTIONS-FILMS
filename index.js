if (document.getElementById("mymodal")) {

    var modal2 = document.getElementsByClassName("pagina-modal");
    var modal = document.getElementById("mymodal");
    var img = document.getElementById("abrir-modal");
    var img = document.getElementById("abrir-modal");
    var span = document.getElementsByClassName("cerrar")[0];
    var body = document.getElementsByTagName("body");

    img.onclick = function () {

        modal.style.display = "flex";
        body.style.position = "-webkit-sticky";
        body.style.height = "100%";
        body.style.overflow = "auto";
    }

    span.onclick = function () {
        modal.style.display = "none";
        body.style.position = "relative";
        body.style.height = "auto";
        body.style.overflow = "invisible";
    }

    modal.onclick = function () {
        modal.style.display = "none";
        body.style.position = "relative";
        body.style.height = "auto";
        body.style.overflow = "invisible";
    }

}
if (document.getElementById("mymodal2")) {

    var modal2 = document.getElementsByClassName("pagina-modal2");
    var modal2 = document.getElementById("mymodal2");
    var img2 = document.getElementById("abrir-modal2");
    var span2 = document.getElementsByClassName("cerrar")[0];
    var body2 = document.getElementsByTagName("body");

    img2.onclick = function () {

        modal2.style.align = "left";
        modal2.style.display = "block";
        body2.style.position = "-webkit-sticky";
        body2.style.height = "100%";
        body2.style.overflow = "auto";
    }

    span2.onclick = function () {
        modal2.style.display = "none";
        body2.style.position = "relative";
        body2.style.height = "auto";
        body2.style.overflow = "invisible";
    }

    modal2.onclick = function () {
        modal2.style.display = "none";
        body2.style.position = "relative";
        body2.style.height = "auto";
        body2.style.overflow = "invisible";
    }

}

