function login(){
    event.preventDefault();
    
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user == "nurulansaf" && pass == "nurul123"){
        location.replace("sukses.html");
        alert("Login Berhasil");
    }else{
        alert("Login Gagal");
    }
}