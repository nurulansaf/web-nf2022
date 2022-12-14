function validate(){
    let nm_pelanggan            = document.getElementById("nm_pelanggan").value;
    let email                   = document.getElementById("email").value;
    let jam_keberangkatan      = document.getElementById("jam_keberangkatan").value;
    let tujuan_keberangkatan   = document.getElementById("tujuan_keberangkatan").value;
    let jmlh_tiket              = document.getElementById("jmlh_tiket").value;
    let error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    let text;
    if(nm_pelanggan.length > 30){
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter Email";
        error_message.innerHTML = text;
        return false;
    }if(jam_keberangkatan == ''){
        text = "Please Enter valid Jam keberangkatan";
        error_message.innerHTML = text;
        return false;
    }
    if(tujuan_keberangkatan == ''){
        text = "Please Enter valid Jam Keberangkatan";
        error_message.innerHTML = text;
        return false;
    }
    if(jmlh_tiket.length > 10){
        text = "Please Enter valid Jumlah Tiket";
        error_message.innerHTML = text;
        return false;
    }
    else {

            document.getElementById("nama_pelanggan").innerHTML = nm_pelanggan;
            document.getElementById("email_pelanggan").innerHTML = email;
            document.getElementById("jam_pelanggan").innerHTML = jam_keberangkatan;
            document.getElementById("tujuan_pelanggan").innerHTML = tujuan_keberangkatan;
            document.getElementById("tiket_pelanggan").innerHTML = jmlh_tiket;
    }
    // alert("Form Submitted Successfully!");
    // return true;
}