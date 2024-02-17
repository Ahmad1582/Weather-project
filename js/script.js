let cities={
    tehran:{city:'tehran',temp:23,wether:"sunny",humidity:25,windspeed:30},
    tabriz:{city:'tabriz',temp:34,wether:"sunny",humidity:35,windspeed:10},
    esfahan:{city:'esfahan',temp:45,wether:"sunny",humidity:15,windspeed:20},
    shiraz:{city:'shiraz',temp:40,wether:"windy",humidity:15,windspeed:45},
    mashhad:{city:'mashhad',temp:20,wether:"rainy",humidity:20,windspeed:10},
    gilan:{city:'gilan',temp:15,wether:"snow",humidity:55,windspeed:22},
}
let $=document
let searchbtn=$.getElementById("search")
let searchbar=$.querySelector(".search-bar")

searchbtn.addEventListener('click',function(){

    let searchbarvalue=searchbar.value;

    let maincities=cities[searchbarvalue]

    if(maincities){
        $.querySelector('.city').innerHTML="Weather in "+maincities.city,
        $.querySelector(".temp").innerHTML=maincities.temp+"°C",
        $.querySelector(".description").innerHTML=maincities.wether,
        $.querySelector(".humidity").innerHTML="Humidity: "+maincities.humidity+" %",
        $.querySelector(".wind").innerHTML="Wind speed: "+ maincities.windspeed+" km/h",
        $.querySelector('.weather').classList.remove('loading')
    }else{
       
    }
})










