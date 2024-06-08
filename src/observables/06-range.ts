import { asyncScheduler, of, range } from "rxjs";


// const src$ = of(1, 2, 3, 4, 5);
const src$ = range(1, 10, asyncScheduler); // Valor de inicio, cantidad de emisiones, asincrono (deprecated)


console.log("inicio");
src$.subscribe(console.log);
console.log("fin");