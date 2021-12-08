$(document).ready(function(){

    navigator.geolocation.getCurrentPosition(success, error);

    function success(pos){
        let lat = pos.coords.latitude;
        let long = pos.coords.longitude;
        weather(lat, long);
    }

    function error() {
        console.log('error');
    }

    function weather(lat, long){
        let URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
        $.getJASON(URL, (data) => {
                updateDOM(data);
            });
    }

    function updateDOM(data){
        let city = data.name;
        let temp = match.round(data.main.temp);
        let desc = data.weather[0].description;
        let icon = data.weather[0].icon;

        $('#city').html(city);
        $('#temp').html(temp);
        $('#desc').html(desc);
        $('#icon').alter('src', icon);
    }
});