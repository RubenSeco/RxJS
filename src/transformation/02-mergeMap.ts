import { fromEvent, interval, map, mergeMap, of, take, takeUntil } from "rxjs";



const leters$ = of("a", "b", "c");

leters$.pipe(
  mergeMap((leter) => interval(1000).pipe(
    map((interval) => leter + interval),
    take(3),
  ))
);
// .subscribe({
//   next: (value) => { console.log("next: ", value); },
//   complete: () => { console.log("Complete",); }
// });

const mouseDown$ = fromEvent(document, "mousedown");
const mouseUp$ = fromEvent(document, "mouseup");
const interval$ = interval();

mouseDown$.pipe(
  mergeMap(() => interval$.pipe(
    takeUntil(mouseUp$),
  )),
).subscribe(console.log);