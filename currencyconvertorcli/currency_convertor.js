import https from "https";
import readline from "readline";

const rl =readline.Interface({
    input:process.stdin,
    output:process.stdout
})

const apiKey = "2a9b6af38653841ec86c3203";
 
let currency,target_currency;

const show=()=>{   
    rl.question("Enter the currency you want to be converted:",(being_corrency)=>{
        currency=being_corrency.toUpperCase();
        rl.question("Ener the target currrency (e.g., INR, EUR, NPR):",(into_currency)=>{
            target_currency=into_currency.toUpperCase();
            rl.question("Enter the amount:",handleConversion);
        })
    })
}

const handleConversion=(amount)=>{
    
    https.get(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`,(response)=>{
    let data="";
    response.on("data",(chunk)=>{
        data+=chunk;
    })
    response.on("end",()=>{
        const {conversion_rates} = JSON.parse(data);
        
        if(JSON.parse(data).result=="error"){
            console.log("Please enter the valid currency to be exchanged.");
            show();
        }
        else{

        let final_amount= Number(amount)*Number(conversion_rates[target_currency]);
        if(isNaN(final_amount)){
            console.log("Enter the valid exchange currency in which exchanged.");
            show();
            }
        else{
            console.log(`The conversion of ${amount}${currency} is ${final_amount.toFixed(2)}${target_currency}.`);
            }
        }
    rl.close();
    })

    response.on("error",(err)=>{
        console.log("Error:",err.message);
    })
})

}
show();