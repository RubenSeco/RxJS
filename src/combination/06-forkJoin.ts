import { delay, forkJoin, from, interval, take } from 'rxjs';


const numbers$ = from([1, 2, 3, 4]);

const interval$ = interval(1000).pipe(take(3));

const leters$ = from(["a", "b", "c", "d"]).pipe(delay(3500));


// forkJoin(
//   numbers$,
//   interval$,
//   leters$
// ).subscribe(console.log)


// forkJoin(
//   {
//     numbers$,
//     interval$,
//     leters$
//   }
// ).subscribe((resp) => console.log(resp))

forkJoin(
  {
    num: numbers$,
    int: interval$,
    let: leters$
  }
).subscribe((resp) => console.log(resp))


