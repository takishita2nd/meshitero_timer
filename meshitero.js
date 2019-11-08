function getImageName() {
    var date = new Date();
    var hour = ("00" + date.getHours()).slice(-2);
    var min = "00";
    if(date.getMinutes() >= 30) {
        min = "30"
    }
    var imageFormat = "time_{0}_{1}.jpg";
    return imageFormat.replace("{0}", hour).replace("{1}", min);
}

function imageUpdate(force = false) {
    var date = new Date();
    if(force = false &&
       (date.getMinutes() % 30) != 0) {
        return;
    }
    var imageName = getImageName();
    var image = $("#image")[0].src = "img/" + imageName;
}

document.onload = imageUpdate(true);
setInterval(imageUpdate, 60000);
