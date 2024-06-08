
import { of } from "rxjs";

// const obs$ = of(1, 2, 3, 4, 5, 6);

const obs$ = of(...[1, 2, 3, 4, 5, 6], 2, 3, 4);

// const obs$ = of([1, 2], { a: 1, b: 2 }, true, function () { }, Promise.resolve(true));



obs$.subscribe({
  next: (value) => console.log(value),
  error: (error) => console.error(error),
  complete: () => console.info("Terminamos la secuencia")
});

