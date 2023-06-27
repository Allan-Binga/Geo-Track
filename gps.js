var reqcount = 0;

navigator.geolocation.watchPosition(successCallback, errorCallback, options);

function successCallback(position) {
    const { accuracy, latitude, longitude, altitude, heading, speed } = position.coords;

    reqcount++;
    var details = document.getElementById("details");
    details.innerHTML = "Accuracy: " + accuracy + "<br>";
    details.innerHTML += "Latitude: " + latitude + " | Longitude: " + longitude + "<br>";
    details.innerHTML += "Altitude: " + altitude + "<br>";
    details.innerHTML += "Heading: " + heading + "<br>";
    details.innerHTML += "Speed: " + speed + "<br>";
    details.innerHTML += "recount: " + reqcount; 
}

function errorCallback(error) {
    
}

var options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0
};

// CSS styles
var css = `
body {
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: gray;
    font-family: 'Chakra Petch', sans-serif;
}
#content {
    text-align: center;
    margin-bottom: 20px;
}
#details {
    font-size: 30px;
    color: #333;
    background-color: #f5f5f5;
    padding: 10px;
    border: 1px solid #ccc;
}
#details span {
    display: block;
}
#footer {
    font-size: 14px;
    color: #292626;
    margin-top: auto;
}
`;

// Create style element and add CSS styles
var style = document.createElement("style");
style.innerHTML = css;
document.head.appendChild(style);

// HTML markup
var html = `
    <div id="content">
        <div id="details"></div>
    </div>
`;

// Add HTML content to the body
document.body.innerHTML = html;
