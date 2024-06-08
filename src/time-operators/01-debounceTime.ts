
import { debounceTime, fromEvent } from "rxjs";
import { distinctUntilChanged, map, pluck } from 'rxjs/operators';



const click$ = fromEvent(document, "click");

click$.pipe(
  debounceTime(3000),
);//.subscribe(console.log);


const input = document.createElement("input");

document.querySelector("body").append(input);


const input$ = fromEvent(input, "keyup");

input$.pipe(
  debounceTime(1000),
  map((event) => { console.log(event.target["value"]); }),
  distinctUntilChanged(),
).subscribe()



