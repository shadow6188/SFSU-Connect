function openForm() {
    document.getElementById("edit").style.display = "block";
    document.getElementById("standard").style.display = "none";
}
function closeForm() {
    document.getElementById("standard").style.display = "block";
    document.getElementById("edit").style.display = "none";
}


let uploadImage = document.getElementById('uploadImage');
let targetImage = document.getElementById('accimg');
uploadImage.addEventListener('change', (event) => {
    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = function(e) { 
        targetImage.src = e.target.result;
    }
    fileReader.readAsDataURL(file);
});
function check(){
    if (document.getElementById('pw1').value === document.getElementById('pw2').value){
        //disabled to prevent submitting if passwords dont match
        document.getElementById('passChange').disabled = false;
        alert("passwords match!")
    }else {
        document.getElementById('passChange').disabled = true;
        alert("passwords do not match, please enter again")
    }
}