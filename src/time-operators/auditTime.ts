import { audit, auditTime, fromEvent, map, tap } from "rxjs";


const click$ = fromEvent<MouseEvent>(document, "click");

click$.pipe(
  map(({ x }) => x),
  tap((value) => console.log("tap", value)),
  auditTime(2000),
).subscribe(console.log);