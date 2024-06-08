import { from, fromEvent, range } from "rxjs";
import { filter, map } from "rxjs/operators";


// range(1, 10).pipe(
//   filter((value) => value % 2 === 1),
// ).subscribe(console.log);


range(20, 30).pipe(
  filter((value, index) => {
    console.log("index", index);
    return value % 2 === 1;
  })
);//.subscribe(console.log);

interface Character {
  type: string;
  name: string;

}

const characters: Character[] = [
  {
    type: "hero",
    name: "Batman",
  },
  {
    type: "hero",
    name: "Robin",
  },
  {
    type: "villan",
    name: "Joker",
  },
];

from(characters).pipe(
  // filter((character) => character.type === "hero"),
  filter((character) => character.type !== "hero"),
).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(

  map((event) => event.code), // Recibe un KeyboardEvent y devuelve un string

  filter((key) => key === "Enter"), // Recibe la salida del operador anterior (map) y genera una salida en función de esa entrada
);

keyup$.subscribe(console.log)



