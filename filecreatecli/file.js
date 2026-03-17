
import path from "node:path";
import readline from "node:readline";
import fs from "fs";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.Interface({
    input:process.stdin,
    output:process.stdout
});



const handleInput=(filename)=>{
    
    let filepath = path.join(__dirname,"files",filename + ".txt");
    
    rl.question("Enter the content for the file:",(content)=>{
        fs.writeFileSync(filepath,content,"utf-8");
        console.log(`File "${filename}.txt" created succcessfully!`);
        rl.close();
    })
}
rl.question("Enter the file name:",handleInput);