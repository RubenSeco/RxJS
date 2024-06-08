import { map, range, tap } from "rxjs";

const numbers$ = range(1, 5);

numbers$.pipe(

  tap((x) => {
    console.log("before", x);
    return 100;
  }),
  map((value) => value * 10),
  // tap((x) => { console.log("after", x); })
  tap({
    next: (value) => { console.log("after", value); },
    complete: () => { console.log("Se terminó todo",); }
  })


).subscribe(value => console.log("subs", value));

