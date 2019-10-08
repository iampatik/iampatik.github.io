var broker = "wss://test.mosquitto.org:8081/mqtt";
var btnOn = document.getElementById('btnOn');
var btnOff = document.getElementById('btnOff');
var today = new Date();
var dateNow = today.getMonth()+"/"+today.getDate()+"/"+today.getFullYear();
var time = today.getHours()+"-"+today.getMinutes()+"-"+today.getSeconds();
var timeZone = today.getTimezoneOffset();


var topic = 'janpatrick/device/status';
var payloadOff = 'Turned Off: ' +dateNow+time+timeZone
var payloadOn = 'Turned On: ' +dateNow+time+timeZone

btnOn.addEventListener("click", function(e){
    e.preventDefault();
    client = mqtt.connect(broker);
    client.on('connect', function() {
        alert("Device is now turned on!");
        client.publish(topic,payloadOn);

    })
    
    btnOff.addEventListener("click", function(e){
        e.preventDefault();
        alert("Device is not turned off!")
        client.end();
    })
})

