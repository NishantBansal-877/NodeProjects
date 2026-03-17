import https from "https";


const getJoke=()=>{
const url= `https://official-joke-api.appspot.com/random_joke`;

https.get(url,(response)=>{
    let data="";
   response.on("data",(chunk)=>{
    data +=chunk;
   })

   response.on("end",()=>{
    const joke = JSON.parse(data);
    console.log("Here is a random joke:");
    console.log(joke.setup);
    console.log(joke.punchline);

   })

   response.on("error",(err)=>{
    console.log("Error: ",err.message);
   })
})
 
}

getJoke();