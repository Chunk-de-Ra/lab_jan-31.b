"use strict";

function updatePFP() {
    var image = document.getElementById("pfpU").files[0];
    if (!image) {
        console.log("No file");
    }
    var reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById("pfp").src = e.target.result;
    }
    reader.readAsDataURL(image);
}

function updateUName() {
    let uname = document.getElementById("unameU").value;
    document.getElementById("uname").innerHTML = uname;
}

function updateBdate() {
    let bdate = document.getElementById("bdayU").value;
    let fullDate = new Date(bdate).toString();
    let trimDate = fullDate.substring(4,8)+(parseInt(fullDate.substring(8,10))+1).toString();
    document.getElementById("bday").innerHTML = trimDate;
}