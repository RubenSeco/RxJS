import { of, take, tap } from "rxjs";


const number$ = of(1, 2, 3, 4, 5, 6, 7);

number$.pipe(
  tap(console.log),
  take(4)  // Deja pasar por el pipe solo la cantidad de valores establecidos (4)
).subscribe({
  next: (value) => { console.log("next: ", value); },
  complete: () => { console.log("complete",); }
});

