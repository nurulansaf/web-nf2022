function imgPicker(){
    let picker = document.getElementById("selectImg").value;
    let images = document.getElementById("imgFigure");

    if (picker == "pic-one") {
        images.src = "assets/img/yang berusaha tumbuh.webp";
        images.width = 300;
        images.alt = "Yang Berusaha Hidup";
        alert("Yang Berusaha Hidup");
    } else if (picker == "pic-two") {
        images.src = "assets/img/kapal tenggelam.webp";
        images.width = 300;
        images.alt = "Kapal Tenggelam";
        alert("Kapal Tenggelam");
    } else if (picker == "pic-three") {
        images.src = "assets/img/kaka dan adik.webp";
        images.width = 300;
        images.alt = "Kakak dan Adik";
        alert("Kakak dan Adik");
    } else {
        alert("Tidak Ada Pilihan Koleksi");
    }
}