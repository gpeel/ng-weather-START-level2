# Weather API

At : https://openweathermap.org/api

Create a free account, and then generate you API-Key there : https://home.openweathermap.org/api_keys

## API

ZIP Weather

        https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}

The {zip code} is a string, but for most country and the default coutries ZIPs are numbers. You can forget the {country
code} for now (only Level3 Certification) and then the default country is USA.

Adding units=metric will get you the result in Celsius degrees.

So a valid call could be something like (I replaced my token with a fake):

    https://api.openweathermap.org/data/2.5/weather?zip=22222,US&units=metric&appid=56Z3415364138654165

For France (Marseille)

    https://api.openweathermap.org/data/2.5/weather?zip=13000,FR&units=metric&appid=56Z3415364138654165

or without country (defaulting to US)

    https://api.openweathermap.org/data/2.5/weather?zip=22222&units=metric&appid=56Z3415364138654165

````json
{
  "coord": {
    "lon": -77.1,
    "lat": 38.87
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": -2.73,
    "feels_like": -8.09,
    "temp_min": -4.49,
    "temp_max": -0.94,
    "pressure": 1024,
    "humidity": 50
  },
  "visibility": 10000,
  "wind": {
    "speed": 4.63,
    "deg": 310
  },
  "clouds": {
    "all": 75
  },
  "dt": 1644858148,
  "sys": {
    "type": 2,
    "id": 2035377,
    "country": "US",
    "sunrise": 1644840061,
    "sunset": 1644878662
  },
  "timezone": -18000,
  "id": 0,
  "name": "Arlington",
  "cod": 200
}
````

5-day-Forcast

        https://api.openweathermap.org/data/2.5/forecast?zip={zip code},{country code}&units=metric&appid={API key}

## Weather icons

In the response the field "icon" is linked to an icon on the site, for example if icon value is 02d, its url is:
http://openweathermap.org/img/wn/02n@2x.png

You can find the list there:
https://openweathermap.org/weather-conditions

## Weather icons alternative

If you don't like those icons, you can use the 4 icons in the .assets folder as a substitution.

## Countries (for EXPERT/Level3 Certification only)

For Level 2 certification, without any country for the zip parameter, the API default to USA.

For Level3 ... you choose the Country ad the ZIP

There is a list available in ./src/assets/countries that could be accessed by HTTP on URI '/assets/data/countries.json'

For each country you have the name and the alpha2 necessary for the weather API to identify for whch country you make
the request.

````json
  {
  "name": "Burundi",
  "alpha2": "BI"
},
````




