import { from, map, reduce, scan } from "rxjs";


const numbers = [1, 2, 3, 4, 5];

// const totalAccumulator = (acc, cur) => {
//   return acc + cur;
// };
const totalAccumulator = (acc, cur) => acc + cur;

from(numbers).pipe(
  reduce(totalAccumulator, 0),

).subscribe(console.log);


from(numbers).pipe(

  scan(totalAccumulator, 0),

).subscribe(console.log);

// Redux

interface User {
  id?: string;
  autenticated?: boolean;
  token?: string;
  age?: number;


}
const user: User[] = [
  { id: "Ros", autenticated: false, token: null },
  { id: "Ros", autenticated: true, token: "ABC" },
  { id: "Ros", autenticated: true, token: "ABC123" },

];

const state$ = from(user).pipe(
  scan((acc, cur) => {
    return { ...acc, ...cur };
  }, { age: 33 })

);

const id$ = state$.pipe(
  map<User, any>((state) => state.id)
  // map<User, any>((state) => state)
).subscribe(console.log)


