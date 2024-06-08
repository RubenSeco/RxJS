import { distinctUntilChanged, from } from "rxjs";


const numbers$ = from([1, "1", 1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1, "1"]);

// numbers$.pipe(
//   distinct()
// )
//   .subscribe(console.log);

numbers$.pipe(
  distinctUntilChanged()
)
  .subscribe(console.log);

interface Character {
  name: string;
}

const characters: Character[] = [
  { name: "Megaman" },
  { name: "Megaman" },
  { name: "Zero" },
  { name: "Dr. Willy" },
  { name: "X" },
  { name: "X" },
  { name: "Zero" },

];

// from(characters).pipe(
//   distinct((character) => character.name),
// )
//   .subscribe(console.log)


from(characters).pipe(
  distinctUntilChanged((prev, curr) => prev.name === curr.name),
)
  .subscribe(console.log)



