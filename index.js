function fetchtime(){
    const time = new Date()
    const hour=time.getHours()
    const minute = time.getMinutes()
    const second = time.getSeconds()
    date.innerHTML=`${hour} : ${minute} : ${second} : ${hour>=12?'PM':'AM'}`
    setTimeout(()=>{
        fetchtime()
    },1000)
    
}
fetchtime()

function clearAll(){
   input.value=''
   result.innerHTML=''
}



Search = async() =>{
    let cityName = input.value
     console.log(cityName);
     
     if(cityName){
       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5fe36b192ffd1c36dffb6752bc1722b2&units=metric`)
       console.log(response);
       response.json().then((data)=>{
         console.log(data);
     
     let cityname=data.name 
     console.log(cityname);
    
     let country = data.sys.country
     console.log(country);
     
     let weatherDescrip = data.weather[0].description
     console.log(weatherDescrip);
     
     let temperature = data.main.temp
     console.log(temperature);
    
     let feelsLike= data.main.feels_like
     console.log(feelsLike);
     
     let pressure =data.main.pressure
     console.log(pressure);
     
     let humidity =data.main.humidity
     console.log(humidity);
     
     let windspeed =data.wind.speed
     console.log(windspeed);
     
  
     result.innerHTML=`<div class="w-25" style="margin-left: 30%;margin-top: 20px;">
     <div class="card-body">
      <div class="card ">
        <ul class="list-group list-group-flush align-items-center">
         <li class="list-group-item" style="font-size:30px">${cityname}</li>
         <li class="list-group-item" style="font-weight:bold;font-size:20px">Country: ${country}</li>
         <li class="list-group-item" style="font-weight:bold;font-size:20px">${weatherDescrip}</li>
         <li class="list-group-item" style="font-weight:bold;font-size:20px">Temperature: ${temperature}℃</li>
         <li class="list-group-item" style="font-weight:bold;font-size:20px">Feels-Like: ${feelsLike}℃</li>
         <li class="list-group-item" style="font-weight:bold;font-size:20px">Pressure: ${pressure}</li>
         <li class="list-group-item" style="font-weight:bold;font-size:20px">Humidity: ${humidity}%</li>
         <li class="list-group-item" style="font-weight:bold;font-size:20px">Wind-Speed: ${windspeed}Km/h</li>
        </ul>         
      </div>
     </div>
   </div> `
   
     })
     }
     else{
         alert('Enter a valid name')
     }
  }