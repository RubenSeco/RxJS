import { interval, timer } from "rxjs";

const observer = {
  next: (val) => console.log("next: ", val),
  complete: () => console.log("complete")

};


const todayIn5 = new Date(); // Ahora

todayIn5.setSeconds(todayIn5.getSeconds() + 5); //Ahora en segundos más 5 segundos


const interval$ = interval(1000); // Asincrono por naturaleza
// const timer$ = timer(2000);
// const timer$ = timer(2000, 1000); //Funciona como un interval() que inicia a los 2 seg.
const timer$ = timer(todayIn5);


console.log("Inicio");
// interval$.subscribe(observer);

timer$.subscribe(observer);
console.log("Fin");