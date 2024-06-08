import { asyncScheduler } from "rxjs";


// setTimeout(() => { },3000);
// setInterval(() => { }, 3000);   

const greet = () => console.log("Hola Mundo");
const greet2 = (name) => console.log(`Hola ${name}`);



// asyncScheduler.schedule(greet, 2000);
// asyncScheduler.schedule(greet2, 2000, "Rubén");

const subs = asyncScheduler.schedule<number>(function (state) {
  console.log("state", state);

  this.schedule(state + 1, 1000);

}, 3000, 0);

// setTimeout(() => {

//   subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000); // Funciona como un setTimeout()