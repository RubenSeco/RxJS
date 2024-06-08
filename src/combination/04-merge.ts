import { fromEvent, map, merge } from "rxjs";



const keyup$ = fromEvent(document, "keyup");
const click$ = fromEvent(document, "click");

merge(
  keyup$.pipe(map((event) => event.type)),
  click$.pipe(map((event) => event.type)),
).subscribe(console.log);