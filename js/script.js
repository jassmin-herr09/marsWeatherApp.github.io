
// constant variables - data that never changes
 const BASE_URL = 'https://api.nasa.gov/insight_weather/?api_key=bGStYxJHMJPGTuwbsTUe2Ltjq76wUlkm8DY2f54E&feedtype=json&ver=1.0';

// state variables - data that changes

let weather = [];

// cached element references - parts of the dom we need to touch

const $weather = $('#weather');


// event listeners - capture and respond to events i.e. user clicks on something
// functions - code that represents actions taken/carried out.

init ();

function init() {
    getData();
}


function getData() {
    $.ajax(BASE_URL)
        .then(function (data) {
            
            console.log(data);
             weather = data;
            render();
        }, function (error) {
            console.log(error);
        });
}

function render () {
   // console.log(weather);
}


