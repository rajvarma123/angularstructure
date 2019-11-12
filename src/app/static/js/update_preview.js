document.getElementById("image").onchange = function(e){
    var target = e.target;
    var imgFile = target.files[0];
    var readerFile = new FileReader();
    readerFile.onload = function(loadEvent){
        document.getElementById("preview").setAttribute('src', loadEvent.target.result);
    }
    readerFile.readAsDataURL(imgFile);
}