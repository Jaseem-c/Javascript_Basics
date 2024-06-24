weatherData = [{ district: 'Thrissur', weather: 32 },
{ district: 'Kottayam', weather: 29 },
{ district: 'Palakkad', weather: 34 },
{ district: 'Ernakulam', weather: 33 },
{ district: 'Thrissur', weather: 29 },
{ district: 'Kottayam', weather: 30 },
{ district: 'Palakkad', weather: 32 },
{ district: 'Ernakulam', weather: 31 }
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}
obj = {}
for (let item of weatherData) {
district=item.district
currentTemp=item.weather
if(district in obj)
    {
        if(obj[district]<item.district){
            obj[district]=item.district
        }
    }
    else{
        obj[district]=currentTemp
    }
}
console.log(obj);