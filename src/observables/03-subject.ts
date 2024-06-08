import { Observable, Observer, Subject, interval } from "rxjs";

const observer: Observer<any> = {

  next: (value) => console.log("next:", value),
  error: (error) => console.warn("error:", error),
  complete: () => console.info("completado")

};




const interval$ = new Observable<number>((subs) => {
  const interalID = setInterval(() => {
    subs.next(Math.random());
  }, 3000);

  return () => {
    clearInterval(interalID);
    console.log("Intervalo destruído");
  };
});

// const subs1 = interval$.subscribe((rnd) => console.log("subs1", rnd));
// const subs2 = interval$.subscribe((rnd) => console.log("subs2", rnd));


/**
 * SUBJECT:
 * 1 - Casteo múltiple,
 * 2 - También es un observer,
 * 3 - Next, error y complete
 * 
 */

const subject$ = new Subject<number>();
const subscription = interval$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {

  subject$.next(10);
  subject$.complete();
  subscription.unsubscribe(); // Llama al return del interval$ (clearInterval())

}, 3500);
