import readline, { clearScreenDown } from "readline";

const rl =readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

const todos=[];

const showMenu =()=>{
   console.log("\n1: Add a Task");
   console.log("2: View Tasks");
   console.log("3: Exit");
   rl.question("\nChoose an option :",handleInput);
}

const handleInput=(option)=>{
  if(option==="1"){
    rl.question("\nEnter the Task: ",(task)=>{
      todos.push(task);
      console.log("Task added:",task);
      showMenu();
    })
  }
  else if(option==="2"){
    console.log("\nYour To-Do Lists");
    todos.forEach((task,index)=>{
      console.log(`${index+1}. ${task}`);
    })
    showMenu();
  }
  else if(option==="3"){
    console.log("Good Bye");
    rl.close();
  }
  else{
    console.log("Invalid option,Please try again.");
    showMenu();
  }
}

showMenu();
