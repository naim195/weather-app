const temp=document.querySelector('.temp');
const cityName=document.querySelector('.city-name');
const feelsLike=document.querySelector('.feels-like');
const humidity=document.querySelector('.humidity');
const search=document.querySelector('input');
const searchBtn=document.querySelector('#search-btn');
const convertBtn=document.querySelector('#convert');
const windSpeed=document.querySelector('.wind-speed');
const rainChance=document.querySelector('.rain-chance');
const main=document.querySelector('.main');
const description=document.querySelector('.description');
let img=document.querySelector('img');

let url='https://api.openweathermap.org/data/2.5/weather?';
let apiKey='7eeb62fb47533201be11383d3a83aed5';
let q;
let data;

async function getWeather(){
    let response=await fetch(url,{mode: 'cors'});
    data=await response.json();
    temp.innerText=(Number(data.main.temp)-273).toFixed(2)+' °C';
    feelsLike.innerText=(Number(data.main.feels_like)-273).toFixed(2)+' °C';
    humidity.innerText+=data.main.humidity+' %';
    windSpeed.innerText+=data.wind.speed+' m/s';
    main.innerText=data.weather[0].main;
    description.innerText=data.weather[0].description;
    img.src='https://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png';
}

searchBtn.addEventListener('click',async ()=>{
    q=search.value;
    url+='q='+q+'&appid='+apiKey;
    await getWeather();
    cityName.innerText=q.charAt(0).toUpperCase() + q.slice(1);
    
    convertBtn.addEventListener('click',()=>{
        if(convertBtn.innerText === 'Show in °F'){
            let celsius = Number(temp.innerText.split(' ')[0]);
            let fahrenheit = celsius * (9/5) + 32;
            temp.innerText = fahrenheit.toFixed(2) + ' °F';
            feelsLike.innerText = 'Feels like: '+ fahrenheit.toFixed(2) + ' °F';
            convertBtn.innerText = 'Show in °C';
        }
        else{
            let fahrenheit = Number(temp.innerText.split(' ')[0]);
            let celsius = (fahrenheit - 32) * (5/9);
            temp.innerText = celsius.toFixed(2) + ' °C';
            feelsLike.innerText =  'Feels like: '+ celsius.toFixed(2) + ' °C';
            convertBtn.innerText = 'Show in °F';
        }
    })
    
});

