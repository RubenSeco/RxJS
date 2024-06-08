

import { combineLatest, fromEvent, map } from "rxjs";



// const keyup$ = fromEvent(document, "keyup");
// const click$ = fromEvent(document, "click");

// combineLatest(
//   keyup$.pipe(map((event) => event.type)),
//   click$.pipe(map((event) => event.type)),
// ).subscribe(console.log);

const input1 = document.createElement("input");
const input2 = document.createElement("input");

input1.placeholder = "email@gmail.com";

input2.placeholder = "********";
input2.type = "password";

document.querySelector("body").append(input1, input2);

// Helper

const getInputStream = (element: HTMLElement) => {
  return fromEvent<KeyboardEvent>(element, "keyup").pipe(
    map<KeyboardEvent, any>(event => (event.target["value"]))
  );
};

combineLatest(
  getInputStream(input1),
  getInputStream(input2),
).subscribe(console.log);
