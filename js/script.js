//load image fater code
window.onload = function(){
    var request = new XMLHttpRequest();
    request.open("POST","../pics/home_banner.png",true);
    request.responseType = "blob";
    request.send();
    request.onload = function(){
        var url = URL.createObjectURL(this.response);
        document.getElementsByClassName("banner-img").style.background = "url("+url+")";
        document.getElementsByClassName("banner-img").style.backgroundSize = "cover";
    }
}