import { fromEvent, map, takeWhile } from "rxjs";




const click$ = fromEvent<MouseEvent>(document, "click");

click$.pipe(
  map(({ x, y }) => ({ x, y })),
  // takeWhile(({ y }) => y <= 150),
  takeWhile(({ y }) => y <= 150, true), // inclusive en true hace que se emita el valor que no cumple con la condición antes del complete del observable
)
  .subscribe({
    next: (e) => { console.log("next", e); },
    complete: () => { console.log("complete"); }
  });