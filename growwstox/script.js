var btc=document.getElementById("bitcoin");
var eth=document.getElementById("ethereum");
var doge=document.getElementById("dogecoin");

var settings ={
    "async": true,
    "scrossDomain": true,
    "url": "12dd3dda-34dc-4f1d-949c-f5cc89a4e5b3",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function(response){
    btc.innerHTML= response.bitcoin.usd;
    eth.innerHTML= response.etherium.usd;
    doge.innerHTML= response.dogecoin.usd;
});