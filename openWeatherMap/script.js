
const api_key = 'cafd440c27fada1eb44822e95bb7423a';
const lat = 35;
const lon = 139;
var request = new XMLHttpRequest();
request.open('GET','https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+api_key,true);
request.send();
request.onload=function() {
    console.log(data)
}