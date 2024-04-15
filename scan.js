function domReady(fn){
    if(
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ){
        setTimeout(fn,1000);
    } else{
        document.addEventListener("DOMContentLoaded", fn);
    }
}

domReady(function(){
    function onScanSuccess(decodeText, docodeResult){
        alert("Your Qr is :" + decodeText, docodeResult);
    }

    let htmlscanner = new Html5QrcodeScanner(
        "qrscanner",
        {fps:10, qrbos:250}
    );
    htmlscanner.render(onScanSuccess);
});