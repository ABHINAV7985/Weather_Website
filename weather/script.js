const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/value?key=QQVK8RLKNAJGAFPM4BBTEZT3U&contentType=json';
const val = document.querySelector("#place");
const address = document.querySelector('#address');
const date = document.querySelector('#date');
const weather = document.querySelector('#weather_report');
let mdata ;
function fun(){
   let newurl = url.replace(/\bvalue\b/,(match)=>{ 
        return val.value;
    })
    apifetch(newurl);
}

async function apifetch(url){
    // console.log(url);
   data =  await fetch(url);
       realData =  await data.json();
    //    console.log(realData);
    //    console.log(realData.days[0])
  displayData(realData);
}

function displayData(data){
  address.innerText = `${data.address.toUpperCase()}`
  date.innerText = `${data.days[0].datetime}`
  let f = data.days[0];
  let c = fahrenheitToCelsius(f.temp);
  weather.innerText = `Temperature: ${c}C
  ${data.description}
  Humidity: ${f.humidity}
  Wind: ${f.windspeed}
  Precipitation: ${f.precip}
  `
}

function fahrenheitToCelsius(f) {
    return (f - 32) * 5 / 9;
  }

  function enterr(ev){
    if(ev.keyCode === 13){
     fun();
    }
  }



