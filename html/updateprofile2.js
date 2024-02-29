"use strict";

function submit(){
    var image = document.getElementById("ppic").files[0];
    if (!image) {
        console.log("No file!");
        return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById("display-image").src = e.target.result;
    }
    reader.readAsDataURL(image);
    R.addEventListener("load", () => {
        let profilepic = btoa(R.result); //do base64 encoding
        let fname = document.getElementById("fname").value;
        let lname = document.getElementById("lname").value;
        let dob = document.getElementById("birthdate").value;
        let J = {
            firstName: fname,
            lastName: lname,
            birthDate: dob,
            pic: profilepic
        };
        var z = document.createElement('p');
        z.innerHTML = J["pic"];
        document.body.appendChild(z);
        fetch("/updateprofile", {
            method: "POST",
            body: JSON.stringify(J)
        }).then((resp) => {
            //can also use text(), blob(), or arrayBuffer()
            resp.json().then((J) => {
                console.log("Server said:",J);
            });
        }).catch((err) => {
            console.log("Uh oh",err);
        })
    });
    R.readAsBinaryString(file);
}