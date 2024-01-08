const temp=document.querySelector('.temp');
const cityName=document.querySelector('.city-name');
const feelsLike=document.querySelector('.feels-like');
const humidity=document.querySelector('.humidity');
const search=document.querySelector('input');
const searchBtn=document.querySelector('#search-btn');


let url='https://api.openweathermap.org/data/2.5/weather?';
let apiKey='7eeb62fb47533201be11383d3a83aed5';
let q;

async function getWeather(){
    let response=await fetch(url,{mode: 'cors'});
    let data=await response.json();
    temp.innerText=data.main.temp;
    
}

searchBtn.addEventListener('click',async ()=>{
    q=search.value;
    url+='q='+q+'&appid='+apiKey;
    await getWeather();
    console.log(data);
});