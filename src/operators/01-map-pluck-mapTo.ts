import { fromEvent, range } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";



// range(1, 5).pipe(
//   map<number, number>((value) => value * 10) // El tipo de salida es number
// ).subscribe(console.log)


// range(1, 5).pipe(
//   map<number, string>((value) => (value * 10).toString()) // El tipo de salida es string
// ).subscribe(console.log)


const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");


const keyupCode$ = keyup$.pipe(
  map(event => event.code)
);

const keyupPluck$ = keyup$.pipe(   //DEPRECATED - Usar map() en lugar de pluck()
  pluck("target", "baseURI"),
);

const keyupMapTo$ = keyup$.pipe(
  mapTo("Tecla presionada")
);


// keyupCode$.subscribe(code => console.log("map", code));
// keyupPluck$.subscribe(code => console.log("pluck", code));
keyupMapTo$.subscribe(code => console.log("mapTo", code));

