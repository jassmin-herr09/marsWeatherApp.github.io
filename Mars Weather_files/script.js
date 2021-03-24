
// constant variables - data that never changes
 const BASE_URL = 'https://api.nasa.gov/insight_weather/?api_key=bGStYxJHMJPGTuwbsTUe2Ltjq76wUlkm8DY2f54E&feedtype=json&ver=1.0';

// state variables - data that changes

let weather;
let values = [];


const $weather = $('#weather');


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
    Object.values(weather).forEach(value => {
       // console.log(value);
        values.push(value);
    });
    values.pop()
    values.pop()
    values.forEach(item => {
       // console.log(item);
        let newdate = item.First_UTC;
       // console.log(newdate.slice(0,10)); 
        item.First_UTC = newdate.slice(0,10);
        
        const $li = $(`<li><span>DATE : </span> ${item.First_UTC.slice(0,10)} <span>MAX : </span>${item.PRE.mx} <span>AV : </span>${item.PRE.av} <span>MIN : </span>${item.PRE.mn}</li>`)
        $(`ul`).append($li)
    });


   

}


