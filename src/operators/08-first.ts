import { first, fromEvent, map, tap } from "rxjs";


const click$ = fromEvent<MouseEvent>(document, "click");

click$.pipe(
  // tap(() => console.log("tap")),
  tap<MouseEvent>(console.log),

  // map((event) => ({
  //   clientY: event.clientY,
  //   clientX: event.clientX, 

  // }))
  map(({ clientX, clientY }) => ({
    clientY,
    clientX

  })),

  first((event) => event.clientY >= 150),


  // first<MouseEvent>((event) => event.clientY >= 150),
).subscribe({
  next: (value) => { console.log("next: ", value); },
  complete: () => { console.log("complete",); }
})

