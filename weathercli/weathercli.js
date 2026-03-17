import readline from "readline/promises";


const API_KEY="";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

const rl= readline.createInterface({
    input:process.stdin,
    output:process.stdout
})      

const getweather = async (city)=>{

    const url =`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
    console.log(url);
    try{
        const response = await fetch(url);
        console.log(response);
        if(!response.ok){
            throw new Error("City not found. Please check the city name.")
        }
        const weatherData = await response.json();

        console.log("\nWeather Information:");
        console.log(`City: ${weatherData.name}`);
        console.log(`Temprature: ${weatherData.main.temp}C`);
        console.log(`Description: ${weatherData.weather[0].description}`);
        console.log(`Humidity: ${weatherData.main.humidity}%`);
        console.log(`Wind Speed: ${weatherData.wind.speed}`);

    }
    catch(error){
        console.log(error);
    }
}

const city = await rl.question("Enter a city name to get its weather:");

await getweather(city);

rl.close();