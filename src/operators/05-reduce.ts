import { interval, reduce, take, tap } from "rxjs";



const totalReducer = (accumulator: number, currentValue: number) => {
  return accumulator + currentValue;

};



interval(500).pipe(
  take(6),
  tap(console.log), // Se usa para ver como se están procesando los valores. Recordar que cada operador le pasa el valor de salida al siguiente operador!!
  reduce(totalReducer)
)
  .subscribe({
    next: (value) => { console.log("next: ", value); },
    complete: () => { console.log("Complete",); }
  });
