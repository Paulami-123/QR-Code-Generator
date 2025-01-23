let imgbox = document.getElementById("ImgBox");
let qrImg = document.getElementById("QRImage");
let qrTxt = document.getElementById("QRText");

function generateQR(){
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrTxt.value}`;
    imgbox.classList.add("show-img");
}